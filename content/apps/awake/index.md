---
name: "Awake"
summary: "Menu bar app that keeps your Mac awake with the lid closed by toggling pmset disablesleep, with a narrow sudoers rule."
category: "Utilities"
tags:
  - menu-bar
  - power
  - sleep
  - keep-awake
alternativeTo:
  - amphetamine
repository: "https://github.com/pistachionet/awake"
website: "https://pistachionet.github.io/awake/"
license: "MIT"
licenseUrl: "https://github.com/pistachionet/awake/blob/main/LICENSE"
download: "https://github.com/pistachionet/awake/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/pistachionet/awake"
  - "https://github.com/pistachionet/awake/blob/main/LICENSE"
  - "https://github.com/pistachionet/awake/releases"
  - "https://pistachionet.github.io/awake/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/pistachionet/awake/main/Resources/AppIcon.icns"
    credit: "pistachionet"
    license: "MIT; upstream app icon, trademarks retained"
---

Awake is a menu bar app for keeping a Mac running with the lid closed, so downloads, builds, syncs and coding agents keep going. Unlike `caffeinate`, it changes the system power setting that controls lid-close sleep. Granting permission once installs a sudoers rule that allows only two `pmset` commands, so the app itself does not run as root. It is an alternative to Amphetamine that is not limited to the App Store.

Requires macOS 13 or later. The v1.1.2 zip we checked is signed with a Developer ID and notarized. The README warns that the battery drains faster with the lid closed, the internal display may stay on, and heavy CPU or GPU work is best avoided while the Mac is closed, especially in a bag. macOS can still force sleep at critically low battery.
