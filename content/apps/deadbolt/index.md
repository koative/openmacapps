---
name: "Deadbolt"
summary: "Encrypts and decrypts files or folders with a password in a small drag-and-drop window."
category: "Privacy & security"
tags:
  - encryption
  - files
  - cross-platform
  - passwords
repository: "https://github.com/alichtman/deadbolt"
website: "https://github.com/alichtman/deadbolt"
license: "MIT"
licenseUrl: "https://github.com/alichtman/deadbolt/blob/main/LICENSE"
download: "https://github.com/alichtman/deadbolt/releases"
freeDownload: true
homebrew: "deadbolt"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/alichtman/deadbolt", "https://github.com/alichtman/deadbolt/blob/main/LICENSE", "https://github.com/alichtman/deadbolt/releases", "https://raw.githubusercontent.com/alichtman/deadbolt/main/README.md", "https://raw.githubusercontent.com/alichtman/deadbolt/main/LICENSE", "https://github.com/alichtman/deadbolt/releases/tag/v2.1.1"]
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/alichtman/deadbolt/main/assets/icon.png"
    credit: "Aaron Lichtman and Deadbolt contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Deadbolt encrypts a file or folder with nothing more than a password. You pick the item, type the password, and get an encrypted file ending in `.deadbolt`. Decrypting works the same way in reverse.

The encrypted file opens with Deadbolt on macOS, Windows or Linux, so you can send it to someone on another system. Set Deadbolt as the default app for `.deadbolt` files and a double-click opens one for decryption.

Under the hood it uses AES-256-GCM for the data and argon2id to turn the password into a key. The authentication tag from GCM mode verifies that encrypted data has not been altered. Version 2.1.0 replaced PBKDF2-SHA512 with argon2id, and files made with the older format still decrypt. Encrypted files start with a version header so the format can change without breaking old files.

A command-line tool, installed from npm as `deadbolt-cli`, encrypts and decrypts without the window and asks for the password if you leave it out.

Deadbolt is built on Electron. Version 2.1.1 has separate DMGs for Apple silicon and Intel. The Apple silicon app is notarized and requires macOS 10.15 or later. Homebrew also installs it as a cask.
