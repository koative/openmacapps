---
name: "SwitchShuttle"
summary: "A tray app that keeps terminal commands in nested menus and runs them by hotkey in the terminal of your choice."
category: "Developer tools"
tags:
  - terminal
  - menu-bar
  - keyboard-shortcuts
  - launcher
  - cross-platform
repository: https://github.com/s00d/switchshuttle
website: https://s00d.github.io/switchshuttle/
license: "MIT"
licenseUrl: https://github.com/s00d/switchshuttle/blob/main/LICENSE
download: https://github.com/s00d/switchshuttle/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/s00d/switchshuttle
  - https://github.com/s00d/switchshuttle/blob/main/LICENSE
  - https://github.com/s00d/switchshuttle/releases/tag/app-v2.3.0
  - https://github.com/s00d/switchshuttle/releases/tag/app-v2.3.1
  - https://raw.githubusercontent.com/s00d/switchshuttle/main/README.md
  - https://s00d.github.io/switchshuttle/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/s00d/switchshuttle/main/src-tauri/icons/256x256.png
    credit: "s00d"
    license: "MIT repository asset; trademarks retained"
---

SwitchShuttle keeps the shell commands you run often in a menu behind its menu bar icon. You click an entry, or press the global hotkey you gave it, and the command opens in your chosen terminal: iTerm, Terminal, Warp, Alacritty, Hyper and others are supported.

Commands are defined in JSON configurations, edited in the app's own editor with validation, or built through a form. Submenus can be nested, and a configuration can be switched off without deleting it. A command can ask for input before it runs and can open in the current window, a new tab or a new window.

- Switch commands toggle a setting in the background and show its state in the menu.
- Monitor commands display live system resource readings in the menu.
- Scheduled commands run on cron expressions.
- Templates add ready-made commands for Git, Docker, Kubernetes, databases and cloud tools.

SwitchShuttle is built with Rust, Tauri and Vue and also runs on Windows and Linux. The 2.3.1 Mac download holds a Universal app for Apple silicon and Intel that needs macOS 10.13 or later and is notarized, and a Homebrew tap is available.

A security manager checks commands against a block list and regular-expression patterns while you edit, and a configuration that fails the check cannot be saved. A command-line tool runs saved commands from a shell, and the app can start at login.
