---
name: Rowel
summary: "Stores passwords, passkeys, cards, SSH keys and .env files in an encrypted local vault, with optional sync through your own cloud."
category: Privacy & security
tags:
- passwords
- encryption
- local-first
- cross-platform
- password-manager
alternativeTo:
- 1password
- lastpass
repository: https://github.com/fwdai/rowel
website: https://rowel.app
license: GPL-3.0
licenseUrl: https://github.com/fwdai/rowel/blob/main/LICENSE
download: https://github.com/fwdai/rowel/releases
freeDownload: true
homebrew: "rowel"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/fwdai/rowel", "https://github.com/fwdai/rowel/blob/main/LICENSE", "https://raw.githubusercontent.com/fwdai/rowel/main/README.md", "https://github.com/fwdai/rowel/releases", "https://github.com/fwdai/rowel/releases/tag/v1.1.1", "https://rowel.app", "https://1password.com/product/password-manager"]
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/fwdai/rowel/main/src-tauri/icons/icon.png
  credit: Rowel contributors
  license: GPL-3.0; upstream project asset, trademarks retained
---

Rowel keeps logins, passkeys, cards, identity documents, SSH keys, API keys and whole `.env` files in one encrypted vault on your own disk. You open it with a master password, or with Touch ID once that is set up, and it works offline without an account.

- Lockboxes split one vault into parts such as Personal and Work. Every lockbox is stored as a separate encrypted file, which may sync to a different Google Drive, Dropbox or iCloud account.
- Developer secrets have their own item types. SSH keys show a fingerprint, Ed25519 keys can be generated in the app, and API keys carry an environment and scopes.
- Importers read exports from 1Password, LastPass, Bitwarden, KeePass, Enpass, Chrome and Safari, and report anything they could not bring over.
- Browser extensions fill passwords and passkeys in Chrome, Edge, Brave, Vivaldi, Firefox and Safari.

Coding agents such as Claude Code and Codex can use stored logins and keys through grants you approve, recorded in an audit log. The agent never sees the value, but any command you approve to run with that key does.

1Password also keeps your passwords on all your devices, inside a 1Password account protected by an account password and a Secret Key. Rowel has no account and no server of its own; the developer says the cloud you connect only ever holds ciphertext.

The 1.1.1 disk image holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. It updates itself and installs only updates with a valid signature. An iOS version is in TestFlight beta.
