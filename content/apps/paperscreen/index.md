---
name: "PaperScreen"
summary: "Overlays a faint grain texture on every display to soften glossy screens without shifting colours."
category: "Utilities"
tags:
  - display
  - accessibility
  - menu-bar
  - customization
repository: "https://github.com/Bearbobs/PaperScreen"
website: "https://github.com/Bearbobs/PaperScreen"
license: "MIT"
licenseUrl: "https://github.com/Bearbobs/PaperScreen/blob/main/LICENSE"
download: "https://github.com/Bearbobs/PaperScreen/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Bearbobs/PaperScreen"
  - "https://github.com/Bearbobs/PaperScreen/blob/main/LICENSE"
  - "https://github.com/Bearbobs/PaperScreen/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Bearbobs/PaperScreen/main/PaperScreen/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Anuj Kapoor"
    license: "MIT (repository); upstream app icon, trademarks retained"
---

PaperScreen puts a grain texture over every display, above all other windows, to take the edge off bright glossy panels. It works on contrast and texture rather than colour temperature, so whites stay white. The overlay is click-through and lives in the menu bar. Settings let you exclude specific apps and adjust sharpness and grain size. It suits people who find glare or a mirror-like finish tiring.

It requires macOS 15 or later. The README states that the app is not notarized or signed with a Developer ID, so macOS blocks the first launch. Allow it under System Settings, Privacy & Security, or clear the quarantine flag with `xattr` as the README describes.
