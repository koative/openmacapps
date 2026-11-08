---
name: "VimR"
summary: "A Neovim-based editor for macOS with a file browser, fuzzy file finder and Markdown preview."
category: "Developer tools"
tags:
  - code-editor
  - text-editor
  - markdown
  - previews
repository: https://github.com/qvacua/vimr
website: https://github.com/qvacua/vimr
license: "MIT"
licenseUrl: https://github.com/qvacua/vimr/blob/master/LICENSE
download: https://github.com/qvacua/vimr/releases
freeDownload: true
homebrew: "vimr"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/qvacua/vimr
  - https://github.com/qvacua/vimr/blob/master/LICENSE
  - https://github.com/qvacua/vimr/releases
  - https://raw.githubusercontent.com/qvacua/vimr/master/README.md
  - https://github.com/qvacua/vimr/releases/tag/v0.67.0-20261010.130648
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/qvacua/vimr/master/VimR/VimR/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Tae Won Ha and VimR contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

VimR puts Neovim in a Mac window and adds the GUI pieces a terminal session lacks. The app ships with its own Neovim binary and runtime files.

- A fuzzy file finder modelled on Xcode's Open Quickly.
- A simple file browser, inside a flexible workspace modelled on JetBrains IDEs.
- Markdown preview, plus a generic HTML preview that keeps its scroll position when it reloads.
- Pinch to zoom and two-finger scrolling on the trackpad.
- A command-line tool.

Font ligatures are off by default; turn them on in Preferences. VimR is written in Swift, and its parts are published as reusable Swift packages. NvimView, for one, embeds Neovim in any Cocoa app.

Version 0.67.0 is a tar.bz2 archive on the GitHub releases page. Inside is a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and it needs macOS 14.6 or later. Homebrew carries it as the vimr cask. The developer works on it to explore Neovim and a Redux-style architecture, and takes support through GitHub Sponsors.
