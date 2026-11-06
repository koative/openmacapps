---
name: "Boost"
summary: "Free menu bar app for memory and disk: see what uses RAM, pause idle apps, find large files and uninstall apps cleanly."
category: "Utilities"
tags:
  - menu-bar
  - system-monitoring
  - disk-cleaner
  - uninstaller
alternativeTo:
  - cleanmymac
  - istat-menus
  - appcleaner
repository: "https://github.com/Kernel-Hunter/boost"
website: "https://kernel-hunter.github.io/boost/"
license: "GPL-3.0"
licenseUrl: "https://github.com/Kernel-Hunter/boost/blob/main/LICENSE"
download: "https://github.com/Kernel-Hunter/boost/releases/download/v1.5.0/Boost.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kernel-Hunter/boost"
  - "https://github.com/Kernel-Hunter/boost/blob/main/LICENSE"
  - "https://github.com/Kernel-Hunter/boost/releases"
  - "https://kernel-hunter.github.io/boost/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kernel-Hunter/boost/main/Resources/AppIcon.icns"
    credit: "Kernel-Hunter (Boost project)"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Boost is a menu bar app for memory and disk. It shows memory pressure and the apps using the most RAM, and it can pause an app so the app stops using CPU without quitting. It also lists large files and the caches that developer tools rebuild, such as Homebrew, npm and Xcode DerivedData. Its uninstaller lists leftovers before anything moves and offers Undo. It is aimed at Mac users who want these tools without a subscription; the project says nothing is behind a paid tier today.

Requires macOS 14 or later, as one universal binary for Apple silicon and Intel. The release is not notarized; the README says notarizing needs a paid Apple Developer account, so macOS stops the first launch. Allow it under System Settings › Privacy & Security. Boost has no analytics. Its only network request is an update check, which you can turn off in Settings.
