---
name: "MagHue"
summary: "Menu bar app that turns the MagSafe LED green at a battery percentage you pick, instead of waiting for 100%."
category: "Utilities"
tags:
  - battery
  - automation
  - menu-bar
repository: "https://github.com/kamenlevi/MagHue"
website: "https://github.com/kamenlevi/MagHue"
license: "GPL-3.0"
licenseUrl: "https://github.com/kamenlevi/MagHue/blob/main/LICENSE"
download: "https://github.com/kamenlevi/MagHue/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kamenlevi/MagHue"
  - "https://github.com/kamenlevi/MagHue/blob/main/LICENSE"
  - "https://github.com/kamenlevi/MagHue/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/kamenlevi/MagHue/releases/download/v1.0.0/MagHue.zip"
    credit: "Kamen Levi"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

macOS keeps a MagSafe charger's LED amber until the battery reaches 100%. MagHue lets you pick a percentage at which the LED turns green while charging, and can switch the light off while plugged in or follow a schedule from sunset to sunrise, with the times computed on your Mac. A one-time Charge to Full button lifts the charge limit so the battery fills once. It suits people who keep a charge limit and never reach 100%. A small background helper keeps the LED correct when the app is closed; the README says the LED key only changes what the light shows, not charging.

The app needs an Apple Silicon MacBook with a MagSafe 3 port, macOS 14 or later, and a charger with the stock LED. The zip is not notarized, so the first launch needs Open Anyway in System Settings. Installing the helper asks for your administrator password once. The Charge to Full button appears only on Macs whose firmware exposes the charge-limit keys.
