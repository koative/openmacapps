---
name: "Claude Accounts"
summary: "Switches the Claude desktop app between saved accounts from the menu bar, keeping each account's sessions."
category: "AI"
tags:
  - account-switcher
  - claude-code
  - sync
  - backup
  - menu-bar
repository: "https://github.com/jomonkj/claude-accounts"
website: "https://github.com/jomonkj/claude-accounts"
license: "MIT"
licenseUrl: "https://github.com/jomonkj/claude-accounts/blob/main/LICENSE"
download: "https://github.com/jomonkj/claude-accounts/releases/latest"
freeDownload: true
featured: false
added: "2026-11-09"
verified: "2026-11-09"
sources:
  - "https://github.com/jomonkj/claude-accounts"
  - "https://github.com/jomonkj/claude-accounts/blob/main/LICENSE"
  - "https://github.com/jomonkj/claude-accounts/releases"
---

Claude Accounts moves the Claude desktop app from one signed-in account to another when you click a name in its menu bar panel. You sign in to each account once inside Claude, and the app keeps a copy of that login. A switch quits Claude, saves the current login, loads the chosen one, reopens Claude and checks that the new login works.

Other parts of the app:

- Two-way sync of session lists between the accounts you mark as your own, with a preview and a backup before anything changes.
- A list of sessions that stopped on a usage limit, showing when each limit resets, and a notification that offers another of your accounts.
- Daily backups with restore, plus pinning, reordering and shortcuts for opening the panel or moving to the next account.
- A `claude-switch` command for the same actions in Terminal, and `claude-accounts` for a table of accounts.

It never switches by itself. Only the desktop app is covered; the `claude` CLI in Terminal keeps its own login. A switch also stops any task Claude is running, so finish those first. Saved logins sit in a folder that only your macOS user can read, and the files are copied as they are, without decryption. The developer says the only network traffic is a daily update check against GitHub Releases.

Version 1.1.2 is a universal build for Apple silicon and Intel and needs macOS 14 or later. It is not notarized, so the first launch goes through Open in the Finder's right-click menu. Switching depends on how Claude stores its files. If a Claude update changes that layout, a check stops the switch before it touches anything. The project is unofficial and not affiliated with Anthropic.
