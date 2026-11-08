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
sources: ["https://github.com/localsend/localsend", "https://github.com/localsend/localsend/blob/main/LICENSE", "https://localsend.org", "https://github.com/localsend/localsend/blob/main/README.md", "https://github.com/localsend/localsend/releases/tag/v1.18.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/localsend/localsend/main/app/macos/Runner/Assets.xcassets/AppIcon.appiconset/logo-1024-mac-256.png", "credit": "LocalSend contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
---

LocalSend sends files and text between devices on the same local network. Open it on both devices, choose files, photos or a piece of text, and tap the receiving device in the list of nearby ones. The transfer goes straight from one device to the other, and received files land in Downloads unless you pick another folder.

Unlike AirDrop, it is not tied to Apple hardware. The same app runs on macOS, Windows, Linux, Android and iOS, so a Mac can swap files with an Android phone or a Windows PC. Transfers are encrypted over HTTPS, an optional PIN adds a check before anything is accepted, and no internet connection, account or server is involved. The developers say the app carries no ads or trackers.

The two devices have to be able to reach each other. A firewall that blocks incoming TCP and UDP on port 53317 stops discovery, and so does a router with AP isolation switched on, which is common on guest networks.

The Mac download is a universal DMG for Apple silicon and Intel, signed with a Developer ID and notarized by Apple; the app is also in the Mac App Store. The project lists macOS 12 Monterey as the minimum and names 1.18.2 as the last release for macOS 11. The DMG build does not update itself, so the developers recommend an app store or a package manager. A separate command-line client, built on the same protocol, is available for Apple silicon and Intel Macs.
