---
name: "DontSleepMac"
summary: "Menu bar toggle that keeps your Mac awake, with an option to let the display sleep while your work keeps running."
category: "Utilities"
tags:
  - sleep
  - menu-bar
  - native
alternativeTo:
  - amphetamine
repository: "https://github.com/seeknull/DontSleepMac"
website: "https://seeknull.com/dontsleepmac"
license: "MIT"
licenseUrl: "https://github.com/seeknull/DontSleepMac/blob/main/LICENSE"
download: "https://github.com/seeknull/DontSleepMac/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/seeknull/DontSleepMac"
  - "https://github.com/seeknull/DontSleepMac/blob/main/LICENSE"
  - "https://github.com/seeknull/DontSleepMac/releases"
  - "https://seeknull.com/dontsleepmac"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/seeknull/DontSleepMac/main/assets/AppIcon.icns"
    credit: "seeknull"
    license: "MIT; upstream app icon, trademarks retained"
---

DontSleepMac is a one-click menu bar toggle for keeping your Mac awake. Off leaves normal sleep alone. Stay Awake with the display on keeps the screen lit, and Stay Awake with the display off lets the screen sleep on its normal timer while your processes keep running. It is meant for coding agents that drop their connection, builds and local servers that pause, long downloads, screen shares and renders you leave running while you step away.

It needs macOS 13 or later and runs on Apple silicon and Intel. The release zip is not notarized, so the first launch needs System Settings > Privacy & Security > Open Anyway; on macOS 13 and 14, right-click and Open also works. The README says the app collects no data and makes no network calls, and it only runs Apple's caffeinate, pmset and ps tools. You can also build it from source with the included install script, which needs the Xcode command line tools.
