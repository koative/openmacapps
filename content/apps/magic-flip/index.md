---
name: "Magic Flip"
summary: "Menu bar app that flips a Magic Trackpad's touch orientation 180 degrees when you use it upside down."
category: "Utilities"
tags:
  - trackpad
  - input
  - menu-bar
  - hardware
repository: "https://github.com/svekl/magic-flip"
website: "https://github.com/svekl/magic-flip"
license: "MIT"
licenseUrl: "https://github.com/svekl/magic-flip/blob/main/LICENSE"
download: "https://github.com/svekl/magic-flip/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/svekl/magic-flip"
  - "https://github.com/svekl/magic-flip/blob/main/LICENSE"
  - "https://github.com/svekl/magic-flip/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/svekl/magic-flip/main/MagicFlip/Assets.xcassets/AppIcon.appiconset/Icon-iOS-Dark-1024x1024@1x.png"
    credit: "Sergey Svekolnikov"
    license: "MIT; upstream app icon, trademarks retained"
---

Magic Flip rotates the touch surface of an external Apple Magic Trackpad by 180 degrees, so cursor movement, scrolling and gestures match the trackpad when it is used upside down. The built-in trackpad and mice are not affected. It can start at login and runs from the menu bar. It is for people who prefer to use a Magic Trackpad flipped over.

It requires macOS 26 or later and an Apple Magic Trackpad of any generation, connected by USB or Bluetooth. The app and DMG are not signed or notarized, so approve the first launch by right-clicking the app and choosing Open, or in System Settings > Privacy & Security. It uses Apple's private `MultitouchSupport` framework, which the README says could break with future macOS updates. The app sandbox is disabled, so it cannot be distributed through the Mac App Store.
