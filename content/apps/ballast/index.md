---
name: "Ballast"
summary: "Menu bar app that shows the Docker containers on a Synology NAS over SSH and can start, stop or restart them."
category: "Developer tools"
tags:
  - docker
  - containers
  - ssh
  - menu-bar
repository: "https://github.com/bryanmanio/ballast"
website: "https://ballast.ing/"
license: "GPL-3.0"
licenseUrl: "https://github.com/bryanmanio/ballast/blob/main/LICENSE"
download: "https://github.com/bryanmanio/ballast/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bryanmanio/ballast"
  - "https://github.com/bryanmanio/ballast/blob/main/LICENSE"
  - "https://github.com/bryanmanio/ballast/releases/latest"
  - "https://ballast.ing/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bryanmanio/ballast/releases/download/v1.3/Ballast-1.3.dmg"
    credit: "Mediumrare Inc. (Ballast)"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Ballast is a menu bar app for people who run Docker on a Synology NAS. It lists the containers on the NAS, shows whether each one is up using Docker's own state and healthchecks, opens a container's web interface from the menu, and can start, stop or restart one. It reports image updates by asking each image's registry, but it never installs them.

It requires macOS 26 or later; the universal build is signed and notarized. Setup needs SSH enabled on the NAS, a key without a passphrase, and a small root-owned helper script on the NAS, all described in the README. The app stores no credentials and checks GitHub once a day for new app versions. DSM updates can reset `sshd_config`, in which case the key deployment has to be run again.
