---
name: "Darki"
summary: "Menu bar app that switches macOS between Light and Dark mode on a schedule, with a manual toggle and launch at login."
category: "Utilities"
tags:
  - menu-bar
  - display
  - themes
  - automation
repository: "https://github.com/Kitround/Darki"
website: "https://github.com/Kitround/Darki"
license: "MIT"
licenseUrl: "https://github.com/Kitround/Darki/blob/main/LICENSE"
download: "https://github.com/Kitround/Darki/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Kitround/Darki"
  - "https://github.com/Kitround/Darki/blob/main/LICENSE"
  - "https://github.com/Kitround/Darki/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Kitround/Darki/main/icon.png"
    credit: "Kitround"
    license: "MIT; upstream app icon, trademarks retained"
---

Darki is a small menu bar app for people who want the Mac's appearance to follow the time of day. You can switch between Light and Dark mode from the menu bar, or set hours during which Dark mode turns on automatically. It can start at login and is translated into eight languages. It suits anyone who wants a scheduled appearance change without a larger utility.

It needs macOS 14.6 or later, which is the minimum set in the Xcode project; the README says 14.0. The release is not notarized by Apple and is signed with a development certificate, so the first launch has to be allowed under System Settings > Privacy & Security with Open Anyway. Darki also needs Automation permission for System Events to change the appearance. If no permission prompt appears on first launch, enable System Events under Privacy & Security > Automation.
