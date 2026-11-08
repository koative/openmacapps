---
name: "Syncthing for macOS"
summary: "Runs the Syncthing file synchronization service from the menu bar, starting it at login and showing its status."
category: "Utilities"
tags: ["file-sync", "menu-bar", "peer-to-peer"]
alternativeTo: ["dropbox"]
repository: "https://github.com/syncthing/syncthing-macos"
website: "https://github.com/syncthing/syncthing-macos"
license: "MIT"
licenseUrl: "https://github.com/syncthing/syncthing-macos/blob/v2/LICENSE"
download: "https://github.com/syncthing/syncthing-macos/releases"
freeDownload: true
homebrew: "syncthing-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/syncthing/syncthing-macos", "https://github.com/syncthing/syncthing-macos/blob/v2/LICENSE", "https://raw.githubusercontent.com/syncthing/syncthing-macos/v2/README.md", "https://github.com/syncthing/syncthing-macos/releases", "https://github.com/syncthing/syncthing-macos/releases/tag/v2.1.6-1", "https://github.com/syncthing/syncthing/blob/main/LICENSE", "https://www.dropbox.com/features/sync"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/syncthing/syncthing-macos/blob/v2/syncthing/Assets.xcassets/Syncthing.appiconset/icon_256x256.png", "credit": "Syncthing for macOS contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Syncthing for macOS runs Syncthing, the file synchronization program, as a menu bar app. You install one app; it brings its own copy of Syncthing, starts it, and shows its state in the menu bar icon. Adding devices and choosing folders happens in the Syncthing web interface, which opens in your browser from that menu.

- It can start at login, so you need no separate Syncthing service.
- Shared folders open in Finder straight from the menu.
- Updates arrive through Sparkle from the GitHub releases.
- Syncthing's log goes to `syncthing.log` in `~/Library/Application Support/Syncthing`.

The app stays small on purpose: no graphs and no advanced configuration windows. It will not work while another Syncthing instance or wrapper is running, so remove those first. In Preferences you can point it at a Syncthing instance already running on the same Mac; the project's FAQ says remote instances are not supported. Process priority can be Normal, Utility or Background. Background is the default and eases the load on the apps you are using, at the cost of slower scans of large folders.

Dropbox syncs a folder through its own cloud storage. Syncthing copies folders directly between your own devices, with no storage provider in between.

Release 2.1.6-1 is a DMG with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The project's README says releases from v2.0.14 on, including this one, need macOS 12 or later, and that the v1 line no longer gets updates. The wrapper is MIT-licensed, and the bundled Syncthing is under the Mozilla Public License 2.0.
