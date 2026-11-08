---
name: MacPass
summary: "Opens and edits KeePass password databases in KDB and KDBX format on the Mac."
category: Privacy & security
tags:
  - passwords
  - keepass
  - encryption
  - password-manager
alternativeTo:
  - 1password
  - lastpass
repository: https://github.com/MacPass/MacPass
website: https://macpass.app
license: GPL-3.0-or-later
licenseUrl: https://github.com/MacPass/MacPass/blob/master/LICENSE.txt
download: https://github.com/MacPass/MacPass/releases
freeDownload: true
homebrew: "macpass"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/MacPass/MacPass
  - https://github.com/MacPass/MacPass/blob/master/LICENSE.txt
  - https://github.com/MacPass/MacPass/blob/master/README.md
  - https://github.com/MacPass/MacPass/releases
  - https://macpass.app
  - https://github.com/MacPass/MacPass/releases/tag/0.8.2
  - https://www.lastpass.com/pricing
  - https://support.1password.com/sync/
  - https://support.1password.com/import-keepass/
assets:
  - path: ./assets/icon.png
    source: https://github.com/MacPass/MacPass/blob/c5ac64482585b799d065ad9e2ecdca982aca786a/MacPass/Assets.xcassets/MacPassAppIcon.appiconset/icon_256x256.png
    credit: MacPass contributors
    license: GPL-3.0-or-later; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

MacPass opens and edits KeePass databases, the same files used by KeePass and by cross-platform ports such as KeePassXC. It reads and writes both the old KDB format and current KDBX, and converts between them.

- Autotype types credentials into web forms and login dialogs in any app, and Global Autotype starts it from anywhere with a shortcut.
- The password generator's method can be adjusted to meet a site's rules.
- Entries can carry an expiry date; expired ones get a special icon and can be searched for.
- Entry history, when turned on, stores past states inside the database so you can restore them.
- Changes made to a database elsewhere can be merged in, and separate files merged into one.

It behaves like a Mac document app. Databases open in windows or tabs, save automatically with browsable versions, and support undo, redo and drag and drop of entries, groups and attachments. Plugins add features.

Version 0.8.2 needs macOS 10.13 or later and comes as a ZIP holding a Universal app, signed with a Developer ID and notarized. Update to it: the old macpassapp.org domain passed to a third party, and the maintainer asks anyone still on 0.8.1 or older to turn off automatic plugin updates. Releases come only from GitHub.

1Password keeps your vault in a 1Password account and syncs changes to every device you sign in on. LastPass also stores it in an account, and its free plan works on either computers or phones, not both. MacPass works on a database file instead. 1Password's importer accepts a KeePass XML export but brings over only the passwords.
