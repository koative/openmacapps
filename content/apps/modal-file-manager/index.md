---
name: "Modal File Manager"
summary: "A keyboard-driven file manager that uses Vim-style modal commands."
category: "Productivity"
tags: ["files", "keyboard", "vim", "file-manager"]
repository: "https://github.com/raguay/ModalFileManager"
website: "https://github.com/raguay/ModalFileManager"
license: "MIT"
licenseUrl: "https://github.com/raguay/ModalFileManager/blob/main/LICENSE"
download: "https://github.com/raguay/ModalFileManager/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/raguay/ModalFileManager", "https://github.com/raguay/ModalFileManager/blob/main/LICENSE", "https://github.com/raguay/ModalFileManager/releases", "https://raw.githubusercontent.com/raguay/ModalFileManager/main/README.md", "https://github.com/raguay/ModalFileManager/releases/tag/v2.0.1"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/raguay/ModalFileManager/main/build/appicon.png", "credit": "Richard Guay", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Modal File Manager lets you drive a two-pane file browser from the keyboard the way you drive Vim. In normal mode, `j` and `k` move the cursor, `l` enters a folder and `h` goes up, while `c`, `m` and `x` copy, move and delete the selection. Press `v` for visual mode to select entries, or `i` for insert mode to create files and folders or rename one. A count in front of a key repeats it, so `5j` jumps five rows.

- A command prompt, opened with `:`, runs any command by name.
- Quick search filters the current pane down to entries containing the text you type.
- Entries can be selected with a regular expression, and past expressions are kept for reuse.
- Extensions can add whole new modes; the Favorites extension adds a `fav` mode for jumping between saved folders.
- Themes and extensions can be browsed and installed from GitHub inside the app.

Key maps, themes and extensions live in `~/.config/modalfilemanager`. Sending deleted items to the Trash relies on the `trash-cli` tool from Homebrew, and video details in the side panel use ffmpeg. You can also launch it from the shell with one or two paths to open in the panes.

The v2.0.1 macOS release is a Universal zip for Apple silicon and Intel that lists macOS 10.13 as its minimum. The author calls it beta software and warns that it can delete files permanently. Files cannot be dragged out to other apps, a limit the author puts down to the app being built on web technology.
