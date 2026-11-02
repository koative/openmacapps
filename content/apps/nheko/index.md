---
name: "Nheko"
summary: "A native Qt desktop client for the Matrix chat network, with end-to-end encryption, custom stickers and voice and video calls."
category: "Internet"
tags:
  - matrix
  - messaging
  - encrypted-chat
  - chat
  - cross-platform
repository: https://github.com/Nheko-Reborn/nheko
website: https://nheko-reborn.github.io
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/Nheko-Reborn/nheko/blob/master/COPYING
download: https://github.com/Nheko-Reborn/nheko/releases
homebrew: "nheko"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/Nheko-Reborn/nheko
  - https://github.com/Nheko-Reborn/nheko/blob/master/COPYING
  - https://github.com/Nheko-Reborn/nheko/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/Nheko-Reborn/nheko/blob/master/resources/nheko.icns
    credit: "Nheko Contributors"
    license: "GPL-3.0-or-later; upstream project asset, trademarks retained"
---

Nheko is a desktop chat client for Matrix, the open and federated messaging network. It is written in C++ with Qt rather than web technologies, and aims for an interface close to mainstream chat apps: a room list with a quick switcher, replies with inline media, custom stickers and emoji, read receipts, typing notifications and light and dark themes.

It supports end-to-end encrypted rooms and voice and video calls, though call support varies by platform. You need an account on a Matrix homeserver, either your own or a public one such as matrix.org.

Separate macOS disk images are published for Apple silicon and Intel Macs. Releases are infrequent; the most recent one at the time of review is from August 2025.
