---
name: "simplebanking"
summary: "Menu bar app that shows your current German bank balance without decimals, via PSD2 Open Banking."
category: "Productivity"
tags:
  - finance
  - menu-bar
  - security
repository: "https://github.com/klotzbrocken/simplebanking"
website: "https://github.com/klotzbrocken/simplebanking"
license: "MIT"
licenseUrl: "https://github.com/klotzbrocken/simplebanking/blob/main/LICENSE"
download: "https://github.com/klotzbrocken/simplebanking/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/klotzbrocken/simplebanking"
  - "https://github.com/klotzbrocken/simplebanking/blob/main/LICENSE"
  - "https://github.com/klotzbrocken/simplebanking/releases/latest"
assets:
  - path: ./assets/icon.png
    source: https://github.com/klotzbrocken/simplebanking/releases/download/v2.0.9/simplebanking-2.0.9.dmg
    credit: simplebanking contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

simplebanking puts your current account balance in the menu bar, without decimals, and refreshes it automatically (every four hours by default). Clicking it opens a panel with recent transactions, categories and a monthly spending heatmap. Setup takes an IBAN and finds the bank, and it handles push-TAN and OAuth redirects. Connections run through YAXI's PSD2 Open Banking service to banks in Germany. It suits people who only want to check their balance quickly.

It requires macOS 13 or later. The README says the release build is notarized and updates through Sparkle. Your bank connection passes through YAXI, and the app only works with banks that service supports. Credentials are encrypted with AES-GCM under a master password held in the Keychain. Building from source requires your own YAXI credentials.
