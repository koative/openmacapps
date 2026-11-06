---
name: "BerryDB"
summary: "Native database client for PostgreSQL, MySQL, SQLite, SQL Server, Redis and MongoDB, with an optional AI assistant."
category: "Developer tools"
tags:
  - database-client
  - database
  - sql
alternativeTo:
  - tableplus
repository: "https://github.com/berry-apps/berrydb-desktop"
website: "https://db.berryhub.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/berry-apps/berrydb-desktop/blob/main/LICENSE"
download: "https://github.com/berry-apps/berrydb-desktop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/berry-apps/berrydb-desktop"
  - "https://github.com/berry-apps/berrydb-desktop/blob/main/LICENSE"
  - "https://github.com/berry-apps/berrydb-desktop/releases"
  - "https://db.berryhub.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/berry-apps/berrydb-desktop/releases/download/v1.0.8/BerryDB-1.0.8.dmg"
    credit: "BerryDB contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

BerryDB is a native macOS client for working with databases. It connects to nine engines, including PostgreSQL, MySQL and MariaDB, SQLite, SQL Server, Redis and MongoDB, and shows results in an AppKit table view. Passwords and API keys are kept in the Keychain, and an optional assistant can explain queries, suggest indexes and draw schema diagrams. It suits developers and DBAs who switch between several database engines in one day.

It needs macOS 15 or later and runs on Apple silicon only, according to its README. The disk image is signed and notarized. Local database work is free. The AI assistant has a cloud mode that is free for a trial and then paid; in that mode, your questions, schema names and up to 100 rows of query results per query are sent to BerryDB's service. Live reads by the AI agent are off by default.
