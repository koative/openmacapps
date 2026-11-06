---
name: "Keelhaven"
summary: "Menu bar app that encrypts chosen folders with a Keychain-held password and backs them up on a schedule to storage you own."
category: "Privacy & security"
tags:
  - backup
  - encryption
  - privacy
  - menu-bar
repository: "https://github.com/shenxianpeng/keelhaven"
website: "https://keelhaven.app"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/shenxianpeng/keelhaven/blob/main/LICENSE"
download: "https://github.com/shenxianpeng/keelhaven/releases/download/v0.9.2/Keelhaven-0.9.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/shenxianpeng/keelhaven"
  - "https://github.com/shenxianpeng/keelhaven/blob/main/LICENSE"
  - "https://github.com/shenxianpeng/keelhaven/releases"
  - "https://keelhaven.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/shenxianpeng/keelhaven/main/Keelhaven/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Keelhaven contributors"
    license: "GPL-3.0-or-later; the Keelhaven name and icon are not covered by the code license, trademarks retained"
---

Keelhaven is a menu bar app that encrypts the folders you choose on your Mac and backs them up on a schedule. The destination can be an external or network drive, an S3-compatible bucket, an SFTP server or a restic REST server that you run. Repository passwords and storage keys stay in the Keychain. Each plan is a standard restic repository, so you can restore it on another Mac or Linux machine without the app. It suits people who want scheduled encrypted backups without a Keelhaven server or account in the path.

It needs macOS 14 or later and runs on Apple silicon and Intel. The README says the app is in public beta and its builds are not notarized, so the first launch needs one approval; the project FAQ explains the steps. The code is GPL-3.0-or-later, but the Keelhaven name and icon are not covered by that license, so a fork should ship under its own name. The bundled restic engine keeps its BSD-2-Clause license.
