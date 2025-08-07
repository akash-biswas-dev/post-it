FROM nginx:stable-alpine-slim 


COPY ../nginx/proxy-config.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

