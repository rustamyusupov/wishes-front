FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY dist /usr/share/nginx/html
COPY maintain/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
