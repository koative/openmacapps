---
name: Postgres.app
summary: Run one or more PostgreSQL servers on your Mac from a self-contained app
  with a simple start and stop interface.
category: Developer tools
tags:
- database
- postgresql
- sql
- menu-bar
repository: https://github.com/PostgresApp/PostgresApp
website: https://postgresapp.com
license: PostgreSQL
licenseUrl: https://github.com/PostgresApp/PostgresApp/blob/master/LICENSE
download: https://postgresapp.com/downloads.html
freeDownload: true
homebrew: "postgres-app"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
- https://github.com/PostgresApp/PostgresApp
- https://github.com/PostgresApp/PostgresApp/blob/master/LICENSE
- https://postgresapp.com/downloads.html
- https://github.com/PostgresApp/PostgresApp/releases
- https://raw.githubusercontent.com/PostgresApp/PostgresApp/master/README.md
- https://postgresapp.com
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/PostgresApp/PostgresApp/master/Artwork/App%20Icon/app_icon_256.png
  credit: Postgres.app contributors
  license: PostgreSQL; upstream project asset, trademarks retained
---

Postgres.app packages a PostgreSQL server as an ordinary Mac app. Move the app to Applications, open it and click Initialize, and a server starts on localhost port 5432. It uses your macOS user name, with no password and a database of the same name.

The app window lists your servers so you can start and stop them, and a menu bar item shows what is running. Double-click a database to open it in `psql`. The command-line tools and header files sit inside the bundle; one optional command adds them to your `PATH`.

Each build carries PostGIS, and depending on the PostgreSQL version also pgvector, pgRouting, wal2json, pldebugger and a JavaScript language extension. Minor PostgreSQL updates can install automatically.

The downloads page has one build per PostgreSQL major version, from 14 to 18, and a larger one that holds all of them so different versions can run side by side. Every current build is Universal and needs macOS 10.15 or later; the PostgreSQL 18 download is notarized by Apple. A version 3 beta with PostgreSQL 19 needs macOS 11, and older releases stay on GitHub.

If PostgreSQL is already installed through Homebrew, MacPorts or the EnterpriseDB installer, the project suggests removing that copy first. For a graphical client, the project points to pgAdmin 4, an open-source client, and Postico, a commercial Mac app from the same developers; `psql` comes in the box.
