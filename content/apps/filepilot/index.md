---
name: "FilePilot"
summary: "Changes which app opens each file type and URL scheme, with search, diagnostics and JSON backup and restore."
category: "Utilities"
tags:
  - file-associations
  - launch-services
  - default-apps
  - url-schemes
repository: "https://github.com/birdyzzz/FilePilot"
website: "https://github.com/birdyzzz/FilePilot"
license: "MIT"
licenseUrl: "https://github.com/birdyzzz/FilePilot/blob/main/LICENSE"
download: "https://github.com/birdyzzz/FilePilot/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/birdyzzz/FilePilot"
  - "https://github.com/birdyzzz/FilePilot/blob/main/LICENSE"
  - "https://github.com/birdyzzz/FilePilot/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/birdyzzz/FilePilot/main/FilePilot/Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512%402x.png"
    credit: "FilePilot contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

FilePilot shows which app opens each file extension and URL scheme, and lets you search and change those defaults, including the default browser and mail client. It lists installed apps with the file types and schemes they declare, checks for missing apps or invalid handlers and offers repairs, and can export or import associations as JSON. It suits anyone who regularly fixes files that open in the wrong app. The project says the app works entirely on the Mac and makes no network requests.

Requires macOS 15 or later. Building from source needs Xcode 16 or later. The 1.0.0 release is unsigned and not notarized, so the first launch needs approval under System Settings › Privacy & Security. Changing a handler goes through Launch Services, so macOS may show its own confirmation dialogs; import skips entries that already match the system to avoid repeated prompts.
