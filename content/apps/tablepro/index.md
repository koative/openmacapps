---
name: "TablePro"
summary: "A database client for SQL and NoSQL engines with a query editor, editable data grid and SSH tunnels."
category: "Developer tools"
tags: ["database", "sql", "nosql", "ssh", "database-client"]
alternativeTo: ["tableplus"]
repository: "https://github.com/TableProApp/TablePro"
website: "https://tablepro.app"
license: "AGPL-3.0-or-later"
licenseUrl: "https://github.com/TableProApp/TablePro/blob/main/LICENSE"
download: "https://github.com/TableProApp/TablePro/releases"
freeDownload: true
homebrew: "tablepro"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/TableProApp/TablePro", "https://github.com/TableProApp/TablePro/blob/main/LICENSE", "https://github.com/TableProApp/TablePro/releases", "https://raw.githubusercontent.com/TableProApp/TablePro/main/README.md", "https://tablepro.app", "https://docs.tablepro.app/features/plugins"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/TableProApp/TablePro/main/TablePro/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "TablePro contributors", "license": "AGPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

TablePro opens a connection to a database and lets you browse its tables, write queries and edit rows in a grid. PostgreSQL, MySQL, MariaDB, SQLite, Redis, MongoDB and SQL Server work out of the box. Signed driver plugins, released alongside the app, add engines such as Oracle, DuckDB, Snowflake, Cassandra and DynamoDB.

- The query editor has autocomplete, multi-cursor editing and a Vim mode.
- Split panes put two views side by side.
- Connections can run through SSH tunnels or SSL/TLS.
- Saved queries and a query history keep earlier work close.
- An AI assistant uses a provider key you supply or a local Ollama model, and an MCP server lets local clients reach your connections.

The database tools are free on every supported engine, with no trial or time limit. Pro and Team plans add paid features on the Mac, and the free version keeps working without either.

TablePro's README sets it against TablePlus, which also handles many databases but is proprietary. TablePro's code is public under AGPL-3.0 or later. The Mac app is written in Swift with Apple's frameworks, and sibling apps exist for iPhone, iPad and Linux.

TablePro needs macOS 13 or later. Homebrew installs it with `brew install --cask tablepro`, and the 0.85.0 DMG on GitHub holds a notarized Universal app.
