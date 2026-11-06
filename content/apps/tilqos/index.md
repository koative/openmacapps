---
name: "Tilqos"
summary: "Menu bar app that rewrites words typed in the wrong keyboard layout between English, Russian and Kazakh, without a network."
category: "Utilities"
tags:
  - keyboard
  - keyboard-customization
  - menu-bar
alternativeTo:
  - punto-switcher
repository: "https://github.com/elapen/tilqos"
website: "https://elapen.github.io/tilqos/"
license: "MIT"
licenseUrl: "https://github.com/elapen/tilqos/blob/main/LICENSE"
download: "https://github.com/elapen/tilqos/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/elapen/tilqos"
  - "https://github.com/elapen/tilqos/blob/main/LICENSE"
  - "https://github.com/elapen/tilqos/releases/latest"
  - "https://elapen.github.io/tilqos/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/elapen/tilqos/main/Resources/AppIcon.icns"
    credit: "Tilqos contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Tilqos notices when a word was typed on the wrong layout, such as `ghbdtn` for `привет`. It rewrites the word and switches the layout, or shows a hint that Tab accepts. It works across English, Russian and Kazakh layouts, including the Kazakh letters that Russian layouts lack, and can transliterate between Latin and Cyrillic. Per-app settings, an undo hotkey and three presets (Cautious, Balanced, Bold) control how far it goes. It suits people who switch between these layouts through the day. Everything runs locally, with no network code and no telemetry. The code is MIT, but the bundled language-data files are derivatives of third-party dictionaries that keep their own terms: MPL 1.1, LGPL 2.1+ or GPL 2.0+ for Kazakh, a Lebedev BSD-style license for Russian, and SCOWL and Ispell terms for English.

It needs macOS 14 or later on Apple silicon; the README says Intel Macs are untested. The release build is ad-hoc signed and not notarized, so allow the first launch in System Settings. It needs Accessibility permission, and macOS asks you to grant it again after each update. The Windows port is experimental and has not been run on real Windows by the author, and the Kazakh text has had no professional review.
