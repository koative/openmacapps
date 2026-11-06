---
name: "MenuBarCollapse"
summary: "Menu bar divider that hides crowded icons behind one click and re-hides them after a set delay."
category: "Utilities"
tags:
  - menu-bar
  - customization
  - native
alternativeTo:
  - bartender
repository: "https://github.com/turhe123/menu-bar-collapse"
website: "https://turhe123.github.io/menu-bar-collapse/"
license: "MIT"
licenseUrl: "https://github.com/turhe123/menu-bar-collapse/blob/main/LICENSE"
download: "https://github.com/turhe123/menu-bar-collapse/releases/latest/download/MenuBarCollapse-macOS.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/turhe123/menu-bar-collapse"
  - "https://github.com/turhe123/menu-bar-collapse/blob/main/LICENSE"
  - "https://github.com/turhe123/menu-bar-collapse/releases/latest"
  - "https://turhe123.github.io/menu-bar-collapse/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/turhe123/menu-bar-collapse/main/Sources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Or Davidai Bachar"
    license: "MIT; upstream app icon, trademarks retained"
---

MenuBarCollapse adds a divider to the menu bar. Icons you drag to its left are hidden when you collapse the bar with one click, and the bar can re-hide itself after a delay or from a global shortcut. It is a small, free alternative to paid menu bar organizers such as Bartender, for people with a crowded menu bar. It cannot see or list other apps' icons, so it only hides the icons you place to the left of its divider.

Requires macOS 14 or later. The build is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings, or the quarantine flag cleared with `xattr -cr` as the README describes. According to the README, the app makes no network calls and has no analytics. On notched MacBooks, icons to the right of the divider can still end up under the notch.
