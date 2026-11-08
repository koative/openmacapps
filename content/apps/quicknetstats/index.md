---
name: "QuickNetStats"
summary: "Shows your connection type, link quality and IP addresses in the menu bar, and updates as soon as the connection changes."
category: "Utilities"
tags:
  - menu-bar
  - network
  - monitoring
repository: https://github.com/FI-153/QuickNetStats
website: https://github.com/FI-153/QuickNetStats
license: "MIT"
licenseUrl: https://github.com/FI-153/QuickNetStats/blob/main/LICENSE
download: https://github.com/FI-153/QuickNetStats/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/FI-153/QuickNetStats
  - https://github.com/FI-153/QuickNetStats/blob/main/LICENSE
  - https://github.com/FI-153/QuickNetStats/releases
  - https://github.com/FI-153/homebrew-tap
  - https://raw.githubusercontent.com/FI-153/QuickNetStats/main/readme.md
  - https://github.com/FI-153/QuickNetStats/releases/tag/V.3.0.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/FI-153/QuickNetStats/main/Assets/icon.png
    credit: "Federico Imberti"
    license: "MIT repository asset; QuickNetStats name and logo retained by the developer"
---

QuickNetStats puts the state of your network in the menu bar: whether you are on Wi-Fi, Ethernet or a hotspot, a rough quality rating, and your IPv4 addresses. It changes the moment the Mac connects or drops off, which macOS itself is slow to show. Click either address in the popover to copy it.

The quality reading is Good, Moderate or Minimal, worked out without a speed test. The developer says it is a rough estimate, quick to get and less accurate than a real test. It needs macOS 26, while the rest of the app runs on macOS 13 or later.

Version 3 adds a Connection Details section under the addresses. It lists the interface, MAC address, MTU and link speed, routers and subnet, DNS servers and DHCP lease, any active proxies, and Wi-Fi channel, band and security. Every row copies on click. A Live button streams throughput, packets, errors and Wi-Fi signal figures in real time.

Showing the network name and BSSID is opt-in, because macOS ties those to the Location Services permission. In Low Data Mode or on a capped connection such as a phone hotspot, the main view says so. Public IP addresses come from the ipify service.

Hold Command and drag the icon to move it along the menu bar. Settings cover the look, behavior and what the menu bar item shows. Homebrew installs it from the developer's own tap, and the direct download is a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
