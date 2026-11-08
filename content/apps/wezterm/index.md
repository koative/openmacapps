---
name: "WezTerm"
summary: "A configurable terminal and multiplexer with tabs, panes, and Lua-based settings."
category: "Developer tools"
tags: ["terminal", "shell", "cross-platform", "terminal-emulator"]
repository: "https://github.com/wezterm/wezterm"
website: "https://wezterm.org"
license: "MIT"
licenseUrl: "https://github.com/wezterm/wezterm/blob/main/LICENSE.md"
download: "https://wezterm.org/install/macos.html"
freeDownload: true
homebrew: "wezterm"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/wezterm/wezterm", "https://github.com/wezterm/wezterm/blob/main/LICENSE.md", "https://wezterm.org/install/macos.html", "https://wezterm.org/features.html", "https://wezterm.org/config/files.html", "https://wezterm.org/multiplexing.html", "https://raw.githubusercontent.com/wezterm/wezterm/main/README.md", "https://github.com/wezterm/wezterm/releases/tag/20240203-110809-5046fc22"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/wezterm/wezterm/blob/main/assets/icon/terminal.png", "credit": "WezTerm contributors", "license": "MIT; project trademarks retained"}, {"path": "./assets/screenshot.png", "source": "https://github.com/wezterm/wezterm/blob/main/docs/screenshots/two.png", "credit": "WezTerm contributors", "license": "MIT; project trademarks retained"}]
screenshots: [{"src": "./assets/screenshot.png", "alt": "WezTerm on macOS running Vim with Rust source code and syntax highlighting.", "source": "https://github.com/wezterm/wezterm/blob/main/docs/screenshots/two.png", "credit": "WezTerm contributors"}]
icon: "./assets/icon.png"
---

WezTerm runs your shells in tabs, split panes and windows, and it can attach those tabs to a multiplexer server running on another host. Press Command-T for a new tab and Ctrl-Shift-Alt-% to split the current pane side by side.

Configuration is a Lua file, `.wezterm.lua` in your home folder. Fonts, font size and the color scheme are set in ordinary Lua, and the terminal reloads the file when you save it.

- Multiplexing works on local domains, and on remote hosts over SSH or TLS, with the remote tabs attached to the local window so mouse, clipboard and scrollback work as usual.
- A built-in SSH client opens remote shells in their own tabs.
- Fonts get ligatures, color emoji, fallback fonts and true color.
- Images display through the iTerm2 protocol, Kitty graphics and experimental Sixel support, with an `imgcat` command included.
- Scrollback is searchable with Ctrl-Shift-F.
- Serial ports can be opened directly for embedded and Arduino work.

The same app and the same Lua file also work on Linux, Windows, FreeBSD and NetBSD.

On the Mac it ships as a ZIP holding a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized. The project builds on Big Sur and expects it to run back to Mojave. To use the `wezterm` command line tool, add the app's `Contents/MacOS` folder to your PATH. The latest stable release dates from February 2024, and nightly builds are offered next to it, also through Homebrew as `wezterm@nightly`.
