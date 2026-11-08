---
name: "CopyQ"
summary: "A scriptable clipboard manager that stores text, images and other formats in searchable, editable tabs."
category: "Productivity"
tags: ["clipboard", "scripting", "keyboard-shortcuts", "cross-platform", "clipboard-manager"]
alternativeTo: ["paste"]
repository: "https://github.com/hluk/CopyQ"
website: "https://hluk.github.io/CopyQ/"
license: "GPL-3.0"
licenseUrl: "https://github.com/hluk/CopyQ/blob/master/LICENSE"
download: "https://github.com/hluk/CopyQ/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/hluk/CopyQ", "https://github.com/hluk/CopyQ/blob/master/LICENSE", "https://github.com/hluk/CopyQ/releases", "https://hluk.github.io/CopyQ/", "https://raw.githubusercontent.com/hluk/CopyQ/master/README.md", "https://github.com/hluk/CopyQ/releases/tag/v17.0.0", "https://pasteapp.io/"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/hluk/CopyQ/master/src/images/icon_256x256.png", "credit": "Lukas Holecek and CopyQ contributors", "license": "GPL-3.0 repository asset; trademarks retained"}]
---

CopyQ saves everything you copy, including text, HTML, images and other formats, and files it into tabs you set up yourself. Open the list from the menu bar icon, type to filter it, and press Return to paste the selected item into the window you were using.

- You can edit, sort, reorder, drag and delete items, and add notes and tags to them.
- Global keyboard shortcuts can paste items or run your own commands.
- Commands can run from a menu, from a shortcut or whenever the clipboard changes, and a public repository collects ready-made ones.
- The `copyq` command-line tool and a scripting API read, add and copy items from the Terminal or scripts while the app is running.
- Copies from chosen windows, such as a password manager, or containing chosen text, can be ignored.
- An optional Vim-like editor uses keyboard shortcuts.

The interface is built on Qt, and the same app runs on Linux and Windows. Saved items come back when CopyQ next starts.

CopyQ supports macOS 13 and later, and Homebrew installs it with `brew install --cask copyq`. The Apple silicon DMG of version 17 is not signed with a Developer ID. If macOS reports the app as damaged, the README gives commands to clear the quarantine flag and re-sign it locally.

Paste syncs its history across Mac, iPhone and iPad. CopyQ has no mobile version; it trades that for scripting, a command line and builds for Linux and Windows.
