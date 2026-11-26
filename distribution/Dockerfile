FROM public.ecr.aws/nginx/nginx-unprivileged:1.31.10

USER root

# Keep OpenSSL and GnuTLS upgraded from sid so image scanning does not
# regress to the trixie versions with open CVEs. GnuTLS 3.8.14 pulls
# glibc 2.43 from sid as a dependency.
RUN echo "deb http://deb.debian.org/debian sid main" > /etc/apt/sources.list.d/sid.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends -t sid \
    libssl3t64 \
    openssl \
    openssl-provider-legacy \
    libgnutls30t64 && \
    rm /etc/apt/sources.list.d/sid.list && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER 101

COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY dist/. /usr/share/nginx/html

ENV NGINX_PORT=8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/cim
VOLUME /usr/share/nginx/html/conf
VOLUME /usr/share/nginx/html/nsdoc
