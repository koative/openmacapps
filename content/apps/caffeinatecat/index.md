---
name: "CaffeinateCat"
summary: "Menu bar app that keeps a Mac awake, optionally with the lid closed, with timers and a low-battery cutoff."
category: "Utilities"
tags:
  - sleep
  - menu-bar
  - battery
alternativeTo:
  - amphetamine
repository: "https://github.com/PremPoddar/CaffeinateCat"
website: "https://prempoddar.github.io/CaffeinateCat/"
license: "Apache-2.0"
licenseUrl: "https://github.com/PremPoddar/CaffeinateCat/blob/main/LICENSE"
download: "https://github.com/PremPoddar/CaffeinateCat/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/PremPoddar/CaffeinateCat"
  - "https://github.com/PremPoddar/CaffeinateCat/blob/main/LICENSE"
  - "https://github.com/PremPoddar/CaffeinateCat/releases"
  - "https://prempoddar.github.io/CaffeinateCat/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/PremPoddar/CaffeinateCat/releases/download/v1.1.0/CaffeinateCat.zip
    credit: CaffeinateCat contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

CaffeinateCat is a menu bar app with two keep-awake modes. Keep Screen Awake stops idle and display sleep. Keep Awake on Lid Close also keeps the Mac running with the lid shut, even on battery, by setting the `disablesleep` flag through `pmset`. Both modes support timers and an option to let the display sleep, and the app switches itself off at 20% and 10% battery. It suits builds, downloads, servers and coding agents that must keep running while the laptop is carried in a bag.

Requires macOS 12 or later. Lid-closed mode asks for an administrator password once to install a sudoers rule limited to two `pmset` commands, and a watchdog process restores normal sleep if the app quits or crashes. The project does not state whether its builds are notarized; its site asks first-time users to right-click the app and choose Open. The latest GitHub release is 1.1.0 from 2026-08-09, while the project site and README link to version 1.3.0 hosted outside GitHub.
