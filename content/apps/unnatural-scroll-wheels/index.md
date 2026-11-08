---
name: UnnaturalScrollWheels
summary: "Reverses the scroll direction of a physical mouse wheel while the trackpad keeps natural scrolling."
category: Utilities
tags:
  - mouse
  - trackpad
  - scrolling
repository: https://github.com/ther0n/UnnaturalScrollWheels
website: https://github.com/ther0n/UnnaturalScrollWheels
license: GPL-3.0
licenseUrl: https://github.com/ther0n/UnnaturalScrollWheels/blob/main/LICENSE
download: https://github.com/ther0n/UnnaturalScrollWheels/releases
freeDownload: true
homebrew: "unnaturalscrollwheels"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/ther0n/UnnaturalScrollWheels
  - https://github.com/ther0n/UnnaturalScrollWheels/blob/main/LICENSE
  - https://github.com/ther0n/UnnaturalScrollWheels/blob/main/README.md
  - https://github.com/ther0n/UnnaturalScrollWheels/releases
  - https://raw.githubusercontent.com/ther0n/UnnaturalScrollWheels/main/README.md
  - https://github.com/ther0n/UnnaturalScrollWheels/releases/tag/1.4.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/ther0n/UnnaturalScrollWheels/blob/07a61a0ddc73f37ff2e14a10afe4cec50f69184d/UnnaturalScrollWheels/Assets.xcassets/AppIcon.appiconset/256x256.png
    credit: UnnaturalScrollWheels contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/ther0n/UnnaturalScrollWheels/blob/07a61a0ddc73f37ff2e14a10afe4cec50f69184d/Screenshots/Screenshot.png
    credit: UnnaturalScrollWheels contributors
    license: GPL-3.0; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: UnnaturalScrollWheels settings for scroll direction, acceleration, and scrolling speed.
    source: https://github.com/ther0n/UnnaturalScrollWheels/blob/07a61a0ddc73f37ff2e14a10afe4cec50f69184d/Screenshots/Screenshot.png
    credit: UnnaturalScrollWheels contributors
icon: ./assets/icon.png
---

UnnaturalScrollWheels flips the direction of a mouse's scroll wheel and leaves the trackpad alone. macOS ties the two together: turning off natural scrolling in Mouse settings turns it off for the trackpad as well. With the app running, the wheel scrolls opposite to what Mouse settings show, while trackpad gestures keep their natural direction.

It works by intercepting scroll events from a physical wheel, inverting them and rewriting their deltas. The same step lets it switch off scroll acceleration for the wheel and apply your own speed settings. Intercepting events needs the Accessibility permission, which macOS presents as letting the app control your computer.

You can hide the menu bar icon. Opening the app again shows the settings window and brings the icon back temporarily.

The release DMG itself is unsigned, but the app inside is signed with a Developer ID and notarized. It is a Universal app for Apple silicon and Intel and runs on macOS 10.13 or later. Homebrew installs it as the `unnaturalscrollwheels` cask.
