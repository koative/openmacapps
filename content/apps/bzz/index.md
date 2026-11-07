---
name: "Bzz"
summary: "Open-source menu bar tool that fixes words typed in the wrong keyboard layout, currently Russian and English."
category: "Utilities"
tags:
  - keyboard
  - input
  - menu-bar
alternativeTo:
  - punto-switcher
repository: "https://github.com/zlopixatel/bzz"
website: "https://zlopixatel.github.io/bzz/"
license: "MIT"
licenseUrl: "https://github.com/zlopixatel/bzz/blob/main/LICENSE"
download: "https://github.com/zlopixatel/bzz/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/zlopixatel/bzz"
  - "https://github.com/zlopixatel/bzz/blob/main/LICENSE"
  - "https://github.com/zlopixatel/bzz/releases"
  - "https://zlopixatel.github.io/bzz/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/zlopixatel/bzz/releases/download/v0.3.0/Bzz.dmg
    credit: Bzz contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Bzz is a menu bar app that notices when a word was typed in the wrong keyboard layout, such as Latin keys pressed while Russian was meant, and retypes it in the right layout when you press Space or punctuation. It checks words against a Russian dictionary with stemming and accepts a single typo in words of six or more letters. Cmd+Z reverts a correction within five seconds, and the tray icon pauses it. It suits people who switch between Russian and English layouts. The README says Windows support is planned.

It needs macOS 10.15 or later and the Accessibility permission, which it uses to watch keystrokes. The README describes a Gatekeeper override for the first launch (Open Anyway, or clearing the quarantine flag) and does not claim notarization. The project says keystrokes are handled on the Mac and the binary has no HTTP client. A one-time paid Pro tier with extra dictionaries and layouts is planned; the README says the core features stay free under the MIT license.
