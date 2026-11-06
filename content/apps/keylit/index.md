---
name: "KeyLit"
summary: "Menu bar toggle for the keyboard backlight that switches between off and its dimmest level."
category: "Utilities"
tags:
  - keyboard
  - menu-bar
  - brightness
  - backlight
repository: "https://github.com/vuongp/keylit"
website: "https://github.com/vuongp/keylit"
license: "MIT"
licenseUrl: "https://github.com/vuongp/keylit/blob/main/LICENSE"
download: "https://github.com/vuongp/keylit/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/vuongp/keylit"
  - "https://github.com/vuongp/keylit/blob/main/LICENSE"
  - "https://github.com/vuongp/keylit/releases"
---

KeyLit is a small menu bar utility that toggles the keyboard backlight. A click switches it between off and its dimmest level, and a right-click offers Quit. It does one job and has no other settings. It is for people who keep the backlight off or at its dimmest most of the time.

The README does not state a supported macOS version. KeyLit calls Apple's private CoreBrightness framework, which Apple does not document, so it may break with system updates. The build we checked is signed with a development certificate and is not notarized, so the first launch must be allowed in System Settings.
