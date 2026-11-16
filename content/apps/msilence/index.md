---
name: mSILENCE
summary: "Blocks the network connections of chosen apps with a system content filter and lists every outgoing connection live."
category: Privacy & security
tags:
  - firewall
  - network-monitor
  - privacy
  - network-extension
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mSILENCE
website: https://github.com/starbudweiser/mSILENCE
license: MIT
licenseUrl: https://github.com/starbudweiser/mSILENCE/blob/main/LICENSE
download: https://github.com/starbudweiser/mSILENCE/releases
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mSILENCE
  - https://github.com/starbudweiser/mSILENCE/blob/main/LICENSE
  - https://github.com/starbudweiser/mSILENCE/releases
  - https://raw.githubusercontent.com/starbudweiser/mSILENCE/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mSILENCE/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mSILENCE/releases/download/v1.0.0/mSILENCE.zip
    credit: mSILENCE contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The main window listing five blocked applications, with the firewall switched on."
    source: https://github.com/starbudweiser/mSILENCE/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mSILENCE blocks the internet connections of the apps you choose. You drag an app into the list or pick it from your installed apps, and its traffic stops, including the traffic of its helpers and child processes. Connections between devices on your local network stay allowed.

A live monitor lists every outgoing connection grouped by app, and one click blocks an app from there. An existing block list from Radio Silence can be imported. The project is independent and contains none of its code.

Blocking is done by a network content filter that runs as a system extension. It keeps working when the app is closed, with no pop-up and no menu bar icon. Two steps are needed before it works:

- the app has to sit in the Applications folder;
- the filter has to be allowed once in System Settings, under Login Items and Extensions, Network Extensions.

Releases are signed and notarized builds for macOS 14 or later. The interface is in English, French, Spanish and Italian, and updates come from GitHub releases unless you turn them off.
