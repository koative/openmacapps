---
name: "OpenRefine"
summary: "A local data-cleaning tool for exploring messy tables, fixing inconsistencies, transforming columns and reconciling data."
category: "Productivity"
tags:
  - data-analysis
  - research
  - cross-platform
repository: https://github.com/OpenRefine/OpenRefine
website: https://openrefine.org
license: "BSD-3-Clause"
licenseUrl: https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt
download: https://openrefine.org/download
homebrew: "openrefine"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/OpenRefine/OpenRefine
  - https://github.com/OpenRefine/OpenRefine/blob/master/LICENSE.txt
  - https://openrefine.org/download
  - https://openrefine.org/docs/manual/installing
  - https://github.com/OpenRefine/OpenRefine/releases/tag/3.10.1
assets:
  - path: ./assets/icon.png
    source: https://github.com/OpenRefine/OpenRefine/blob/master/graphics/icon/openrefine.icns
    credit: "OpenRefine contributors"
    license: "BSD-3-Clause; upstream project asset, trademarks retained"
---

OpenRefine is for cleaning up tabular data such as CSV, TSV, Excel, JSON or XML files. Facets and filters show the spread of values in a column so you can find typos, duplicates and inconsistent spellings, clustering groups near-identical values for merging in one step, and transformations split, join or rewrite columns with expressions. Every change is recorded in an undoable history that can be reapplied to other datasets.

It can also reconcile names against external databases such as Wikidata, fetch extra data from web APIs, and export the result to common formats. The project began at Google as Google Refine.

On a Mac it runs as an app that starts a local server and opens its interface in your web browser; your data stays on your computer. The macOS download is a DMG that includes the Java runtime it needs, and the 3.10.1 build is notarized.
