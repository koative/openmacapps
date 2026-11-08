---
name: "ElectronMail"
summary: "An unofficial Proton Mail desktop client with multiple accounts, offline storage and full-text search."
category: "Internet"
tags: ["email", "privacy", "cross-platform"]
repository: "https://github.com/vladimiry/ElectronMail"
website: "https://github.com/vladimiry/ElectronMail"
license: "GPL-3.0"
licenseUrl: "https://github.com/vladimiry/ElectronMail/blob/master/LICENSE"
download: "https://github.com/vladimiry/ElectronMail/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/vladimiry/ElectronMail", "https://github.com/vladimiry/ElectronMail/blob/master/LICENSE", "https://github.com/vladimiry/ElectronMail/releases", "https://raw.githubusercontent.com/vladimiry/ElectronMail/master/README.md", "https://github.com/vladimiry/ElectronMail/releases/tag/v5.3.10", "https://github.com/vladimiry/ElectronMail/releases/tag/v5.3.7", "https://github.com/vladimiry/ElectronMail/releases/tag/v5.3.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/vladimiry/ElectronMail/master/src/assets/dist/icons/png/256x256.png", "credit": "vladimiry and ElectronMail contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

ElectronMail runs Proton Mail in its own desktop window and adds what the browser version lacks. It is an unofficial client, not made by Proton, and it ships prebuilt copies of Proton's open-source web clients, assembled from Proton's own repositories.

- Several Proton accounts sit side by side, each with its own API entry point and proxy, so one account can reach Proton only over Tor.
- The optional local store keeps message bodies in an encrypted `database.bin` file, which lets you read and search mail offline. Attachments are not stored.
- Full-text search covers message bodies, and JavaScript filters can work through any number of messages in the local store.
- With the local store on, you can export mail in batches to EML, move or delete many messages at once and mark everything read in one click.

Recent releases have followed changes on Proton's side. Version 5.3.7 lowered the request rate after Proton tightened its API limit in May 2026, and 5.3.6 cleared a "Something went wrong" error that began on February 17, 2026. Each release has separate DMGs for Apple silicon and Intel. The notes say the Apple silicon app needs its quarantine flag removed with `xattr` before it opens.

A master password unlocks the app. It can remember that password in the macOS keychain and sign each account in by itself, including two-factor codes. Account sessions can also persist across restarts, a feature the project labels experimental. Calendar alarms, per-account notifications, custom CSS per account and a dark mode round it out.
