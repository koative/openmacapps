---
name: "Kipimo"
summary: "Free, open-source menu bar monitor and cleanup toolkit for Apple silicon Macs: caches, uninstaller, space, startup items."
category: "Utilities"
tags:
  - system-monitoring
  - cleanup
  - menu-bar
  - uninstaller
alternativeTo:
  - cleanmymac
repository: "https://github.com/piedol/kipimo"
website: "https://www.piedol.top/kipimo/"
license: "GPL-3.0"
licenseUrl: "https://github.com/piedol/kipimo/blob/master/LICENSE"
download: "https://github.com/piedol/kipimo/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/piedol/kipimo"
  - "https://github.com/piedol/kipimo/blob/master/LICENSE"
  - "https://github.com/piedol/kipimo/releases"
  - "https://www.piedol.top/kipimo/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/piedol/kipimo/master/assets/AppIcon.icns"
    credit: "piedol"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Kipimo shows system readings in the menu bar: free disk space, memory pressure, battery, CPU and temperature, network speed and the batteries of Bluetooth devices. Its tools clear caches and logs, uninstall apps along with the files they leave behind, show what fills the disk, list startup items and check apps for updates. Everything it removes goes to the Trash, where Put Back can restore it. It is for Mac users who want a CleanMyMac-style toolkit that is free and open to inspection. It is written in Rust, and the README says it is an independent project, not affiliated with MacPaw.

It requires macOS 15 or later on Apple silicon. The README says the zipped app is signed and notarized by Apple. Some tools need Full Disk Access, and the README says power and temperature readings use private IOKit interfaces, so they may stop working in a future macOS release. Kipimo checks GitHub once a day for a new version unless you turn that off, and the Updates tool checks other apps' feeds without installing their updates.
