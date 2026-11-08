---
name: "DevCleaner"
summary: "Frees disk space taken up by Xcode device support files, archives, derived data, documentation caches and old logs."
category: "Developer tools"
tags:
  - cleanup
  - storage
  - disk-usage
  - developer-utilities
  - disk-cleaner
repository: https://github.com/vashpan/xcode-dev-cleaner
website: https://github.com/vashpan/xcode-dev-cleaner
license: "GPL-3.0"
licenseUrl: https://github.com/vashpan/xcode-dev-cleaner/blob/master/LICENSE
download: https://github.com/vashpan/xcode-dev-cleaner/releases
freeDownload: true
homebrew: "devcleaner"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/vashpan/xcode-dev-cleaner
  - https://github.com/vashpan/xcode-dev-cleaner/blob/master/LICENSE
  - https://github.com/vashpan/xcode-dev-cleaner/releases
  - https://apps.apple.com/app/devcleaner/id1388020431
  - https://raw.githubusercontent.com/vashpan/xcode-dev-cleaner/master/README.md
  - https://github.com/vashpan/xcode-dev-cleaner/releases/tag/2.8.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/vashpan/xcode-dev-cleaner/master/DevCleaner/Resources/Assets.xcassets/DevCleanerIcon.imageset/DevCleaner%20Icon%20-%20Tahoe-macOS-Default-256x256%402x.png
    credit: "vashpan and DevCleaner contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

DevCleaner scans the folders where Xcode piles up generated data, lets you inspect what it finds, and deletes the items you select. Left alone, these caches can grow to tens of gigabytes. The app can also remind you to scan again after some time.

- Device support symbols, downloaded each time you connect a device running a new iOS, watchOS, tvOS or visionOS version, at about 2 to 5 GB a version. These are selected by default, apart from the newest version of each system.
- Archives, so you can keep the builds you still need for symbolicating crashes and drop older ones.
- Derived data, the autocompletion data, logs and intermediate builds Xcode can regenerate, including folders for projects you no longer open.
- Cached web documentation and old offline documentation downloads.
- Old simulator and device logs.

Version 2.8.0 on GitHub is a ZIP holding a Universal app for Apple silicon and Intel. It needs macOS 14 or later and is Developer ID-signed and notarized. The same app is on the Mac App Store, and the developer accepts optional tips inside it. The code is GPL-3.0, and only the copyright holder may publish it to the App Store.

The README lists testing with macOS 14 and Xcode 15. DevCleaner depends on Xcode's internal folder layout and undocumented behavior, so a new Xcode release can break it. The developer recommends a backup before you clean.
