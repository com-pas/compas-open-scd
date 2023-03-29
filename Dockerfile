FROM bitnami/nginx:1.23.4
COPY build/. /app/

VOLUME /opt/bitnami/nginx/conf/server_blocks/
VOLUME /app/public/cim
VOLUME /app/public/conf
