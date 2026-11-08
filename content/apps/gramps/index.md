---
name: Gramps
summary: A genealogy program for recording family trees, sources and events and producing charts and reports.
category: Productivity
tags:
  - genealogy
  - research
  - database
  - cross-platform
repository: https://github.com/gramps-project/gramps
website: https://gramps-project.org
license: GPL-2.0-or-later
licenseUrl: https://github.com/gramps-project/gramps/blob/maintenance/gramps61/COPYING
download: https://github.com/gramps-project/gramps/releases
freeDownload: true
homebrew: "gramps"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/gramps-project/gramps
  - https://github.com/gramps-project/gramps/blob/maintenance/gramps61/COPYING
  - https://github.com/gramps-project/gramps/releases
  - https://formulae.brew.sh/cask/gramps
  - https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps61/README.md
  - https://github.com/gramps-project/gramps/releases/tag/v6.0.8
  - https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps60/gramps/plugins/importer/import.gpr.py
  - https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps60/gramps/plugins/export/export.gpr.py
  - https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps60/gramps/plugins/webreport/webplugins.gpr.py
  - https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps60/gramps/gen/lib/__init__.py
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/gramps-project/gramps/maintenance/gramps61/mac/gramps.icns
    credit: The Gramps Project
    license: GPL-2.0-or-later repository asset; Gramps name and icon retained by the project
---

Gramps holds your family history as a database you build up record by record: people and families, the events in their lives, places, notes and media. Sources, citations and the repositories that hold them are records too, so evidence sits in the same tree as the people it describes.

The same tree can be browsed in several ways. There are pedigree and fan chart views, a Geography view puts places on a map, and reports turn the data into documents. The Narrated Web Site report builds a set of web pages from your tree, and Web Calendar produces calendar pages. Three graph reports need Graphviz.

Data moves in and out in several formats:

- GEDCOM, for import and export with other genealogy programs
- GeneWeb, CSV spreadsheets and vCard, both ways
- Pro-Gen files, import only
- Web Family Tree and vCalendar, export only
- Gramps XML, with or without the media files packed in

Add-ons written by users and developers widen what Gramps does, and the project notes that they are not officially part of it unless stated. You can also keep revisions of a tree with RCS, and the 6.0.8 release notes ask you to back up before upgrading.

Gramps is written in Python with GTK and also runs on Linux and Windows. Release 6.0.8 has separate macOS disk images for Apple silicon and Intel. The Apple silicon image requires macOS 11 or later, and both its DMG and the app inside are Developer ID-signed and notarized.
