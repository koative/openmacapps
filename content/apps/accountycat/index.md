---
name: "AccountyCat"
summary: "Focus companion that watches your active app and window title and nudges you back when you drift."
category: "Productivity"
tags:
  - focus
  - menu-bar
  - local-ai
repository: "https://github.com/strjonas/AccountyCat"
website: "https://accountycat.com"
license: "MIT"
licenseUrl: "https://github.com/strjonas/AccountyCat/blob/main/LICENSE"
download: "https://accountycat.com/download"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/strjonas/AccountyCat"
  - "https://github.com/strjonas/AccountyCat/blob/main/LICENSE"
  - "https://github.com/strjonas/AccountyCat/releases"
  - "https://accountycat.com/download"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/strjonas/AccountyCat/main/AC/Assets.xcassets/AppIcon.appiconset/web-app-manifest-512x512.png"
    credit: "AccountyCat contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

AccountyCat is a menu bar focus helper. It checks the active app and window title every few minutes or when you switch apps, attaches a screenshot when the title is not enough to judge, and gives a short nudge when you drift from a focus session. It does not block sites or lock anything, and it learns from your corrections. You choose the model setup: local mode runs a Qwen model on your Mac through llama.cpp, while private cloud mode sends requests from your Mac straight to OpenRouter with your own key.

The download page and the app bundle both require macOS 26 or later on Apple silicon, although the README badge still says macOS 14+. It needs Screen Recording and Accessibility permissions. The build is signed and notarized. The app is free and MIT-licensed. Cloud use bills your OpenRouter account, which the README estimates at roughly $0.80 to $5 a month, and the planned hosted mode is waitlist-only.
