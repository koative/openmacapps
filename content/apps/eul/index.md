---
name: eul
summary: "Shows CPU, memory, network, disk, battery and fan readings in the menu bar and in widgets."
category: Utilities
tags:
  - menu-bar
  - system-monitoring
  - widgets
  - system-monitor
alternativeTo:
  - istat-menus
repository: https://github.com/gao-sun/eul
website: https://github.com/gao-sun/eul
license: MIT
licenseUrl: https://github.com/gao-sun/eul/blob/master/LICENSE
download: https://github.com/gao-sun/eul/releases
freeDownload: true
homebrew: "eul"
maintenance: "unmaintained"
maintenanceNote: "No release since August 2021 and no commit since January 2022 (checked 2026-11-08)."
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/gao-sun/eul
  - https://github.com/gao-sun/eul/blob/master/LICENSE
  - https://github.com/gao-sun/eul/blob/master/README.md
  - https://github.com/gao-sun/eul/releases
  - https://raw.githubusercontent.com/gao-sun/eul/master/README.md
  - https://raw.githubusercontent.com/gao-sun/eul/master/Resource/en.lproj/Localizable.strings
  - https://github.com/gao-sun/eul/releases/tag/v1.6.2
  - https://bjango.com/mac/istatmenus/
assets:
  - path: ./assets/icon.png
    source: https://github.com/gao-sun/eul/blob/b5c3bd0a5be2679ca7e22da676be5ac73e300f4a/Resource/Assets.xcassets/AppIcon.appiconset/eul%40256px.png
    credit: eul contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

eul puts system readings in the menu bar. You pick components from CPU, GPU, memory, network, disk, battery, fan and Bluetooth, then drag them to set their order in the status bar.

- CPU shows usage, temperature, core counts and uptime, and GPU shows temperature.
- Memory is split into app, wired, compressed and cached files.
- Network shows traffic in and out, for a chosen port or an auto-detected one.
- Disk shows your disks and can eject them.
- Battery shows charge, health, cycle count and time remaining.
- Fan speed is shown against its minimum and maximum, and Bluetooth lists accessory battery levels.

The app is written mostly in SwiftUI, follows Dark Mode and includes widgets for macOS Big Sur and later. Its interface is available in more than 20 languages.

The App Store edition is older and lacks features, because all SMC calls were removed from it. The GitHub build, version 1.6.2 from August 2021, is a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and needs macOS 10.15 or later.

Bjango's iStat Menus reads the same sensors and adds fan speed control, but it is sold after a 14-day trial. The eul download on GitHub is free, and the code is MIT-licensed.
