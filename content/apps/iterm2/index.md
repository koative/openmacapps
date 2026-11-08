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
sources: ["https://github.com/gnachman/iTerm2", "https://github.com/gnachman/iTerm2/blob/master/LICENSE", "https://iterm2.com/downloads.html", "https://github.com/gnachman/iTerm2/blob/master/README.md"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/gnachman/iTerm2/blob/master/images/AppIcon.png", "credit": "iTerm2 contributors", "license": "GPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

iTerm2 replaces the built-in Terminal app on macOS. You run shells in windows, tabs and split panes, and organise them with profiles that set appearance and behaviour per session.

Many of its features depend on shell integration, a small script loaded into your shell. With it, iTerm2 knows where each command and prompt starts and which host and directory you are in. It can then mark prompts, keep per-host history, and download files over SCP with a click. Other features include:

- tmux integration, where `tmux -CC` turns tmux windows into ordinary iTerm2 windows and tabs
- triggers that run an action when output matches a regular expression
- a hotkey window that drops down over other apps, including full-screen ones
- inline images through the `imgcat` tool
- instant replay to scroll back through earlier screen states
- a Python API for custom status bar items, menu items and automation

Profiles can also switch automatically by hostname, user, directory or running command, so a production server can get a different background. An optional AI chat window can read terminal contents when you link it to a session.

The downloads page lists macOS 13 or later for current releases. iTerm2 is free, needs no account, and is distributed under the GNU General Public License version 2.
