---
name: RelayBar
summary: A menu bar manager for saved SSH port forwards, with a remote file browser built on the system ssh and sftp.
category: Developer tools
tags:
- ssh
- network
- menu-bar
repository: https://github.com/lx2026/RelayBar
website: https://lx2026.github.io/RelayBar/
license: MIT
licenseUrl: https://github.com/lx2026/RelayBar/blob/main/LICENSE
download: https://github.com/lx2026/RelayBar/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/lx2026/RelayBar
- https://github.com/lx2026/RelayBar/blob/main/LICENSE
- https://raw.githubusercontent.com/lx2026/RelayBar/main/README.md
- https://github.com/lx2026/RelayBar/releases/tag/v1.6.0
- https://github.com/lx2026/RelayBar/releases
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/lx2026/RelayBar/main/Assets/RelayBar-AppIcon-1024.png
  credit: RelayBar contributors
  license: MIT-licensed repository asset; no separate icon terms stated
---

RelayBar saves your SSH port forwards as named profiles in the menu bar, and one click starts or stops each of them. Paste a forwarding command such as `ssh -N -D 9999 user@server` and it becomes a profile with typed rules.

- One profile can mix local, remote, SOCKS and Unix-socket rules over a single SSH connection.
- A local TCP forward opens in your default browser with one click.
- Dropped connections retry with exponential backoff, up to a limit you set in Settings.
- Startup errors show next to the tunnel that failed.

RelayBar calls macOS's own `/usr/bin/ssh` and `sftp`, so your `~/.ssh/config`, known hosts, keys and SSH agent all apply. It never starts a shell, and import rejects options that could run local commands. SSH runs non-interactively, which means password logins do not work. The app forwards TCP only and leaves the macOS proxy settings alone.

Version 1.6.0 needs macOS 13 or later. The ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and the developer's Homebrew tap installs it too.

Remote Files is a separate workspace. Paste a path or pick a saved host, then browse folders, download files or whole folders, upload a single file, and preview images, Markdown, JSON and MP4 video. Deletion waits five seconds so you can undo it. Search, sync and editing are left out on purpose.
