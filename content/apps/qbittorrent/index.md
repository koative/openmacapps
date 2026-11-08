---
name: qBittorrent
summary: A BitTorrent client with download queues, bandwidth controls, and
  torrent management.
category: Internet
tags:
  - downloads
  - bittorrent
  - cross-platform
alternativeTo:
  - utorrent
repository: https://github.com/qbittorrent/qBittorrent
website: https://www.qbittorrent.org
license: GPL-2.0-or-later
licenseUrl: https://github.com/qbittorrent/qBittorrent/blob/master/COPYING
download: https://www.qbittorrent.org/download
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/qbittorrent/qBittorrent
  - https://github.com/qbittorrent/qBittorrent/blob/master/COPYING
  - https://www.qbittorrent.org/download
  - https://www.qbittorrent.org/
  - https://raw.githubusercontent.com/qbittorrent/qBittorrent/master/README.md
  - https://www.utorrent.com/
assets:
  - path: ./assets/icon.png
    source: https://github.com/qbittorrent/qBittorrent/blob/master/dist/unix/menuicons/128x128/apps/qbittorrent.png
    credit: qBittorrent contributors
    license: GPL-3.0-or-later; project trademarks retained
icon: ./assets/icon.png
---

qBittorrent downloads files over BitTorrent from torrent files and magnet links, and keeps every transfer in one window where you can queue them and set their order. Pick which files inside a torrent to fetch and set their priority, or tell it to download pieces in order.

- A built-in search engine queries several torrent sites at once, with categories such as books, music or software.
- RSS feeds are supported, with download filters that accept regular expressions.
- Speed limits can follow a bandwidth scheduler, and IP filtering reads eMule and PeerGuardian lists.
- A Web UI gives remote control from a browser and looks much like the desktop window.
- A torrent creation tool makes new torrents from your own files.

DHT, peer exchange, local peer discovery, encrypted connections and UPnP or NAT-PMP port forwarding are supported. Peer countries come from the DB-IP Lite database.

The project describes itself as an open-source alternative to µTorrent, with a µTorrent-like interface. µTorrent now ships three Mac editions, one of which plays media while it downloads. qBittorrent stays a single client with no ads.

The download page says the macOS version is barely supported, because the project has no active macOS developers or contributors. Both Mac DMGs, one per libtorrent series, are on 5.2.3, while Windows and Linux have 5.3.0. Each needs macOS 13 or later, holds a Universal app for Apple silicon and Intel, and is not notarized by Apple. Source code is GPL-2.0-or-later with an OpenSSL exception, and the binaries are GPL-3.0-or-later because they bundle GPLv3 images.
