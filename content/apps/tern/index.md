---
name: "tern"
summary: "Native SSH client for macOS with saved hosts, SFTP, split panes and snippets, and passwords from your password manager."
category: "Developer tools"
tags:
  - ssh
  - sftp
  - terminal
  - developer-utilities
alternativeTo:
  - termius
repository: "https://github.com/your-moon/tern"
website: "https://tern.carrot-soft.tech"
license: "GPL-3.0"
licenseUrl: "https://github.com/your-moon/tern/blob/main/LICENSE"
download: "https://github.com/your-moon/tern/releases/download/v0.1.3/tern-0.1.3-macos-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/your-moon/tern"
  - "https://github.com/your-moon/tern/blob/main/LICENSE"
  - "https://github.com/your-moon/tern/releases/download/v0.1.3/tern-0.1.3-macos-arm64.dmg"
  - "https://tern.carrot-soft.tech"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/your-moon/tern/releases/download/v0.1.3/tern-0.1.3-macos-arm64.dmg"
    credit: "tern contributors"
    license: "Apache-2.0 (Material Design Icons bird glyph, Pictogrammers); trademarks retained"
---

tern is a native SSH client for macOS, written in Rust on Zed's GPUI. It keeps saved hosts, opens SFTP browsers, splits panes, runs snippets and sets up port forwards. A shortcut types a sudo password only when you ask, taking it from your SSH key or a password-manager command. Hosts and settings sync through a private Git repository you own, encrypted on your Mac first. It suits people who manage servers in Termius or Tabby and want a small app with no account.

The DMG is an Apple silicon (arm64) build. It is signed with a Developer ID and notarized, so it opens without a Gatekeeper warning, and its bundle declares macOS 11.0 or later. The README says the Windows and Linux builds are previews that have not yet been run on a real desktop.
