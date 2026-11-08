---
name: ReiKey
summary: "Scans for keyboard event taps, the hook most Mac keyloggers use, and alerts you when a new one appears."
category: Privacy & security
tags:
  - security
  - keyboard
  - inspection
repository: https://github.com/objective-see/ReiKey
website: https://objective-see.org/products/reikey.html
license: GPL-3.0
licenseUrl: https://github.com/objective-see/ReiKey/blob/master/LICENSE.md
download: https://objective-see.org/products/reikey.html
freeDownload: true
homebrew: "reikey"
featured: false
added: 2026-10-17
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since November 2020."
sources: ["https://github.com/objective-see/ReiKey", "https://github.com/objective-see/ReiKey/blob/master/LICENSE.md", "https://github.com/objective-see/ReiKey/blob/master/README.md", "https://objective-see.org/products/reikey.html", "https://objective-see.org/products/changelogs/ReiKey.txt", "https://github.com/objective-see/ReiKey/commits/master"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/ReiKey/blob/83ceb8fca9e08dbc4e92a43ddf6ecd39c36bb37f/mainApp/mainApp/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: ReiKey contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

ReiKey finds the programs on your Mac that have installed keyboard event taps, the CoreGraphics hook most Mac keyloggers use to read keystrokes. Run a scan from the app or its menu bar menu, and a window lists each tap with the process that installed it, its target (usually all processes) and whether it only listens or can also filter keys.

After the scan, ReiKey keeps watching. Whenever a new keyboard tap appears it posts a notification, and its Details button opens the scan window with that tap highlighted. Command-click an entry to toggle alerts for that process or reveal it in Finder.

The installer sets up the app and asks how it should start and whether to show a menu bar icon. From Terminal, the binary inside the bundle takes -scan to print every keyboard tap as JSON. ReiKey checks objective-see.com for updates at launch, which you can switch off, and uses Sentry for crash detection, which may add crash-report traffic.

The download page lists OS X 10.13 or later. The 1.4.2 installer is a Universal app, Developer ID-signed and notarized.

Many taps are harmless. Siri and other parts of macOS install them, and other applications can too, so an entry is a lead to check and does not prove a keylogger. An option hides Apple programs. Keyloggers that capture keys without an event tap go unseen.
