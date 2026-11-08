---
name: AppPolice
summary: "Caps how much CPU a running app may use, set with a slider in a menu bar menu."
category: Utilities
tags:
  - cpu
  - processes
  - menu-bar
repository: https://github.com/AppPolice/AppPolice
website: https://github.com/AppPolice/AppPolice
license: GPL-2.0
licenseUrl: https://github.com/AppPolice/AppPolice/blob/master/LICENSE
download: https://github.com/AppPolice/AppPolice/releases
freeDownload: true
maintenance: unmaintained
maintenanceNote: No release since February 2016.
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/AppPolice/AppPolice", "https://github.com/AppPolice/AppPolice/blob/master/LICENSE", "https://raw.githubusercontent.com/AppPolice/AppPolice/master/README.md", "https://raw.githubusercontent.com/AppPolice/AppPolice/master/AppPolice/en.lproj/Localizable.strings", "https://raw.githubusercontent.com/AppPolice/AppPolice/master/AppPolice/C/proc_cpulim.c", "https://github.com/AppPolice/AppPolice/releases", "https://github.com/AppPolice/AppPolice/releases/tag/v1.1"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/AppPolice/AppPolice/blob/c154b8f2d8fef5acde72688e62f3d0293cd2d561/AppPolice/Media.xcassets/AppPolice.appiconset/icon_256x256.png
    credit: AppPolice contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

AppPolice slows down a process that is using more CPU than you want it to. Open its menu bar menu, pick a running app, and drag the slider to the share of CPU it may use.

The menu splits running processes into apps and system processes. Limits above 100 percent cover several cores, at 100 percent per core. A single menu item pauses every limit at once and resumes them later. The limiter works by stopping and restarting the process in short slices, every 30 milliseconds by default.

The app dates from the OS X era. The last release, 1.1 from February 2016, is a disk image with an Intel-only app that declares OS X 10.7 or later. It carries no usable code signature, so macOS warns on first launch; the README's answer is to right-click it and choose Open. On an Apple silicon Mac it would need Rosetta.

Building it from source also needs the separate ChromeMenu framework checked out next to it. The code is under GPL version 2.
