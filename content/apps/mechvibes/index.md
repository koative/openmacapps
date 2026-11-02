---
name: "Mechvibes"
summary: "Plays mechanical keyboard and mouse click sounds as you type, using swappable sound packs."
category: "Utilities"
tags:
  - keyboard
  - audio
  - customization
  - cross-platform
repository: https://github.com/hainguyents13/mechvibes
website: https://mechvibes.com
license: "MIT"
licenseUrl: https://github.com/hainguyents13/mechvibes/blob/main/LICENSE
download: https://github.com/hainguyents13/mechvibes/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-01'
icon: ./assets/icon.png
sources:
  - https://github.com/hainguyents13/mechvibes
  - https://github.com/hainguyents13/mechvibes/blob/main/LICENSE
  - https://github.com/hainguyents13/mechvibes/releases
  - https://mechvibes.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/hainguyents13/mechvibes/main/assets/icon.png
    credit: "Hải Nguyễn and Mechvibes contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Mechvibes makes every keystroke and click sound like a mechanical keyboard or mouse. Sound packs can be downloaded from its library or made yourself, and they play with low latency even while the app is in the background. Version 3 is a Rust rewrite that replaces both the original Electron app and its successor, MechvibesDX, and adds ambient sounds and themes.

It runs on Windows, Linux and macOS. The project calls the macOS build experimental: it is ad-hoc signed but not notarized, so Gatekeeper must be bypassed on first launch, and it needs Accessibility and Input Monitoring permissions to hear keys in other apps. Releases currently provide an Apple silicon disk image. The app sends one anonymous usage ping per launch, which can be turned off in its settings.
