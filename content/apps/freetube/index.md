---
name: "FreeTube"
summary: "Plays YouTube videos without ads or a Google account, and keeps your subscriptions and history on the Mac."
category: "Media"
tags: ["video", "subscriptions", "privacy"]
repository: "https://github.com/FreeTubeApp/FreeTube"
website: "https://freetubeapp.io/"
license: "AGPL-3.0-or-later"
licenseUrl: "https://github.com/FreeTubeApp/FreeTube/blob/development/LICENSE"
download: "https://github.com/FreeTubeApp/FreeTube/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/FreeTubeApp/FreeTube", "https://github.com/FreeTubeApp/FreeTube/blob/development/LICENSE", "https://github.com/FreeTubeApp/FreeTube/blob/development/README.md", "https://github.com/FreeTubeApp/FreeTube/releases", "https://freetubeapp.io/", "https://github.com/FreeTubeApp/FreeTube/releases/tag/v0.26.0-beta"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/FreeTubeApp/FreeTube/blob/development/_icons/icon.svg", "credit": "FreeTube contributors", "license": "AGPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

FreeTube plays YouTube videos in a desktop window without a Google account. You subscribe to channels inside the app, and subscriptions, playlists and watch history are stored on your Mac. Data comes from FreeTube's own extractor or, if you prefer, from the Invidious API, and no official YouTube API is used.

- Videos play without ads, and YouTube's cookies and JavaScript cannot follow you.
- Profiles split your subscriptions into smaller, focused feeds.
- SponsorBlock, DeArrow, chapters, a mini player and keyboard shortcuts are built in.
- Subscriptions import from YouTube and export again.
- Videos can open in an external player, and the LibRedirect browser extension sends YouTube links straight to FreeTube.

YouTube still sees which videos you request. The project strongly recommends a VPN or Tor to hide your IP address, and FreeTube can route traffic through a proxy such as Tor. The developers say your data is never sent out.

FreeTube is still labelled beta, and version 0.26.0 came out in November 2026. That release moved to Electron 44 and dropped macOS 12, so it needs macOS 13 or later. Apple silicon and Intel each get their own DMG, ZIP and 7z downloads.
