---
name: "KeePassXC"
summary: "Keeps passwords, passkeys and one-time codes in an encrypted KeePass file that you store wherever you like."
category: "Privacy & security"
tags: ["passwords", "offline", "cross-platform", "password-manager"]
alternativeTo: ["1password", "lastpass"]
repository: "https://github.com/keepassxreboot/keepassxc"
website: "https://keepassxc.org/"
license: "GPL-2.0-only OR GPL-3.0-only"
licenseUrl: "https://github.com/keepassxreboot/keepassxc/blob/develop/COPYING"
download: "https://github.com/keepassxreboot/keepassxc/releases"
freeDownload: true
homebrew: "keepassxc"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/keepassxreboot/keepassxc", "https://github.com/keepassxreboot/keepassxc/blob/develop/COPYING", "https://raw.githubusercontent.com/keepassxreboot/keepassxc/develop/README.md", "https://keepassxc.org/", "https://keepassxc.org/download/", "https://keepassxc.org/docs/", "https://keepassxc.org/docs/KeePassXC_GettingStarted.html", "https://github.com/keepassxreboot/keepassxc/releases/tag/2.8.0", "https://1password.com/personal"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/keepassxreboot/keepassxc/develop/share/macosx/keepassxc.iconset/icon_256x256.png", "credit": "KeePassXC contributors; icon artwork by Lorenzo Stella", "license": "Upstream icon; see COPYING for artwork notices including LGPL-2; trademarks retained"}]
---

KeePassXC keeps your logins in a single encrypted database file. You unlock it with a master password, optionally with a YubiKey or OnlyKey as well, and copy or type an entry's username and password into the app or site that asks for it. The file uses the KDBX format, so other KeePass-compatible apps can open the same database.

- Entries sit in groups you define, with custom titles, icons, attachments and extra fields.
- The password generator creates new passwords, and the app stores TOTP secrets and shows the current one-time code.
- Browser integration fills logins and handles passkeys in Chrome, Firefox, Edge, Chromium, Vivaldi, Brave and Tor Browser.
- Auto-Type enters a username and password into other applications for you.
- Database reports rate password health and can check passwords against Have I Been Pwned.

Syncing is up to you, since KeePassXC has no cloud sync of its own. The database is a plain file, so you can keep it in a cloud folder such as Dropbox or only on your Mac. Entry history lets you restore an older version of a changed entry. The `keepassxc-cli` tool and an SSH agent integration cover terminal work.

KeePassXC needs macOS 12 or later, with separate DMGs for Apple silicon and Intel. The Apple silicon app in version 2.8.0 is notarized by Apple. The code is licensed under GPL version 2 or 3.

1Password keeps vaults synchronized across your signed-in devices and is sold by subscription. KeePassXC involves no cloud service or third party. Moving over is possible, since it imports 1Password, Bitwarden, Proton Pass, CSV and KeePass1 data.
