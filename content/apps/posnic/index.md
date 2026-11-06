---
name: "Posnic"
summary: "Offline-first point-of-sale and billing for shops and restaurants, with stock, GST invoices and a local database."
category: "Productivity"
tags:
  - local-first
  - offline
  - self-hosted
  - finance
repository: "https://github.com/Posnic/POS"
website: "https://www.posnic.com/"
license: "AGPL-3.0-only"
licenseNotes: "Posnic's own source is AGPL-3.0-only. Desktop packages also bundle MongoDB Community Server under SSPL-1.0. The bundled frontend includes amCharts 4, which is commercially licensed, and icon sets under CC BY-SA (Dripicons and Typicons artwork); see THIRD-PARTY-NOTICES.md."
licenseUrl: "https://github.com/Posnic/POS/blob/develop/LICENSE"
download: "https://github.com/Posnic/POS/releases/download/v1.9.0/Posnic-1.9.0-macos-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Posnic/POS"
  - "https://github.com/Posnic/POS/blob/develop/LICENSE"
  - "https://github.com/Posnic/POS/blob/develop/THIRD-PARTY-NOTICES.md"
  - "https://github.com/Posnic/POS/releases"
  - "https://www.posnic.com/"
---

Posnic runs a shop's sales, returns, held bills, stock, customers and reports on the till computer, with a local database and API so checkout keeps working without an internet connection. Card payments and cloud features still need a network. It includes GST invoicing and reports, restaurant kitchen tickets and table management, and documented paths for printers, barcode scanners, cash drawers and scales. The README says the local edition needs no account and sends no analytics. It suits shops and restaurants that want their till data on their own computer.

The desktop app is also published for Windows and Linux. The linked download is the Apple silicon DMG for version 1.9.0, and the README does not state a minimum macOS version. The first launch takes a few minutes while the database is set up. You can instead run it on your own Ubuntu server, but sync between tills is part of the paid service, Posnic Cloud.
