---
name: "Configs"
summary: "Finds, edits and tracks the dotfiles on your Mac, such as .zshrc and .gitconfig, in one window."
category: "Developer tools"
tags:
  - developer-utilities
  - text-editor
  - terminal
  - version-control
repository: https://github.com/iHongRen/configEditor
website: https://github.com/iHongRen/configEditor
license: "Apache-2.0"
licenseUrl: https://github.com/iHongRen/configEditor/blob/main/LICENSE
download: https://github.com/iHongRen/configEditor/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/iHongRen/configEditor
  - https://github.com/iHongRen/configEditor/blob/main/LICENSE
  - https://github.com/iHongRen/configEditor/releases
  - https://raw.githubusercontent.com/iHongRen/configEditor/main/README.md
  - https://raw.githubusercontent.com/iHongRen/configEditor/main/README_en.md
  - https://github.com/iHongRen/configEditor/releases/tag/v2.0.3
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/iHongRen/configEditor/main/Configs/Configs/Assets.xcassets/AppIcon.appiconset/icon-256%402x.png
    credit: "iHongRen and Configs contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Configs gathers the dotfiles in your home folder into one window, so you can open `.zshrc`, `.bashrc`, `.gitconfig` or `.vimrc` without hunting for hidden files. It finds the common ones on its own. You can add others by importing several at once or dragging them onto the window.

Save a shell profile such as `.zshrc` and Configs runs `source` on it, so the change applies straight away. Every edit is also committed to a Git history in the background. From there you can view earlier versions, compare them as a diff and restore one with a click.

- The editor highlights syntax for several file types, with line numbers, search, zoom and dark mode.
- Command-/ toggles a comment, Command-F searches and Command-S saves.
- Short coloured text tags, pinned files and custom groups keep a long list in order.
- Right-clicking a file opens it in Finder, Terminal, VS Code or another app.

Configs needs macOS 13 or later. The release is a small DMG holding an app built for Apple silicon only. It is signed with a development certificate and not notarized, and the README tells you to clear the quarantine flag with `xattr` after copying it to Applications. You can also build it yourself in Xcode from the SwiftUI source.

The interface comes in English and Chinese. It follows the system language, and you can switch it from the About page.
