---
name: "reminal"
summary: "Keeps a closed-lid Mac awake and streams its windows and terminals to a browser with end-to-end encryption."
category: "Utilities"
tags:
  - network
  - desktop
  - cross-platform
  - encryption
repository: "https://github.com/harshalgajjar/Reminal"
website: "https://reminal.app"
license: "AGPL-3.0"
licenseUrl: "https://github.com/harshalgajjar/Reminal/blob/main/LICENSE"
download: "https://github.com/harshalgajjar/Reminal/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/harshalgajjar/Reminal"
  - "https://github.com/harshalgajjar/Reminal/blob/main/LICENSE"
  - "https://github.com/harshalgajjar/Reminal/releases"
  - "https://reminal.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/harshalgajjar/Reminal/releases/download/v3.18.4/reminal_3.18.4_darwin_arm64.tar.gz"
    credit: "reminal contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

reminal runs on a Mac you leave behind and lets you open its windows, desktop and terminals from any browser, including a phone. Sessions start with a session ID and a PIN printed by the command line, and traffic through the relay is end-to-end encrypted. It can also copy files between machines you own, and in closed-lid mode it keeps a Mac serving with no display attached. It suits people who want remote access to their own machines without opening ports.

The macOS app inside the arm64 release is an Apple silicon build that declares macOS 12.3 or later. Window mirroring needs Screen Recording permission, which `reminal permissions` requests. Closed-lid mode is macOS only. The app is not notarized by Apple and Gatekeeper rejects it, so macOS must be allowed to open it in System Settings before the first launch. `reminal expose` port forwards are not end-to-end encrypted. Licensed under AGPL-3.0; a commercial license is available for embedding it in a product you distribute.
