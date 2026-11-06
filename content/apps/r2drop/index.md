---
name: "R2Drop"
summary: "Menu bar and Finder uploader for Cloudflare R2 that copies each file's public link to the clipboard, with a matching CLI."
category: "Developer tools"
tags:
  - cloud-storage
  - menu-bar
  - files
  - native
repository: "https://github.com/superhumancorp/r2drop"
website: "https://r2drop.com"
license: "MIT"
licenseUrl: "https://github.com/superhumancorp/r2drop/blob/main/LICENSE"
download: "https://github.com/superhumancorp/r2drop/releases/download/v0.1.1/R2Drop-0.1.1-aarch64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/superhumancorp/r2drop"
  - "https://github.com/superhumancorp/r2drop/blob/main/LICENSE"
  - "https://github.com/superhumancorp/r2drop/releases"
  - "https://r2drop.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/superhumancorp/r2drop/main/app/R2Drop/Assets.xcassets/AppIcon.appiconset/1024.png"
    credit: "Superhuman Intelligence LLC"
    license: "MIT; upstream app icon, trademarks retained"
---

R2Drop uploads files to Cloudflare R2 buckets from Finder's right-click menu, the menu bar or the Dock, and copies the public URL to the clipboard when each upload finishes. A command-line tool shares the same accounts and upload queue. It suits people who host files on R2 and want to skip the Cloudflare dashboard. It supports several accounts, each with its own bucket and path prefix, and a custom domain for public URLs.

Requires macOS 13 or later, a Cloudflare account with R2 enabled, a bucket, and an R2 API token; the app walks you through creating the token, and Cloudflare bills your storage and requests. The download link is the Apple silicon DMG; the release also has an Intel DMG. The release DMG is signed with a Developer ID but is not notarized, so Gatekeeper blocks the first launch and it must be allowed in System Settings › Privacy & Security. Telemetry is anonymous and, according to the project's FAQ, on by default; it can be turned off in onboarding or Settings. The project's FAQ calls the app free and open source; the MIT license file is in the assets folder.
