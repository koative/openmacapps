---
name: "BarTranslate"
summary: "A menu bar panel that opens Google Translate behind a hotkey, with a shortcut for translating the clipboard."
category: "Productivity"
tags:
  - translation
  - menu-bar
  - keyboard-shortcuts
repository: https://github.com/ThijmenDam/BarTranslate
website: https://apps.thijmendam.nl/bartranslate
license: "GPL-3.0"
licenseUrl: https://github.com/ThijmenDam/BarTranslate/blob/master/LICENSE
download: https://github.com/ThijmenDam/BarTranslate/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/ThijmenDam/BarTranslate
  - https://github.com/ThijmenDam/BarTranslate/blob/master/LICENSE
  - https://github.com/ThijmenDam/BarTranslate/releases
  - https://apps.apple.com/nl/app/bartranslate/id6759278154
  - https://raw.githubusercontent.com/ThijmenDam/BarTranslate/master/README.md
  - https://apps.thijmendam.nl/bartranslate
  - https://github.com/ThijmenDam/BarTranslate/releases/tag/v2.4.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ThijmenDam/BarTranslate/master/BarTranslate/Assets.xcassets/AppIcon.appiconset/BarTranslate-iOS-Default-256x256%401x.png
    credit: "Thijmen Dam"
    license: "GPL-3.0 repository asset; trademarks retained"
---

BarTranslate opens Google Translate in a panel under its menu bar icon. Press the hotkey, type, and read the translation without switching to a browser, because the cursor is already in the source field when the panel appears.

A second hotkey, Quick Translate, translates whatever is on the clipboard. Both shortcuts can be changed. The app remembers the last source and target languages between launches, and an appearance setting puts the panel and the translation page in System, Light or Dark mode.

There are two ways to get it. The GitHub release is a ZIP with a Universal app for Apple silicon and Intel that needs macOS 12 or later. Version 2.4.0 is Developer ID-signed and notarized. The developer also sells it on the Mac App Store, where the fee supports the project and updates arrive automatically.

The panel is a trimmed web view of Google Translate itself, so the languages and translation quality are whatever Google's page offers. BarTranslate supplies the panel, the hotkeys and the clipboard shortcut around it. Hotkeys for choosing and swapping languages, and a panel that can be moved and pinned anywhere on screen, are listed as planned.
