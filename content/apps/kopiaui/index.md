---
name: "KopiaUI"
summary: "The desktop app for Kopia, an encrypted, deduplicating backup tool that saves snapshots to cloud, network or local storage."
category: "Utilities"
tags:
  - backup
  - encryption
  - cloud-storage
  - s3
  - sftp
  - cross-platform
repository: https://github.com/kopia/kopia
website: https://kopia.io
license: "Apache-2.0"
licenseUrl: https://github.com/kopia/kopia/blob/master/LICENSE
download: https://kopia.io/docs/installation/
homebrew: "kopiaui"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/kopia/kopia
  - https://github.com/kopia/kopia/blob/master/LICENSE
  - https://kopia.io/docs/installation/
  - https://github.com/kopia/kopia/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/kopia/kopia/master/app/assets/icon.icns
    credit: "Kopia authors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Kopia backs up chosen files and folders as snapshots rather than imaging the whole disk. Data is split into chunks, deduplicated, compressed and encrypted on your Mac before it leaves, so the storage provider only sees encrypted blobs. Repositories can live on Amazon S3 or compatible services, Azure, Backblaze B2, Google Cloud Storage, WebDAV or SFTP servers, a local or network drive, or a Kopia repository server, and several machines can share one repository.

KopiaUI is the graphical app: it creates or connects to repositories, sets snapshot policies and schedules, and browses or restores earlier snapshots. You provide and pay for the storage yourself. The macOS build comes as a DMG or ZIP for Apple silicon and Intel, and the `kopia` command-line tool is available separately for scripting.
