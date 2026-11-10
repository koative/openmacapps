---
name: fOLDERFUSE
summary: "Merges one folder into another the way Windows does, replacing same-name files and keeping the rest."
category: Utilities
tags:
  - files
  - folders
  - merge
  - modding
repository: https://github.com/starbudweiser/fOLDERFUSE
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/fOLDERFUSE/blob/main/LICENSE
download: https://github.com/starbudweiser/fOLDERFUSE/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "Source and destination folders ready to merge."
    source: https://github.com/starbudweiser/fOLDERFUSE/blob/main/docs/screenshots/01_home.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/fOLDERFUSE
  - https://github.com/starbudweiser/fOLDERFUSE/blob/main/LICENSE
  - https://github.com/starbudweiser/fOLDERFUSE/releases
  - https://raw.githubusercontent.com/starbudweiser/fOLDERFUSE/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/fOLDERFUSE/blob/main/docs/screenshots/01_home.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/fOLDERFUSE/releases/download/v2.0.0/fOLDERFUSE_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

fOLDERFUSE merges the content of a source folder into a destination folder. Files with the same name are replaced, everything else in the destination stays, and the source is left untouched.

In the Finder, copying a folder onto one with the same name asks to replace the whole folder, or to keep both. Modders and anyone used to Windows expect a merge, which is what this app does. You pick a source and a destination, and it shows a summary first: how many files will be replaced and their current size.

Before copying, it checks the free space on the destination. On the same volume, files are cloned, so they use no extra space until they change. A progress bar runs during the merge, stalls are detected, and you can stop cleanly at any time.

The app was written for mod files dropped into a game's Data folder, but it works on any pair of folders. It is written in Swift and weighs about 1 MB. Releases are arm64 builds for Apple silicon, macOS 15 or later, signed with a Developer ID and notarized. A daily check offers new releases without installing anything itself. The interface is in English, French, Spanish and Italian.
