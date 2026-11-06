---
name: "WeekNumber"
summary: "Menu bar item that shows the current week number, with label styles, a two-digit option and ISO week numbering."
category: "Productivity"
tags:
  - menu-bar
  - calendar
  - minimal
repository: "https://github.com/BaldrianSector/week-number"
website: "https://github.com/BaldrianSector/week-number"
license: "MIT"
licenseUrl: "https://github.com/BaldrianSector/week-number/blob/main/LICENSE"
download: "https://github.com/BaldrianSector/week-number/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/BaldrianSector/week-number"
  - "https://github.com/BaldrianSector/week-number/blob/main/LICENSE"
  - "https://github.com/BaldrianSector/week-number/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/BaldrianSector/week-number/main/WeekNumberMenuBarApp/Assets.xcassets/AppIcon.appiconset/Calendar_Icon-iOS-Dark-1024x1024%401x.png"
    credit: "Baldrian Sector"
    license: "MIT; upstream app icon, trademarks retained"
---

WeekNumber is a minimal menu bar app that shows the current week number, for example "Week 04" or "W 04". Its settings choose the label style, pad single digits with a leading zero, and switch to ISO-8601 week numbering, where weeks start on Monday and the week-year can differ near New Year. It suits people who plan by week number and want it visible without opening a calendar.

It requires an Apple silicon Mac running macOS 13 or later. The README does not state a minimum version, but the release binary declares 13.0 and is arm64 only. The DMG is not notarized, so the first launch has to be approved under Privacy & Security. The app does not add itself to Login Items; you add it by hand if you want it to start at login.
