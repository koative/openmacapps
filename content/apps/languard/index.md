---
name: "LanGuard"
summary: "Menu bar app that switches Wi-Fi off while a wired Ethernet link is up and back on when you unplug, without admin rights."
category: "Utilities"
tags:
  - menu-bar
  - network
  - native
  - automation
repository: "https://github.com/roypadina/LanGuard"
website: "https://apps.roypadina.synology.me/apps/languard/"
license: "MIT"
licenseUrl: "https://github.com/roypadina/LanGuard/blob/main/LICENSE"
download: "https://github.com/roypadina/LanGuard/releases/download/v1.3.2/LanGuard.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/roypadina/LanGuard"
  - "https://github.com/roypadina/LanGuard/blob/main/LICENSE"
  - "https://github.com/roypadina/LanGuard/releases"
  - "https://apps.roypadina.synology.me/apps/languard/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/roypadina/LanGuard/main/LanGuard/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Roy Padina"
    license: "MIT; upstream app icon, trademarks retained"
---

LanGuard is a menu bar app that turns Wi-Fi off when a wired Ethernet link comes up and turns it back on when you unplug. It is for people who dock a laptop and want macOS to stop keeping Wi-Fi active next to a cable. The Wi-Fi switch goes through CoreWLAN, so the basic toggle does not need an administrator password. An optional Connection Protection mode installs a root helper and asks for one admin password.

Requires macOS 14 or later, as a universal build for Apple silicon and Intel. The app is ad-hoc signed and not notarized, so the first launch is blocked until you choose Open Anyway under System Settings › Privacy & Security. Apart from a daily update check against GitHub, the app makes no network calls and has no analytics.
