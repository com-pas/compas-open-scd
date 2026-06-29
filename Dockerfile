# Stage 1: Download and validate external plugins at build time.
# Each plugin is fetched from its remote URL. If a sha256 hash is provided in
# remote-plugins.json, the downloaded file is verified against it; a mismatch
# causes the build to fail immediately.
#
# Placing the plugin configuration copy before the download command means Docker's
# layer cache is only invalidated for this stage when remote-plugins.json changes,
# keeping incremental builds fast when only the application code is updated.
FROM alpine:3.20 AS plugin-downloader

RUN apk add --no-cache curl jq

WORKDIR /build

COPY remote-plugins.json .
COPY scripts/download-plugins.sh .

# Set REQUIRE_SHA256=true to make the build fail for any plugin without a sha256 hash.
ARG REQUIRE_SHA256=false

RUN chmod +x download-plugins.sh && \
    REQUIRE_SHA256="${REQUIRE_SHA256}" ./download-plugins.sh remote-plugins.json /build/external-plugins

# Stage 2: Final nginx image that serves the application and downloaded plugins.
FROM public.ecr.aws/nginx/nginx:1.31.2

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

# Copy plugins downloaded in the previous stage so the editor can load them
# from this nginx service without requiring access to any external source.
COPY --from=plugin-downloader /build/external-plugins /usr/share/nginx/html/external-plugins

ENV NGINX_PORT=8080
EXPOSE 8080

VOLUME /etc/nginx/
VOLUME /usr/share/nginx/html/public/cim
VOLUME /usr/share/nginx/html/public/conf
VOLUME /usr/share/nginx/html/public/nsdoc
