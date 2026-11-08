---
name: "Syncalicious"
summary: "Syncs the preference files of macOS apps between Macs and backs them up to a folder or cloud storage."
category: "Utilities"
tags:
  - sync
  - backup
  - preferences
repository: "https://github.com/zenangst/Syncalicious"
website: "https://github.com/zenangst/Syncalicious"
license: "MIT"
licenseUrl: "https://github.com/zenangst/Syncalicious/blob/master/LICENSE.md"
download: "https://github.com/zenangst/Syncalicious/releases/download/0.0.6/Syncalicious.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-08"
maintenance: unmaintained
maintenanceNote: "No commit since December 2019 (checked 2026-11-06)."
icon: "./assets/icon.png"
sources:
  - "https://github.com/zenangst/Syncalicious/blob/master/README.md"
  - "https://github.com/zenangst/Syncalicious/releases/tag/0.0.6"
  - "https://github.com/zenangst/Syncalicious/releases/tag/0.0.5"
  - "https://github.com/zenangst/Syncalicious"
  - "https://github.com/zenangst/Syncalicious/blob/master/LICENSE.md"
  - "https://github.com/zenangst/Syncalicious/releases"
  - "https://support.apple.com/en-us/102527"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/zenangst/Syncalicious/master/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "Christoffer Winterkvist"
    license: "MIT; upstream app icon, trademarks retained"
---

Syncalicious keeps the settings of your Mac apps matched across several Macs by syncing their preference files. Those settings live in property list (plist) files. When you change an app's setting on one machine, Syncalicious can carry it over to the others.

The second job is backup. Syncalicious copies the same plist files to a folder you choose, or pushes them to iCloud, Dropbox or Google Drive. The README pitches this for a fresh installation of macOS, where setting everything up again can be a chore.

The interface lists your applications and comes in light and dark modes. The last release, 0.0.6 Alpha from December 2019, improved the layout for more than two computers and fixed a syncing bug with several machines. The README still describes the project as early in development.

The ZIP holds an Intel-only (x86_64) app that declares macOS 10.14 or later. Apple silicon Macs run it through Rosetta, which Apple says remains generally available through macOS 27. The app is Developer ID-signed and notarized. Christoffer Winterkvist wrote it in Swift and released it under the MIT license.
