---
name: "Peel"
summary: "An uninstaller that removes apps with their leftover files, explains why each file matched, and adds cleanup tools."
category: "Utilities"
tags:
  - uninstaller
  - cleanup
  - storage
  - disk-cleaner
  - maintenance
alternativeTo:
  - appcleaner
  - cleanmymac
repository: https://github.com/TuguiDragos/Peel
website: https://peel.tuguidragos.com
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/TuguiDragos/Peel/blob/main/LICENSE
download: https://github.com/TuguiDragos/Peel/releases
homebrew: "peel"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/TuguiDragos/Peel
  - https://github.com/TuguiDragos/Peel/blob/main/LICENSE
  - https://github.com/TuguiDragos/Peel/releases
  - https://github.com/TuguiDragos/Peel/blob/main/GUIDE.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/TuguiDragos/Peel/blob/main/Logo/Peel.png
    credit: "Țugui Dragoș"
    license: "GPL-3.0-or-later; upstream project asset, trademarks retained"
---

Peel removes an app together with the caches, preferences, containers, launch agents and support files it spread across the Library, and shows for each file why it was matched and how confident the match is. Selected items go to the Trash, and a history view can put them back. It also finds what already-deleted apps left behind.

Beyond uninstalling, it looks for developer caches, build folders, duplicates, old installers and other space users, lists background items, extensions and apps that still need Rosetta, and offers switches for hidden macOS settings plus a Terminal theme and prompt setup. A `peel` command exposes most tools from the shell. Peel requires macOS 26 or later, and its releases are signed and notarized.
