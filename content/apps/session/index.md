---
name: "Session"
summary: "Sends end-to-end encrypted messages between Account IDs, with no phone number or email needed to sign up."
category: "Internet"
tags: ["messaging", "privacy", "chat"]
repository: "https://github.com/session-foundation/session-desktop"
website: "https://getsession.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/session-foundation/session-desktop/blob/dev/LICENSE"
download: "https://getsession.org/download"
freeDownload: true
homebrew: "session"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/session-foundation/session-desktop", "https://github.com/session-foundation/session-desktop/blob/dev/LICENSE", "https://getsession.org/download", "https://getsession.org/", "https://getsession.org/faq", "https://github.com/session-foundation/session-desktop/releases/tag/v1.18.3", "https://github.com/session-foundation/session-desktop/blob/dev/README.md"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/session-foundation/session-desktop/blob/dev/build/icons/icon_256x256.png", "credit": "Session contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Session sends end-to-end encrypted messages between Account IDs, so you sign up without a phone number or an email address. On the Mac you create a new ID or restore an existing one, then chat one to one, in small groups or in Communities of more than 100 members.

Messages do not pass through one central server. They travel over a network of nodes run by the community, wrapped in onion requests so that no single node sees both where a message came from and where it goes. The project says it collects no personal data.

The FAQ links to a Quarkslab audit of the desktop, Android and iOS clients. Version 1.18.3 requires macOS Ventura (13) or later and comes as separate disk images for Apple silicon and Intel Macs. Its release page lists SHA-256 hashes of the files signed with a developer's GPG key, and the README shows how to check a DMG against them.

- Messages can be set to disappear.
- The desktop app can encrypt its local database behind a PIN or password.
- A recovery password, a list of words, brings your Account ID back on a new device.
- You can change the theme.

Write that recovery password down. With no central account server, a lost one cannot be reset. Restoring brings back only the last 14 days of messages, and contacts and groups are lost if none of your devices has been online for 30 days.

