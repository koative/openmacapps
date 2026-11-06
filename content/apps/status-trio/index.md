---
name: "Status Trio"
summary: "Wi-Fi, battery and volume in one menu bar or Dock icon, with panels for networks, Bluetooth and audio devices."
category: "Utilities"
tags:
  - menu-bar
  - battery
  - volume
  - bluetooth
  - dock
repository: "https://github.com/lingyired/status-trio"
website: "https://statustrio.lingai.net/"
license: "Apache-2.0"
licenseUrl: "https://github.com/lingyired/status-trio/blob/main/LICENSE"
download: "https://github.com/lingyired/status-trio/releases/latest"
homebrew: "status-trio"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/lingyired/status-trio"
  - "https://github.com/lingyired/status-trio/blob/main/LICENSE"
  - "https://github.com/lingyired/status-trio/blob/main/NOTICE"
  - "https://github.com/lingyired/status-trio/releases"
  - "https://statustrio.lingai.net/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/lingyired/status-trio/main/Support/AppIcon.png"
    credit: "lingyired"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Status Trio folds the battery, Wi-Fi and volume indicators into one compact icon, shown in the menu bar, the Dock or both. Clicking it opens a panel with nearby networks and link details, battery details such as adapter power, cycle count and Low Power Mode, input and output device switching, and paired Bluetooth devices you can connect or disconnect, including listening modes on supported AirPods.

It is for people who want fewer separate status items, or a status readout in the Dock. Icon size, colours, the middle glyph (network, playing Bluetooth device, input source or power) and the order of panel sections are all adjustable, and the interface comes in twelve languages.

The app targets macOS 13 or later, though the developer has not yet tested it on Ventura. It is a universal build, signed and notarized, updated through Sparkle and also available as a Homebrew cask. Anonymous usage statistics stay off unless you turn them on. Since version 1.8, a Charge to Full Now button on Apple silicon Macs with macOS 26.4 or later uses a private macOS interface and is on by default where supported; after it runs, the charge limit can stay at 100% until you cancel it or reset it in System Settings.
