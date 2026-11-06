---
name: "Chorus"
summary: "One window for Gmail, Slack, Discord and other web apps, each with its own isolated WebKit session."
category: "Productivity"
tags:
  - messaging
  - native
  - privacy
repository: "https://github.com/nicojan/Chorus"
website: "https://github.com/nicojan/Chorus"
license: "MIT"
licenseUrl: "https://github.com/nicojan/Chorus/blob/main/LICENSE"
download: "https://github.com/nicojan/Chorus/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nicojan/Chorus"
  - "https://github.com/nicojan/Chorus/blob/main/LICENSE"
  - "https://github.com/nicojan/Chorus/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nicojan/Chorus/main/Chorus/Resources/Assets.xcassets/AppIcon.appiconset/icon_512%402x.png"
    credit: "Nico Jan"
    license: "MIT; upstream app icon, trademarks retained"
---

Chorus puts web services such as Gmail, Slack and Discord into one native window. Each service gets its own WebKit session, so two accounts for the same site stay separate without bundling a browser engine. It includes about seventy presets, accepts any URL, groups services into spaces, and offers per-service custom CSS, dark mode and quiet-hours notifications. It suits people who juggle several accounts or want a lighter wrapper than Electron-based apps.

It needs macOS 14 or later and is a universal build for Apple silicon and Intel. The release is signed, notarized and updates itself through Sparkle. The README says every feature is free and the source is MIT-licensed, but the bundled HaGeZi Light (GPL-3.0) and Fanboy's Annoyance (CC BY 3.0) blocklist data keep their own licenses, which the MIT license does not cover. Data stays on your Mac rather than syncing across devices. Third-party notices ship with the source in `THIRD_PARTY_NOTICES.md`.
