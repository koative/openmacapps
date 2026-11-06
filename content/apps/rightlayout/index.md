---
name: "RightLayout"
summary: "Corrects text typed in the wrong keyboard layout as you type, detecting the language with an on-device CoreML model."
category: "Utilities"
tags:
  - keyboard
  - input
  - keyboard-customization
  - autocorrect
alternativeTo:
  - punto-switcher
repository: "https://github.com/chernistry/RightLayout"
website: "https://alexchernysh.com/rightlayout"
license: "Apache-2.0"
licenseUrl: "https://github.com/chernistry/RightLayout/blob/main/LICENSE"
download: "https://github.com/chernistry/RightLayout/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: unmaintained
maintenanceNote: "Original author no longer develops it; latest release is 1.2, March 2026."
icon: "./assets/icon.png"
sources:
  - "https://github.com/chernistry/RightLayout"
  - "https://github.com/chernistry/RightLayout/blob/main/LICENSE"
  - "https://github.com/chernistry/RightLayout/releases/latest"
  - "https://alexchernysh.com/rightlayout"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/chernistry/RightLayout/releases/download/v1.2/RightLayout-1.2.pkg"
    credit: "Alex Chernysh"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

RightLayout notices when a word was typed in the wrong keyboard layout, such as "ghbdtn" meant as "привет", and replaces it in place. It runs in the background with no hotkey or popup, learns when you undo the same correction twice, and supports English, Russian and Hebrew layouts. Text stays on your Mac. It suits people who switch between Latin and Cyrillic or Hebrew layouts and often type a few words in the wrong one.

It needs macOS 13 or later and the Accessibility permission. The .pkg installer is unsigned and the build is not notarized, so macOS must be told to allow it in System Settings before it runs. The README says the original author no longer develops the project and the community is looking for maintainers; the latest release is version 1.2 from March 2026.
