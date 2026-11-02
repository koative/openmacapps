---
name: "PairPods"
summary: "A menu bar app that plays your Mac's audio through two or more Bluetooth headphones or speakers at once."
category: "Utilities"
tags:
  - audio
  - bluetooth
  - headphones
  - sharing
  - menu-bar
  - native
repository: https://github.com/wozniakpawel/PairPods
website: https://pairpods.app
license: "MIT"
licenseUrl: https://github.com/wozniakpawel/PairPods/blob/main/LICENSE
download: https://github.com/wozniakpawel/PairPods/releases
homebrew: "pairpods"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/wozniakpawel/PairPods
  - https://github.com/wozniakpawel/PairPods/blob/main/LICENSE
  - https://github.com/wozniakpawel/PairPods/releases
  - https://pairpods.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/wozniakpawel/PairPods/main/PairPods/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png
    credit: "Pawel Wozniak"
    license: "MIT; upstream project asset, trademarks retained"
---

PairPods lets two people listen to the same thing from one Mac, each on their own Bluetooth headphones. Connect the devices, tick the ones you want in the menu bar, and switch on sharing; audio then plays through all of them together until you turn it off again. It works with any Bluetooth audio device macOS supports, not only AirPods.

Each device gets its own volume slider, battery level where the device reports it, and its sample rate, which helps explain quality drops when devices differ. You can choose which device acts as the clock source, and the app can reconnect devices that drop out. It needs macOS 13.5 or later, runs on Apple silicon and Intel, and checks for updates itself through Sparkle.
