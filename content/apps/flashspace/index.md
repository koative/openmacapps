---
name: "FlashSpace"
summary: "A fast virtual workspace manager that shows and hides groups of apps per display, replacing macOS Spaces."
category: "Productivity"
tags:
  - window-manager
  - workspaces
  - window-management
  - keyboard-shortcuts
  - menu-bar
  - native
repository: https://github.com/wojciech-kulik/FlashSpace
website: https://github.com/wojciech-kulik/FlashSpace
license: "GPL-3.0"
licenseUrl: https://github.com/wojciech-kulik/FlashSpace/blob/main/LICENSE
download: https://github.com/wojciech-kulik/FlashSpace/releases
homebrew: "flashspace"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/wojciech-kulik/FlashSpace
  - https://github.com/wojciech-kulik/FlashSpace/blob/main/LICENSE
  - https://github.com/wojciech-kulik/FlashSpace/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/wojciech-kulik/FlashSpace/releases/download/v4.19.83/FlashSpace.app.zip
    credit: "FlashSpace contributors"
    license: "GPL-3.0; app icon taken from the official release bundle, trademarks retained"
---

FlashSpace replaces macOS Spaces with its own workspaces. You assign apps to a workspace and a display, give it a hotkey, and switching shows those apps while hiding everything else on that display, without the system's sliding animation. Each display switches independently, and workspaces can also follow the displays their apps are on.

Around that core it adds an Option-Tab workspace switcher, a grid preview of all workspaces, hotkeys for moving focus between windows, floating apps that stay visible everywhere, profiles, trackpad gestures and a configurable menu bar label. Settings can be edited in the app or in JSON, YAML or TOML files, and a command-line tool and SketchyBar hooks allow scripting.

It needs macOS 14 or later. The project asks you to keep all apps on one native Space per display and to leave "Displays have separate Spaces" turned on in Desktop & Dock settings. Picture-in-Picture handling is experimental.
