---
name: "TrueTone Manager"
summary: "Menu bar app that sets macOS True Tone on or off per app, applying the rule when that app comes to the front."
category: "Utilities"
tags:
  - display
  - color
  - automation
  - menu-bar
repository: "https://github.com/martinrusetski/true-tone-manager"
website: "https://github.com/martinrusetski/true-tone-manager"
license: "MIT"
licenseUrl: "https://github.com/martinrusetski/true-tone-manager/blob/main/LICENSE"
download: "https://github.com/martinrusetski/true-tone-manager/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/martinrusetski/true-tone-manager"
  - "https://github.com/martinrusetski/true-tone-manager/blob/main/LICENSE"
  - "https://github.com/martinrusetski/true-tone-manager/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/martinrusetski/true-tone-manager/releases/download/v0.5.3/TrueToneManager-v0.5.3.dmg"
    credit: "Martin Rusetski"
    license: "MIT; upstream app icon, trademarks retained"
---

TrueTone Manager switches macOS True Tone on or off as you move between apps. Each app can be set to Always On, Always Off or Use Default, and a default setting covers apps without a rule. It is for designers, photographers and anyone who needs accurate color in some apps but wants True Tone elsewhere.

It requires an Apple silicon Mac running macOS 13 or later. The DMG is ad-hoc signed and not notarized, so macOS may block the first launch; allow it under System Settings › Privacy & Security. It changes True Tone through Apple's private CoreBrightness interface, which is undocumented. True Tone is system-wide, so it cannot be set per display, and the menu shows Unavailable when no True Tone-capable display is active.
