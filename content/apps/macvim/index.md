---
name: "MacVim"
summary: "Vim editing in a Mac desktop app with platform integration and graphical windows."
category: "Developer tools"
tags: ["code-editor", "vim", "native"]
repository: "https://github.com/macvim-dev/macvim"
website: "https://macvim.org"
license: "Vim"
licenseUrl: "https://github.com/macvim-dev/macvim/blob/master/LICENSE"
download: "https://github.com/macvim-dev/macvim/releases"
freeDownload: true
homebrew: "macvim-app"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/macvim-dev/macvim", "https://github.com/macvim-dev/macvim/blob/master/LICENSE", "https://github.com/macvim-dev/macvim/releases", "https://raw.githubusercontent.com/macvim-dev/macvim/master/README.md", "https://macvim.org", "https://github.com/macvim-dev/macvim/releases/tag/release-184"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/macvim-dev/macvim/blob/master/src/MacVim/icons/MacVim.icns", "credit": "MacVim contributors", "license": "Vim; project trademarks retained"}]
icon: "./assets/icon.png"
---

MacVim runs Vim in its own Mac windows, with menus, toolbars, scroll bars and dialog boxes around the editor you already know. The editing itself is Vim's: the same modes, commands and plugins.

- Command-key shortcuts, trackpad gestures and the Touch Bar can be mapped to Vim actions.
- Full screen comes in two forms: the macOS one and Vim's own.
- Vim tabs appear as GUI tabs with colours you can set.
- Text renders with font ligatures. Inside the editor you can use Services, look words up in the dictionary and call Apple Intelligence Writing Tools.

Start it from the Dock, or type `mvim` in Terminal to open a file in a MacVim window.

MacVim is a fork of Vim and regularly merges upstream changes, so core Vim features can arrive a little later than in the upstream `vim` package. Scripting interfaces for Lua, Perl, Python 2 and 3, and Ruby are built in, each tied to a specific language version listed in the release notes.

The release DMG holds a Universal app, notarized by Apple, that needs macOS 10.13 or later; a separate legacy build covers 10.9 to 10.12. Homebrew installs the same binary with `brew install --cask macvim-app`. It is distributed under the Vim license.
