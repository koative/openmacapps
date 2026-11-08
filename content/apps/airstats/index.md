---
name: "AirStats"
summary: "A low-overhead menu bar monitor for CPU, memory, GPU, network, disk, battery and temperatures."
category: "Utilities"
tags: ["system-monitoring", "menu-bar", "widgets", "temperature", "system-monitor"]
alternativeTo: ["istat-menus"]
repository: "https://github.com/byrencheema/airstats"
website: "https://airstats.app"
license: "MIT"
licenseUrl: "https://github.com/byrencheema/airstats/blob/main/LICENSE"
download: "https://github.com/byrencheema/airstats/releases"
freeDownload: true
homebrew: "airstats"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/byrencheema/airstats", "https://github.com/byrencheema/airstats/blob/main/LICENSE", "https://github.com/byrencheema/airstats/releases", "https://raw.githubusercontent.com/byrencheema/airstats/main/README.md", "https://airstats.app", "https://github.com/byrencheema/airstats/releases/tag/v1.6", "https://bjango.com/mac/istatmenus/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/byrencheema/airstats/main/Resources/AppIcon.icns", "credit": "Byren Cheema and AirStats contributors", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

AirStats puts live system readings in the menu bar, so you can keep an eye on load, memory and temperatures at a glance. You choose which of its sixteen menu bar metrics to show, from a couple to all of them, and give each its own colour or leave them monochrome.

- Clicking the status item opens a panel showing load for each core, memory pressure, the GPU, network, disk, battery, temperatures and the busiest processes, with the last 24 hours for each.
- A desktop widget keeps the modules you choose on screen all the time.
- Threshold alerts send a notification when a metric crosses a value you set.
- Keyboard shortcuts open the panel or the widget without the mouse.

Staying small is the point of the project. AirStats is a single process with no helper, no launch agent and no Dock icon. It reads the system directly through Mach, IOKit, sysctl and CoreWLAN. Its site publishes a benchmark against Stats and iStat Menus, method included. The developer says nothing leaves the Mac except the optional public IP lookup, which ships disabled.

Bjango's iStat Menus covers the same ground and also reports S.M.A.R.T. disk status and per-app bandwidth, but it is sold as a paid license. AirStats is free, with no account and no paid tier.

AirStats needs macOS 14 or later and, according to its site, runs only on Apple silicon for now. The v1.6 DMG is signed with a Developer ID and notarized. Sparkle checks for updates weekly and installs one only when you agree; both can be turned off in settings.
