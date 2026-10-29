---
name: "Apache OpenOffice"
summary: "A long-running office suite with a word processor, spreadsheet, presentations, drawing, database and formula editor."
category: "Productivity"
tags:
  - office
  - documents
  - spreadsheets
  - presentations
  - cross-platform
alternativeTo:
  - microsoft-office
  - microsoft-word
  - microsoft-excel
  - microsoft-powerpoint
repository: https://github.com/apache/openoffice
website: https://www.openoffice.org
license: "Apache-2.0"
licenseUrl: https://github.com/apache/openoffice/blob/trunk/LICENSE
download: https://www.openoffice.org/download/
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/apache/openoffice
  - https://github.com/apache/openoffice/blob/trunk/LICENSE
  - https://www.openoffice.org/download/
  - https://openoffice.apache.org/blog/announcing-apache-openoffice-4-1-17.html
  - https://www.openoffice.org/dev_docs/source/sys_reqs_aoo41.html
  - https://www.openoffice.org/product/writer.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/apache/openoffice/blob/trunk/main/sysui/desktop/icons/main.icns
    credit: "The Apache Software Foundation"
    license: "Apache-2.0 code license; OpenOffice and the seagull logo are registered trademarks of The Apache Software Foundation"
---

Apache OpenOffice bundles Writer for documents, Calc for spreadsheets, Impress for presentations, Draw for diagrams, Base for databases and Math for formulas, all saving to the OpenDocument formats by default. It opens Microsoft Office files, including .docx and .xlsx, but saves Office-compatible copies in the older .doc, .xls and .ppt formats.

The project is still maintained, but at a slow pace: releases such as 4.1.17 in October 2026 are security and bug-fix updates within the long-running 4.1 series rather than new feature versions. The Mac build is Intel-only, so Apple silicon Macs run it through Rosetta 2, and some features need a Java runtime. Downloads come from openoffice.org, which hands them off to SourceForge.
