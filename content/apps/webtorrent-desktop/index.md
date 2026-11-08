---
name: "WebTorrent Desktop"
summary: "A torrent client that streams video and audio while it downloads, and shares with both BitTorrent and WebTorrent peers."
category: "Internet"
tags:
  - bittorrent
  - streaming
  - video
  - cross-platform
alternativeTo:
  - utorrent
repository: https://github.com/webtorrent/webtorrent-desktop
website: https://webtorrent.io/desktop/
license: "MIT"
licenseUrl: https://github.com/webtorrent/webtorrent-desktop/blob/master/LICENSE
download: https://webtorrent.io/desktop/
freeDownload: true
homebrew: "webtorrent"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/webtorrent/webtorrent-desktop
  - https://github.com/webtorrent/webtorrent-desktop/blob/master/LICENSE
  - https://github.com/webtorrent/webtorrent-desktop/releases
  - https://webtorrent.io/desktop/
  - https://formulae.brew.sh/cask/webtorrent
  - https://raw.githubusercontent.com/webtorrent/webtorrent-desktop/master/README.md
  - https://github.com/webtorrent/webtorrent-desktop/releases/tag/v0.24.0
  - https://www.utorrent.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/webtorrent/webtorrent-desktop/master/static/WebTorrent.icns
    credit: "WebTorrent, LLC"
    license: "MIT repository asset; WebTorrent name and logo retained by WebTorrent, LLC"
---

WebTorrent Desktop plays a torrent while it downloads. Open a magnet link or a .torrent file, or drop one on the window, and video or audio plays right away instead of after the download finishes. Seeking works before the file is complete, because the app changes which pieces it fetches next.

- Peers come from trackers, the DHT and peer exchange.
- The WebTorrent protocol adds WebRTC peers, meaning web pages that share the same torrent.
- Dragging files onto the window creates a new torrent.
- Playback can go to AirPlay, Chromecast and DLNA devices.

The developers say the app sends basic usage statistics, such as how often the play button succeeds, but no personal information and no record of which torrents you add.

The project's own site still calls it beta. The latest release, 0.24.0, dates from August 2020. Its Mac build is an Electron app for Intel processors, signed with a Developer ID and notarized, and it asks for macOS 10.10 or later. It comes from the official website, the GitHub releases page or the webtorrent Homebrew cask.

µTorrent joins the same BitTorrent swarms, and its Web edition also plays files while they download. Where WebTorrent Desktop differs is in reaching browser peers over WebRTC, and its source code is published under the MIT license.
