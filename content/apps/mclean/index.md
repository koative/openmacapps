---
name: mCLEAN
summary: "Shows Mac memory use in the menu bar and frees file cache in one click, stopping at the first sign of memory pressure."
category: Utilities
tags:
  - menu-bar
  - memory
  - monitoring
  - maintenance
repository: https://github.com/starbudweiser/mCLEAN
website: https://github.com/starbudweiser/mCLEAN
license: MIT
licenseUrl: https://github.com/starbudweiser/mCLEAN/blob/main/LICENSE
download: https://github.com/starbudweiser/mCLEAN/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/mCLEAN
  - https://github.com/starbudweiser/mCLEAN/blob/main/LICENSE
  - https://github.com/starbudweiser/mCLEAN/releases
  - https://raw.githubusercontent.com/starbudweiser/mCLEAN/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mCLEAN/releases/download/v1.3.1/mCLEAN-1.3.1.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

mCLEAN puts a ring in the menu bar with the share of memory in use, turning orange or red under memory pressure. Click it for a panel with app memory, wired, compressed, file cache and free memory, plus swap, a short history and the apps using the most.

Clean frees the file cache. The app asks the kernel for memory in 0.5 GB steps, which pushes cached files out of RAM, then gives it all back. Each step rereads the system state and stops on pressure, swap growth, compression growth, a 2 GB reserve or a time limit. It needs no password.

Deep clean also runs `purge`, which asks for your administrator password, and reclaims part of the app memory. An automatic clean can run when available memory falls below a threshold, with a minimum delay between runs. It never runs under high pressure, which macOS handles on its own.

The panel also lists apps you have not used for a while, with a Quit button. The app is modeled on AppYogi's Memory Cleaner and not affiliated with it. Releases are arm64 builds for macOS 14 or later, notarized, with daily update checks and four languages.
