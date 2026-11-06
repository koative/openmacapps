---
name: "ChargeWatch"
summary: "Menu bar charging-power monitor with a battery charge limit that can go below 80% on Apple silicon Macs."
category: "Utilities"
tags:
  - battery
  - power
  - menu-bar
repository: "https://github.com/TY-teo/ChargeWatching"
website: "https://github.com/TY-teo/ChargeWatching"
license: "MIT"
licenseUrl: "https://github.com/TY-teo/ChargeWatching/blob/main/LICENSE"
download: "https://github.com/TY-teo/ChargeWatching/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/TY-teo/ChargeWatching"
  - "https://github.com/TY-teo/ChargeWatching/blob/main/LICENSE"
  - "https://github.com/TY-teo/ChargeWatching/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/TY-teo/ChargeWatching/releases/download/v0.7.0/ChargeWatch-0.7.0.dmg"
    credit: "TY-teo"
    license: "MIT; upstream app icon, trademarks retained"
---

ChargeWatch shows the power going into a Mac in real time, split into battery, system load and wall output, and sets a battery charge limit you choose. The limit works by writing the charge-control key of the Apple silicon SMC, so the battery stops charging at your level; the README says it can hold a limit below 80%. A small root daemon does the writing, and you approve its installation once with your administrator password. It suits people who keep a laptop plugged in for long stretches and want to see the charging power as well as limit it.

Power monitoring needs macOS 13 or later, and the charge limit needs an Apple silicon Mac; the README says it was tested on macOS 26.4. The DMG is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings or with the `xattr` command from the README. The project says it has no network access, no tracking and no paid tier, and history stays in a local database.
