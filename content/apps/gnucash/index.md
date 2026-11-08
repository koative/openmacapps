---
name: "GnuCash"
summary: "Keeps personal or small-business books in double-entry accounts, with reconciliation, scheduled transactions and reports."
category: "Productivity"
tags: ["finance", "accounting", "budgeting"]
repository: "https://github.com/Gnucash/gnucash"
website: "https://www.gnucash.org/"
license: "GPL-2.0-only OR GPL-3.0-only"
licenseUrl: "https://github.com/Gnucash/gnucash/blob/stable/LICENSE"
download: "https://github.com/Gnucash/gnucash/releases"
freeDownload: true
homebrew: "gnucash"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/Gnucash/gnucash", "https://github.com/Gnucash/gnucash/blob/stable/LICENSE", "https://github.com/Gnucash/gnucash/blob/stable/README", "https://github.com/Gnucash/gnucash/releases", "https://www.gnucash.org/features.phtml", "https://www.gnucash.org/download.phtml", "https://raw.githubusercontent.com/Gnucash/gnucash/stable/README"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Gnucash/gnucash/blob/stable/data/pixmaps/hicolor/128x128/apps/gnucash-icon.png", "credit": "GnuCash contributors", "license": "GPL-2.0-only OR GPL-3.0-only; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

GnuCash keeps your books in double entry: every transaction debits one account and credits others by the same amount, so the totals always balance. You type transactions into a checkbook-style register that handles split transactions, autofill and cleared or reconciled marks.

- Reconciliation checks an account against a bank statement, with running cleared and reconciled balances.
- Scheduled transactions repeat on a timetable with reminders, and an assistant sets up loan and mortgage repayments.
- Reports include a balance sheet, profit and loss and portfolio valuation, next to bar, pie and scatter charts.
- Business tools track customers, vendors, jobs, invoices, bills and payroll.

GnuCash 5.17 comes as two disk images. One is for Apple silicon Macs on macOS 11 or later, the other for Intel Macs on macOS 10.13 or later. The download page links both through SourceForge, and the GitHub releases carry Mac disk images too.

Accounts can hold different currencies. Stock and fund holdings can fetch prices from online quote sources, which depends on Perl modules; the Mac disk image includes an Update Finance Quote tool that installs them. Books are saved as XML by default. Storage in SQLite, MySQL or PostgreSQL also exists, and the project marks it experimental. You can import Quicken QIF files and OFX files from banks.
