FROM bitnami/nginx:1.25.1
COPY build/. /app/

VOLUME /opt/bitnami/nginx/conf/server_blocks/
VOLUME /app/public/cim
VOLUME /app/public/conf
