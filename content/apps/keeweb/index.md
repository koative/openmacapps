---
name: "KeeWeb"
summary: "A cross-platform password manager that opens and edits KeePass databases in a desktop app or browser."
category: "Privacy & security"
tags:
  - password-manager
  - keepass
  - passwords
  - cross-platform
alternativeTo:
  - 1password
  - lastpass
repository: "https://github.com/keeweb/keeweb"
website: "https://keeweb.info"
license: "MIT"
licenseUrl: "https://github.com/keeweb/keeweb/blob/master/LICENSE"
download: "https://github.com/keeweb/keeweb/releases"
freeDownload: true
homebrew: "keeweb"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/keeweb/keeweb"
  - "https://github.com/keeweb/keeweb/blob/master/LICENSE"
  - "https://github.com/keeweb/keeweb/releases"
  - "https://keeweb.info"
  - "https://raw.githubusercontent.com/keeweb/keeweb/master/README.md"
  - "https://github.com/keeweb/keeweb/releases/tag/v1.18.7"
  - "https://github.com/keeweb/keeweb/releases/tag/v1.18.9"
  - "https://1password.com/personal"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/keeweb/keeweb/master/graphics/icon.icns"
    credit: "Antelle and KeeWeb contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Open an existing KeePass `kdbx` file in KeeWeb, or create a new vault. It reads files made by KeePass, KeePassXC and similar apps. You can run it as a desktop app on macOS, Windows and Linux, or in a browser through the project's hosted web app.

The database can stay a local file or live on a server of your own or in Dropbox, Google Drive or OneDrive, and KeeWeb syncs changes from there. Files opened from the cloud are kept for offline use, and edits made offline sync when the connection returns.

- Several databases can be open at once, searched from one box or viewed as a single list.
- Search can target specific fields, passwords and history, and accepts regular expressions.
- Every change goes into history, and you can roll an entry back to any earlier state.
- Entries take tags, color marks, attachments and icons, including a site's favicon.
- A password generator lets you set the length and allowed characters.

Because KeeWeb is a single HTML file with an optional service worker, you can also host it on your own server, and the project documents Docker setups for that.

The newest macOS builds are still from version 1.18.7, released in July 2021 as separate Apple silicon and Intel disk images. Version 1.18.9, from May 2026, ships Linux packages and the web app but no Mac build. The Apple silicon app is Developer ID-signed and notarized.

With 1Password, vaults sit in a subscription account, protected by your account password and a Secret Key and synced across signed-in devices. KeeWeb leaves the encrypted file wherever you put it.
