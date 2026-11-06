---
name: "Gadak"
summary: "Mirrors Jira Cloud and Confluence content into a local SQLite file for offline search and SQL queries."
category: "Productivity"
tags:
  - search
  - local-first
  - sqlite
  - knowledge-base
repository: "https://github.com/midagedev/gadak"
website: "https://gadak.dev"
license: "Apache-2.0"
licenseUrl: "https://github.com/midagedev/gadak/blob/main/LICENSE"
download: "https://github.com/midagedev/gadak/releases/download/v0.24.3/Gadak-0.24.3-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/midagedev/gadak"
  - "https://github.com/midagedev/gadak/blob/main/LICENSE"
  - "https://github.com/midagedev/gadak/releases/download/v0.24.3/Gadak-0.24.3-arm64.dmg"
  - "https://gadak.dev"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/midagedev/gadak/releases/download/v0.24.3/Gadak-0.24.3-arm64.dmg"
    credit: "Gadak contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Gadak is an Apache-2.0 tool that copies the Jira Cloud projects and Confluence spaces you choose into one SQLite file on your Mac. You can then search issues, comments, history and wiki pages offline, or run SQL against them, which JQL cannot do for aggregates such as counts per epic. It comes as a macOS app and a CLI, and the README also describes a browser UI and an MCP server. It suits people who search Atlassian content often.

You connect it with your own Jira and Confluence access token, and writes go to Jira first. The README calls it 0.x software from one maintainer. The arm64 DMG is signed with a Developer ID but not notarized, so allow the first launch in System Settings. Its bundle declares macOS 12 or later.
