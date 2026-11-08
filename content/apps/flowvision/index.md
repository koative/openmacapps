---
name: FlowVision
summary: Browses folders of images and videos in a waterfall-style grid, with mouse
  gestures for moving between folders.
category: Media
tags:
- images
- photography
- gestures
- files
repository: https://github.com/netdcy/FlowVision
website: https://flowvision.app
license: GPL-3.0
licenseUrl: https://github.com/netdcy/FlowVision/blob/main/LICENSE
download: https://github.com/netdcy/FlowVision/releases
freeDownload: true
homebrew: "flowvision"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/netdcy/FlowVision
- https://github.com/netdcy/FlowVision/blob/main/LICENSE
- https://github.com/netdcy/FlowVision/releases
- https://flowvision.app
- https://raw.githubusercontent.com/netdcy/FlowVision/main/README.md
- https://github.com/netdcy/FlowVision/releases/tag/1.7.6
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/netdcy/FlowVision/main/FlowVision/Resources/icon.png
  credit: netdcy
  license: GPL-3.0; upstream project asset, trademarks retained
---

FlowVision lays out every picture in a folder as an adaptive waterfall grid, and you move through your folders without leaving it. A double click opens an image and a second one closes it. It also plays video and has a recursive mode.

Most movement happens with the right mouse button held down:

- Drag right or left to jump to the next or previous folder on the disk that contains images or videos.
- Drag up to go to the parent folder, and down to return to the folder you came from.
- Drag up and then right to reach the next sibling folder with images.
- Drag down and then right to close the tab or window.

W, A, S and D do the same jumps from the keyboard. In the image view, holding the left or right button while scrolling zooms, a long left press shows the image at 100%, and a long right press fits it to the window.

The 1.7.6 release is a ZIP with a Universal app, notarized, for macOS 11 or later. Homebrew installs it as `flowvision`.

The developer has tuned it for folders with very large numbers of images and uses scaling meant to reduce moiré. It supports HDR displays, light and dark mode, and file operations similar to Finder's. The README says the app makes no internet connection.
