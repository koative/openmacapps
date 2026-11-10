---
name: pLUGINSLENS
summary: "Opens, compares and edits Skyrim plugin files (.esp, .esm, .esl) on a Mac, saving changes as a copy."
category: Games
tags:
  - skyrim
  - modding
  - plugins
  - editor
repository: https://github.com/starbudweiser/pLUGINSLENS
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/pLUGINSLENS/blob/main/LICENSE
download: https://github.com/starbudweiser/pLUGINSLENS/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "A record sheet with flags, keywords and subrecords."
    source: https://github.com/starbudweiser/pLUGINSLENS/blob/main/docs/screenshots/02_record.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/pLUGINSLENS
  - https://github.com/starbudweiser/pLUGINSLENS/blob/main/LICENSE
  - https://github.com/starbudweiser/pLUGINSLENS/releases
  - https://raw.githubusercontent.com/starbudweiser/pLUGINSLENS/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/pLUGINSLENS/blob/main/docs/screenshots/02_record.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/pLUGINSLENS/releases/download/v2.0.0/pLUGINSLENS_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

pLUGINSLENS opens Skyrim plugins (.esp, .esm, .esl) so you can read and change their records on a Mac. It parses the files itself, so it needs no Skyrim installation and no Windows tools such as xEdit.

Open several plugins at once and browse them as a tree by group, sorted by file order, EditorID or FormID. A record sheet shows the FormID, flags such as deleted, persistent or ESL, the owning plugin, and every subrecord as text or hexadecimal.

Editing tools:

- editors for FormLists, with import, export, sorting and cleanup of duplicates and broken entries;
- editors for keywords and global variables;
- adding, cloning and deleting records and subrecords, and copying records between plugins;
- Where is it used?, a duplicate finder, and side-by-side comparison of two plugins or two records.

Undo and redo work everywhere. A change log, locked plugins and saved workspaces help on longer sessions that span several files. Changes are always saved as a copy, so the original plugin stays as it was.

The app is a lighter tool than xEdit and does not replace its scripting or cleaning functions. Releases are arm64 builds for macOS 15 or later, notarized, in four languages.
