---
name: "DB Browser for SQLite"
summary: "Opens SQLite database files in a spreadsheet-style window for editing tables, records and indexes or running SQL."
category: "Developer tools"
tags: ["database", "sqlite", "sql", "database-client"]
repository: "https://github.com/sqlitebrowser/sqlitebrowser"
website: "https://sqlitebrowser.org"
license: "MPL-2.0 OR GPL-3.0-or-later"
licenseUrl: "https://github.com/sqlitebrowser/sqlitebrowser/blob/master/LICENSE"
download: "https://sqlitebrowser.org/dl/#macos"
freeDownload: true
homebrew: "db-browser-for-sqlite"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/sqlitebrowser/sqlitebrowser", "https://github.com/sqlitebrowser/sqlitebrowser/blob/master/LICENSE", "https://raw.githubusercontent.com/sqlitebrowser/sqlitebrowser/master/README.md", "https://sqlitebrowser.org/dl/#macos", "https://github.com/sqlitebrowser/sqlitebrowser/releases/tag/v3.13.1", "https://sqlite.org/serverless.html"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/sqlitebrowser/sqlitebrowser/blob/master/images/logo.png", "credit": "DB Browser for SQLite contributors", "license": "MPL-2.0 OR GPL-3.0-or-later; project trademarks retained"}]
icon: "./assets/icon.png"
---

DB Browser for SQLite opens a SQLite database file and shows each table in a spreadsheet-like grid. You can search the records, edit them, and add or delete rows without learning SQL first.

- Controls and wizards create, modify and delete tables and indexes.
- An SQL tab runs your own queries so you can inspect the results.
- Tables import from and export to CSV, and whole databases to and from SQL dump files.
- A log lists every SQL statement the app has sent to the database.
- Simple plots graph columns from a table or a query result.

You can also create a new database and compact an existing one. SQLite needs no server, so the app works on the file directly.

The grid looks like a spreadsheet, yet the project leaves out features that make no sense for a database, so it will not stand in for your spreadsheet app.

Version 3.13.1, from October 2024, is the current release. The macOS download is one Universal disk image for Apple silicon and Intel, Developer ID-signed and notarized; nightly builds sit on the GitHub releases page. Code is dual-licensed: pick MPL 2.0 or GPL 3 or later.
