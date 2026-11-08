---
name: "Responsively App"
summary: "A development browser that shows a page on many device sizes at once and mirrors your clicks across them."
category: "Developer tools"
tags:
  - web
  - testing
  - browser
  - development
repository: "https://github.com/responsively-org/responsively-app"
website: "https://responsively.app"
license: "AGPL-3.0"
licenseUrl: "https://github.com/responsively-org/responsively-app/blob/main/LICENSE"
download: "https://responsively.app/download"
freeDownload: true
homebrew: "responsively"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/responsively-org/responsively-app"
  - "https://github.com/responsively-org/responsively-app/blob/main/LICENSE"
  - "https://responsively.app/download"
  - "https://github.com/responsively-org/responsively-app-releases/releases"
  - https://raw.githubusercontent.com/responsively-org/responsively-app/main/README.md
  - https://responsively.app
  - https://github.com/responsively-org/responsively-app-releases/releases/tag/v1.18.0
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/responsively-org/responsively-app/main/desktop-app/assets/icon.png"
    credit: "Responsively App contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

Responsively App loads one URL into several device previews at once. Clicks and other interactions in one preview are mirrored in the rest, so you can check a layout at phone, tablet and desktop sizes in one pass.

- More than 30 device profiles come built in, and you can add custom devices.
- One elements inspector works across every preview.
- A single click takes screenshots of all devices.
- Hot reloading refreshes the previews while you develop.

The preview layout is adjustable. A browser extension sends the page you are looking at into the app.

Responsively App is a modified browser built with Electron. Version 1.18.0 comes as separate Apple silicon and Intel disk images; the Apple silicon app is signed with a Developer ID and notarized. Source code lives in the main repository. Installers are published in a separate releases repository linked from the download page, and Homebrew has it as the responsively cask.

While it runs, the app serves a Model Context Protocol endpoint on localhost port 12720. AI coding agents use it to open your local dev server, change which devices are shown, click and type in pages, and take screenshots of each device, scaled to at most 1000 pixels wide.
