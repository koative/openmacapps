---
name: "BetterAirdrop"
summary: "Menu bar app that renames AirDropped photos into searchable names using Apple Vision, Apple Intelligence or an API key."
category: "Productivity"
tags:
  - files
  - organization
  - menu-bar
  - native
repository: "https://github.com/MoizAhmedd/betterairdrop"
website: "https://betterairdrop.com"
license: "MIT"
licenseUrl: "https://github.com/MoizAhmedd/betterairdrop/blob/main/LICENSE"
download: "https://github.com/MoizAhmedd/betterairdrop/releases/latest/download/BetterAirdrop.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/MoizAhmedd/betterairdrop"
  - "https://github.com/MoizAhmedd/betterairdrop/blob/main/LICENSE"
  - "https://github.com/MoizAhmedd/betterairdrop/releases"
  - "https://betterairdrop.com"
assets:
  - path: ./assets/icon.png
    source: https://github.com/MoizAhmedd/betterairdrop/releases/download/v0.4.2/BetterAirdrop.zip
    credit: BetterAirdrop contributors
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

BetterAirdrop renames photos that arrive through AirDrop in Downloads. A name such as `IMG_4821.HEIC` becomes one built from the date, city, kind of image and what it shows, HEIC files are converted to JPEG, and the originals go to the Trash. Undo is available from the menu or the notification. Naming uses Apple Vision on the Mac, Apple Intelligence on macOS 26 or later, or an Anthropic API key if one is set. It is for people who receive many photos by AirDrop and want to find them by name later.

Requires macOS 13 or later; Apple Intelligence naming needs macOS 26 or later. The app is signed with the project's own certificate and is not notarized, but the README says both install paths leave it unquarantined, so macOS shows no Gatekeeper dialog. The core features are free. Pro costs $19 once for three Macs and adds screenshots, any folder, a name builder, whole-folder renaming and PDFs. The Claude naming option sends a 768 px copy with GPS and EXIF stripped to Anthropic, plus the date, city, camera model, kind and a short text snippet. The Pro naming option sends the same to BetterAirdrop's server, which the README says keeps no photos, context or names.
