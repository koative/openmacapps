---
name: "Cryptomator"
summary: "Encrypts files in password-protected vaults that you keep in local folders or cloud-synced storage."
category: "Privacy & security"
tags: ["encryption", "files", "cloud-storage"]
repository: "https://github.com/cryptomator/cryptomator"
website: "https://cryptomator.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/cryptomator/cryptomator/blob/develop/LICENSE.txt"
download: "https://cryptomator.org/downloads"
freeDownload: true
homebrew: "cryptomator"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/cryptomator/cryptomator", "https://github.com/cryptomator/cryptomator/blob/develop/LICENSE.txt", "https://cryptomator.org/downloads", "https://raw.githubusercontent.com/cryptomator/cryptomator/develop/README.md", "https://cryptomator.org/", "https://cryptomator.org/downloads/mac/", "https://github.com/cryptomator/cryptomator/releases/tag/1.19.6"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/cryptomator/cryptomator/blob/develop/src/main/resources/img/logo128%402x.png", "credit": "Cryptomator contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Cryptomator encrypts files before your cloud sync client uploads them. You pick a folder inside Dropbox, Google Drive, OneDrive or any service that syncs a local directory, give it a password, and it becomes a vault. Unlocking the vault mounts it as a virtual drive. Files you save there are written to the folder encrypted, so the sync client only ever sees ciphertext.

- File contents use AES with 256-bit keys and authenticated encryption, which detects altered files before decryption.
- File names are encrypted and the folder structure is obscured.
- Each vault has its own password, and you can keep as many as you like.
- Every encrypted file carries what it needs for decryption apart from the key, so no shared metadata file can break the vault.

Cryptomator needs no account and does not store your files; the cloud service you already use does that. For mounting the drive, the download page recommends installing FUSE-T on Apple silicon or macFUSE on Intel.

The download page lists macOS 11 as the minimum and offers separate DMGs for Apple silicon and Intel. The Apple silicon DMG is signed with a Developer ID and notarized. The desktop app is free under GPL-3.0, and the developers also offer a commercial license to vendors who need other terms.
