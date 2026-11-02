---
name: "Secretive"
summary: "Keeps SSH keys in the Mac's Secure Enclave or on a smart card, with Touch ID approval and a notice each time a key is used."
category: "Privacy & security"
tags:
  - ssh
  - security
  - encryption
  - developer-utilities
  - native
repository: https://github.com/maxgoedjen/secretive
website: https://secretive.dev
license: "MIT"
licenseUrl: https://github.com/maxgoedjen/secretive/blob/main/LICENSE
download: https://github.com/maxgoedjen/secretive/releases
homebrew: "secretive"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/maxgoedjen/secretive
  - https://github.com/maxgoedjen/secretive/blob/main/LICENSE
  - https://github.com/maxgoedjen/secretive/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/maxgoedjen/secretive/releases/download/v4.0.0/Secretive.zip
    credit: "Max Goedjen"
    license: "MIT; app icon from the official release bundle, trademarks retained"
---

Secretive creates SSH keys inside the Secure Enclave and serves them to `ssh`, Git and other tools through an SSH agent. Because the private key is generated in the enclave, it cannot be copied off the Mac by malware or by you. Each key can be set to require Touch ID or Apple Watch approval, and the app shows a notification whenever a key is used.

Macs without a Secure Enclave can use a smart card such as a YubiKey instead. Recent versions also handle SSH certificates and show pending signing requests.

The flip side of non-exportable keys is that they cannot be backed up or moved to another Mac, so each new machine needs its own keys. Version 4 needs macOS 15 or later. Release builds are produced by GitHub Actions and carry GitHub artifact attestations.
