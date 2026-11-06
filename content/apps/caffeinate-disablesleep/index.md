---
name: "caffeinate & disablesleep"
summary: "Menu bar switch that keeps a Mac awake for timed sessions, optionally with the screen on or the lid closed."
category: "Utilities"
tags:
  - menu-bar
  - sleep
  - power
alternativeTo:
  - amphetamine
repository: "https://github.com/demiaochen/caffeinate-disablesleep"
website: "https://cnd.demiao.cc"
license: "MIT"
licenseUrl: "https://github.com/demiaochen/caffeinate-disablesleep/blob/main/LICENSE"
download: "https://github.com/demiaochen/caffeinate-disablesleep/releases/download/v1.1.0/caffeinate-disablesleep-1.1.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/demiaochen/caffeinate-disablesleep"
  - "https://github.com/demiaochen/caffeinate-disablesleep/blob/main/LICENSE"
  - "https://github.com/demiaochen/caffeinate-disablesleep/releases"
  - "https://cnd.demiao.cc"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/demiaochen/caffeinate-disablesleep/main/Branding/icon-1024.png"
    credit: "Demiao Chen"
    license: "MIT; upstream app icon, trademarks retained"
---

A small menu bar app that keeps a Mac awake while a download, build or other long task runs. Pick a duration from 15 minutes to eight hours, or choose unlimited, and optionally keep the screen on. The lid option sets `pmset disablesleep`, so the Mac keeps running with its lid closed. The app replaces typing `caffeinate` and `pmset` commands by hand, and its panel shows the equivalent commands.

It requires macOS 14 or later and is a universal build for Apple silicon and Intel. The DMG is Developer ID signed and notarized. The first time you enable the lid option, macOS asks for an administrator password, and the app then installs a sudoers rule that only allows turning `disablesleep` on and off. The README warns that a closed Mac can trap heat, so keep it ventilated.
