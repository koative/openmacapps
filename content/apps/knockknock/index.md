---
name: KnockKnock
summary: Inspect software configured to persist on your Mac.
category: Privacy & security
tags:
  - security
  - persistence
  - inspection
repository: https://github.com/objective-see/KnockKnock
website: https://objective-see.org/products/knockknock.html
license: GPL-3.0
licenseUrl: https://github.com/objective-see/KnockKnock/blob/main/LICENSE
download: https://github.com/objective-see/KnockKnock/releases
freeDownload: true
homebrew: "knockknock"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/objective-see/KnockKnock
  - https://github.com/objective-see/KnockKnock/blob/main/LICENSE
  - https://github.com/objective-see/KnockKnock/releases
  - https://objective-see.org/products/knockknock.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/objective-see/KnockKnock/blob/914f2c0c2d3f058f40b6d98ed303e8a1a6715eb3/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: KnockKnock contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

KnockKnock lists the software set to start on its own on your Mac, at boot, at login or when another app launches. Press Start Scan and it walks the known persistence locations, then sorts what it finds into categories such as launch agents and daemons, login items, browser extensions, cron jobs, shell configuration files and kernel extensions.

Click a category to see its items. Each row shows the path and whether the item is signed by Apple, signed by a third party or unsigned. Apple-signed items are hidden unless you turn them on in settings.

- For executables, KnockKnock looks up a hash of the file on VirusTotal and shows the detection ratio, or a question mark for files VirusTotal has never seen. You can submit unknown files from the same row.
- An info button shows the hash, size, signer and, for items registered through a property list, the plist itself.
- Scans save as JSON, and a compare view marks items added, removed or changed since an earlier scan.
- A command-line mode runs the same scan from Terminal, and with `sudo` it also covers other users' cron jobs.

The list is an inventory. Legitimate third-party software appears in it too, and apart from VirusTotal hits the app does not judge whether an item is malicious. VirusTotal lookups need your own API key, and you can switch them off.

A full scan needs Full Disk Access, which the app asks for on first launch. KnockKnock runs from wherever you unzip it, with nothing to install. It supports macOS 10.15 and later, and the download is a Universal app, notarized by Apple.
