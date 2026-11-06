---
name: "Personal Ops Manual"
summary: "Native macOS manual of Markdown pages for your machines, services and agents, readable by agents over MCP."
category: "Productivity"
tags:
  - knowledge-base
  - markdown
  - mcp
  - agents
repository: "https://github.com/aka-kika/personal-ops-manual"
website: "https://ops-manual.akakika.com"
license: "MIT"
licenseUrl: "https://github.com/aka-kika/personal-ops-manual/blob/main/LICENSE"
download: "https://github.com/aka-kika/personal-ops-manual/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/aka-kika/personal-ops-manual"
  - "https://github.com/aka-kika/personal-ops-manual/blob/main/LICENSE"
  - "https://github.com/aka-kika/personal-ops-manual/releases/latest"
  - "https://ops-manual.akakika.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/aka-kika/personal-ops-manual/releases/download/v2.4.1/Personal-Ops-Manual-2.4.1.zip"
    credit: "Kika (akakika.com)"
    license: "MIT; upstream app icon, trademarks retained"
---

Personal Ops Manual keeps one Markdown page for each machine, service, launch agent, agent or domain in your setup, with wiki-style links between them and a line at the end of each page saying when its facts were last checked. The app is a three-column reader over that folder. An MCP server exposes the same folder to AI agents as read-only search and fetch tools, plus an inbox where agents can report changes for the operator to act on. It suits people who run their own machines and services and want their agents to work from the same, current documentation.

It needs macOS 26 or later, and the MCP server needs Node 18 or newer. The release zip is Developer ID signed and notarized. The model is one operator writing and other agents reading and reporting, so the value depends on someone keeping the pages up to date.
