---
name: Penc
summary: "Moves, resizes and snaps windows with trackpad gestures while you hold the Command key."
category: Productivity
tags:
  - window-management
  - trackpad
  - gestures
  - window-manager
alternativeTo:
  - magnet
repository: https://github.com/dgurkaynak/Penc
website: https://deniz.co/penc/
license: MIT
licenseUrl: https://github.com/dgurkaynak/Penc/blob/master/LICENSE
maintenance: "unmaintained"
maintenanceNote: "No release since July 2021."
download: https://github.com/dgurkaynak/Penc/releases
freeDownload: true
homebrew: "penc"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/dgurkaynak/Penc", "https://github.com/dgurkaynak/Penc/blob/master/LICENSE", "https://github.com/dgurkaynak/Penc/blob/master/README.md", "https://github.com/dgurkaynak/Penc/releases", "https://deniz.co/penc/", "https://raw.githubusercontent.com/dgurkaynak/Penc/master/README.md", "https://raw.githubusercontent.com/dgurkaynak/Penc/master/LICENSE", "https://github.com/dgurkaynak/Penc/releases/tag/1.0.0", "https://magnet.crowdcafe.com/"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/dgurkaynak/Penc/blob/291562763f48bb35b9cb6a1ef465296017ffa2dc/Penc/Assets.xcassets/AppIcon.appiconset/penc-logo-256.png
    credit: Penc contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Penc moves and resizes windows with the trackpad. Press Command twice and keep holding it, then use two fingers on the trackpad. When you let go of Command, the change takes effect.

- Dragging with two fingers moves the window.
- Pinching resizes it. A vertical pinch makes it taller or shorter, and a horizontal one makes it wider or narrower.
- A fast two-finger swipe snaps it to half or a quarter of the screen. Swipe toward a corner for a quarter and toward a side for a half.

Penc needs the Accessibility permission, which macOS asks for on first launch. Pinch-to-resize only works when Zoom in or out is turned on in the Trackpad settings under Scroll & Zoom.

Magnet snaps windows into the same halves and quarters, triggered by dragging to an edge, by keyboard shortcuts or from the menu bar, and it comes from the Mac App Store. Penc works from the trackpad with only the Command key held, and it also moves and resizes a window freely.

Version 1.0.0 from July 2021 is the latest release, and later commits change only the README and the project website. It requires macOS 10.13 or later. The DMG holds a Universal app for Apple silicon and Intel, notarized. Homebrew installs it as the `penc` cask.
