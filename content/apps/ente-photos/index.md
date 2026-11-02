---
name: "Ente Photos"
summary: "Desktop app for Ente's end-to-end encrypted photo backup, with watch folders, continuous export and on-device search."
category: "Media"
tags:
  - photography
  - backup
  - cloud-storage
  - encryption
  - self-hosted
  - cross-platform
repository: https://github.com/ente/ente/tree/main/desktop
website: https://ente.com
license: "AGPL-3.0"
licenseUrl: https://github.com/ente/ente/blob/main/LICENSE
download: https://ente.com/download
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/ente/ente
  - https://github.com/ente/ente/blob/main/LICENSE
  - https://ente.com/download
  - https://github.com/ente/photos-desktop/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ente/ente/main/desktop/build/icon.icns
    credit: "Ente Technologies, Inc."
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Ente Photos is the desktop app for Ente, a photo and video backup service with end-to-end encryption. Files are encrypted on your Mac before they are uploaded, and the app lets you browse the library by album and date, with face grouping and natural-language search that run on the device.

The desktop app adds two features the web version lacks. Watch folders upload new files from chosen folders into albums in the background, and continuous export keeps a local copy of your library up to date. Both need the app to be running.

Using it requires an Ente account. Ente includes 10 GB of storage for free and sells larger paid plans; the server is open source as well and can be self-hosted instead. The macOS download is a universal build for Apple silicon and Intel that installs its own updates, and Homebrew lists macOS 13 as the minimum. The source lives in Ente's main repository, while installers are published from a separate releases repository.
