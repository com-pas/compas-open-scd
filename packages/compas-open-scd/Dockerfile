FROM public.ecr.aws/nginx/nginx:1.29.3

COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY build/. /usr/share/nginx/html

ENV NGINX_PORT=8080
EXPOSE 8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/public/cim
VOLUME /usr/share/nginx/html/public/conf
VOLUME /usr/share/nginx/html/public/nsdoc
