---
name: "Gridex"
summary: "Native database client for PostgreSQL, MySQL, SQLite, Redis, MongoDB, SQL Server and ClickHouse, with AI chat and an MCP server."
category: "Developer tools"
tags:
  - database
  - database-client
  - sql
  - mcp
  - cross-platform
alternativeTo:
  - tableplus
repository: "https://github.com/gridex/gridex"
website: "https://gridex.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/gridex/gridex/blob/main/LICENSE"
download: "https://gridex.app/download"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/gridex/gridex"
  - "https://github.com/gridex/gridex/blob/main/LICENSE"
  - "https://github.com/gridex/gridex/blob/main/NOTICE"
  - "https://github.com/gridex/gridex/releases"
  - "https://gridex.app/download"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/gridex/gridex/main/macos/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Thinh Nguyen"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

Gridex is a database client that connects to PostgreSQL, MySQL, SQLite, Redis, MongoDB, SQL Server and ClickHouse from one app. On the Mac it is written in Swift with AppKit. It has an editable data grid that commits changes as one transaction, a tabbed query editor with history, schema and stored-procedure viewers, an ER diagram drawn from the live schema, backup and restore for each engine, SSH tunnels and mutual TLS. Saved connections can be imported from TablePlus, Navicat, DataGrip and DBeaver.

A built-in chat can use Claude, OpenAI, Gemini or a local Ollama model to read the schema and write SQL for the selected connection, with requests going straight to the provider. Gridex also runs an MCP server, so clients such as Claude Desktop or Cursor can query saved connections under a per-connection permission mode, with write actions needing approval and every call logged. It is aimed at developers who work with several database engines.

The Mac build needs macOS 14 or later and is a universal DMG for Apple silicon and Intel, signed with a Developer ID, notarized and updated through Sparkle. Windows and Linux versions are also available. Releases are still numbered 0.0.x.
