---
name: 'PeekX'
summary: 'A Quick Look extension that previews what is inside a folder, with file counts, sizes and type breakdowns.'
category: 'Utilities'
tags:
  - quick-look
  - previews
  - finder
  - files
repository: https://github.com/altic-dev/PeekX
website: https://github.com/altic-dev/PeekX
license: 'MIT'
licenseUrl: https://github.com/altic-dev/PeekX/blob/main/LICENSE
download: https://github.com/altic-dev/PeekX/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/altic-dev/PeekX
  - https://github.com/altic-dev/PeekX/blob/main/LICENSE
  - https://github.com/altic-dev/PeekX/releases
  - https://raw.githubusercontent.com/altic-dev/PeekX/main/README.md
  - https://github.com/altic-dev/PeekX/releases/tag/v1.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/altic-dev/PeekX/main/PeekX/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png
    credit: 'ALTIC (altic-dev)'
    license: 'MIT repository asset; project name and icon retained by the author'
---

Pick a folder in Finder, press Space, and PeekX fills the Quick Look window with a report on what the folder holds. You see what is inside without opening it.

The preview shows:

- the total number of files and subfolders
- the folder's total size
- a breakdown of the contents by file type
- the largest files, and a view of the folder structure

Version 1.1 added Markdown: pressing Space on a `.md` file renders it in Quick Look as well.

The release comes as a DMG or a ZIP. The app in the DMG is a Universal build for Apple silicon and Intel, Developer ID-signed and notarized, and it needs macOS 14 Sonoma or later. Move it to Applications and open it once; it registers the extension and quits. If the preview does not appear, the README's fix is to reset the Quick Look cache with `qlmanage -r cache` and relaunch Finder. Deleting PeekX.app removes it again.

The extension runs in the macOS sandbox. The developer says it makes no network connections and collects nothing.
