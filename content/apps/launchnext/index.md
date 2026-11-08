---
name: "LaunchNext"
summary: "A customizable Launchpad-style grid of apps with folders and search, built for Macs without Launchpad."
category: "Utilities"
tags:
  - launcher
  - app-management
repository: https://github.com/RoversX/LaunchNext
website: https://closex.org/launchnext/
license: "GPL-3.0"
licenseUrl: https://github.com/RoversX/LaunchNext/blob/main/LICENSE
download: https://github.com/RoversX/LaunchNext/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/RoversX/LaunchNext
  - https://github.com/RoversX/LaunchNext/blob/main/LICENSE
  - https://github.com/RoversX/LaunchNext/releases
  - https://raw.githubusercontent.com/RoversX/LaunchNext/main/README.md
  - https://closex.org/launchnext/
  - https://github.com/RoversX/LaunchNext/releases/tag/2.4.2
assets:
  - path: ./assets/icon.png
    source: https://github.com/RoversX/LaunchNext/releases/download/2.4.2/LaunchNext2.4.2.zip
    credit: "RoversX"
    license: "GPL-3.0; icon extracted unmodified from the official 2.4.2 release bundle, trademarks retained"
---

LaunchNext brings back a full-screen grid of apps on macOS 26 Tahoe, which removed Launchpad. It scans your installed apps on first launch. Import Launchpad in Settings reads the old Launchpad database and rebuilds your folders and icon positions.

- Fuzzy search finds apps from partial or imperfect names, and the keyboard moves through the grid.
- A configurable hot corner opens it, and so do four- and five-finger trackpad gestures, which are marked experimental.
- A command-line and terminal interface, switched on in Settings, lets you inspect and change the layout.
- Right-clicking an app shows it in Finder, copies its path or passes it to an uninstall tool you configure.

LaunchNext builds on LaunchNow and keeps its GPL-3.0 license. Version 2.4.2 is the first release signed with a Developer ID and notarized; it is a Universal app and requires macOS 26. The developer says the Apple membership behind the signing may not be renewed, and releases would then go back to unsigned builds. The app updates itself, and the developer's Homebrew tap has a cask.

It runs full screen or in a compact floating window, with separate settings for each. Of the two rendering engines, Next Engine with Core Animation lets you drag apps straight into the Dock. Folders can page like Launchpad's or scroll vertically.
