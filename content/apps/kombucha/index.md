---
name: "Kombucha"
summary: "Menu bar utility that keeps a MacBook battery between chosen charge limits to slow battery wear."
category: "Utilities"
tags:
  - battery
  - menu-bar
  - hardware
  - charging
repository: "https://github.com/askuksov/kombucha"
website: "https://github.com/askuksov/kombucha"
license: "MIT"
licenseUrl: "https://github.com/askuksov/kombucha/blob/main/LICENSE"
download: "https://github.com/askuksov/kombucha/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/askuksov/kombucha"
  - "https://github.com/askuksov/kombucha/blob/main/LICENSE"
  - "https://github.com/askuksov/kombucha/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/askuksov/kombucha/releases/download/v0.2.1/Kombucha-0.2.1.zip"
    credit: "Oleksandr Kuksov"
    license: "MIT; upstream app icon, trademarks retained"
---

Kombucha stops charging when the battery reaches an upper limit and resumes at a lower one, so a MacBook that stays on its adapter does not sit at 100%. Limits are adjustable between 55 and 95% and 40 and 85%, with a one-time full charge and a heat protection that pauses charging at 40 °C. A menu bar panel shows the level and status, and history charts cover charge level, cycle count and maximum capacity. Other battery managers are detected and left in charge. It suits people who keep a laptop plugged in most of the time and want the battery to age more slowly.

It needs an Apple silicon MacBook whose SMC publishes the CHTE key, running macOS 15 to 26; macOS 27 is not supported yet. The release is notarized, and the charge control runs in a small helper that needs one administrator approval in System Settings. Kombucha has no accounts and no telemetry, and contacts GitHub only to check for updates. Use only one battery manager at a time.
