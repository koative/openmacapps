---
name: "Harbor"
summary: "A macOS download manager for direct links, media URLs, magnet links and torrent files, with queues and speed limits."
category: "Internet"
tags:
  - download-manager
  - downloads
  - bittorrent
repository: "https://github.com/thsnkhn/harbor"
website: "https://thsnkhn.github.io/harbor/"
license: "GPL-3.0"
licenseUrl: "https://github.com/thsnkhn/harbor/blob/main/LICENSE"
download: "https://github.com/thsnkhn/harbor/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/thsnkhn/harbor"
  - "https://github.com/thsnkhn/harbor/blob/main/LICENSE"
  - "https://github.com/thsnkhn/harbor/releases"
  - "https://github.com/thsnkhn/harbor/blob/main/README.md"
  - "https://thsnkhn.github.io/harbor/"
  - "https://github.com/thsnkhn/harbor/blob/main/docs/cli.md"
  - "https://github.com/thsnkhn/harbor/releases/tag/v1.9.1"
  - "https://github.com/thsnkhn/harbor/releases/tag/v1.9.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/thsnkhn/harbor/main/Harbor/Assets.xcassets/AppIcon.appiconset/icon-256x256.png"
    credit: "thsnkhn"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Harbor takes a link and downloads what is behind it, whether that is an ordinary file, a public video or audio page, a magnet link or a `.torrent` file. Everything lands in one queue where each item can be paused, resumed or retried, and the list is still there after a restart.

- Media links go through yt-dlp, so YouTube, Instagram, TikTok, Pinterest and other pages it supports can be saved as video or audio.
- Before a torrent starts, you can preview its contents and tick only the files you want.
- A watch folder adds any torrent file you drop into it.
- Traffic modes called Unlimited, Balanced and Quiet, plus a custom one, set speed limits for the whole app, and a single download can override them.
- Tags group downloads, and the list can be filtered and searched by tag.

Advanced settings cover request headers, connection counts, seeding rules, proxies, trackers and an IP blocklist. Torrent traffic can be bound to one network interface, and Harbor can keep the Mac awake while transfers run.

Harbor needs macOS 15.6 or later and asks for no account or subscription. Apple silicon and Intel Macs get separate disk images, and the Apple silicon build is signed with a Developer ID and notarized. A Homebrew tap is the other way to install it.

A command-line tool, installed from Settings > General, controls the running app: it adds links, waits for downloads, changes limits and selects torrent files. It does nothing until you turn on Allow CLI access in the same pane. Harbor can also install a skill that lets coding agents such as Codex and Cursor use that command. Browser extensions for Chrome and Firefox exist, but they come from another developer and need a local helper.
