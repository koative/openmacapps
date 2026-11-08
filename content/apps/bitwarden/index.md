---
name: "Bitwarden"
summary: "A desktop password vault with open-source builds and account synchronization."
category: "Privacy & security"
tags: ["password-manager", "passwords", "cross-platform"]
alternativeTo: ["1password", "lastpass"]
repository: "https://github.com/bitwarden/clients"
website: "https://bitwarden.com"
license: "GPL-3.0"
licenseUrl: "https://github.com/bitwarden/clients/blob/main/LICENSE.txt"
download: "https://github.com/bitwarden/clients/releases"
freeDownload: true
homebrew: "bitwarden"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/bitwarden/clients", "https://github.com/bitwarden/clients/blob/main/LICENSE.txt", "https://github.com/bitwarden/clients/releases", "https://bitwarden.com/download/", "https://raw.githubusercontent.com/bitwarden/clients/main/apps/desktop/README.md", "https://bitwarden.com/help/getting-started-desktop/", "https://bitwarden.com/help/biometrics/", "https://bitwarden.com/help/password-manager-plans/", "https://github.com/bitwarden/clients/releases/tag/desktop-v2026.10.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/bitwarden/clients/main/apps/desktop/resources/icon.iconset/icon_256x256.png", "credit": "Bitwarden, Inc.", "license": "Trademark/logo of Bitwarden, Inc.; not covered by the GPL-3.0 code license (no grant of logo rights per the repository LICENSE.txt; Bitwarden Trademark Guidelines apply: https://github.com/bitwarden/server/blob/main/TRADEMARK_GUIDELINES.md); used unmodified only to identify the app in a non-commercial directory"}]
---

Bitwarden keeps your logins, secure notes, cards and identities in an encrypted vault, and the desktop app opens that vault in its own window on the Mac. You add items into folders, generate strong passwords and search across everything you have saved.

- Touch ID can unlock the vault once you turn it on under Settings, Security.
- With the desktop app running, the browser extension can hand biometric unlock over to it.
- Up to five accounts can stay logged in at once, so a personal and a work vault sit side by side.
- Items shared from an organization appear next to your own, with a filter for each vault.

The vault syncs across your devices through a Bitwarden account. The free individual plan includes unlimited items, use on any device and the password generator; paid plans add features such as file sharing through Send. The server can also be self-hosted, and the desktop app can log in to your own server.

The download page lists macOS 14 Sonoma or later. Bitwarden is offered as a DMG, through the Mac App Store and through Homebrew. GitHub releases carry a Universal DMG and ZIP for Apple silicon and Intel. Most of the client code is GPL-3.0; code in the repository's `bitwarden_license` folder falls under the separate Bitwarden License.

Coming from 1Password or LastPass, you can bring your data with Bitwarden's import tools, which have a dedicated guide for each. Once there, you keep the option of moving the vault onto a server you run yourself.
