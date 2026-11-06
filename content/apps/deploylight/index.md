---
name: "Deploylight"
summary: "Menu bar app that shows the real-time status of Vercel and Cloudflare deployments, with links to each build's details."
category: "Developer tools"
tags:
  - menu-bar
  - development
  - monitoring
  - developer-utilities
repository: "https://github.com/andrewk17/deploylight"
website: "https://deploylight.akim.workers.dev/"
license: "MIT"
licenseUrl: "https://github.com/andrewk17/deploylight/blob/main/LICENSE"
download: "https://github.com/andrewk17/deploylight/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/andrewk17/deploylight"
  - "https://github.com/andrewk17/deploylight/blob/main/LICENSE"
  - "https://github.com/andrewk17/deploylight/releases"
  - "https://deploylight.akim.workers.dev/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/andrewk17/deploylight/releases/download/v0.3.0/Deploylight-v0.3.0.zip"
    credit: "Deploylight contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Deploylight sits in the menu bar and shows whether your latest Vercel or Cloudflare Workers Builds deployments are building, ready or failed. Clicking a deployment opens its details, and you can filter by team, project, branch and state. It suits developers who want to watch a deploy without opening either dashboard.

It requires macOS 13 or later and an Apple silicon Mac; the app binary is arm64 only. You need a Vercel API token, a Cloudflare user API token, or both, entered in Preferences, because the app polls each provider's API. The release is signed and notarized by Apple, so it opens without an override.
