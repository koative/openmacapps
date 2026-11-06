---
name: "Binky"
summary: "Sorts files in folders such as Downloads by rules you set, and holds unclear files for review."
category: "Utilities"
tags:
  - files
  - automation
  - organization
  - downloads
repository: "https://github.com/heyderekj/binky"
website: "https://binkyfiles.com"
license: "MIT"
licenseUrl: "https://github.com/heyderekj/binky/blob/main/LICENSE"
download: "https://github.com/heyderekj/binky/releases/download/v1.7.0/Binky-1.7.0.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/heyderekj/binky"
  - "https://github.com/heyderekj/binky/blob/main/LICENSE"
  - "https://github.com/heyderekj/binky/releases"
  - "https://binkyfiles.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/heyderekj/binky/main/AppIcon.icon/Assets/AppIcon%202.png"
    credit: "Testament Made, LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

Binky tidies folders that fill up with files, such as Downloads, Desktop or a screenshots folder. It waits until a file has finished landing, then moves it into folders for images, PDFs, media, documents, archives, apps and screenshots, and sends unknown or ambiguous types to a Review folder. Routines watch named folders with their own rules and optional Finder tags. A Finder Quick Action and Apple Shortcuts can also sort selected files. It suits people who want downloads sorted without manual dragging.

Binky requires macOS 14 or later and is a universal build for Apple silicon and Intel. The release is not notarized, so the first launch needs approval under System Settings, Privacy & Security, or the `xattr` command in the README. Watched folders are only sorted while Binky is running. The README says version 1.x stays free and that version 2.0 will add a one-time license for official builds.
