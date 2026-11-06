---
name: "LittleClean"
summary: "Cleaner that uninstalls apps with their leftovers and caches, and tracks developer tools such as Homebrew and Node.js."
category: "Utilities"
tags:
  - cleanup
  - disk-usage
  - developer-utilities
repository: "https://github.com/leibnizli/LittleClean"
website: "https://arayofsunshine.dev/littleclean"
license: "MIT"
licenseUrl: "https://github.com/leibnizli/LittleClean/blob/main/LICENSE"
download: "https://github.com/leibnizli/LittleClean/releases/download/1.9.1/LittleClean.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/leibnizli/LittleClean"
  - "https://github.com/leibnizli/LittleClean/blob/main/LICENSE"
  - "https://github.com/leibnizli/LittleClean/releases/tag/1.9.1"
  - "https://arayofsunshine.dev/littleclean"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/leibnizli/LittleClean/main/LittleClean/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "LittleClean contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

LittleClean uninstalls apps and removes what they leave behind, including caches, preferences, containers, launch agents and orphaned extensions. Removed items go to the Trash, and running apps are quit first. It also clears logs, saved app states and Xcode leftovers, and tracks installed tools such as Homebrew, MacPorts and Node.js. It suits people who want to reclaim disk space without digging through `~/Library` by hand.

It requires macOS 14 or later. Deeper scans and cleanup need Full Disk Access, which the app can open in System Settings; Touch ID is optional for protected files. The README does not say whether the build is notarized, so the first launch may need approval.
