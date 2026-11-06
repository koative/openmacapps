---
name: "DualClip"
summary: "Menu bar clipboard app with three shortcut-driven slots instead of a history list, kept in RAM only."
category: "Utilities"
tags:
  - clipboard
  - clipboard-manager
  - keyboard-shortcuts
  - menu-bar
repository: "https://github.com/RAKKUNN/DualClip"
website: "https://rakkunn.github.io/DualClip/"
license: "MIT"
licenseUrl: "https://github.com/RAKKUNN/DualClip/blob/main/LICENSE"
download: "https://github.com/RAKKUNN/DualClip/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/RAKKUNN/DualClip"
  - "https://github.com/RAKKUNN/DualClip/blob/main/LICENSE"
  - "https://github.com/RAKKUNN/DualClip/releases/latest"
  - "https://rakkunn.github.io/DualClip/"
---

DualClip is a menu bar app with three clipboard slots. Slot A mirrors the normal system clipboard, and slots B and C are filled with their own copy shortcuts. Each slot has a paste shortcut that briefly swaps its contents into the clipboard, sends paste, and then restores your original clipboard, which the README puts at about 200 ms. Slot contents live only in memory and are gone when the app quits. It suits people who prefer to recall a fixed snippet by shortcut rather than scroll a history list.

It requires macOS 13 or later on Intel or Apple silicon; the release zip is a universal build. The app is signed and notarized by Apple, and it needs Accessibility permission to send keystrokes. The README says the app makes no network connections and collects no telemetry. Caveats: the README lists Sparkle auto-update as not yet done, so updates are manual, and VoiceOver support is also listed as not yet done.
