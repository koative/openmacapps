---
name: Netiquette
summary: "Lists every network connection and listening socket on the Mac under the process that opened it."
category: Privacy & security
tags:
  - network
  - connections
  - inspection
repository: https://github.com/objective-see/Netiquette
website: https://github.com/objective-see/Netiquette
license: GPL-3.0
licenseUrl: https://github.com/objective-see/Netiquette/blob/master/LICENSE.md
download: https://github.com/objective-see/Netiquette/releases
freeDownload: true
homebrew: "netiquette"
featured: false
added: 2026-10-17
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release since October 2024."
sources: ["https://github.com/objective-see/Netiquette", "https://github.com/objective-see/Netiquette/blob/master/LICENSE.md", "https://github.com/objective-see/Netiquette/blob/master/README.md", "https://github.com/objective-see/Netiquette/releases", "https://github.com/objective-see/Netiquette/releases/tag/v2.3.0", "https://objective-see.org/products/netiquette.html"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/Netiquette/blob/cea0761b0f9121aa1544d6558ea71bd31a06ab11/Netiquette/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Netiquette contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Netiquette lists every network connection and open socket on the Mac, grouped under the process that owns it. Open the app and each process expands to show local and remote addresses and ports, protocol, interface, connection state and bytes sent and received.

By default the window refreshes itself every few seconds and hides Apple's own processes; both can be changed in settings. Type into the filter box to narrow the list by process name, path or PID, or by an address, port, interface or state; typing "Listen" leaves only the sockets waiting for incoming connections. The Save button writes what you see to a JSON file.

Netiquette needs macOS 10.15 or later. Version 2.3.0 comes as a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

The same binary inside the app bundle also works from Terminal. Run it with -list to print every connection as JSON, add -names to resolve remote host names, -pretty to indent the output, or -skipApple to drop Apple processes. Nothing needs installing, and deleting the app removes it.
