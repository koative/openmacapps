---
name: "LunarBar"
summary: "A compact menu bar calendar showing Chinese lunar dates, public holidays, and system calendar events."
category: "Productivity"
tags:
  - calendar
  - menu-bar
repository: https://github.com/LunarBar-app/LunarBar
website: https://github.com/LunarBar-app/LunarBar
license: "MIT"
licenseUrl: https://github.com/LunarBar-app/LunarBar/blob/main/LICENSE
download: https://github.com/LunarBar-app/LunarBar/releases
freeDownload: true
homebrew: "lunarbar"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/LunarBar-app/LunarBar
  - https://github.com/LunarBar-app/LunarBar/blob/main/LICENSE
  - https://github.com/LunarBar-app/LunarBar/releases
  - https://formulae.brew.sh/cask/lunarbar
  - https://raw.githubusercontent.com/LunarBar-app/LunarBar/main/README.md
  - https://github.com/LunarBar-app/LunarBar/releases/tag/v1.10.0
  - https://github.com/LunarBar-app/LunarBar/wiki
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/LunarBar-app/LunarBar/main/Icon.png
    credit: "LunarBar.app"
    license: "MIT repository asset; name and logo retained by the project"
---

LunarBar opens a month calendar from the menu bar that shows Chinese lunar dates alongside the Gregorian ones. It also marks public holidays and can list events and reminders from the calendars already on your Mac.

The menu bar item itself is adjustable. It can be any SF Symbol you name, such as a moon, or a custom date format built from standard date pattern letters. Formats accept JavaScript expressions inside double braces, and two built-in functions return the lunar day, month, solar term or festival and whether a date is an official holiday or a make-up workday. The wiki shows examples such as a year-progress bar next to the date.

The README and the wiki are written in Chinese. The developers describe the design as minimal on purpose, offer no feedback channel and have no plans for an iOS version or a widget.

Version 1.10.0 needs macOS 26 and drops support for macOS 15. Separate releases tagged macos-13, macos-14 and macos-15 stay available for older systems. The release has an Apple silicon DMG and a Universal one. The Universal DMG is signed with a Developer ID and notarized, and the app runs in the App Sandbox according to the README. LunarBar checks for updates itself, and Homebrew users can install the lunarbar cask.
