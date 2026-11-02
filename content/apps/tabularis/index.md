---
name: "Tabularis"
summary: "A desktop SQL client with notebooks, a visual query builder, EXPLAIN graphs and driver plugins for many databases."
category: "Developer tools"
tags:
  - database-client
  - database
  - sql
  - cross-platform
alternativeTo:
  - tableplus
repository: https://github.com/TabularisDB/tabularis
website: https://tabularis.dev
license: "Apache-2.0"
licenseUrl: https://github.com/TabularisDB/tabularis/blob/main/LICENSE
download: https://tabularis.dev/download
homebrew: "tabularis"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/TabularisDB/tabularis
  - https://github.com/TabularisDB/tabularis/blob/main/LICENSE
  - https://tabularis.dev/download
  - https://github.com/TabularisDB/tabularis/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/TabularisDB/tabularis/main/src-tauri/icons/icon.png
    credit: "Tabularis contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

Tabularis is a desktop client for querying and browsing databases. PostgreSQL, MySQL and MariaDB, and SQLite work out of the box, and plugins add others such as DuckDB, ClickHouse, Redis, MongoDB and Oracle. Alongside a SQL editor and an editable data grid, it has notebooks that mix SQL, Markdown and charts, a visual query builder, and interactive graphs of EXPLAIN plans.

Optional AI features turn questions into SQL through a cloud provider or a local model in Ollama, and a built-in MCP server lets AI coding tools read schemas and run queries. The project started in 2026 and releases often. macOS builds for Apple silicon and Intel are signed and notarized, Homebrew lists macOS 12 as the minimum, and the app checks for updates at startup. It is built with Tauri and also runs on Windows and Linux.
