---
name: "IconCraft"
summary: "Changes the name and icon that a Mac app shows in the Dock and Finder, while the app itself stays untouched."
category: "Design"
tags:
  - icons
  - customization
  - dock
  - finder
repository: "https://github.com/gshipman223/IconCraft"
website: "https://iconcraft.co"
license: "MIT"
licenseUrl: "https://github.com/gshipman223/IconCraft/blob/main/LICENSE"
download: "https://github.com/gshipman223/IconCraft/releases/download/v0.14.1/IconCraft-Mac-0.14.1.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gshipman223/IconCraft"
  - "https://github.com/gshipman223/IconCraft/blob/main/LICENSE"
  - "https://github.com/gshipman223/IconCraft/releases"
  - "https://iconcraft.co"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gshipman223/IconCraft/main/assets/icon.icns"
    credit: "Gavin Shipman and IconCraft contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

IconCraft lets you give an installed Mac app a different name and icon in the Dock and Finder, so a replacement app can look like the one you knew. It works on any app, Apple's included, and leaves the app underneath unchanged. Before it changes anything it backs up the original metadata, checks the bundle identity and code signature, and rolls back a failed change. It suits people who switched to a new app and want the old look back.

It needs macOS 13 or later, on Apple silicon or Intel. The README says the DMG and the app inside are signed and notarized. Setup asks for App Management permission but not Full Disk Access, Accessibility or Screen Recording. Besides publisher icon lookups and a GitHub update check, which does not install updates, it sends nothing. The app is free and open source; donations through PayPal are optional.
