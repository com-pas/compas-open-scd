# Security Policy

## CRA stewardship

This project is supported under the Linux Foundation CRA stewardship framework, as described at [https://www.linuxfoundation.org/security](https://www.linuxfoundation.org/security). Security vulnerabilities should be reported through the mechanisms described below, which we will coordinate with our CRA steward. For actively exploited vulnerabilities and severe incidents that may require CRA escalation, please use the project’s emergency security reporting mechanisms as appropriate.

## Reporting a Vulnerability

Please go to [Security Advisories](https://github.com/com-pas/compas-open-scd/security/advisories) to privately report a security vulnerability,
our contributors will try to respond within a week of your report with a rough plan for a fix and new tests.

## Verifying Docker images

Docker images published by this project are signed using [Cosign](https://github.com/sigstore/cosign) keyless signing via [Sigstore](https://www.sigstore.dev/). Signatures are recorded in the public [Rekor](https://rekor.sigstore.dev/) transparency log — no private key is stored or required.

To verify an image, install Cosign ([instructions](https://docs.sigstore.dev/cosign/system_config/installation/)) and run:

```sh
cosign verify \
  --certificate-identity-regexp "https://github.com/com-pas/compas-open-scd/.github/workflows/release-project.yml@refs/tags/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  lfenergy/compas-open-scd:<tag>
```

Replace `<tag>` with the specific release tag (e.g. `v1.2.3`) or `latest`.
