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
        ECR = "016682580984.dkr.ecr.eu-west-1.amazonaws.com"
        ECR_REGION = "eu-west-1"
        APP = "abacus"
        SEARCH_STRING = "abacus"
    }

    stages {
        stage('Build (CI)') {
            steps {
                script {
                    def TIMESTAMP = new Date().getTime()
                    echo "timestamp: ${TIMESTAMP}"
                    GIT_TAG = sh(returnStdout: true, script: '/usr/bin/git tag --contains | head -1')?.trim()
                    echo "GIT TAG: >${GIT_TAG}<"
                    if (env.GIT_BRANCH=="origin/master" || env.GIT_BRANCH=="origin/main") {
                        DOCKER_TAG = "prod-${TIMESTAMP}"
                    }
                    if (env.GIT_BRANCH=="origin/develop") {
                        DOCKER_TAG = "dev-${TIMESTAMP}"
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
                    random_num = 8000 + Math.abs(new Random().nextInt(1000))
                    sh """
#!/bin/bash
docker run -d --name ${env.APP}-${env.BUILD_NUMBER} -p ${random_num}:80 ${env.ECR}/${env.APP}:${DOCKER_TAG}
sleep 10
RESULT=`curl -k localhost:${random_num} | grep -i \$SEARCH_STRING | wc -l`
docker stop ${env.APP}-${env.BUILD_NUMBER}
docker rm ${env.APP}-${env.BUILD_NUMBER}
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
                    if ( env.GIT_BRANCH=="origin/develop" || env.GIT_BRANCH=="origin/master" || env.GIT_BRANCH=="origin/main" || TAGGED_BUILD ) {
                        docker.withRegistry("https://${env.ECR}", "ecr:${env.ECR_REGION}:${AWS_CREDENTIALS}") {
                            echo 'Start pushing image to ECR.'
                            app.push("${DOCKER_TAG}")
                            echo 'Image pushed to ECR.'
                        }
                    }
                }
            }
        }
    }

    post {
        failure {
            emailext body: '''${SCRIPT, template="groovy-html.template"}''',
                mimeType: 'text/html',
                subject: "Jenkins job ${env.JOB_BASE_NAME} #${env.BUILD_DISPLAY_NAME} failed",
                to: "${env.GIT_COMMITTER_EMAIL}",
                replyTo: "${env.GIT_COMMITTER_EMAIL}",
                recipientProviders: [[$class: 'CulpritsRecipientProvider']]
        }
    }
}
