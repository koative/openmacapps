---
name: "DotQuit"
summary: "Menu bar utility that quits apps when their last window closes, with a whitelist and an Option-key override."
category: "Utilities"
tags:
  - menu-bar
  - cleanup
  - automation
repository: "https://github.com/nodemt/DotQuit"
website: "https://github.com/nodemt/DotQuit"
license: "GPL-3.0"
licenseUrl: "https://github.com/nodemt/DotQuit/blob/main/LICENSE"
download: "https://github.com/nodemt/DotQuit/releases"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/nodemt/DotQuit"
  - "https://github.com/nodemt/DotQuit/blob/main/LICENSE"
  - "https://github.com/nodemt/DotQuit/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/nodemt/DotQuit/main/DotQuit/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Mehmet Talha Irmak"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

DotQuit covers the gap between the red close button and actually quitting. When the last window of an app closes, it sends the app a normal quit request, so unsaved-work sheets still appear and nothing is force-killed. A whitelist keeps chosen apps running, and holding Option while closing a window reverses the decision for that window. It is for people who open a PDF or a browser, close the window, and find the app still holding memory an hour later.

The README says it needs macOS 14 or later and is universal, for Apple silicon and Intel. The Developer ID-signed DMG is described as notarized by Apple, and it needs Accessibility permission to see window events. The source is GPLv3 and can be built for free, but the README asks for a $2.99 license that funds the signed builds and support. Anonymous usage counters are sent through TelemetryDeck unless you switch them off in Settings.
