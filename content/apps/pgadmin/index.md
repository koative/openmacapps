---
name: "pgAdmin 4"
summary: "A PostgreSQL administration app with database navigation, query tools, and server management."
category: "Developer tools"
tags: ["database", "postgresql", "sql", "database-client"]
repository: "https://github.com/pgadmin-org/pgadmin4"
website: "https://www.pgadmin.org"
license: "PostgreSQL"
licenseUrl: "https://github.com/pgadmin-org/pgadmin4/blob/master/LICENSE"
download: "https://www.pgadmin.org/download/pgadmin-4-macos/"
freeDownload: true
homebrew: "pgadmin4"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/pgadmin-org/pgadmin4", "https://github.com/pgadmin-org/pgadmin4/blob/master/LICENSE", "https://www.pgadmin.org", "https://www.pgadmin.org/features/", "https://www.pgadmin.org/download/pgadmin-4-macos/"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/pgadmin-org/pgadmin4/blob/master/docs/en_US/images/logo-128.png", "credit": "pgAdmin 4 contributors", "license": "PostgreSQL; project trademarks retained"}]
icon: "./assets/icon.png"
---

pgAdmin 4 connects to your PostgreSQL servers and lists the objects inside them, from databases and schemas down to tables and columns. Select an object to see its properties and its SQL definition, or browse its dependencies and dependents. You can create, view and edit all the common object types, from tables and views to publications, subscriptions and pgAgent jobs.

- The query tool highlights SQL as you type, shows results in a grid you can edit, and draws query plans as diagrams.
- Schema diff lists the differences between two schemas, and the ERD tool designs and documents them visually.
- A procedural language debugger handles PL/pgSQL and EDB-SPL functions.
- The Grant Wizard makes quick changes to access privileges (ACLs).
- A monitoring dashboard tracks server activity, while backup, restore, vacuum and analyze run when you ask.

Version support moves with PostgreSQL. Each release supports the PostgreSQL and EDB Postgres Advanced Server versions that are still in support when it ships. On a Mac, pgAdmin runs in desktop mode: the web application wrapped in its own runtime. The same code can also run in server mode, where several users reach one install through a browser.

One download covers both chip types. The macOS disk image is a universal binary for Apple silicon and Intel, signed and notarised. The download page lists macOS 14 Sonoma as the oldest supported version, and macOS 26 Tahoe is supported from version 9.9.
