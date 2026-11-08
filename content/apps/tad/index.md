---
name: "Tad"
summary: "A desktop viewer for CSV, Parquet, SQLite and DuckDB files with pivoting, filtering and aggregation."
category: "Developer tools"
tags:
  - data-analysis
  - sqlite
  - database
  - cross-platform
repository: "https://github.com/antonycourtney/tad"
website: "https://www.tadviewer.com"
license: "MIT"
licenseUrl: "https://github.com/antonycourtney/tad/blob/master/LICENSE"
download: "https://github.com/antonycourtney/tad/releases"
freeDownload: true
homebrew: "tad"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - "https://github.com/antonycourtney/tad"
  - "https://github.com/antonycourtney/tad/blob/master/LICENSE"
  - "https://github.com/antonycourtney/tad/releases"
  - "https://www.tadviewer.com"
  - "https://github.com/antonycourtney/tad/blob/master/README.md"
  - "https://github.com/antonycourtney/tad/releases/tag/v0.14.0"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/antonycourtney/tad/master/packages/tad-app/res/AppIcon1024.png"
    credit: "Antony Courtney"
    license: "MIT; upstream app icon, trademarks retained"
---

Tad opens a CSV or Parquet file, or a table in a SQLite or DuckDB database, and shows it in a grid that scrolls through the whole data set, millions of rows included. You can start it from Terminal with `tad` and a file name, open a whole folder of data files, or switch between tables and files in its Data Sources sidebar.

The view doubles as a pivot table. A few clicks group rows by one or more columns, and from there you can filter, aggregate, sort, pick which columns to show, reorder them and apply basic column formatting, all without typing a query. Behind the grid sits an in-memory DuckDB instance, and Tad turns each change in the interface into SQL that DuckDB runs.

Smaller conveniences have accumulated across releases:

- Interactive histograms for numeric columns.
- Direct copy and paste into Excel or Google Sheets.
- Export of the filtered result as CSV or Parquet.
- Re-import of a CSV or Parquet file that changed on disk when you reload it.

The developer describes Tad as a hobby project that is always a work in progress and warns that you are likely to run into bugs and rough edges. Version 0.14.0, from June 2024, moved it to DuckDB 1.0. It ships as separate disk images for Apple silicon and Intel Macs, plus builds for Windows and Linux, under the MIT license.
