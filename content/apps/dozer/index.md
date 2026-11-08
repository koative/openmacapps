---
name: Dozer
summary: Hides groups of menu bar icons until you need them.
category: Utilities
tags:
  - menu-bar
  - organization
alternativeTo:
  - bartender
repository: https://github.com/Mortennn/Dozer
website: https://github.com/Mortennn/Dozer
license: MPL-2.0
licenseUrl: https://github.com/Mortennn/Dozer/blob/master/LICENSE
download: https://github.com/Mortennn/Dozer/releases
freeDownload: true
maintenance: unmaintained
maintenanceNote: No release since July 2020.
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/Mortennn/Dozer
  - https://github.com/Mortennn/Dozer/blob/master/LICENSE
  - https://github.com/Mortennn/Dozer/blob/master/README.md
  - https://github.com/Mortennn/Dozer/releases
  - https://github.com/Mortennn/Dozer/releases/tag/v4.2.0
  - https://www.macbartender.com/
assets:
  - path: ./assets/icon.png
    source: https://github.com/Mortennn/Dozer/blob/b0540378c01690ce566058b67bc7dc7e01efa4e6/Dozer/Other/Assets.xcassets/AppIcon.appiconset/Icon_256x256.png
    credit: Dozer contributors
    license: MPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Dozer hides menu bar icons you rarely use behind its own icons and brings them back when you click. It places two or three small icons in the menu bar, counted from right to left, and you arrange your other icons around them by holding Command and dragging.

The first Dozer icon can sit anywhere and only serves as something to click. Everything to the left of the second icon is the hidden group: a left-click on any Dozer icon hides or shows it. The third icon is optional and marks a second group further left, which appears when you Option-click a Dozer icon. Right-clicking a Dozer icon opens its settings.

Bartender also hides menu bar items, and adds search, hotkeys, automatic triggers, profiles and a separate bar, sold after a trial. Dozer only toggles one or two groups of icons.

The README lists macOS 10.13 or later. The latest release, 4.2.0, ships an Intel-only app in a disk image, so on Apple silicon it needs Rosetta 2. The README still points to a Homebrew cask named `dozer`, but Homebrew no longer lists one.
