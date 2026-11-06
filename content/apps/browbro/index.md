---
name: "BrowBro"
summary: "Choose which installed browser opens each link you click on your Mac."
category: "Internet"
tags:
  - browser
  - links
  - automation
repository: "https://github.com/tiagomoraes/browbro"
website: "https://browbro.tiagomoraes.cloud"
license: "MIT"
licenseUrl: "https://github.com/tiagomoraes/browbro/blob/develop/LICENSE"
download: "https://github.com/tiagomoraes/browbro/releases/download/v0.1.7/BrowBro.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tiagomoraes/browbro"
  - "https://github.com/tiagomoraes/browbro/blob/develop/LICENSE"
  - "https://github.com/tiagomoraes/browbro/releases"
  - "https://browbro.tiagomoraes.cloud"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tiagomoraes/browbro/develop/Resources/AppIcon.icns"
    credit: "Tiago Moraes"
    license: "MIT; upstream app icon, trademarks retained"
---

BrowBro lets you choose which installed browser opens a link you click, which helps when you use more than one browser or several Chrome profiles for different accounts. To find the Chrome profiles it reads Chrome's data, and macOS asks you to allow that once. It is for people who want links to land in the right browser without copying them by hand.

It requires macOS 14 or later. The DMG from GitHub is signed with a Developer ID and notarized, so it opens on first launch without a warning, and it updates itself with Sparkle. A separate Mac App Store build is sandboxed and updated by the store; for Chrome profiles it asks you to pick Chrome's folder once, and switching between the two builds starts settings and permissions over.
