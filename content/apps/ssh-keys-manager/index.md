---
name: "SSH Keys Manager"
summary: "Browses, generates and organises SSH keys and edits SSH config entries in a Mac window instead of the terminal."
category: "Developer tools"
tags: ["ssh", "security", "native"]
repository: "https://github.com/Stmol/ssh-keys-manager-macos-app"
website: "https://github.com/Stmol/ssh-keys-manager-macos-app"
license: "MIT"
licenseUrl: "https://github.com/Stmol/ssh-keys-manager-macos-app/blob/master/LICENSE"
download: "https://github.com/Stmol/ssh-keys-manager-macos-app/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Stmol/ssh-keys-manager-macos-app", "https://github.com/Stmol/ssh-keys-manager-macos-app/blob/master/LICENSE", "https://github.com/Stmol/ssh-keys-manager-macos-app/releases", "https://raw.githubusercontent.com/Stmol/ssh-keys-manager-macos-app/master/README.md", "https://github.com/Stmol/ssh-keys-manager-macos-app/releases/tag/v1.6"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Stmol/ssh-keys-manager-macos-app/master/SSH%20Keys%20Manager/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Stmol", "license": "MIT repository asset; trademarks retained"}]
---

SSH Keys Manager looks after the files in your `~/.ssh` folder, so routine key and config changes no longer need a trip to Terminal. It can also work on another folder if you keep your keys somewhere else.

- It lists your private and public keys with their metadata.
- It generates key pairs with a chosen filename, key type, comment and optional passphrase, and renames, duplicates or deletes existing keys or changes their comment or passphrase.
- A form-based editor creates, edits, reorders and deletes `Host` blocks in your SSH config, assigns `IdentityFile` keys and can check from the sidebar whether configured hosts respond.
- A menu bar menu copies public or private keys without opening the main window.

A Read-only mode blocks operations that would change existing SSH files, such as editing, overwriting, renaming and deleting, so you can browse and copy keys without risking a working setup. Settings also cover the SSH folder, config backups and the paths to external tools.

The GitHub release is a disk image with an Apple silicon app that requires macOS 14 or later. The README states that this build is unsigned and not notarized, and gives the `xattr` command that clears the quarantine flag if macOS reports the app as damaged. You can also build it yourself with Xcode or the included Makefile.

The app is written in Swift and SwiftUI. The README says parts of the code were generated with AI, then reviewed and corrected by a human developer.
