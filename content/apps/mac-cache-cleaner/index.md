---
name: "Mac Cache Cleaner"
summary: "Finds macOS cache folders and removes them; cache definitions live in an editable Source.json file."
category: "Utilities"
tags:
  - cleanup
  - disk-cleaner
  - storage
repository: "https://github.com/kaunteya/MacCacheCleaner"
website: "https://github.com/kaunteya/MacCacheCleaner"
license: "MIT"
licenseUrl: "https://github.com/kaunteya/MacCacheCleaner/blob/master/LICENSE"
download: "https://github.com/kaunteya/MacCacheCleaner/releases/latest/download/Mac.Cache.Cleaner.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kaunteya/MacCacheCleaner"
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/LICENSE"
  - "https://github.com/kaunteya/MacCacheCleaner/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/kaunteya/MacCacheCleaner/releases/latest/download/Mac.Cache.Cleaner.zip"
    credit: "Kaunteya Suryawanshi"
    license: "MIT; upstream app icon, trademarks retained"
maintenance: unmaintained
maintenanceNote: "No release since July 2019 and no commit since April 2020, checked 2026-11-06."
---

Mac Cache Cleaner finds the cache folders that macOS apps create and removes the ones it knows about. The cache locations are listed in `Source.json`, which you can edit to add your own. It suits people who want to free disk space from application caches without a full cleaner suite.

The zip contains an Intel (x86_64) build that declares macOS 10.13 or later. The app is signed with a developer certificate but is not notarized, so macOS must be allowed to open it in System Settings the first time. The project has not been updated since 2020.
