FROM node:21-alpine AS build

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY maintain/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
