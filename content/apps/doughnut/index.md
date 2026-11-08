---
name: Doughnut
summary: A three-column podcast app for the Mac with a library that can live on a
  local or network drive.
category: Media
tags:
- podcasts
- audio
- library
repository: https://github.com/dyerc/Doughnut
website: https://doughnutapp.com
license: GPL-3.0
licenseUrl: https://github.com/dyerc/Doughnut/blob/master/LICENSE
maintenance: "unmaintained"
maintenanceNote: "No release since October 2022."
download: https://github.com/dyerc/Doughnut/releases
freeDownload: true
homebrew: "doughnut"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/dyerc/Doughnut", "https://github.com/dyerc/Doughnut/blob/master/LICENSE", "https://github.com/dyerc/Doughnut/releases", "https://doughnutapp.com", "https://raw.githubusercontent.com/dyerc/Doughnut/master/README.md", "https://raw.githubusercontent.com/dyerc/Doughnut/master/LICENSE", "https://github.com/dyerc/Doughnut/releases/tag/v2.0.1"]
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/dyerc/Doughnut/master/Doughnut/Assets.xcassets/AppIcon.appiconset/Icon_512x512.png
  credit: Chris Dyer
  license: GPL-3.0; upstream project asset, trademarks retained
---

Doughnut subscribes to podcast feeds and plays their episodes in a three-column window. The design takes after Instacast for Mac, a podcast app discontinued in 2015; Doughnut's developer tried other layouts and kept coming back to three columns.

- The library works like an iTunes library and can live on an internal disk or a shared network drive.
- You can keep more than one library on the same Mac.
- Episodes can be marked as favourites.
- The library can be searched.
- Custom podcasts hold episodes that have no feed, such as releases of shows that have since ended.

Doughnut requires macOS 10.15 or later. Version 2.0.1 from October 2022 is the latest release, and the repository has had no commits since December of that year. Its DMG holds a Universal app for Apple silicon and Intel; the app is notarized, though the disk image itself is not.

Earlier versions were built on Electron. The developer rewrote Doughnut in Swift after the Electron app used more than 200 MB of memory even while minimized.
