---
name: "ClipRecallBar"
summary: "Keyboard-first clipboard history in the menu bar: filter as you type, then paste the match with Return."
category: "Productivity"
tags:
  - clipboard-manager
  - menu-bar
  - native
alternativeTo:
  - paste
repository: "https://github.com/turhe123/clip-recall-bar"
website: "https://turhe123.github.io/clip-recall-bar/"
license: "MIT"
licenseUrl: "https://github.com/turhe123/clip-recall-bar/blob/main/LICENSE"
download: "https://github.com/turhe123/clip-recall-bar/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/turhe123/clip-recall-bar"
  - "https://github.com/turhe123/clip-recall-bar/blob/main/LICENSE"
  - "https://github.com/turhe123/clip-recall-bar/releases/latest"
  - "https://turhe123.github.io/clip-recall-bar/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/turhe123/clip-recall-bar/HEAD/Sources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png"
    credit: "Or Davidai Bachar"
    license: "MIT; upstream app icon, trademarks retained"
---

ClipRecallBar keeps a clipboard history in the menu bar and opens it with a keyboard shortcut. You type to filter the list and press Return to paste the selected item. It is written in native Swift, with no backend, no accounts and no subscriptions. It is inspired by Maccy and suits people who copy a lot and want to recall items from the keyboard alone.

ClipRecallBar requires macOS 14 or later. The app is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings under Privacy & Security; the README suggests right-click and Open. Launch at login can need approval under Login Items. The README says the app makes no network calls and has no analytics or third-party dependencies.
