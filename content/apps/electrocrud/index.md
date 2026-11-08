---
name: 'ElectroCRUD'
summary: 'A no-code admin panel builder for MySQL, PostgreSQL, SQLite and SQL Server tables.'
category: 'Developer tools'
tags:
  - database
  - sqlite
  - cross-platform
  - database-client
repository: https://github.com/garrylachman/ElectroCRUD
website: https://garrylachman.github.io/ElectroCRUD/
license: MIT
licenseUrl: https://github.com/garrylachman/ElectroCRUD/blob/master/LICENSE
download: https://github.com/garrylachman/ElectroCRUD/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
maintenance: 'unmaintained'
maintenanceNote: 'No release since July 2023.'
icon: ./assets/icon.png
sources:
  - https://github.com/garrylachman/ElectroCRUD
  - https://github.com/garrylachman/ElectroCRUD/blob/master/LICENSE
  - https://github.com/garrylachman/ElectroCRUD/releases
  - https://formulae.brew.sh/cask/electrocrud
  - https://raw.githubusercontent.com/garrylachman/ElectroCRUD/master/README.md
  - https://github.com/garrylachman/ElectroCRUD/releases/tag/v3.0.19
  - https://github.com/garrylachman/ElectroCRUD/releases/tag/v3.1.0-develop.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/garrylachman/ElectroCRUD/master/assets/icon.png
    credit: 'Garry Lachman (ElectroCRUD)'
    license: 'MIT repository asset; ElectroCRUD name and logo retained by the project'
---

ElectroCRUD turns tables in an existing database into admin screens. You connect it to MySQL or MariaDB, PostgreSQL, SQLite or Microsoft SQL Server, set up the panel in a few clicks, and then create, read, update and delete records without writing code.

Version 3, rewritten in 2023 with React and TypeScript, adds a layer for describing the data itself. You can write documentation for each table and column, attach tags to columns, and set policies for handling sensitive data. The app then shows what the data means next to the rows themselves.

The project began in 2016 as an Electron app with dashboards, filters and table relationships. Version 2 rebuilt it on Angular after a quiet period, and the current line is the third rewrite.

The repository has had no commits since June 2023. The last stable release, v3.0.19, came out in June 2023, and a single v3.1.0 development pre-release followed in July 2023. The Mac download is an Intel-only DMG that asks for macOS 10.13 or later. Its app carries no usable code signature, and Gatekeeper rejects it.
