---
name: "Mac Cache Cleaner"
summary: "Measures the cache folders of developer tools and browsers and deletes the ones you pick, using a definition list kept on GitHub."
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
verified: "2026-11-08"
icon: "./assets/icon.png"
sources:
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/README.md"
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/Source.json"
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/MacCacheCleaner/Constants.swift"
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/MacCacheCleaner/Extensions/FileManager%2BSize.swift"
  - "https://github.com/kaunteya/MacCacheCleaner/blob/master/MacCacheCleaner/Models/CacheList.swift"
  - "https://chromium.googlesource.com/chromium/src/+/HEAD/docs/user_data_dir.md"
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

Mac Cache Cleaner measures the cache folders of a fixed set of tools and lists the ones that hold anything, largest first, with the space each takes up. You clear an entry and all of its folders go at once.

Those entries come from `Source.json`, a list in the GitHub repository that the app downloads when it runs. Each definition has a name, a description and the folders to measure, and most also link a homepage. The list covers CocoaPods, Carthage, Homebrew, npm, Yarn, Xcode Derived Data, Google Chrome and Mozilla Firefox. The README points to `Source.json` as the place to add definitions for other tools.

The download is a ZIP with an Intel-only (x86_64) app, version 1.2, that declares macOS 10.13 or later. Apple silicon Macs run it through Rosetta 2. It is signed with a Mac Developer certificate and Gatekeeper rejects it, so you have to allow it under Privacy & Security the first time.

Clearing deletes the folders outright. They do not go to the Trash, so there is no undo. The Google Chrome entry includes `~/Library/Application Support/Google/Chrome`, which Chromium's documentation describes as the folder holding Chrome's profile data: history, bookmarks and cookies. The Homebrew entry takes Homebrew's log folder along with its cache.
