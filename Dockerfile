# build stage
FROM node:alpine3.16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.23.1-alpine as production-stage
# RUN addgroup --system nginx && adduser --system nginx
USER nginx
COPY --chown=nginx:nginx docker/default.conf /etc/nginx/conf.d
COPY --from=build-stage --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]