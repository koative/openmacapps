---
name: "qutebrowser"
summary: "A keyboard-driven web browser with Vim-style commands and a minimal interface, built on Qt WebEngine."
category: "Internet"
tags:
  - browser
  - keyboard
  - vim
  - minimal
repository: "https://github.com/qutebrowser/qutebrowser"
website: "https://www.qutebrowser.org"
license: "GPL-3.0-or-later"
licenseUrl: "https://github.com/qutebrowser/qutebrowser/blob/main/LICENSE"
download: "https://github.com/qutebrowser/qutebrowser/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/qutebrowser/qutebrowser"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/LICENSE"
  - "https://github.com/qutebrowser/qutebrowser/releases"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/README.asciidoc"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/doc/install.asciidoc"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/doc/quickstart.asciidoc"
  - "https://github.com/qutebrowser/qutebrowser/blob/main/doc/help/configuring.asciidoc"
  - "https://github.com/qutebrowser/qutebrowser/releases/tag/v3.7.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/qutebrowser/qutebrowser/main/qutebrowser/icons/qutebrowser-256x256.png"
    credit: "qutebrowser contributors"
    license: "GPL-3.0-or-later; upstream project asset, trademarks retained"
---

qutebrowser is a web browser you drive from the keyboard. Press `o` and type an address to open a page, or type plain words to search, which goes to DuckDuckGo unless you change it. Press `f` and labels appear next to the links and buttons on the page; type a label to click it without reaching for the mouse.

- `hjkl` or the arrow keys scroll, and `H` and `L` go back and forward.
- `J` and `K` switch tabs, `d` closes one and `u` brings it back.
- `/` searches the page, with `n` and `N` stepping through matches.
- `:` opens a command line, and `:help` shows the built-in documentation.

The interface is kept minimal, and the project names dwb and the Vimperator and Pentadactyl add-ons as its inspiration. qutebrowser is written in Python on Qt, and pages render through QtWebEngine. Running `:adblock-update` downloads blocking lists and turns ad blocking on.

Settings changed with `:set` and `:bind` are saved for you. For more control you can write a `config.py` file in Python, and many settings can apply only to sites matching a URL pattern.

The Mac downloads on the releases page are separate DMGs for Apple silicon and Intel. The project does not notarize them, so macOS may block the first launch; the install guide suggests right-clicking the app and choosing Open. The bundled QtWebEngine lacks proprietary codecs, so H.264 video needs a self-built QtWebEngine. Updates have to be installed by hand.
