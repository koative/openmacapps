---
name: mTAB
summary: "Switches between every open window, not just apps, with previews, search and up to nine shortcuts with their own filters."
category: Utilities
tags:
  - window-switcher
  - alt-tab
  - keyboard-shortcuts
  - productivity
  - desktop-mac-toolkit
repository: https://github.com/starbudweiser/mTAB
website: https://github.com/starbudweiser/mTAB
license: MIT
licenseUrl: https://github.com/starbudweiser/mTAB/blob/main/LICENSE
download: "https://github.com/starbudweiser/mTAB/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: '2026-11-16'
verified: '2026-11-16'
sources:
  - https://github.com/starbudweiser/mTAB
  - https://github.com/starbudweiser/mTAB/blob/main/LICENSE
  - https://github.com/starbudweiser/mTAB/releases
  - https://raw.githubusercontent.com/starbudweiser/mTAB/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/mTAB/blob/main/docs/screenshot.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/mTAB/releases/download/v1.0.1/mTAB-1.0.1-macOS.zip
    credit: mTAB contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
screenshots:
  - src: ./assets/screenshot.png
    alt: "The mTAB window switcher showing six windows with thumbnails, one selected, with a search field on top."
    source: https://github.com/starbudweiser/mTAB/blob/main/docs/screenshot.png
    credit: Starbudweiser
---
mTAB shows every open window of every app when you hold its shortcut, ⌘⇥ by default, instead of one entry per app. You move through the list with the keyboard, the mouse or a three-finger swipe, and release to bring the chosen window forward.

Windows appear as thumbnails, icons or titles. Typing filters them by window or app name, and keys act on the selected window to close, minimize, quit, hide or send it to full screen.

You can define up to nine shortcuts. Each one has its own filters:

- which apps to include;
- the current Space or all of them;
- one screen or every screen;
- whether minimized and hidden windows appear.

Per-app exceptions keep the shortcut away from virtual machines and remote desktops. A command-line tool lists windows and focuses one by name. The app uses Apple's private SkyLight framework and needs the Accessibility and Screen Recording permissions. Releases are arm64 builds for macOS 14 or later, notarized, in four languages, with updates from GitHub.
