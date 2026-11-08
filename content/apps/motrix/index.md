---
name: Motrix
summary: A graphical download manager for HTTP, FTP, BitTorrent, and magnet links.
category: Internet
tags:
  - downloads
  - bittorrent
  - download-manager
repository: https://github.com/agalwood/Motrix
website: https://motrix.app
license: MIT
licenseUrl: https://github.com/agalwood/Motrix/blob/main/LICENSE
download: https://github.com/agalwood/Motrix/releases
freeDownload: true
homebrew: "motrix"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/agalwood/Motrix", "https://github.com/agalwood/Motrix/blob/main/LICENSE", "https://github.com/agalwood/Motrix/blob/master/README.md", "https://github.com/agalwood/Motrix/releases", "https://github.com/agalwood/Motrix/releases/tag/v2.4.0", "https://motrix.app"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/agalwood/Motrix/blob/main/public/app-icon.png
    credit: Motrix contributors
    license: MIT; project trademarks retained
icon: ./assets/icon.png
---

Motrix downloads files over HTTP, FTP, BitTorrent and magnet links. Each download runs as a task, and the menu bar icon gives quick access to them.

The work is done by the aria2 download engine, and Motrix wraps it in an Electron interface.

- Up to 10 downloads run at the same time, and a single download can use up to 64 connections.
- Torrents let you choose which files to fetch, and the tracker list refreshes every day.
- UPnP and NAT-PMP open ports on your router automatically.
- Speed limits cap transfers, and a custom user agent can stand in for a browser.
- On the Mac the menu bar icon shows the current transfer speed, and the Touch Bar has controls.

A notification arrives when a download finishes. Removing a task can also delete its files if you choose. Dark mode is included, and the interface is translated into several languages.

Motrix 2.4.0 has separate DMG and ZIP builds for Apple silicon and Intel. The Apple silicon build needs macOS 13 or later and is signed with a Developer ID and notarized. Motrix is free under the MIT license.
