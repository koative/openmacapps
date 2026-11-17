---
name: mCLOUD
summary: "Mounts Google Drive, Dropbox, OneDrive, S3, SFTP, WebDAV and other storage as drives in the Finder, without macFUSE."
category: Utilities
tags:
  - cloud-storage
  - rclone
  - webdav
  - finder
  - menu-bar
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mCLOUD
website: https://github.com/starbudweiser/mCLOUD
license: MIT
licenseUrl: https://github.com/starbudweiser/mCLOUD/blob/main/LICENSE
download: "https://github.com/starbudweiser/mCLOUD/releases/latest"
macos: "14"
arch: both
notarized: true
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mCLOUD
  - https://github.com/starbudweiser/mCLOUD/blob/main/LICENSE
  - https://github.com/starbudweiser/mCLOUD/releases
  - https://raw.githubusercontent.com/starbudweiser/mCLOUD/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mCLOUD/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mCLOUD/releases/download/v1.0.6/mCLOUD-1.0.6-macOS.zip
    credit: mCLOUD contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The main window listing four example cloud accounts (Google Drive, Amazon S3, Nextcloud, SFTP) ready to mount."
    source: https://github.com/starbudweiser/mCLOUD/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mCLOUD mounts your cloud accounts as drives in the Finder, from an icon in the menu bar. Supported services include Google Drive, Dropbox, OneDrive, iCloud Drive, Box, pCloud, kDrive, MEGA, Nextcloud and Backblaze B2, along with S3, Wasabi, SFTP, FTP and WebDAV servers.

No kernel extension and no macFUSE are involved. The app runs a local WebDAV server powered by rclone and asks macOS to mount it, so each account appears like a network share.

Per account, you decide how it behaves:

- client-side encryption of the files you store;
- mounting at login;
- an offline cache, which is off by default to keep local storage low.

Drives reconnect on their own after sleep or a network change. An account list can be imported from CloudMounter, after which each account has to be authorized again, because its tokens are not read. The project is independent and not affiliated with the services it connects to.

Releases are universal builds for Apple silicon and Intel Macs running macOS 14 or later, signed and notarized. The interface is in English, French, Spanish and Italian, and the app checks GitHub for updates every day.
