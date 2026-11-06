---
name: "RainDesktop"
summary: "Rain behind your windows on macOS, with drops bouncing off title bars and water rising when you step away."
category: "Utilities"
tags:
  - desktop
  - visual-effects
  - screensaver
repository: "https://github.com/gonzaroman/RainDesktop"
website: "https://github.com/gonzaroman/RainDesktop"
license: "MIT"
licenseUrl: "https://github.com/gonzaroman/RainDesktop/blob/main/LICENSE"
download: "https://github.com/gonzaroman/RainDesktop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gonzaroman/RainDesktop"
  - "https://github.com/gonzaroman/RainDesktop/blob/main/LICENSE"
  - "https://github.com/gonzaroman/RainDesktop/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gonzaroman/RainDesktop/main/Resources/AppIcon.icns"
    credit: "Gonzalo Román"
    license: "MIT; upstream app icon, trademarks retained"
---

RainDesktop draws falling rain on the desktop behind your windows. Drops split and bounce off title bars and rounded corners, water collects on top of each window and runs down its sides, and if you leave the Mac idle the water slowly rises, with fish. It can also add people with umbrellas, a rain sound and an optional cartoon fight scene, which is off by default. It suits people who want an ambient screen effect that asks for no permissions.

Requires macOS 14 Sonoma or later, on Apple silicon or Intel. The app is not notarized, so the first launch needs Open Anyway in System Settings or the `xattr` command in the README. Its only network request is a daily check of GitHub for new versions, which can be turned off. The simulation runs at 60 fps and drops to 30 fps in Low Power Mode.
