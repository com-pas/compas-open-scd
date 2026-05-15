FROM public.ecr.aws/nginx/nginx:1.31.0

# Upgrade OpenSSL packages to fix critical vulnerabilities
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libssl3t64 \
    openssl \
    openssl-provider-legacy && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY build/. /usr/share/nginx/html

ENV NGINX_PORT=8080
EXPOSE 8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/public/cim
VOLUME /usr/share/nginx/html/public/conf
VOLUME /usr/share/nginx/html/public/nsdoc
