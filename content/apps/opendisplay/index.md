---
name: "OpenDisplay"
summary: "Turns an iPhone, iPad or spare Mac into an extended second display for your Mac, over USB or Wi-Fi."
category: "Utilities"
tags:
  - display
  - ipad
  - iphone
repository: https://github.com/peetzweg/opendisplay
website: https://opendisplay.app/
license: "GPL-3.0"
licenseUrl: https://github.com/peetzweg/opendisplay/blob/main/LICENSE
download: https://github.com/peetzweg/opendisplay/releases
freeDownload: true
homebrew: "opendisplay"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/peetzweg/opendisplay"
  - "https://github.com/peetzweg/opendisplay/blob/main/LICENSE"
  - "https://github.com/peetzweg/opendisplay/releases"
  - "https://raw.githubusercontent.com/peetzweg/opendisplay/main/README.md"
  - "https://opendisplay.app/"
  - "https://github.com/peetzweg/opendisplay/releases/latest"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/peetzweg/opendisplay/main/Mac/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "peetzweg and OpenDisplay contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

OpenDisplay turns an iPhone, iPad or spare Mac into a second monitor for your Mac. The sending Mac creates a virtual display, which you arrange in System Settings and drag windows onto, and streams it to the receiving device. A mirroring mode is there when you want a copy of the main screen instead.

- Over USB, the stream runs through the Lightning or USB-C cable with no network involved. The cable must carry data; a charge-only cable does not work.
- On Wi-Fi, the iPhone or iPad announces itself over Bonjour and you pick it from a menu on the Mac. Both sides need the Local Network permission.
- The virtual display matches the device's panel at 2x, and rotating the device rebuilds it as a portrait monitor.
- On the device, a tap clicks, a drag drags and two fingers scroll.

A Mac that should act as the screen runs the separate OpenDisplay Receiver app, which needs macOS 12 or later. It connects over Wi-Fi, Thunderbolt, Ethernet or, on recent macOS, a USB-C data cable.

The Mac app needs macOS 14, and the iOS receiver needs iOS or iPadOS 15. The iOS app is distributed through TestFlight or built from source. The Mac app relies on a private CoreGraphics API, so it ships as a DMG on GitHub, signed with a Developer ID and notarized, and updates itself. While it runs, macOS shows the screen recording indicator and hides notifications by default, as it does for any app capturing the screen. Apple's Sidecar avoids the indicator only because it is part of macOS itself.
