---
name: "Nexonic Download Manager"
summary: "Download manager with split multi-connection transfers, pause and resume, a scheduler, queues and video saving."
category: "Internet"
tags:
  - download-manager
  - downloads
  - internet
repository: "https://github.com/Shahrukhalid/nexonic-download-manager"
website: "https://shahrukhalid.github.io/nexonic-download-manager/"
license: "MIT OR Apache-2.0"
licenseUrl: "https://github.com/Shahrukhalid/nexonic-download-manager/blob/main/LICENSE"
download: "https://github.com/Shahrukhalid/nexonic-download-manager/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Shahrukhalid/nexonic-download-manager"
  - "https://github.com/Shahrukhalid/nexonic-download-manager/blob/main/LICENSE"
  - "https://github.com/Shahrukhalid/nexonic-download-manager/releases"
  - "https://shahrukhalid.github.io/nexonic-download-manager/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Shahrukhalid/nexonic-download-manager/main/branding/universal/generated/macos/AppIcon.iconset/icon_512x512%402x.png"
    credit: "Nexonic Download Manager contributors"
    license: "MIT OR Apache-2.0; upstream app icon, trademarks retained"
---

Nexonic splits each file into parts and downloads them at the same time, and each download gets its own window with speed, time left and per-connection progress. Downloads can be paused and resumed, even after a restart, and a scheduler can start or stop queues at set times. A browser extension hands download links to the app, and the app can save streamed video from sites such as YouTube and Instagram at the quality you choose. It is aimed at people who want an Internet Download Manager-style tool on a Mac.

It needs macOS 13 or later on Apple silicon or Intel. The Mac build is not notarized: the first launch shows a "could not verify" warning, which you allow once under System Settings, Privacy & Security, or you can use the one-line install script in the README to skip the prompt. Torrent support is included but stays off until you turn it on.
