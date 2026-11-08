---
name: MenuMeters
summary: Shows CPU, memory, disk and network activity as small meters in the menu bar.
category: Utilities
tags:
  - menu-bar
  - system-monitoring
  - system-monitor
alternativeTo:
  - istat-menus
repository: https://github.com/yujitach/MenuMeters
website: https://github.com/yujitach/MenuMeters
license: GPL-2.0
licenseUrl: https://github.com/yujitach/MenuMeters/blob/main/LICENSE
download: https://github.com/yujitach/MenuMeters/releases
freeDownload: true
homebrew: "menumeters"
featured: false
added: 2026-10-17
verified: '2026-11-08'
sources:
  - https://github.com/yujitach/MenuMeters
  - https://github.com/yujitach/MenuMeters/blob/main/LICENSE
  - https://github.com/yujitach/MenuMeters/blob/main/README.md
  - https://github.com/yujitach/MenuMeters/releases
  - https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/
  - https://github.com/yujitach/MenuMeters/releases/tag/2.1.7
  - https://bjango.com/mac/istatmenus/
assets:
  - path: ./assets/icon.png
    source: https://github.com/yujitach/MenuMeters/blob/e91b746debd15777012968a4d247a074d10402f6/MenuMetersApp/Assets.xcassets/AppIcon.appiconset/foo.png
    credit: MenuMeters contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

MenuMeters puts small CPU, memory, disk and network meters in the menu bar, and clicking one opens a menu with the figures behind it. You pick which meters appear and how they look in its preferences window.

- The CPU menu lists processors, load average over 1, 5 and 15 minutes, uptime, and task and thread counts.
- The memory menu shows used and free memory, memory pressure, VM statistics and swap files.
- The disk meter is an activity light or arrow set that changes between idle, read and write.
- The network menu gives throughput, peak throughput, traffic totals and IPv4 and IPv6 addresses per interface, with items to copy an address.

Each menu also has shortcuts to Activity Monitor, Console and the network settings.

This version is a port of Alex Harper's original MenuMeters, which stopped working on El Capitan because the system no longer loads third-party menu extras. Yuji Tachikawa turned the meters into ordinary status items and later turned the old preference pane into a standalone app. Many outside contributions are merged in.

Release 2.1.7 is a Universal ZIP for Apple silicon and Intel, notarized, and needs macOS 12. A separate 2.1.6.1 build covers Big Sur and earlier. Move the app out of Downloads with the Finder before launching it, or it cannot update itself.

iStat Menus also reads GPU, sensors and battery, and can control fans. In the 2.1.7 release notes the maintainer himself recommends switching to Stats as better maintained.
