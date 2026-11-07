---
name: "unfd"
summary: "Menu bar app that switches between Arabic and English keyboard layouts and fixes text typed in the wrong one."
category: "Utilities"
tags:
  - keyboard
  - input
  - languages
  - menu-bar
repository: "https://github.com/alpha2xyz/unfd"
website: "https://github.com/alpha2xyz/unfd"
license: "MIT"
licenseUrl: "https://github.com/alpha2xyz/unfd/blob/main/LICENSE"
download: "https://github.com/alpha2xyz/unfd/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/alpha2xyz/unfd"
  - "https://github.com/alpha2xyz/unfd/blob/main/LICENSE"
  - "https://github.com/alpha2xyz/unfd/releases"
assets:
  - path: ./assets/icon.png
    source: https://github.com/alpha2xyz/unfd/releases/download/v0.4.1/unfd-0.4.1.zip
    credit: unfd contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

unfd is for people who type Arabic and English on the same Mac and are tired of pressing the language key. Pressing Option-Shift-Space converts the last word or the selected text that was typed in the wrong layout. Address bars, email and password fields switch to English when you click them, and a slash at the start of a word switches to English for chat apps and terminals. It learns from corrections made repeatedly in the same kind of field. The README says it makes no network connections and keeps only settings, per-chat languages and learned field types. Its bundled Arabic and English word lists come from FrequencyWords under CC BY-SA 4.0, as listed in the NOTICE file.

It requires macOS 14 or later, on Apple silicon or Intel, and an Arabic and an English keyboard layout in Input Sources. It needs Accessibility permission to see the kind of field you are typing in. The app is ad-hoc signed and not notarized: on macOS 15 or later allow it under Privacy & Security with Open Anyway, and on macOS 14 right-click and choose Open. After installing a new build, remove unfd from the Accessibility list and add it again.
