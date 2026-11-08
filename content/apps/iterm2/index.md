---
name: "iTerm2"
summary: "A Mac terminal with split panes, search, profiles, and deep shell integration."
category: "Developer tools"
tags: ["terminal", "shell", "automation", "terminal-emulator"]
repository: "https://github.com/gnachman/iTerm2"
website: "https://iterm2.com"
license: "GPL-2.0"
licenseUrl: "https://github.com/gnachman/iTerm2/blob/master/LICENSE"
download: "https://iterm2.com/downloads.html"
freeDownload: true
homebrew: "iterm2"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/gnachman/iTerm2", "https://github.com/gnachman/iTerm2/blob/master/LICENSE", "https://iterm2.com/downloads.html", "https://github.com/gnachman/iTerm2/blob/master/README.md", "https://iterm2.com/documentation-shell-integration.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/gnachman/iTerm2/blob/master/images/AppIcon.png", "credit": "iTerm2 contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

You run shells in iTerm2's windows, tabs and split panes, organise them with profiles, and use it in place of the built-in Terminal app. Current releases need macOS 13 or later. iTerm2 is free, licensed under the GNU General Public License version 2.

Many features depend on shell integration. It configures your shell to send special escape codes to iTerm2. With it, iTerm2 knows where each command and prompt starts and which host and directory you are in. It can then mark prompts, keep per-host history, and download files over SCP with a click. Other features include:

- tmux integration, where `tmux -CC` turns tmux windows into ordinary iTerm2 windows and tabs
- triggers that run an action when output matches a regular expression
- a hotkey window that drops down over other apps, including full-screen ones
- inline images through the `imgcat` tool
- instant replay to scroll back through earlier screen states
- a Python API for custom status bar items, menu items and automation

Profiles can switch automatically by hostname, user, directory or running command. So a production server can get its own background. An optional AI chat window can read terminal contents, but only when you link it to a session.
