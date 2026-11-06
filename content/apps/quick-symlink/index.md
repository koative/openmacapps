---
name: "Quick Symlink"
summary: "Adds Finder right-click actions that create symbolic and hard links, with a companion app that enables the extensions."
category: "Utilities"
tags:
  - finder
  - file-manager
  - symlinks
  - context-menu
repository: "https://github.com/ololx/quick-symlink"
website: "https://github.com/ololx/quick-symlink"
license: "MIT"
licenseUrl: "https://github.com/ololx/quick-symlink/blob/main/LICENSE"
download: "https://github.com/ololx/quick-symlink/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since June 2024, as of 2026-11-06."
icon: "./assets/icon.png"
sources:
  - "https://github.com/ololx/quick-symlink"
  - "https://github.com/ololx/quick-symlink/blob/main/LICENSE"
  - "https://github.com/ololx/quick-symlink/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ololx/quick-symlink/main/quick-symlink/Assets.xcassets/AppIcon.appiconset/quick-symlink-app-icon-1024.png"
    credit: "Alexander A. Kropotin"
    license: "MIT; upstream app icon, trademarks retained"
---

Quick Symlink adds symbolic and hard link actions to the Finder right-click menu, so a selected file or folder can be linked to another location without opening Terminal. Its companion app installs the two Finder extensions, one for symbolic links and one for hard links. The README's example is keeping Documents on an external drive and linking to it from the internal disk.

The README lists OS X 10.10 or later. The release app is ad-hoc signed and not notarized, so the first launch has to be allowed in System Settings, and the two extensions must then be enabled in the Extensions settings. The last release and the last commit on the default branch are both from June 2024, so do not expect updates for newer macOS releases.
