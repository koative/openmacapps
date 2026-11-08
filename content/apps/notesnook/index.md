---
name: "Notesnook"
summary: "Writes, organizes and syncs notes with end-to-end encryption across Mac, Windows, Linux, mobile and the web."
category: "Writing"
tags: ["notes", "privacy", "encryption", "note-taking"]
alternativeTo: ["evernote", "google-keep"]
repository: "https://github.com/streetwriters/notesnook"
website: "https://notesnook.com/"
license: "GPL-3.0"
licenseUrl: "https://github.com/streetwriters/notesnook/blob/master/LICENSE"
download: "https://github.com/streetwriters/notesnook/releases"
freeDownload: true
homebrew: "notesnook"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/streetwriters/notesnook", "https://github.com/streetwriters/notesnook/blob/master/LICENSE", "https://github.com/streetwriters/notesnook/blob/master/README.md", "https://github.com/streetwriters/notesnook/releases", "https://notesnook.com/", "https://notesnook.com/downloads", "https://notesnook.com/pricing", "https://github.com/streetwriters/notesnook/releases/tag/v3.4.12"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/streetwriters/notesnook/blob/master/resources/icon.png", "credit": "Notesnook contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Notesnook encrypts each note on your Mac before it syncs, so the same notes reach your other devices without the server being able to read them. You write in a rich text editor, and file notes into notebooks and tags.

- The editor handles tables, code blocks, math, images and attachments; checklists, outlines, callouts and Markdown shortcuts need a paid plan.
- Notes link to each other, and each note shows what links back to it.
- A vault puts a second password on selected notes, and an app lock guards the whole app.
- Paid plans let reminders repeat, and a single note can be published as a web page, with a password if you like.
- A web clipper saves pages into your notes, and an importer reads Evernote, Google Keep, Obsidian and Joplin exports on your device.

The encryption uses XChaCha20-Poly1305 with Argon2. The desktop app works offline and syncs changes once you reconnect. Syncing needs a Notesnook account. The free plan keeps unlimited notes on unlimited devices, while paid plans add attachment storage, larger files and higher limits on notebooks and tags. The client apps and the sync server are both open source under the GPLv3, and the server can be self-hosted.

The README calls Notesnook an end-to-end encrypted alternative to Evernote, and its importer also takes notes from Google Keep. The difference the project stresses is that each note is encrypted on your Mac before upload, and that the code for both the apps and the server is public. The Mac download page has separate disk images for Apple silicon and Intel, and the 3.4.12 Apple silicon app is signed with a Developer ID and notarized.
