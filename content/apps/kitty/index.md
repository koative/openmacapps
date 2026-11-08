---
name: "kitty"
summary: "A keyboard-driven terminal with GPU rendering, layouts, and extensible helper tools."
category: "Developer tools"
tags: ["terminal", "shell", "keyboard", "terminal-emulator"]
repository: "https://github.com/kovidgoyal/kitty"
website: "https://sw.kovidgoyal.net/kitty"
license: "GPL-3.0"
licenseUrl: "https://github.com/kovidgoyal/kitty/blob/master/LICENSE"
download: "https://sw.kovidgoyal.net/kitty/binary"
freeDownload: true
homebrew: "kitty"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/kovidgoyal/kitty", "https://github.com/kovidgoyal/kitty/blob/master/LICENSE", "https://sw.kovidgoyal.net/kitty/binary", "https://sw.kovidgoyal.net/kitty/", "https://sw.kovidgoyal.net/kitty/overview/", "https://github.com/kovidgoyal/kitty/releases/tag/v0.50.0"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/kovidgoyal/kitty/blob/master/logo/kitty-128.png", "credit": "kitty contributors", "license": "GPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

kitty runs your shell in a GPU-drawn terminal window that you drive almost entirely from the keyboard. You split one window into several terminals, arrange them with a layout, and keep the whole setup in a single plain-text config file.

- Seven layouts arrange the terminals inside a window: Fat, Grid, Horizontal, Splits, Stack, Tall and Vertical. A shortcut cycles through them.
- Images and animations display inside the terminal through kitty's own graphics protocol.
- Ligatures, emoji, variable fonts and clickable hyperlinks are supported.
- You can browse the whole scrollback, or only the output of the last command, in a pager or editor.
- Scripts and the shell can control a running kitty, and startup sessions open a fixed set of tabs and windows.

Small terminal programs called kittens add the rest. Bundled ones view images, diff files with image support, enter Unicode characters and edit remote files over an existing SSH session. You can write your own in Python.

The code mixes C for speed, Python for the interface and Go for the command-line kittens, and draws everything with OpenGL. A command palette lists every action you can map to a key.

On the Mac, the install script puts kitty in `/Applications/kitty.app`, and running it again updates the app. The GitHub release also carries a disk image. Version 0.50.0 is a Universal build for Apple silicon and Intel, needs macOS 12 or later and is notarized by Apple.
