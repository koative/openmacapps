---
name: "Alacritty"
summary: "Runs your shell in a GPU-accelerated terminal configured through a TOML file."
category: "Developer tools"
tags: ["terminal", "shell", "cross-platform", "terminal-emulator"]
repository: "https://github.com/alacritty/alacritty"
website: "https://alacritty.org"
license: "Apache-2.0"
licenseUrl: "https://github.com/alacritty/alacritty/blob/master/LICENSE-APACHE"
download: "https://github.com/alacritty/alacritty/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/alacritty/alacritty", "https://github.com/alacritty/alacritty/blob/master/LICENSE-APACHE", "https://raw.githubusercontent.com/alacritty/alacritty/master/README.md", "https://raw.githubusercontent.com/alacritty/alacritty/master/docs/features.md", "https://alacritty.org", "https://github.com/alacritty/alacritty/releases", "https://github.com/alacritty/alacritty/releases/tag/v0.17.0"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/alacritty/alacritty/blob/master/extra/logo/compat/alacritty-term.png", "credit": "Alacritty contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Alacritty runs your shell and command-line programs in a terminal window drawn with OpenGL. It starts with usable defaults and reads its settings from an `alacritty.toml` file that you create yourself, for example in `~/.config/alacritty/`. The full option list is in `man 5 alacritty` and on the website.

Tabs, splits and a settings window are left out on purpose. The project leaves them to a window manager or a multiplexer such as tmux. What it adds on top of plain terminal emulation is keyboard-centred:

- Vi mode, opened with Control-Shift-Space, moves through the scrollback with vi keys and selects and copies text.
- Search finds text in the scrollback with Command-F and Command-B on macOS.
- Hints match visible text such as URLs with a regular expression and open them or pass them to another program.
- One running instance can open several windows, from a key binding or with `alacritty msg create-window`.

For the Mac, the release page offers a disk image with a Universal app for Apple silicon and Intel; version 0.17.0 came out in April 2026. The same code runs on Linux, BSD and Windows.

The project still calls the software beta. A few features are missing and some bugs remain open.
