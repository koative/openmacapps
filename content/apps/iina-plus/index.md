---
name: "IINA+"
summary: "A companion to the IINA player for watching Chinese video and live-stream sites, with danmaku comment overlays."
category: "Media"
tags:
  - video
  - streaming
repository: https://github.com/xjbeta/iina-plus
website: https://github.com/xjbeta/iina-plus
license: "GPL-3.0"
licenseUrl: https://github.com/xjbeta/iina-plus/blob/master/LICENSE
download: https://github.com/xjbeta/iina-plus/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/xjbeta/iina-plus
  - https://github.com/xjbeta/iina-plus/blob/master/LICENSE
  - https://github.com/xjbeta/iina-plus/releases/tag/0.8.34
  - https://github.com/xjbeta/iina-plus/blob/master/README.md
  - https://github.com/xjbeta/iina-plus/wiki/1.-%E6%97%A0%E8%84%91%E6%95%99%E7%A8%8B
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/xjbeta/iina-plus/master/IINA%2B/Assets/Assets.xcassets/AppIcon.appiconset/icon_512x512%402xMacLarge_256pt.png
    credit: "xjbeta"
    license: "GPL-3.0 repository asset; trademarks retained"
---

IINA+ takes a link from Bilibili, Douyu, Huya, Douyin and a few other Chinese video and live-streaming sites, works out the stream behind it and plays it in IINA. On sites that support it, danmaku, the viewer comments that scroll across the picture, are drawn over the video.

Support differs by site:

- Bilibili videos and bangumi episodes play with danmaku.
- Bilibili Live, Douyu, Huya and Douyin streams play with danmaku and report whether a room is live.
- cc.163 and live.qq streams play and report live status, without danmaku.

IINA 1.3.2 or later has to be installed. Danmaku come from a plugin that IINA+ installs into IINA from its own settings, after which IINA needs a restart. For live danmaku, IINA+ has to stay open while you watch.

The setup guide is in Chinese. Release 0.8.34 is a Universal app for macOS 13.5 or later. That build has no Developer ID signature, and the guide tells you to allow it under Privacy & Security when macOS reports an unidentified developer.

Bookmarks hold the channels you follow. You add one by right-clicking an empty part of the bookmarks page, and double-clicking a bookmark opens its stream. On sites that report it, each bookmark shows whether the room is on air. Bilibili's feed of followed updates needs you to sign in from the settings.

