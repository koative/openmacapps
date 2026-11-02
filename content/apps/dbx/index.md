---
name: "DBX"
summary: "A small cross-platform database client for MySQL, PostgreSQL, SQLite, Redis, MongoDB and many other data systems."
category: "Developer tools"
tags: ["database-client", "sql", "nosql", "cross-platform"]
alternativeTo: ["tableplus"]
repository: "https://github.com/t8y2/dbx"
website: "https://dbxio.com"
license: "Apache-2.0"
licenseUrl: "https://github.com/t8y2/dbx/blob/main/LICENSE"
download: "https://github.com/t8y2/dbx/releases/latest"
homebrew: "dbx"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/t8y2/dbx", "https://github.com/t8y2/dbx/blob/main/LICENSE", "https://github.com/t8y2/dbx/blob/main/NOTICE", "https://github.com/t8y2/dbx/releases", "https://dbxio.com"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/t8y2/dbx/blob/main/src-tauri/icons/icon.icns", "credit": "DBX contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
---

DBX connects to a long list of databases from one window: the common SQL engines, SQLite and DuckDB files, Redis, MongoDB, ClickHouse, Elasticsearch, vector stores and message queues such as Kafka. It has a SQL editor with autocomplete and formatting, an editable results grid, schema browsing, ER diagrams, schema and data comparison, import and export, and SSH tunnels. Connection profiles can be imported from DBeaver or Navicat.

An optional assistant writes, explains and fixes SQL using a model you configure, such as Claude, OpenAI, a local model or any OpenAI-compatible endpoint. Extra connection types arrive as plugins from a built-in store, and the same project offers a self-hosted web version and an MCP server for coding agents.

The Mac app is built with Tauri and ships as separate disk images for Apple silicon and Intel. DBX is a young project that releases very often, and some builds are tagged beta; the GitHub releases page marks which one is current.
