---
name: "LocalSend"
summary: "Sends files and text between nearby Mac, Windows, Linux, Android and iOS devices over the local network, with no account."
category: "Utilities"
tags: ["file-sharing", "local-network", "cross-platform"]
repository: "https://github.com/localsend/localsend"
website: "https://localsend.org"
license: "Apache-2.0"
licenseUrl: "https://github.com/localsend/localsend/blob/main/LICENSE"
download: "https://github.com/localsend/localsend/releases"
freeDownload: true
homebrew: "localsend"
featured: true
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/localsend/localsend", "https://github.com/localsend/localsend/blob/main/LICENSE", "https://localsend.org", "https://github.com/localsend/localsend/blob/main/README.md", "https://github.com/localsend/localsend/releases/tag/v1.18.2", "https://support.apple.com/guide/mac-help/mh35868/mac"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/localsend/localsend/main/app/macos/Runner/Assets.xcassets/AppIcon.appiconset/logo-1024-mac-256.png", "credit": "LocalSend contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
---

LocalSend sends files and text between devices on the same local network. Open it on both devices, choose files, photos or a piece of text, and tap the receiving device in the list of nearby ones. The transfer goes straight from one device to the other. Received files land in Downloads unless you pick another folder.

Apple describes AirDrop as a way to send items to nearby Apple devices. LocalSend runs on macOS, Windows, Linux, Android and iOS, so a Mac can swap files with an Android phone or a Windows PC. Transfers are encrypted over HTTPS by default, and you can switch encryption off on both devices. PIN verification adds a further check. No internet connection, account or server is involved, and the developers say the app carries no ads or trackers.

The two devices have to reach each other. If sending or receiving fails, allow incoming TCP and UDP on port 53317 in the firewall. AP isolation on the router must also be off. It usually is, but some routers enable it, especially on guest networks.

The Mac download is a universal DMG for Apple silicon and Intel, Developer ID-signed and notarized, and the app is also in the Mac App Store. macOS 12 Monterey is the minimum; 1.18.2 was the last release for macOS 11. The DMG build does not update itself, so the developers recommend an app store or a package manager. A separate command-line client, built on the same protocol, runs on Apple silicon and Intel Macs.
