# Abacus na cirilici

> Vue JS SPA application

Simple algebra for kids of age 6-7 on Serbian language (cyrilic).

Dedicated to my 6 years old son Ognjen.

I wish him to be good mathematician.

Live app availble at https://abacus.softwarepieces.com .

> Deploying app

Assume new version is 1.8

Building a docker image:
docker build -t drpreag/abacus:1.8 .

Pushing to repo:
docker push drpreag/abacus:1.8

On a web server, running on a boot time:
docker run -dit -p 8080:80 --restart unless-stopped drpreag/abacus:1.8

To go inside running container:
docker exec -i -t deba2ddef955 /bin/sh