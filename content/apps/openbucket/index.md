---
name: OpenBucket
summary: Browse, preview, share and manage files in Amazon S3 and S3-compatible storage from a native Mac app.
category: Internet
tags:
  - cloud
  - file-transfer
  - s3
  - native
repository: https://github.com/koative/openbucket
website: https://openbucket.koative.com
license: MIT
licenseUrl: https://github.com/koative/openbucket/blob/main/LICENSE
download: https://github.com/koative/openbucket/releases/latest
freeDownload: true
homebrew: "koative/tap/openbucket"
featured: false
added: '2026-10-18'
verified: '2026-10-28'
icon: ./assets/icon.png
screenshots:
  - src: ./assets/grid.webp
    alt: Grid view of a demo campaign folder with photo and video thumbnails and the Info panel for a selected photo.
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-grid.png
    credit: Koative
  - src: ./assets/list.webp
    alt: List view of the same folder with name, size, modified and kind columns, a selected photo and the Info panel.
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-list.png
    credit: Koative
  - src: ./assets/storage-overview.webp
    alt: Storage Overview of a demo bucket with a treemap of its folders by size, its storage classes and largest files.
    source: https://github.com/koative/openbucket/blob/main/docs/media/storage-overview.png
    credit: Koative
sources:
  - https://github.com/koative/openbucket
  - https://github.com/koative/openbucket/blob/main/LICENSE
  - https://github.com/koative/openbucket/releases
  - https://github.com/koative/openbucket/blob/main/docs/compatibility.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/koative/openbucket/blob/main/App/Resources/Assets.xcassets/AppIcon.appiconset/icon-1024.png
    credit: Koative
    license: MIT; the full-bleed app icon shown in the macOS rounded-square shape, trademarks retained
  - path: ./assets/grid.webp
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-grid.png
    credit: Koative
    license: MIT; real app window with fictional demo content
  - path: ./assets/list.webp
    source: https://github.com/koative/openbucket/blob/main/docs/media/browser-list.png
    credit: Koative
    license: MIT; real app window with fictional demo content
  - path: ./assets/storage-overview.webp
    source: https://github.com/koative/openbucket/blob/main/docs/media/storage-overview.png
    credit: Koative
    license: MIT; real app window with fictional demo content
---

OpenBucket opens S3 buckets like folders on your Mac: grid and list views, thumbnails, Quick Look, an Info panel with headers, tags and photo details, version history, presigned share links with a QR code, and parallel downloads and uploads. A Storage Overview maps a folder by size and kind, and Compare with Local Folder checks a local copy and can update either side without deleting anything.

Every connection is read-only until you turn on Allow changes for it, and keys you enter are kept in the macOS Keychain. It works with custom endpoints, path-style addressing, AWS CLI profiles and buckets your key can't list. It is an early release that needs macOS 26 or later; the project's compatibility notes record live tests against Amazon S3, MinIO, RustFS, SeaweedFS, Garage and S3Mock. It is published by Koative, the team behind this catalog.
