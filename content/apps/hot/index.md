---
name: Hot
summary: See CPU temperature and thermal pressure from the menu bar.
category: Utilities
tags:
  - menu-bar
  - temperature
  - system-monitoring
  - system-monitor
repository: https://github.com/macmade/Hot
website: https://xs-labs.com/en/apps/hot/
license: MIT
licenseUrl: https://github.com/macmade/Hot/blob/main/LICENSE
download: https://github.com/macmade/Hot/releases
freeDownload: true
homebrew: "hot"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/macmade/Hot
  - https://github.com/macmade/Hot/blob/main/LICENSE
  - https://github.com/macmade/Hot/blob/main/README.md
  - https://github.com/macmade/Hot/releases
  - https://raw.githubusercontent.com/macmade/Hot/main/README.md
  - https://xs-labs.com/en/apps/hot/
assets:
  - path: ./assets/icon.png
    source: https://github.com/macmade/Hot/blob/9405e2a9d7e5d07c50f5e17be81eaa290f2c442a/Hot/UI/Images/Icon.icns
    credit: Hot contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Hot puts your Mac's thermal state in the menu bar, so you can see when heat is holding the processor back. Glance at the menu bar text during a long build or an export; open the menu for the details.

What it can show depends on the chip. On an Intel Mac, Hot reads the CPU temperature, the speed limit the system has imposed because of heat, the scheduler limit and the number of CPUs available. By default the menu bar text turns orange when the speed limit drops below 60 percent.

Apple silicon does not report a speed limit. There, Hot shows the CPU temperature next to the system's thermal pressure, and the text turns orange whenever the pressure is anything other than nominal. On these Macs Hot can also show a graph of all the sensors.

The download is a single Universal app for both kinds of Mac. It needs macOS 10.13 or later and is notarized by Apple. Hot is MIT-licensed, and its latest release, 1.9.4, dates from July 2024.
