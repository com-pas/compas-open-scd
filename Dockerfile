FROM public.ecr.aws/nginx/nginx:1.31.1

# Upgrade OpenSSL and GnuTLS packages to fix critical vulnerabilities
RUN echo "deb http://deb.debian.org/debian sid main" > /etc/apt/sources.list.d/sid.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    libssl3t64 \
    openssl \
    openssl-provider-legacy \
    -t sid libgnutls30t64 && \
    rm /etc/apt/sources.list.d/sid.list && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY dist/. /usr/share/nginx/html

ENV NGINX_PORT=8080
EXPOSE 8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/public/cim
VOLUME /usr/share/nginx/html/public/conf
VOLUME /usr/share/nginx/html/public/nsdoc
