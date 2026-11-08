---
name: "gfxCardStatus"
summary: "Shows which GPU a dual-GPU MacBook Pro is using, from the menu bar, and lets you force one."
category: "Utilities"
tags:
  - menu-bar
  - battery
  - display
repository: https://github.com/codykrieger/gfxCardStatus
website: https://gfx.io
license: "BSD-3-Clause"
licenseUrl: https://github.com/codykrieger/gfxCardStatus/blob/master/LICENSE
download: https://github.com/codykrieger/gfxCardStatus/releases
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since December 2020."
homebrew: "gfxcardstatus"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/codykrieger/gfxCardStatus
  - https://github.com/codykrieger/gfxCardStatus/blob/master/LICENSE
  - https://gfx.io
  - https://github.com/codykrieger/gfxCardStatus/releases
  - https://formulae.brew.sh/cask/gfxcardstatus
  - https://github.com/codykrieger/gfxCardStatus/blob/master/README.md
  - https://github.com/codykrieger/gfxCardStatus/releases/tag/v2.5
  - https://github.com/codykrieger/gfxCardStatus/commits/master
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/codykrieger/gfxCardStatus/master/Images/gfxCardStatus.icns
    credit: "Cody Krieger"
    license: "BSD-3-Clause (repository license); upstream project asset"
---

gfxCardStatus tells you which graphics processor a dual-GPU MacBook Pro is using and lets you force one of them. It covers 15-, 16- and 17-inch MacBook Pro models from 2010 onwards that have both an integrated and a discrete GPU.

The menu bar shows an i for the integrated GPU and a d for the discrete one. When the discrete GPU is active, the menu lists the apps that caused the switch, so you can see what is costing battery life. You can also force one GPU. Notification Center can announce each change, and the interface is translated into more than 20 languages.

The last release, 2.5, came out in December 2020. Nobody has committed to the repository since July 2021. Its ZIP holds an Intel-only app, Developer ID-signed and notarized, that needs OS X 10.9 or later. Macs without a second GPU have nothing for it to switch, so it is only useful on those older laptops.
