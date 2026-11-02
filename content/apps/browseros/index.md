---
name: "BrowserOS"
summary: "A Chromium-based browser with a built-in AI agent that works with your own model keys or local models."
category: "Internet"
tags:
  - browser
  - chromium
  - agents
  - local-ai
  - cross-platform
alternativeTo:
  - google-chrome
repository: https://github.com/browseros-ai/BrowserOS
website: https://www.browseros.com
license: "AGPL-3.0"
licenseUrl: https://github.com/browseros-ai/BrowserOS/blob/main/LICENSE
download: https://github.com/browseros-ai/BrowserOS/releases
homebrew: "browseros"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/browseros-ai/BrowserOS
  - https://github.com/browseros-ai/BrowserOS/blob/main/LICENSE
  - https://github.com/browseros-ai/BrowserOS/blob/main/README.BrowserOS.md
  - https://github.com/browseros-ai/BrowserOS/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/browseros-ai/BrowserOS/main/packages/browseros/resources/browseros/icons/mac/Assets.xcassets/AppIcon.appiconset/appicon_1024.png
    credit: "Felafax, Inc."
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

BrowserOS is a Chromium fork meant as an everyday browser, with an AI assistant built into the new tab page and side panel. You can ask it to summarise or question the page you are on, click through multi-step flows, pull structured data out of pages or run tasks on a schedule, and it can be exposed as an MCP server so tools such as Claude Code can drive it.

The agent runs on an AI provider you connect, such as Claude, OpenAI or Gemini through an API key or a ChatGPT Pro sign-in, or on local models through Ollama or LM Studio; the project says it does not require a BrowserOS cloud account. Because it is Chromium-based, Chrome extensions work and bookmarks, passwords and extensions can be imported from Chrome. It also bundles uBlock Origin with Manifest V2 support.

The Mac download comes as Apple silicon, Intel and universal builds. The same repository also ships BrowserOS neo, a separate browser meant to be driven by external agents rather than used directly.
