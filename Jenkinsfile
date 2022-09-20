def DOCKER_TAG
def TAGGED_BUILD=false

pipeline {
    agent any

    options {
        ansiColor('xterm')
        disableConcurrentBuilds()
        disableResume()
        skipStagesAfterUnstable()
    }

    environment {
        GITHUB_CREDENTIALS = "github_pat"
        AWS_CREDENTIALS = "jenkins_aws_user"
        WEB_SERVER_ADDRESS = "root@159.69.148.254"
        WEB_SRV_CREDENTIALS = "root_at_jenkins"
        ECR = "016682580984.dkr.ecr.eu-west-1.amazonaws.com"
        APP = "abacus"
        ECR_REGION = "eu-west-1"
        SEARCH_STRING = "administrator"
    }

    stages {
        stage('Build (CI)') {
            steps {
                script {
                    GIT_TAG = sh(returnStdout: true, script: '/usr/bin/git tag --contains | head -1')?.trim()
                    echo "GIT TAG: >${GIT_TAG}<"
                    if (env.GIT_BRANCH=="origin/master") {
                        DOCKER_TAG = "igr-${env.BUILD_ID}"
                    }
                    if (env.GIT_BRANCH=="origin/develop") {
                        DOCKER_TAG = "dev-${env.BUILD_ID}"
                    }
                    if (GIT_TAG) {
                        DOCKER_TAG = GIT_TAG
                        TAGGED_BUILD = true
                    }
                    echo "DOCKER_TAG: >${DOCKER_TAG}<"
                    app = docker.build("${env.ECR}/${env.APP}:${DOCKER_TAG}")
                }
            }
        }

        stage('Test (CI)') {
            steps {
                script {
                    sh 'env | sort'
                    sh """
#!/bin/bash
docker run -d --name ${env.APP}-test -p 8888:80 ${env.ECR}/${env.APP}:${DOCKER_TAG}
RESULT=`curl -k localhost:8888 | grep -i \$SEARCH_STRING | wc -l`
docker stop ${env.APP}-test
docker rm ${env.APP}-test
if [ \$RESULT -eq 0 ]
then
    exit 1
fi
                    """
                }
            }
        }

        stage('Push (CI)') {
            steps {
                script {
                    if ( env.GIT_BRANCH=="origin/develop" || env.GIT_BRANCH=="origin/master" || TAGGED_BUILD ) {
                        docker.withRegistry("https://${env.ECR}", "ecr:${env.ECR_REGION}:${AWS_CREDENTIALS}") {
                            echo 'Start pushing image to ECR.'
                            app.push("${DOCKER_TAG}")
                            echo 'Image pushed to ECR.'
                        }
                    }
                }
            }
        }

        stage('Deploy (CD)') {
            steps {
                script {
                    if (TAGGED_BUILD) {
                        sh """
#!/bin/bash
ssh -i ~/.ssh/id_ed25519 ${WEB_SERVER_ADDRESS} << EOF
    cd /opt/web-server
    sed -i "s;.*image: 016682580984.dkr.ecr.eu-west-1.amazonaws.com/${env.APP}.*;    image: 016682580984.dkr.ecr.eu-west-1.amazonaws.com/${env.APP}:${DOCKER_TAG};g" ./docker-compose.yaml
    docker-compose up -d
EOF
                        """
                    } else {
                        echo 'Not tagged production build.'
                    }
                }
            }
        }
    }

    post {
        failure {
            emailext body: '''${SCRIPT, template="groovy-html.template"}''',
                mimeType: 'text/html',
                subject: "Jenkins job ${env.JOB_NAME} #${env.BUILD_NUMBER} failed",
                to: "${env.GIT_COMMITTER_EMAIL}",
                replyTo: "${env.GIT_COMMITTER_EMAIL}",
                recipientProviders: [[$class: 'CulpritsRecipientProvider']]
        }
    }
}
