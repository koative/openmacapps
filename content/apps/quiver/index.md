---
name: "Quiver"
summary: "Menu bar bundle of small switchable tools: focus-follows-mouse, Keep Awake, a file tray, hosts toggles and a webcam check."
category: "Utilities"
tags:
  - menu-bar
  - window-management
  - sleep
  - files
repository: "https://github.com/tirrth/Quiver"
website: "https://github.com/tirrth/Quiver"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/tirrth/Quiver/blob/master/LICENSE.md"
download: "https://github.com/tirrth/Quiver/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/tirrth/Quiver"
  - "https://github.com/tirrth/Quiver/blob/master/LICENSE.md"
  - "https://github.com/tirrth/Quiver/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/tirrth/Quiver/releases/download/v1.0/Quiver.dmg"
    credit: "Quiver contributors"
    license: "GPL-3.0-only; upstream app icon, trademarks retained"
---

Quiver puts several small macOS utilities behind one menu bar icon, so you do not need a separate menu bar app for each. Follow Focus raises the window under the pointer, Keep Awake stops the Mac from sleeping, Drop Deck is a floating tray that holds files and text until you drag them out, Reroute It toggles `/etc/hosts` entries, and Glance Me shows a quick webcam check before a call. Each tool switches on separately and keeps its settings across restarts.

It suits people who use a few of these small tools and would rather run one app for them. The window-raise engine comes from the GPLv3 AutoRaise project, so Quiver as a whole is GPL-3.0.

Requires macOS 13 or later on Apple silicon; the release build is arm64 only. The DMG is not notarized and has no Developer ID signature, so the first launch must be allowed in System Settings under Privacy & Security with Open Anyway. Follow Focus needs Accessibility permission, Glance Me needs the camera, and Reroute It asks for an administrator password on each write unless you install its optional helper.
