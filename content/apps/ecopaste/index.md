---
name: EcoPaste
summary: Store and search copied text, images, files, and folders locally.
category: Productivity
tags:
  - clipboard
  - history
  - search
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/EcoPasteHub/EcoPaste
website: https://github.com/EcoPasteHub/EcoPaste
license: Apache-2.0
licenseUrl: https://github.com/EcoPasteHub/EcoPaste/blob/master/LICENSE
download: https://github.com/EcoPasteHub/EcoPaste/releases
freeDownload: true
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/EcoPasteHub/EcoPaste
  - https://github.com/EcoPasteHub/EcoPaste/blob/master/LICENSE
  - https://github.com/EcoPasteHub/EcoPaste/blob/master/README.md
  - https://github.com/EcoPasteHub/EcoPaste/releases
  - https://raw.githubusercontent.com/EcoPasteHub/EcoPaste/master/README.md
  - https://github.com/EcoPasteHub/EcoPaste/releases/tag/v1.1.0
  - https://pasteapp.io/
assets:
  - path: ./assets/icon.png
    source: https://github.com/EcoPasteHub/EcoPaste/blob/5139d30b0f4c1309356a9b308c05092f1038bc9b/src-tauri/assets/logo.png
    credit: EcoPaste contributors
    license: Apache-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

EcoPaste records what you copy, from plain text, HTML and RTF to images, files and folders, and keeps it in a local SQLite database you can search. Notes you attach to items are searchable too, and you can narrow the list by content type or by the app the copy came from.

- From an item you can paste it, copy it as plain text, reveal a file, open a link or drag it into another app.
- Favorites, pins, notes and custom groups turn recent copies into a collection you return to.
- A separate preview window shows text, images and files.
- Settings cover size limits, how long history is kept, list sorting and display density.

Copies it identifies with high confidence as secrets, such as private keys, AWS keys, service tokens and JWTs, are skipped. History, resources and settings stay on your machine, and you can export them to an `.ecopastebak` backup, optionally encrypted, and import it later.

Paste also keeps a searchable clipboard history and syncs it across Mac, iPhone and iPad through your private iCloud. EcoPaste stays on one computer. That can be a Mac or a Windows PC.

Releases come as separate DMG builds for Apple silicon and Intel, alongside nightly builds. The Apple silicon build of version 1.1.0 is not signed with a Developer ID or notarized. The project's old site, ecopaste.cn, no longer serves EcoPaste, so the GitHub repository is the place to get it.
