---
name: "Bdash"
summary: "Runs saved SQL queries against several databases, charts the results and shares them as GitHub gists."
category: "Developer tools"
tags: ["sql", "database", "data-analysis", "database-client"]
repository: "https://github.com/bdash-app/bdash"
website: "https://bdash-app.github.io/"
license: "MIT"
licenseUrl: "https://github.com/bdash-app/bdash/blob/master/LICENSE"
download: "https://github.com/bdash-app/bdash/releases"
freeDownload: true
homebrew: "bdash"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/bdash-app/bdash", "https://github.com/bdash-app/bdash/blob/master/LICENSE", "https://github.com/bdash-app/bdash/releases", "https://bdash-app.github.io/", "https://raw.githubusercontent.com/bdash-app/bdash/master/README.md", "https://raw.githubusercontent.com/bdash-app/bdash/master/LICENSE", "https://github.com/bdash-app/bdash/releases/tag/v1.35.4", "https://raw.githubusercontent.com/bdash-app/bdash/master/package.json"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/bdash-app/bdash/master/build/icon.png", "credit": "Bdash contributors", "license": "MIT repository asset; trademarks retained"}]
---

You write a query in Bdash, run it against one of your data sources, and keep it in a saved list to run again later. A result can be drawn as a chart or shared as a GitHub gist.

It connects to these sources:

- MySQL
- PostgreSQL, which also covers Amazon Redshift
- SQLite
- Google BigQuery
- Treasure Data
- Amazon Athena

Bdash also includes an MCP server, so AI coding tools such as Claude Code can work with it. Through that server a tool can list your data sources, tables and column definitions, read saved queries, create a new query and write SQL into a query's editor. In the Mac app the server script sits inside the app bundle, and you point the tool's MCP settings at it.

The app is built with Electron. Release 1.35.4 on GitHub has a Universal DMG and ZIP for Apple silicon and Intel Macs, next to builds for Windows and Linux. Bdash is free under the MIT license.
