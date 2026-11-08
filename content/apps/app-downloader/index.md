---
name: "App Downloader"
summary: "Searches the Homebrew Cask catalogue and opens each Mac app's original download link in your browser."
category: "Utilities"
tags: ["homebrew", "downloads", "search"]
repository: "https://github.com/yep/app-downloader"
website: "https://github.com/yep/app-downloader"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/yep/app-downloader/blob/master/LICENSE"
download: "https://github.com/yep/app-downloader/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
maintenance: "unmaintained"
maintenanceNote: "No release or commit since March 2023."
sources: ["https://github.com/yep/app-downloader", "https://github.com/yep/app-downloader/blob/master/LICENSE", "https://raw.githubusercontent.com/yep/app-downloader/master/README.md", "https://github.com/yep/app-downloader/releases", "https://github.com/yep/app-downloader/releases/tag/v1.0.5", "https://github.com/yep/app-downloader/commits/master"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/yep/app-downloader/master/App%20Downloader/Assets.xcassets/AppIcon.appiconset/app-downloader-256.png", "credit": "Jahn Bertsch", "license": "GPL-3.0-or-later repository asset; trademarks retained"}]
screenshots: []
---

App Downloader looks up Mac apps in the Homebrew Cask catalogue. Type a name into its search window, and each matching app is listed with the download address its publisher uses. Click the address and the file downloads in your web browser.

The addresses come from Homebrew Cask, where contributors keep them current. You get the installer straight from the publisher's server.

The 1.0.5 ZIP holds a Universal app for Apple silicon and Intel that declares macOS 10.13 or later. It is signed with a Developer ID and notarized, and the code is under GPL version 3 or later.

That release came out in March 2023, and the repository has had no commits since. Its open list of planned work still names a broken settings window, SHA-256 checks of downloaded files and searching with Command-F.
