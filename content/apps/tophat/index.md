---
name: "Tophat"
summary: "Shopify's menu bar app that installs CI builds on iOS and Android simulators, emulators and devices from a single link."
category: "Developer tools"
tags:
  - mobile-development
  - simulators
  - ios
  - android
  - menu-bar
repository: "https://github.com/Shopify/tophat"
website: "https://github.com/Shopify/tophat"
license: "MIT"
licenseUrl: "https://github.com/Shopify/tophat/blob/main/LICENSE"
download: "https://github.com/Shopify/tophat/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Shopify/tophat"
  - "https://github.com/Shopify/tophat/blob/main/LICENSE"
  - "https://github.com/Shopify/tophat/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Shopify/tophat/main/media/icon.png"
    credit: "Shopify Inc."
    license: "MIT; upstream app icon, trademarks retained"
---

Tophat installs app builds produced by CI onto iOS simulators, Android emulators and connected devices. An install link, using the `tophat://` scheme or a localhost URL, names an artifact provider and its parameters; Tophat downloads the build, prepares the chosen device, installs the app and launches it with optional arguments. HTTP downloads and shell scripts are supported out of the box, other storage systems can be added through TophatKit extensions, and a `tophatctl` command covers the same tasks from a terminal.

It is aimed at mobile teams who want reviewers and designers to try a pull request without building the branch themselves. Quick Launch keeps frequently used apps in the menu so the latest build installs with one click, and devices in regular use can be pinned to the top of the list.

Tophat needs macOS 15 or later and is a universal build from Shopify, signed and notarized, with Sparkle updates. iOS targets need Xcode 15 or newer, and Android targets need a working `adb` and `avdmanager`; the first launch walks through checking these tools.
