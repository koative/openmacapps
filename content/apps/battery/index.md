---
name: "Battery"
summary: "A menu bar charge limiter that holds an Apple silicon MacBook's battery at 80% while it stays plugged in."
category: "Utilities"
tags:
  - battery
  - power
  - menu-bar
repository: https://github.com/actuallymentor/battery
website: https://github.com/actuallymentor/battery
license: "MIT"
licenseUrl: https://github.com/actuallymentor/battery/blob/main/LICENSE
download: https://github.com/actuallymentor/battery/releases
homebrew: "battery"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/actuallymentor/battery
  - https://github.com/actuallymentor/battery/blob/main/LICENSE
  - https://github.com/actuallymentor/battery/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/actuallymentor/battery/main/app/build/icon.png
    credit: "Mentor Palokaj and Battery contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Battery keeps a MacBook that lives on its charger from sitting at 100%. The menu bar app stops charging above 80% and resumes below it, and if the battery is already fuller it runs from the battery, even with the adapter connected, until the level drops back to 80%. The limit stays in place after a reboot and after you quit the tray app.

It only works on Apple silicon Macs. On first launch it asks for an administrator password and installs a `battery` command and the `smc` tool in `/usr/local/bin`, plus a sudoers rule in `/etc/sudoers.d/battery` so it can switch charging without asking again. The app always uses 80%; a different limit can only be set with the `battery` command-line tool, which also reports status and can charge or discharge to a chosen level.
