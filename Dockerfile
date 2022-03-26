# build stage
FROM node:17.8.0-alpine3.15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.19.10-alpine as production-stage
COPY docker/default.conf /etc/nginx/conf.d
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]