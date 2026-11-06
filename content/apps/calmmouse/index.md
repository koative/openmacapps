---
name: "CalmMouse"
summary: "Stops Magic Mouse scrolling while you click, so the page holds still under the cursor, with per-app rules."
category: "Utilities"
tags:
  - mouse
  - menu-bar
  - accessibility
repository: "https://github.com/Malik1942/CalmMouse"
website: "https://calmmouse.malikzhang.com"
license: "MIT"
licenseUrl: "https://github.com/Malik1942/CalmMouse/blob/main/LICENSE"
download: "https://github.com/Malik1942/CalmMouse/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Malik1942/CalmMouse"
  - "https://github.com/Malik1942/CalmMouse/blob/main/LICENSE"
  - "https://github.com/Malik1942/CalmMouse/releases"
  - "https://calmmouse.malikzhang.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Malik1942/CalmMouse/main/Resources/AppIcon.icns"
    credit: "MalikZ"
    license: "MIT; upstream app icon (converted from .icns, resized), trademarks retained"
---

On a Magic Mouse the whole top surface stays live while you click, so a click can also scroll the page before it lands. CalmMouse holds back Magic Mouse scrolling while a button is down, and adds axis lock, a dead zone, optional tap-to-click and per-app rules, such as turning off Magic Mouse scrolling in Figma. It is for Magic Mouse users who work in canvas, CAD or spreadsheet apps, where a moving page sends clicks to the wrong place. It only changes the Magic Mouse; the trackpad and other mice are not affected.

It needs macOS 13 or later and Accessibility permission. The release is signed and notarized, so it opens without the Open Anyway step. It reads touch data through MultitouchSupport, a private macOS framework, and identifies the device with an undocumented event field, so it depends on macOS internals that Apple does not document.
