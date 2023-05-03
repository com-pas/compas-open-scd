FROM bitnami/nginx:1.24.0
COPY build/. /app/

VOLUME /opt/bitnami/nginx/conf/server_blocks/
VOLUME /app/public/cim
VOLUME /app/public/conf
