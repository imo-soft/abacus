# build stage
FROM node:alpine3.16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.23.1-alpine as production-stage
RUN addgroup --system html && adduser --system html
USER html
COPY --chown=html:html docker/default.conf /etc/nginx/conf.d
COPY --from=build-stage --chown=html:html /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]