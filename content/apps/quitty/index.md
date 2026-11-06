---
name: "Quitty"
summary: "Quits each app automatically once its last window closes, with include and exclude lists and an optional delay."
category: "Utilities"
tags:
  - window-management
  - automation
  - menu-bar
repository: "https://github.com/chentao1006/Quitty"
website: "https://quitty.ct106.com/"
license: "MIT"
licenseUrl: "https://github.com/chentao1006/Quitty/blob/main/LICENSE"
download: "https://github.com/chentao1006/Quitty/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/chentao1006/Quitty"
  - "https://github.com/chentao1006/Quitty/blob/main/LICENSE"
  - "https://github.com/chentao1006/Quitty/releases/latest"
  - "https://quitty.ct106.com/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/chentao1006/Quitty/main/Quitty/Assets.xcassets/AppIcon.appiconset/App%20Store-512%402x.png"
    credit: "chentao1006"
    license: "MIT (repository); upstream app icon, trademarks retained"
---

Quitty closes the gap between closing a window and quitting an app. When the last window of an app closes, Quitty terminates that app, optionally after a delay of up to five seconds. You can limit it to a list of apps or apply it to everything except a list you keep. It watches window events through the Accessibility API and can start at login. It suits people who want apps to stop running when their windows close.

The README says it works with macOS Tahoe but does not state a minimum version, and it cannot promise to quit every app correctly, so it advises excluding IDEs. Quitty needs Accessibility permission. Anonymous usage tracking (Aptabase) is on by default and can be turned off under Settings, General. The README does not say whether the DMG is notarized.
