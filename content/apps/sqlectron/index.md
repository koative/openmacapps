---
name: 'Sqlectron'
summary: 'A lightweight cross-platform SQL client for PostgreSQL, MySQL, SQLite, SQL Server, Cassandra and more.'
category: 'Developer tools'
tags:
  - database
  - sqlite
  - cross-platform
  - database-client
alternativeTo:
  - tableplus
repository: https://github.com/sqlectron/sqlectron
website: https://sqlectron.github.io/
license: MIT
licenseUrl: https://github.com/sqlectron/sqlectron/blob/main/LICENSE
download: https://github.com/sqlectron/sqlectron/releases
freeDownload: true
homebrew: "sqlectron"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/sqlectron/sqlectron
  - https://github.com/sqlectron/sqlectron/blob/main/LICENSE
  - https://github.com/sqlectron/sqlectron/releases
  - https://formulae.brew.sh/cask/sqlectron
  - https://raw.githubusercontent.com/sqlectron/sqlectron/main/README.md
  - https://raw.githubusercontent.com/sqlectron/sqlectron/main/docs/app/configuration-file.md
  - https://raw.githubusercontent.com/sqlectron/sqlectron-core/master/README.md
  - https://github.com/sqlectron/sqlectron/releases/tag/v1.39.0
  - https://github.com/sqlectron/sqlectron/commits/main
  - https://tableplus.com/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/sqlectron/sqlectron/main/build/icon.icns
    credit: 'The Sqlectron Team'
    license: 'MIT repository asset; Sqlectron name and logo retained by the project'
---

Sqlectron is a small SQL client for connecting to a database and running queries. You save a list of servers, open one, type SQL into the query box, which has autocomplete, and read the results. It talks to PostgreSQL, Redshift, MySQL, MariaDB, Microsoft SQL Server and SQLite, and to Cassandra with some documented exceptions.

Settings and saved servers sit in one configuration file under `~/Library/Preferences/Sqlectron`. The project recommends changing them through the app, but the file can be edited by hand. It holds options such as the zoom factor, the row limit for the default SELECT (100 unless changed), autocomplete and logging. A saved server can carry a filter that limits which databases and schemas appear in the sidebar.

The name is pronounced "sequel-eck-tron". A separate project, sqlectron-term, offers a terminal interface. The repository used to be called sqlectron-gui, and some of its own links still use that name.

TablePlus describes itself as a native client for Mac, Windows, Linux and iOS, and its list of engines also covers Redis, MongoDB, Oracle and ClickHouse. Sqlectron is an Electron app that stays with relational databases plus Cassandra.

The latest release, 1.39.0, came out in December 2025, more than three years after 1.38.0, and commits continued into June 2026. It has separate disk images for Apple silicon and Intel; the Apple silicon app in that release is Developer ID-signed and notarized. It is also available as the `sqlectron` Homebrew cask.
