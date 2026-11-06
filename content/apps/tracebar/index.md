---
name: "TraceBar"
summary: "Menu bar traceroute monitor in the style of mtr, with per-hop latency, packet loss and a latency heatmap."
category: "Developer tools"
tags:
  - network
  - menu-bar
  - developer-utilities
repository: "https://github.com/tracebar-app/tracebar"
website: "https://tracebar.app"
license: "MIT"
licenseUrl: "https://github.com/tracebar-app/tracebar/blob/main/LICENSE"
download: "https://github.com/tracebar-app/tracebar/releases/download/1.2.5/TraceBar-1.2.5.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tracebar-app/tracebar"
  - "https://github.com/tracebar-app/tracebar/blob/main/LICENSE"
  - "https://github.com/tracebar-app/tracebar/releases/tag/1.2.5"
  - "https://tracebar.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/tracebar-app/tracebar/main/TraceBar/TraceBar/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "TraceBar contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

TraceBar keeps a continuous traceroute running from the menu bar. It shows latency and loss for each hop, a sparkline in the menu bar, and a scrolling heatmap of earlier runs. Probing speeds up while the panel is open and slows when it is closed. It is for anyone who wants mtr-style path history one click away.

It requires macOS 14.6 or later; building from source needs Xcode 15 or later. The app runs sandboxed and uses unprivileged ICMP sockets, so it needs no root helper. It is also listed on the Mac App Store, which the README links. The upstream materials do not say whether the DMG is notarized.
