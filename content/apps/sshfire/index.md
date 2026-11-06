---
name: "SSHFire"
summary: "Desktop SSH client with tabbed and split terminals, an SFTP panel that follows the shell, and passphrases kept in the Keychain."
category: "Developer tools"
tags:
  - ssh
  - terminal
  - sftp
alternativeTo:
  - termius
repository: "https://github.com/aralozaltin/sshfire"
website: "https://github.com/aralozaltin/sshfire"
license: "MIT"
licenseUrl: "https://github.com/aralozaltin/sshfire/blob/main/LICENSE"
download: "https://github.com/aralozaltin/sshfire/releases/download/v0.1.9/SSHFire-macOS-AppleSilicon.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aralozaltin/sshfire"
  - "https://github.com/aralozaltin/sshfire/blob/main/LICENSE"
  - "https://github.com/aralozaltin/sshfire/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/aralozaltin/sshfire/releases/download/v0.1.9/SSHFire-macOS-AppleSilicon.dmg"
    credit: "SSHFire contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

SSHFire is a desktop SSH client in the spirit of MobaXterm. It keeps a list of saved servers, opens terminals in tabs with side-by-side, stacked or grid layouts, and has an SFTP panel that follows the working directory of the shell. Passwords and key passphrases are stored in the macOS Keychain rather than in files, and live server metrics appear alongside the session. It is for people who manage several servers from one Mac.

The release page has separate DMGs for Apple silicon and Intel. The README also offers a Homebrew route that skips the first-launch prompt. The Apple silicon DMG is ad-hoc signed and not notarized, so macOS blocks the first launch until you choose Open Anyway in System Settings → Privacy & Security, or run the xattr command from the README. The README does not state a minimum macOS version.
