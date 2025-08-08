FROM nginx:stable-alpine-slim 

RUN rm -r /usr/share/nginx/html

COPY ../nginx/proxy-config.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

