---
name: "Termstead"
summary: "Mac SSH, SFTP, RDP and Telnet client with a session tree, jump hosts and Keychain-stored passwords."
category: "Developer tools"
tags:
  - ssh
  - terminal
  - sftp
alternativeTo:
  - mobaxterm
repository: "https://github.com/pkhorenyan/termstead"
website: "https://github.com/pkhorenyan/termstead"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/pkhorenyan/termstead/blob/main/LICENSE"
download: "https://github.com/pkhorenyan/termstead/releases/download/v0.8.1/Termstead.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/pkhorenyan/termstead"
  - "https://github.com/pkhorenyan/termstead/blob/main/LICENSE"
  - "https://github.com/pkhorenyan/termstead/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/pkhorenyan/termstead/main/Resources/Assets.xcassets/AppIcon.appiconset/icon_512.png"
    credit: "Termstead contributors"
    license: "GPL-3.0-or-later; upstream app icon, trademarks retained"
---

Termstead is a Mac client for SSH, SFTP, RDP and Telnet, built for people who manage many servers and are coming from MobaXterm. Sessions sit in a tree with jump hosts, split panes, broadcast input and snippets, and an SFTP tab browses the server over the connection already open. Each SSH tab runs the system OpenSSH, so your agent, `~/.ssh/config` and `ProxyJump` behave as they do in Terminal, and passwords are kept in the login Keychain.

It needs macOS 14 Sonoma or later and is universal, running on Apple silicon and Intel. You can install it with Homebrew or from the DMG on the releases page, and it checks for updates against a signed feed. The README says there are no accounts and no analytics. Remote desktop (RDP) and Telnet are built in alongside SSH.
