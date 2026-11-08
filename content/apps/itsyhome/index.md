---
name: Itsyhome
summary: Puts HomeKit and Home Assistant devices, scenes and groups in a Mac menu bar
  menu.
category: Utilities
tags:
- menu-bar
- smart-home
- homekit
repository: https://github.com/nickustinov/itsyhome-macos
website: https://itsyhome.app
license: MIT
licenseUrl: https://github.com/nickustinov/itsyhome-macos/blob/main/LICENSE
download: https://apps.apple.com/app/itsyhome/id6758070650
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/nickustinov/itsyhome-macos
- https://github.com/nickustinov/itsyhome-macos/blob/main/LICENSE
- https://apps.apple.com/app/itsyhome/id6758070650
- https://itsyhome.app
- https://github.com/nickustinov/itsyhome-macos/blob/main/README.md
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/nickustinov/itsyhome-macos/main/Itsyhome/Resources/Assets.xcassets/AppIcon.appiconset/icon-mac-256%402x.png
  credit: Nick Ustinov
  license: MIT; upstream project asset, trademarks retained
---

Itsyhome turns your smart home into a menu in the menu bar. Rooms, accessories, scenes and your own device groups sit in it, favourites go to the top, and similar devices are folded into groups such as All lights with one switch for the lot.

Each control fits its device. Lights get brightness, colour and colour temperature, thermostats get modes and a target temperature, and blinds get a position slider. Locks, garage doors and security systems lock, open or arm from the menu. Contact, motion, leak, smoke and CO sensors appear as read-only rows with battery levels. Any room, device, scene or group can also be pinned as its own menu bar item with an optional keyboard shortcut.

It talks to Apple HomeKit, including several homes, or to a Home Assistant server over its WebSocket API with a long-lived access token. The developer says HomeKit control stays on the local network and that Home Assistant traffic goes straight to your server with no cloud in between. The Mac app needs macOS 14 or later and comes only from the Mac App Store.

It is free to download and use. A one-time Pro unlock, which also covers the iPhone, iPad and Apple TV versions, adds:

- iCloud sync of favourites, groups and settings between Macs;
- `itsyhome://` deeplinks for Shortcuts, Alfred, Raycast and Stream Deck;
- a live camera grid and doorbell pop-ups;
- a local HTTP server with a CLI and an event stream;
- 30-day sensor history charts.
