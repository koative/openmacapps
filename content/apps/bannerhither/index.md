---
name: "BannerHither"
summary: "Moves macOS notification banners to the display under your pointer, the active window, or one display you choose."
category: "Utilities"
tags:
  - menu-bar
  - notifications
  - monitors
  - native
repository: "https://github.com/KJeon10/BannerHither"
website: "https://github.com/KJeon10/BannerHither"
license: "MIT"
licenseUrl: "https://github.com/KJeon10/BannerHither/blob/main/LICENSE"
download: "https://github.com/KJeon10/BannerHither/releases/download/v0.2.0/BannerHither-0.2.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/KJeon10/BannerHither"
  - "https://github.com/KJeon10/BannerHither/blob/main/LICENSE"
  - "https://github.com/KJeon10/BannerHither/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/KJeon10/BannerHither/main/Resources/AppIcon.icns"
    credit: "KJeon10"
    license: "MIT; upstream app icon, trademarks retained"
---

BannerHither is a menu bar app that decides which display macOS notification banners appear on. macOS always puts them on the main display, which with several monitors is often not the one you are looking at. BannerHither moves each banner as it appears to the screen under the pointer, the screen of the active window, or one display you fix in advance. It suits people who work across more than one monitor.

It needs macOS 14 or later and runs as a universal build for Apple silicon and Intel. It asks for the Accessibility permission, which lets it move the NotificationCenter window, and nothing else. The release is signed with Developer ID and notarized, so macOS only asks the usual first-launch question. The author has tested it on macOS 26 only; the README says macOS 14 and 15 should work but are not verified. Placement relies on undocumented NotificationCenter behaviour that a macOS update could change.
