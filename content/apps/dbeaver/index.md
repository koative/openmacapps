---
name: "DBeaver Community"
summary: "A database workbench for browsing tables, writing SQL, and managing many database engines."
category: "Developer tools"
tags: ["database", "sql", "cross-platform", "database-client"]
alternativeTo: ["tableplus"]
repository: "https://github.com/dbeaver/dbeaver"
website: "https://dbeaver.io"
license: "Apache-2.0"
licenseUrl: "https://github.com/dbeaver/dbeaver/blob/devel/LICENSE.md"
download: "https://dbeaver.io/download"
freeDownload: true
homebrew: "dbeaver-community"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/dbeaver/dbeaver", "https://github.com/dbeaver/dbeaver/blob/devel/LICENSE.md", "https://dbeaver.io/download", "https://github.com/dbeaver/dbeaver/blob/devel/README.md", "https://dbeaver.io/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/dbeaver/dbeaver/blob/devel/product/community/icons/dbeaver.icns", "credit": "DBeaver Community contributors", "license": "Apache-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

DBeaver Community connects to a database and lets you browse its schemas and tables, edit rows in a grid, and run SQL in an editor that shows execution plans. More than 100 database drivers come included. Any other database with a JDBC or ODBC driver works too.

Beyond querying, it covers administration and data tasks:

- schema editing and generated ER diagrams
- export, import and migration of data between databases
- SSH tunnels and proxies for reaching remote servers
- a viewer for spatial data
- an AI chat that can help write SQL against your schema

Separate macOS builds exist for Apple silicon and Intel, each delivered as a disk image. DBeaver is tested on macOS 11 or later. Every distribution bundles its own OpenJDK runtime, so you do not install Java separately.

TablePlus also connects to databases and lets you edit data. DBeaver is written mostly in Java, and the Community edition is free and Apache-2.0 licensed. A commercial PRO version with extra features is sold separately.
