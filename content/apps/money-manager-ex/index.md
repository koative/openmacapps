---
name: "Money Manager Ex"
summary: "Records income and spending across your accounts, with categories, budgets, scheduled payments and reports."
category: "Productivity"
tags: ["finance", "budgeting", "expenses"]
repository: "https://github.com/moneymanagerex/moneymanagerex"
website: "https://moneymanagerex.org/"
license: "GPL-2.0"
licenseUrl: "https://github.com/moneymanagerex/moneymanagerex/blob/master/LICENSE"
download: "https://github.com/moneymanagerex/moneymanagerex/releases"
freeDownload: true
homebrew: "mmex"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/moneymanagerex/moneymanagerex", "https://github.com/moneymanagerex/moneymanagerex/blob/master/LICENSE", "https://github.com/moneymanagerex/moneymanagerex/blob/master/README.md", "https://github.com/moneymanagerex/moneymanagerex/releases", "https://moneymanagerex.org/", "https://moneymanagerex.org/docs/downloads/compatibility/", "https://raw.githubusercontent.com/moneymanagerex/moneymanagerex/master/README.md", "https://raw.githubusercontent.com/moneymanagerex/moneymanagerex/master/LICENSE", "https://github.com/moneymanagerex/moneymanagerex/releases/tag/v1.9.4"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/moneymanagerex/moneymanagerex/blob/master/resources/mmexlogo.png", "credit": "Money Manager Ex contributors", "license": "GPL-2.0; project trademarks remain with their owners"}]
icon: "./assets/icon.png"
---

Money Manager Ex keeps your household books. You enter what comes in and what goes out, give each transaction a payee and a category, and the account balances follow. Categories nest as deep as you like, and one split transaction can carry several tags.

- Accounts cover checking, credit cards, savings, stock investments and fixed assets, and each account can use its own currency.
- Scheduled transactions handle recurring bills and deposits, with reminders when they come due.
- Budgets run per year or per month and compare the plan with what you spent.
- Receipts, invoices and contracts can be attached to transactions, accounts and assets.
- Data comes in from QIF and CSV files and goes out as QIF, CSV or HTML.

Reports with charts are one click away. For anything they miss, you can write your own report with SQL queries, Lua and an HTML front end, or pick one from the project's general-reports repository.

Everything lives in a single SQLite database file that can be AES-encrypted, and you can keep that file on whichever cloud drive you already use. Android and iPhone versions exist as separate apps.

The Mac download of 1.9.4 holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. The compatibility page lists 1.9.4 as the last version for macOS 11 Big Sur, with macOS 12 and later supported.
