---
name: "EnputPlus"
summary: "Input method for macOS that offers inline spelling corrections and word completions from macOS's built-in spell checker."
category: "Utilities"
tags:
  - input
  - keyboard
  - writing
  - spellcheck
repository: "https://github.com/c0rychu/enput-plus"
website: "https://github.com/c0rychu/enput-plus"
license: "MIT"
licenseUrl: "https://github.com/c0rychu/enput-plus/blob/main/LICENSE"
download: "https://github.com/c0rychu/enput-plus/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/c0rychu/enput-plus"
  - "https://github.com/c0rychu/enput-plus/blob/main/LICENSE"
  - "https://github.com/c0rychu/enput-plus/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/c0rychu/enput-plus/main/EnputPlus/Assets.xcassets/AppIcon.appiconset/appicon-iOS-Default-1024x1024%401x.png"
    credit: "Cory Chu"
    license: "MIT; upstream app icon, trademarks retained"
---

EnputPlus is an input method for typing English. As you type, it shows spelling corrections and word completions drawn from macOS's built-in spell checker, which the README says works offline. You pick a suggestion with the arrow keys, Tab or number keys, and an option makes suggestions appear only when you press the down arrow. It targets people writing in English who want fewer typos, and the README says it is a spelling and completion tool rather than a grammar checker.

It requires macOS 14.0 or later and Apple silicon: the release package supports only Apple silicon Macs, and the README says Intel users must build from source. Install the `.pkg` from the releases page, log out and back in, then add EnputPlus under Input Sources. Neither the README nor the release notes say whether the package is notarized, so check the first-launch prompt. The project is a small, MIT-licensed input method that the author maintains on GitHub, with its last release in January 2026.
