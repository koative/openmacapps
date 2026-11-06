---
name: "OpenPets"
summary: "Shared desktop pet that shows progress and messages from AI coding agents and local apps through MCP or a CLI."
category: "Utilities"
tags:
  - coding-agents
  - mcp
  - desktop
repository: "https://github.com/alterhq/openpets"
website: "https://openpets.sh"
license: "MIT"
licenseUrl: "https://github.com/alterhq/openpets/blob/main/LICENSE"
download: "https://github.com/alterhq/openpets/releases/download/v0.7.2/OpenPets-0.7.2.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/alterhq/openpets"
  - "https://github.com/alterhq/openpets/blob/main/LICENSE"
  - "https://github.com/alterhq/openpets/releases"
  - "https://openpets.sh"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/alterhq/openpets/main/Packaging/OpenPets.app/Contents/Resources/AppIcon.icns"
    credit: "OpenPets contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

OpenPets is a desktop pet for macOS that shows what AI coding agents and apps are doing. Tools send it states such as running, review, done, failed or waiting through a local MCP server or a CLI, and several task bubbles can appear at once. It suits people who run several agents and want their progress visible without a separate window.

The README asks for macOS 14 or later and does not say whether the build is notarized. The MCP endpoint is local, at 127.0.0.1 by default. The optional Codex Usage plugin reads usage from your local ChatGPT login token. Plugins ship built in; installing external plugins is still planned.
