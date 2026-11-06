---
name: "AnnePro"
summary: "Menu bar app that changes the lighting and key layout of an AnnePro keyboard over Bluetooth."
category: "Utilities"
tags:
  - keyboard
  - bluetooth
  - keyboard-customization
  - hardware
repository: "https://github.com/msvisser/AnnePro-mac"
website: "https://github.com/msvisser/AnnePro-mac"
license: "MIT"
licenseUrl: "https://github.com/msvisser/AnnePro-mac/blob/master/LICENSE"
download: "https://github.com/msvisser/AnnePro-mac/releases/download/v0.3/AnnePro.app.zip"
freeDownload: true
maintenance: unmaintained
maintenanceNote: "No commit since November 2018 (checked 2026-11-06)."
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/msvisser/AnnePro-mac"
  - "https://github.com/msvisser/AnnePro-mac/blob/master/LICENSE"
  - "https://github.com/msvisser/AnnePro-mac/releases/download/v0.3/AnnePro.app.zip"
---

AnnePro-mac is a small menu bar app for owners of an AnnePro keyboard. Its lighting and layout windows let you change the keyboard's settings from a Mac, connected over Bluetooth. The README describes it as unfinished: uploading lighting or layout data can stop halfway, and layout uploads retry until they succeed while lighting does not.

The release is an Intel (x86_64) build with a minimum of macOS 10.12 according to its Info.plist, so Apple silicon Macs run it through Rosetta 2. It is not notarized and Gatekeeper rejects it, so the first launch has to be allowed in System Settings; the README suggests right-clicking the app and choosing Open. The last commit is from November 2018.
