---
name: Strongbox
summary: A password manager for KeePass and Password Safe databases, with YubiKey
  support and sync through cloud storage.
category: Privacy & security
tags:
- passwords
- keepass
- encryption
- password-manager
alternativeTo:
- 1password
- lastpass
repository: https://github.com/strongbox-password-safe/Strongbox
website: https://strongboxsafe.com
license: AGPL-3.0
licenseUrl: https://github.com/strongbox-password-safe/Strongbox/blob/master/LICENSE.md
download: https://apps.apple.com/app/strongbox-password-safe/id897283731
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/strongbox-password-safe/Strongbox
- https://github.com/strongbox-password-safe/Strongbox/blob/master/LICENSE.md
- https://apps.apple.com/app/strongbox-password-safe/id897283731
- https://strongboxsafe.com
- https://raw.githubusercontent.com/strongbox-password-safe/Strongbox/master/README.md
- https://1password.com/pricing/password-manager
assets:
- path: ./assets/icon.png
  source: https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c4/81/0c/c4810c38-8fda-3630-6409-4e1edf8d055e/strongboxicon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/512x512bb.png
  credit: Strongbox developers
  license: Official app icon from the App Store listing; trademark of Strongbox, not
    covered by the AGPL-3.0 code license
---

Strongbox keeps your passwords in an encrypted database file that you unlock with one master password. It reads and writes the standard KeePass formats (KDB, and KDBX 3.1 and 4) and Password Safe version 3, so a KeePass database also opens in any KeePass-compatible app on other platforms.

You choose where that file lives: on the Mac only, in iCloud, Dropbox, OneDrive or Google Drive, or on a WebDAV or SFTP server you run. The App Store listing says cloud databases stay readable while you are offline.

- Face ID or Touch ID unlocks a database, and a YubiKey can protect it as a hardware token.
- An audit flags weak, short, common and reused passwords and checks them against Have I Been Pwned.
- A database can also store file attachments, Markdown notes, 2FA codes, passkeys and SSH keys.
- Two copies of a database can be compared and merged after a sync conflict.

One App Store listing covers the Mac, iPhone and iPad. It is free to download, and Pro features are sold as a subscription or as a one-off lifetime license. 1Password's individual plan, by contrast, is priced per month and billed yearly after a 14-day free trial.

The repository holds all of the functional code under the AGPL but leaves out artwork, images and build configuration, and the developers state that they do not make the app easy to build from it. They give anti-piracy as the reason and state that the repository therefore falls short of the Open Source Initiative's definition. Pull requests are not accepted at the moment.
