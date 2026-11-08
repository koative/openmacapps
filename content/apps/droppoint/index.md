---
name: DropPoint
summary: Uses a temporary shelf to move files between windows and desktops.
category: Utilities
tags:
  - drag-and-drop
  - files
  - desktop
repository: https://github.com/GameGodS3/DropPoint
website: https://droppoint.netlify.app/
license: GPL-3.0
licenseUrl: https://github.com/GameGodS3/DropPoint/blob/main/LICENSE
download: https://github.com/GameGodS3/DropPoint/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: 2026-11-08
sources:
  - https://github.com/GameGodS3/DropPoint
  - https://github.com/GameGodS3/DropPoint/blob/main/LICENSE
  - https://github.com/GameGodS3/DropPoint/blob/main/README.md
  - https://github.com/GameGodS3/DropPoint/releases
  - https://github.com/GameGodS3/DropPoint/releases/tag/v1.2.1
  - https://github.com/GameGodS3/DropPoint/commits/main
  - https://droppoint.netlify.app/
assets:
  - path: ./assets/icon.png
    source: https://github.com/GameGodS3/DropPoint/blob/137789de41104f969ee5c521558c8ee366156a82/static/media/droppoint.icns
    credit: DropPoint contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

DropPoint gives you a small window to park files during a drag. Dragging between two apps normally means arranging their windows side by side; with DropPoint you drop the files or a folder onto its window, go to the place they belong, and drag them out again. The README demonstrates this between maximized windows on one desktop and between windows on different virtual desktops.

Closing the window does not quit the app. DropPoint keeps running as a tray icon, where clicking opens a new window and right-clicking offers Quit. While it runs there, Shift-Tab on a Mac opens a fresh DropPoint window under the mouse pointer, so you can start a drag from wherever you are.

The project names the Mac app Dropover as its inspiration. DropPoint itself is built with Electron and released for Windows and Linux as well as macOS.

The newest published release is 1.2.1 from September 2022. It offers separate disk images for Intel and Apple silicon plus a zip. In the Apple silicon disk image, the app is signed only with a development certificate, not a Developer ID, and Gatekeeper rejects it, so the README tells you to allow it through Open Anyway in the Security settings. Work on the code continued in August 2026 with an Electron upgrade, and the README now gives macOS 12 as the minimum for releases from 1.3 onward, but no 1.3 release had been published as of November 2026.
