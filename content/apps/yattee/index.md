---
name: "Yattee"
summary: "A native, privacy-focused video player for YouTube through Invidious, Piped or its own server, plus PeerTube and local files."
category: "Media"
tags:
  - video-player
  - youtube
  - privacy
  - streaming
  - native
repository: https://github.com/yattee/yattee
website: https://docs.yattee.stream
license: "AGPL-3.0"
licenseUrl: https://github.com/yattee/yattee/blob/main/LICENSE
download: https://github.com/yattee/yattee/releases
homebrew: "yattee"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/yattee/yattee
  - https://github.com/yattee/yattee/blob/main/LICENSE
  - https://github.com/yattee/yattee/releases
  - https://docs.yattee.stream/docs/app/getting-started
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/yattee/yattee/main/assets/yattee-icon-512.png
    credit: "Yattee contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Yattee is a SwiftUI video player for iPhone, iPad, Apple TV and Mac that offers an ad-free alternative to the official YouTube app and website. To watch YouTube you add a backend: a public or self-hosted Invidious or Piped instance, or the project's own self-hosted Yattee Server, which uses yt-dlp and also covers many other video sites. It can also browse PeerTube instances and play files from a local folder, an SMB share or a WebDAV server.

The player supports queues and history, Picture in Picture, background audio, SponsorBlock segment skipping, and automation through a URL scheme and Shortcuts.

The app is in transition. The last stable release, 1.5.1 from January 2024, is still on GitHub, while Yattee 2 is being rebuilt and ships as notarized beta builds for macOS 15 or later on the same Releases page and through TestFlight. The project's documentation now points Mac users to the version 2 betas.
