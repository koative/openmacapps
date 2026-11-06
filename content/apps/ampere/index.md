---
name: "Ampere"
summary: "Menu bar battery monitor for Apple silicon Macs; the free license holds charge at 40 to 60%, custom bounds need a paid license."
category: "Utilities"
tags:
  - battery
  - charging
  - battery-health
  - menu-bar
repository: "https://github.com/az-code-lab/ampere"
website: "https://amperebattery.app/"
license: "MIT"
licenseUrl: "https://github.com/az-code-lab/ampere/blob/master/LICENSE"
download: "https://github.com/az-code-lab/ampere/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/az-code-lab/ampere"
  - "https://github.com/az-code-lab/ampere/blob/master/LICENSE"
  - "https://github.com/az-code-lab/ampere/releases/latest"
  - "https://amperebattery.app/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/az-code-lab/ampere/master/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "AZ Code Lab"
    license: "MIT; upstream app icon, trademarks retained"
---

Ampere shows the battery's charge, health and wattage from the menu bar. It can pause and resume charging through the SMC, keep the charge between an upper and a lower bound, run a one-off full charge, and optionally keep the Mac awake while it is on power. Charge control runs through a small root helper and a sudoers rule that the app installs after you enter an administrator password.

It needs macOS 15 (Sequoia) or later on an Apple silicon Mac. A free license, registered with a name and email address, unlocks charge control but fixes the bounds at 40 to 60%; custom bounds need a paid license. Until a license is registered, the app shows only its registration window. Registration and a daily check send the Mac's serial number, app version and macOS version to the license server. The README does not say whether the build is notarized.
