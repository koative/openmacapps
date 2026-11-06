---
name: "zshrc"
summary: "Minimal macOS editor for ~/.zshrc with shell syntax highlighting, search and a syntax check on every save."
category: "Developer tools"
tags:
  - zsh
  - shell
  - terminal
  - text-editor
repository: "https://github.com/iHongRen/zshrc"
website: "https://github.com/iHongRen/zshrc"
license: "Apache-2.0"
licenseUrl: "https://github.com/iHongRen/zshrc/blob/main/LICENSE"
download: "https://github.com/iHongRen/zshrc/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iHongRen/zshrc"
  - "https://github.com/iHongRen/zshrc/blob/main/LICENSE"
  - "https://github.com/iHongRen/zshrc/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/iHongRen/zshrc/releases/download/v1.0.1/zshrc.dmg"
    credit: "iHongRen"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

zshrc opens your ~/.zshrc file in a single window with line numbers, shell syntax highlighting, a search bar with next and previous matches, and font sizing. Saving runs a syntax check, and the status bar shows save state, syntax state and the cursor position. It reads and writes the file directly and can reveal it in Finder. It suits people who maintain their zsh startup file by hand and want a small editor for that one file instead of a general-purpose text app. The interface is available in English and Simplified Chinese, with light, dark or system appearance.

It needs macOS 14 or later; the app binary is arm64 only. The build is unsigned and not notarized, so the first launch must be allowed in System Settings; the README alternatively suggests removing the quarantine attribute with xattr. The project is a small, single-author tool, so expect a narrow feature set.
