---
name: "Kurenai"
summary: "Clipboard history with saved lists, a paste queue, and repair of text typed in the wrong keyboard layout."
category: "Utilities"
tags:
  - clipboard
  - clipboard-manager
  - menu-bar
  - keyboard-shortcuts
alternativeTo:
  - paste
repository: "https://github.com/Lorder19/kurenai"
website: "https://lorder19.github.io/kurenai/"
license: "MIT"
licenseUrl: "https://github.com/Lorder19/kurenai/blob/main/LICENSE"
download: "https://github.com/Lorder19/kurenai/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Lorder19/kurenai"
  - "https://github.com/Lorder19/kurenai/blob/main/LICENSE"
  - "https://github.com/Lorder19/kurenai/releases"
  - "https://lorder19.github.io/kurenai/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Lorder19/kurenai/main/Icon/Kurenai.icns"
    credit: "Kurenai contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Kurenai keeps a searchable history of what you copy, both text and images, and pastes any item with a shortcut. Saved lists hold replies, addresses and other snippets you paste often, and a paste queue loads several copied items so that each Command-V pastes the next one. It also notices when a word was typed in the wrong keyboard layout, such as English letters typed while a Russian layout is active, and retypes it correctly. It suits people who copy a lot and want a small, free clipboard manager.

It runs on macOS 14 or later, on Apple silicon or Intel, and needs Accessibility permission to press Command-V for you. The build is not notarized because its developer has no paid Apple developer account yet, so the first launch has to be allowed under System Settings, Privacy & Security, with Open Anyway. Copies that password managers mark as concealed are not saved, and history is encrypted on disk. The app sends nothing anywhere except an optional daily update check against GitHub, which is off by default.
