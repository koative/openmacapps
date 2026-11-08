---
name: "LangSwitcher"
summary: "Converts text typed in the wrong keyboard layout with a hotkey, such as Latin keystrokes meant as Cyrillic."
category: "Utilities"
tags:
  - keyboard
  - languages
  - input
  - menu-bar
alternativeTo:
  - punto-switcher
repository: "https://github.com/reg2005/langSwitcher"
website: "https://reg2005.github.io/langSwitcher/"
license: "MIT"
licenseUrl: "https://github.com/reg2005/langSwitcher/blob/main/LICENSE"
download: "https://github.com/reg2005/langSwitcher/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/reg2005/langSwitcher"
  - "https://github.com/reg2005/langSwitcher/blob/main/LICENSE"
  - "https://github.com/reg2005/langSwitcher/releases"
  - "https://raw.githubusercontent.com/reg2005/langSwitcher/main/README.md"
  - "https://reg2005.github.io/langSwitcher/en"
  - "https://github.com/reg2005/langSwitcher/releases/tag/v1.1.0"
  - "https://yandex.ru/soft/punto/mac/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/reg2005/langSwitcher/main/LangSwitcher/Resources/Assets.xcassets/AppIcon.appiconset/Icon-macOS-Default-256x256%401x.png"
    credit: "LayoutSwitcher contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

LangSwitcher fixes text you typed with the wrong keyboard layout active. Type "ghbdtn" when you meant the Russian "привет", press Shift twice, and the text is replaced in place.

You do not have to select anything first. The default Greedy Line mode finds where the wrong-layout text starts on the current line and converts only that part. Last Word mode handles just the final word, and a third setting waits for a manual selection. Conversion follows physical key positions: each character goes back to the key that typed it, then comes out in the other layout. Punctuation stays as it was.

LangSwitcher handles English, Russian, German, French and Spanish, picked up from the layouts in your Input Sources. Double Shift is the default hotkey, and you can record another. To swap the text it simulates Command-C and Command-V, which is why it needs the Accessibility permission. An optional log, off by default, keeps past conversions in a local SQLite database that you can export as JSON. The developer says the app has no network access and no analytics.

Version 1.1.0 comes in Apple silicon, Intel and Universal builds and requires macOS 13. The Universal DMG is signed with a Developer ID and notarized.

Punto Switcher, from Yandex, switches the layout for you automatically and can expand abbreviations into longer text. LangSwitcher changes nothing until you press the hotkey.
