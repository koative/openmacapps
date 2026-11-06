---
name: "Pomosh"
summary: "Menu bar Pomodoro timer with working and break cycles, skip and reload buttons, notifications and a global pause shortcut."
category: "Productivity"
tags:
  - menu-bar
  - pomodoro
  - timer
repository: "https://github.com/stevenselcuk/Pomosh-macOS"
website: "https://github.com/stevenselcuk/Pomosh-macOS"
license: "MIT"
licenseUrl: "https://github.com/stevenselcuk/Pomosh-macOS/blob/master/LICENSE"
download: "https://github.com/stevenselcuk/Pomosh-macOS/releases/tag/v.1.0.7"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/stevenselcuk/Pomosh-macOS"
  - "https://github.com/stevenselcuk/Pomosh-macOS/blob/master/LICENSE"
  - "https://github.com/stevenselcuk/Pomosh-macOS/releases/tag/v.1.0.7"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/stevenselcuk/Pomosh-macOS/master/Pomosh/Assets.xcassets/AppIcon.appiconset/512%402x.png"
    credit: "Steven J. Selcuk"
    license: "MIT; upstream app icon, trademarks retained"
---

Pomosh is a Pomodoro timer that lives in the menu bar. You start a session, and it moves through working and break periods in order, with the remaining time and cycles shown in the menu bar: a flame during work and a coffee cup during breaks. You can pause or start with a global shortcut, skip a round you did not finish, or restart it, and you can change the durations and the number of cycles in a session. It sends notifications and plays a chime when a period ends, and the menu bar countdown can be turned off. It is written in Swift and SwiftUI.

It suits people who want a simple focus timer that stays out of the way. The app was removed from the Mac App Store, and the README says this GitHub release is now the way to get it.

Pomosh needs macOS 15.6 or later according to its Info.plist, although the README says macOS 15. The release zip contains a Developer ID signed app that Apple has notarized, and Gatekeeper accepts it. The author removed the app from the Mac App Store and published v1.0.7 on GitHub instead.
