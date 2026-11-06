---
name: "DuoUpdater"
summary: "Menu bar updater for installed Mac apps that uses each app's own update channel, with signature checks."
category: "Utilities"
tags:
  - updates
  - menu-bar
  - homebrew
repository: "https://github.com/jizhi0v0/duo-updater"
website: "https://duoupdater.app"
license: "MIT"
licenseUrl: "https://github.com/jizhi0v0/duo-updater/blob/main/LICENSE"
download: "https://github.com/jizhi0v0/duo-updater/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jizhi0v0/duo-updater"
  - "https://github.com/jizhi0v0/duo-updater/blob/main/LICENSE"
  - "https://github.com/jizhi0v0/duo-updater/releases"
  - "https://duoupdater.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jizhi0v0/duo-updater/releases/download/v0.5.23/DuoUpdater-0.5.23-macos.zip"
    credit: "jizhi0v0"
    license: "MIT; upstream app icon, trademarks retained"
---

DuoUpdater scans the apps you already have and updates each one through the channel that app uses: its Sparkle appcast, the Mac App Store, a Homebrew cask, Xcode release feeds, GitHub releases or the vendor's own feed. When an app ships its own updater, DuoUpdater hands over instead of competing with it. Before replacing an app it checks the signature, Team ID and bundle identity of the download, and it keeps a backup you can roll back to. It suits people who want one place to see pending updates without forcing a single update method onto every app.

It requires macOS 15 or later on Apple silicon; the release binary is arm64 only. The README says the app has no telemetry, and checks for your apps go straight to each vendor. The project's site notes that its own update feed counts roughly how many installs check each day. Automatic installs are limited: stable builds do not install updates unattended, and TestFlight checks need Full Disk Access. The release is notarized.
