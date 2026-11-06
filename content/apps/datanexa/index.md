---
name: "DataNexa"
summary: "Local, read-only MCP server giving AI agents audited access to SQLite, MySQL, PostgreSQL and JDBC databases."
category: "Developer tools"
tags:
  - mcp
  - database
  - sql
  - agents
repository: "https://github.com/MingoZacwu/DataNexa"
website: "https://mingozacwu.github.io/datanexa-site/"
license: "MIT"
licenseUrl: "https://github.com/MingoZacwu/DataNexa/blob/main/LICENSE"
download: "https://github.com/MingoZacwu/DataNexa/releases/latest"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/MingoZacwu/DataNexa"
  - "https://github.com/MingoZacwu/DataNexa/blob/main/LICENSE"
  - "https://github.com/MingoZacwu/DataNexa/releases"
  - "https://mingozacwu.github.io/datanexa-site/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/MingoZacwu/DataNexa/main/src-tauri/icons/icon.icns"
    credit: "Zachary Wu"
    license: "MIT; upstream app icon, trademarks retained"
---

DataNexa is a local Model Context Protocol server that gives AI agents one audited entry point to several databases. It connects to SQLite, MySQL and PostgreSQL directly, and to other databases through JDBC drivers as a technology preview. Each SQL statement is checked against a syntax tree and limited to read-only statements, row counts, execution time and connection numbers are capped, and the local audit log records which SQL ran, when, which tool was called and the outcome. It is for developers who want agents to query data but cannot always get a read-only database account.

The README does not state a minimum macOS version or whether the release is notarized, so check the first-launch steps yourself. Building from source needs the Xcode Command Line Tools. The README calls the read-only policy a guard rail rather than a guarantee and advises constraining the agent as well. The project is MIT-licensed.
