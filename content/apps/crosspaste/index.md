---
name: "CrossPaste"
summary: "A clipboard manager that syncs copied text, images and files between your computers over the local network, encrypted."
category: "Productivity"
tags:
  - clipboard
  - clipboard-manager
  - sync
  - encryption
  - menu-bar
  - cross-platform
alternativeTo:
  - paste
repository: https://github.com/CrossPaste/crosspaste-desktop
website: https://crosspaste.com/en/
license: "AGPL-3.0"
licenseUrl: https://github.com/CrossPaste/crosspaste-desktop/blob/main/LICENSE
download: https://crosspaste.com/en/download
homebrew: "crosspaste"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/CrossPaste/crosspaste-desktop
  - https://github.com/CrossPaste/crosspaste-desktop/blob/main/LICENSE
  - https://crosspaste.com/en/download
  - https://github.com/CrossPaste/crosspaste-desktop/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/CrossPaste/crosspaste-desktop/main/app/src/desktopMain/composeResources/drawable/crosspaste_mac.png
    credit: "CrossPaste contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

CrossPaste keeps a clipboard history and shares it between your own computers. Text, links, colors, rich text, images and files copied on one paired device can be pasted on the others, and Windows and Linux are supported alongside macOS. There is no cloud account or relay server: devices talk to each other directly on the local network, and content is end-to-end encrypted.

History is stored locally, with automatic cleanup to limit disk use. On-device OCR pulls text out of copied images, and a command-line mode can copy, paste and search history from scripts. The app also includes an MCP server that can give AI assistants access to your clipboard history, and a Chrome extension syncs with the browser.

The macOS app runs from the menu bar, needs macOS 14 or later, and comes in separate builds for Apple silicon and Intel. Companion phone apps are distributed separately through mobile app stores.
