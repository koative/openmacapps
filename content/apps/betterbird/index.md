---
name: "Betterbird"
summary: "A Thunderbird-based email client with an additional set of fixes and usability changes."
category: "Internet"
tags: ["email", "calendar", "contacts"]
alternativeTo: ["microsoft-outlook"]
repository: "https://github.com/Betterbird/thunderbird-patches"
website: "https://www.betterbird.eu"
license: "MPL-2.0"
licenseUrl: "https://github.com/Betterbird/thunderbird-patches/blob/main/LICENSE"
download: "https://www.betterbird.eu/downloads/"
freeDownload: true
featured: false
added: "2026-10-17"
verified: '2026-11-08'
sources: ["https://github.com/Betterbird/thunderbird-patches", "https://github.com/Betterbird/thunderbird-patches/blob/main/LICENSE", "https://www.betterbird.eu/downloads/", "https://www.betterbird.eu", "https://www.betterbird.eu/system-requirements/", "https://raw.githubusercontent.com/Betterbird/thunderbird-patches/main/README.md", "https://apps.apple.com/us/app/microsoft-outlook/id985367838"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/Betterbird/thunderbird-patches/blob/main/metadata/icons/betterbird256.png", "credit": "Betterbird contributors", "license": "MPL-2.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Betterbird takes the Thunderbird email client and applies its own patches: features Thunderbird lacks, bug fixes Thunderbird has not shipped, and fixes Thunderbird may adopt later. A feature table on the project site lists where the two differ.

Some entries from that table:

- A multi-line message list like Outlook's, vertical tabs and account colours.
- Complex search terms and regular expressions in searches.
- Quick search, folder search and filters that ignore diacritics.
- The option to disable an IMAP account.
- An Activity Manager that opens in a tab.

You can install Betterbird next to Thunderbird and run both on the same profile, so going back to Thunderbird stays possible. Releases are built on Thunderbird's extended support (ESR) versions. The current one is 153.6.0esr-bb12, and the 115, 128 and 140 series have reached end of life.

The Mac build exists for Intel and Apple silicon in English, and language packs add other languages. Mac builds are not notarised, and the download page gives the steps for opening them.

Microsoft's App Store listing describes Outlook for Mac as one app for email, calendar and contacts across several accounts, with a premium subscription that removes ads. Betterbird's binaries are released under the Mozilla Public License, and the patches and build scripts are public on GitHub.
