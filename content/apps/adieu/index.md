---
name: "Adieu"
summary: "Mac uninstaller that removes an app's caches, containers and services and explains why each item can be deleted."
category: "Utilities"
tags:
  - uninstaller
  - cleanup
  - storage
alternativeTo:
  - appcleaner
repository: "https://github.com/lijunyu726/adieu"
website: "https://adieu.lijunyu.com.cn"
license: "MIT"
licenseUrl: "https://github.com/lijunyu726/adieu/blob/main/LICENSE"
download: "https://github.com/lijunyu726/adieu/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/lijunyu726/adieu"
  - "https://github.com/lijunyu726/adieu/blob/main/LICENSE"
  - "https://github.com/lijunyu726/adieu/releases"
  - "https://adieu.lijunyu.com.cn"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/lijunyu726/adieu/main/docs/images/icon.png"
    credit: "Adieu contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Adieu uninstalls a Mac app together with the caches, containers, background services and other data it left behind. It finds them by bundle identifier and explains why each item can go. It also reviews leftovers from apps you already removed, login items, old installers, screenshots, screen recordings, large files and developer caches such as Docker, Xcode and package managers. Items it cannot identify with certainty are not listed. It suits people who want a clear account of what can be deleted before they remove anything.

It requires macOS 26 and an Apple silicon Mac. The README says the app is not notarized, so macOS may ask you to allow it under System Settings > Privacy & Security on first launch and again after it updates itself. Deletion is permanent: items do not go to the Trash, although most deletions ask for confirmation first. Full Disk Access is needed to read other apps' data. Adieu contacts GitHub only to check for updates. The user manual is in Chinese; the README has an English overview.
