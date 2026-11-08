---
name: Transmission
summary: "BitTorrent client for downloading and seeding torrents, with speed limits, blocklists and a web interface."
category: Internet
tags:
  - bittorrent
  - downloads
  - native
alternativeTo:
  - utorrent
repository: https://github.com/transmission/transmission
website: https://transmissionbt.com
license: GPL-2.0-only OR GPL-3.0-only
licenseUrl: https://github.com/transmission/transmission/blob/main/COPYING
download: https://github.com/transmission/transmission/releases
freeDownload: true
homebrew: "transmission"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/transmission/transmission", "https://github.com/transmission/transmission/blob/main/COPYING", "https://transmissionbt.com", "https://transmissionbt.com/download", "https://raw.githubusercontent.com/transmission/transmission/main/README.md", "https://github.com/transmission/transmission/releases/tag/4.1.4", "https://www.utorrent.com/"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/transmission/transmission/main/macosx/Images/Images.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: Transmission contributors
    license: GPL-2.0-only OR GPL-3.0-only; upstream project asset, trademarks retained
---

Transmission downloads and seeds BitTorrent files. Open a .torrent file and Transmission fetches its pieces from other peers, then keeps sharing them. The defaults work as installed. A few settings turn on the rest:

- speed limits for downloads and uploads
- watch folders that pick up any torrent saved into them
- blocklists of bad peers
- tracker editing
- a web interface for controlling the client remotely

The same project builds GTK and Qt clients for Linux and Windows and a headless daemon for servers and NAS boxes. The `transmission-remote` command controls any of them. Three more tools, `transmission-create`, `transmission-show` and `transmission-edit`, make and change .torrent files. The site states that Transmission bundles no ads or toolbars, keeps no features for a paid version and does not track its users.

The Mac download is a single DMG with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. It requires macOS 12 or later. Version 4.1.4 fixed a security vulnerability in the macOS client, so update any older copy. The code is licensed under GPL version 2 or 3, with an added permission to link OpenSSL.

On the Mac, µTorrent comes as Classic, Web and the newer Neo, each a free download under an EULA. Transmission's source is public, and the same engine runs headless on a server.
