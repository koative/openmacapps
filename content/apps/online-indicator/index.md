---
name: "Online Indicator"
summary: "Menu bar icon that checks whether the internet actually responds, in place of the Wi-Fi icon."
category: "Utilities"
tags:
  - menu-bar
  - network
  - wi-fi
repository: "https://github.com/bornexplorer/OnlineIndicator"
website: "https://bornexplorer.in/online-indicator"
license: "MIT"
licenseUrl: "https://github.com/bornexplorer/OnlineIndicator/blob/main/LICENSE"
download: "https://github.com/bornexplorer/OnlineIndicator/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/bornexplorer/OnlineIndicator"
  - "https://github.com/bornexplorer/OnlineIndicator/blob/main/LICENSE"
  - "https://github.com/bornexplorer/OnlineIndicator/releases"
  - "https://bornexplorer.in/online-indicator"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/bornexplorer/OnlineIndicator/releases/download/1.4/OnlineIndicator_v1.4_60860ed.dmg"
    credit: "bornexplorer"
    license: "MIT; upstream app icon, trademarks retained"
---

Online Indicator replaces the Wi-Fi icon in the menu bar with a status icon. Instead of showing only that the Mac is joined to a network, it probes the connection and shows whether the internet responds. The probe goes to Apple's captive portal server by default, or to a URL you set. You can pick an icon set, choose what each click does, and set shortcuts for Wi-Fi and network settings. It suits people who want to see at a glance whether a connection is working.

It runs on macOS 14.6 or later, from the app's declared minimum, and on Apple silicon and Intel. The DMG is not notarized, so the first launch has to be allowed in System Settings. The README says the app collects no data and that its only outbound request is the connectivity probe.
