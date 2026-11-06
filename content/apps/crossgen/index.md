---
name: "CrossGen"
summary: "Local-first image workspace for generating and editing images with your own API keys, through a desktop app, a CLI or MCP."
category: "AI"
tags:
  - image-generation
  - mcp
  - local-first
  - agents
repository: "https://github.com/Bliveren/CrossGen"
website: "https://www.corgnitor.com/products/crossgen"
license: "MIT"
licenseUrl: "https://github.com/Bliveren/CrossGen/blob/main/LICENSE"
download: "https://github.com/Bliveren/CrossGen/releases/download/v0.3.4/CrossGen-0.3.4-mac-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Bliveren/CrossGen"
  - "https://github.com/Bliveren/CrossGen/blob/main/LICENSE"
  - "https://github.com/Bliveren/CrossGen/releases"
  - "https://www.corgnitor.com/products/crossgen"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Bliveren/CrossGen/main/build/icon.icns"
    credit: "Nowo, Corgnitor and CrossGen contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

CrossGen is a local-first workspace for generating, editing and organizing images. You connect your own image-model API keys and work in a desktop app. The same engine is available as a JSON command-line tool and as an MCP server, so coding agents can discover models and run jobs. Its README describes three permission levels, from read-only discovery to paid generation, which need explicit confirmation. It suits people who want image generation inside a local, scriptable workflow.

The macOS download is an Apple silicon DMG. According to the README, it is Developer ID signed and Apple notarized; if Gatekeeper still blocks a local build, right-click the app and choose Open. The README does not name a minimum macOS version. Generation is billed by your image provider, and the same desktop app is also published for Windows and Linux.
