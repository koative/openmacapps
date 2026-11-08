---
name: Pearcleaner
summary: Lists the support files an app has spread across your Mac so you can remove them together with the app.
category: Utilities
tags:
  - uninstaller
  - cleanup
  - storage
alternativeTo:
  - appcleaner
repository: https://github.com/alienator88/Pearcleaner
website: https://itsalin.com
license: Apache-2.0 WITH Commons-Clause
sourceAvailability: source-available
licenseNotes: Pearcleaner adds Commons Clause to Apache 2.0. Its license
  restricts selling the software, including certain hosting, support, or
  consulting services whose value comes substantially from it. These additional
  terms mean it is source available rather than open source.
licenseUrl: https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md
download: https://github.com/alienator88/Pearcleaner/releases
freeDownload: true
homebrew: "pearcleaner"
icon: ./assets/icon.png
sources:
  - https://itsalin.com
  - https://github.com/alienator88/Pearcleaner
  - https://github.com/alienator88/Pearcleaner/blob/main/LICENSE.md
  - https://github.com/alienator88/Pearcleaner/releases
  - https://raw.githubusercontent.com/alienator88/Pearcleaner/main/README.md
  - https://github.com/alienator88/Pearcleaner/releases/tag/5.4.3
assets:
  - path: ./assets/icon.png
    source: https://github.com/alienator88/Pearcleaner/blob/main/Pear%20Resources/Icons/icon_128x128%402x.png
    credit: alienator88 and Pearcleaner contributors
    license: Apache 2.0 with Commons Clause; trademarks retained
maintenance: "unmaintained"
maintenanceNote: "The developer has put the project on hold, with development mostly stopped since the end of 2025."
featured: false
added: 2026-10-17
verified: "2026-11-08"
---

Pearcleaner finds the preferences, caches and support files an app has spread across your Mac and lists them next to the app, so you can see what goes before anything is deleted. Drop an app on the window, or right-click it in Finder through the included extension, then choose which files go with it.

- An orphaned-file search looks for leftovers from apps you already deleted.
- Sentinel Monitor watches the Trash and cleans up after an app you drag there.
- Homebrew, PKG installs, plugins and services each get their own manager.
- Unneeded architectures can be stripped from Universal apps, and unused translations pruned.
- You can include or exclude folders and adjust how loosely the search matches files.

Searching needs Full Disk Access, and changes in system folders go through a privileged helper. Apps show in a list or a grid, with badges for web and iOS apps, and a command line interface and deep links allow scripting.

AppCleaner, which inspired the project, also lists an app's files before removing them. Pearcleaner builds that same job into a wider set of managers for Homebrew, packages and plugins.

Pearcleaner needs macOS 13 Ventura or later. The release DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and separate Intel and Apple silicon ZIPs are offered. The developer has put the project on hold since the end of 2025, and 5.4.3 is the current release. The only official website is itsalin.com; other sites offering Pearcleaner downloads are not his. The Commons Clause forbids selling the app or modified versions.
