---
name: "Skrepka"
summary: "Clipboard history picker for macOS and Linux; paired machines can optionally share history over the local network."
category: "Productivity"
tags:
  - clipboard-manager
  - cross-platform
  - sync
  - privacy
alternativeTo:
  - paste
repository: "https://github.com/psoldunov/skrepka"
website: "https://www.soldunov.dev/skrepka"
license: "MIT"
licenseUrl: "https://github.com/psoldunov/skrepka/blob/master/LICENSE"
download: "https://github.com/psoldunov/skrepka/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/psoldunov/skrepka"
  - "https://github.com/psoldunov/skrepka/blob/master/LICENSE"
  - "https://github.com/psoldunov/skrepka/releases"
  - "https://www.soldunov.dev/skrepka"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/psoldunov/skrepka/master/Sources/Skrepka/Resources/AppIcon.icns"
    credit: "Philipp Soldunov"
    license: "MIT; upstream app icon, trademarks retained"
---

Skrepka keeps a searchable history of what you copy. A shortcut (Command-Shift-V on the Mac) opens a picker over the app you are working in, and choosing an entry pastes it where you were typing. It handles text, rich text, links, files and images, keeps pinned entries, and never records anything a password manager marks as not for history. It is aimed at people who move between a Mac and a Linux machine and want one history on both. Sync between paired machines runs only over the local network, with no account or relay.

The macOS build needs macOS 26.0 or later, on Apple silicon or on the four Intel Macs that still run that release; releases are universal builds. It is notarized, so it opens on first launch without a Gatekeeper workaround. Sync is off on the Mac until you switch it on, and automatic paste asks for Accessibility permission the first time you use it; declining makes Skrepka copy the entry for you to paste. The Linux side is tested on KDE Plasma, while GNOME support has not yet run on a real GNOME desktop according to the README.
