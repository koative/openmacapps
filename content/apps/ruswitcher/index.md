---
name: "RuSwitcher"
summary: "Fixes words typed in the wrong keyboard layout with a modifier tap or automatically, for any pair of installed layouts."
category: "Utilities"
tags:
  - keyboard
  - languages
  - input
  - menu-bar
alternativeTo:
  - punto-switcher
repository: https://github.com/rashn/RuSwitcher
website: https://ruswitcher.app
license: "MIT"
licenseUrl: https://github.com/rashn/RuSwitcher/blob/main/LICENSE
download: https://ruswitcher.app/en/download/
homebrew: "ruswitcher"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/rashn/RuSwitcher
  - https://github.com/rashn/RuSwitcher/blob/main/LICENSE
  - https://github.com/rashn/RuSwitcher/blob/main/TRADEMARKS.md
  - https://ruswitcher.app/en/download/
  - https://github.com/rashn/RuSwitcher/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/rashn/RuSwitcher/main/macos/Assets.xcassets/AppIcon.appiconset/icon_256.png
    credit: "Rashns (RuSwitcher)"
    license: "Not covered by the MIT code license; the RuSwitcher name and icon are reserved by the author (TRADEMARKS.md)"
---

RuSwitcher rewrites text typed while the wrong keyboard layout was active: tap Option, or another trigger you choose, and the last word is retyped in the other layout, with a second tap to undo and the same trick for selected text. It works with any two installed layouts, including Cyrillic ones and, experimentally, Hebrew, and types the result directly instead of going through the clipboard.

An optional automatic mode checks finished words against the macOS dictionary and fixes them as you type, with per-app and per-word exception lists; it, the Screen Sharing mode and the layout flag at the cursor are marked beta. It is a native menu bar app for macOS 13 or later on Apple silicon and Intel.
