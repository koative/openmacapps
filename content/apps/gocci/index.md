---
name: "Gocci"
summary: "Menu bar app that shows Google Drive in Finder through File Provider, with downloads kept on a disk you choose."
category: "Internet"
tags:
  - cloud-storage
  - finder
  - menu-bar
  - files
repository: "https://github.com/piro0919/gocci"
website: "https://gocci.kkweb.io/"
license: "MIT"
licenseUrl: "https://github.com/piro0919/gocci/blob/main/LICENSE"
download: "https://github.com/piro0919/gocci/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/piro0919/gocci"
  - "https://github.com/piro0919/gocci/blob/main/LICENSE"
  - "https://github.com/piro0919/gocci/releases"
  - "https://gocci.kkweb.io/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/piro0919/gocci/releases/download/v1.1.5/Gocci-1.1.5.dmg
    credit: Gocci contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Gocci adds one Google Drive account to Finder, the way iCloud Drive appears there, through Apple's File Provider mechanism. It does not mount a disk or install anything into the kernel. Opening a folder downloads nothing, and you choose the disk where downloaded files are kept, including an external drive. It suits people whose startup disk is too small for their Drive. It uses rclone to talk to Google Drive.

It requires Apple silicon and macOS 14 or later; keeping downloads on an external disk needs macOS 15. Builds are ad-hoc signed rather than notarized, so the first launch needs approval in System Settings > Privacy & Security. You must create your own Google Cloud client ID, because rclone's shared ID is being retired during 2026. You then sign in through your browser.
