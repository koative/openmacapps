---
name: "Planet"
summary: "Writes and publishes blogs over IPFS from a built-in node, links them to ENS names, and follows other sites and RSS feeds."
category: "Internet"
tags:
  - publishing
  - peer-to-peer
  - rss
  - feeds
  - markdown
repository: "https://github.com/Planetable/Planet"
website: "https://www.planetable.xyz/"
license: "MIT"
licenseUrl: "https://github.com/Planetable/Planet/blob/main/LICENSE"
download: "https://www.planetable.xyz/"
homebrew: "planet"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Planetable/Planet"
  - "https://github.com/Planetable/Planet/blob/main/LICENSE"
  - "https://github.com/Planetable/Planet/releases"
  - "https://www.planetable.xyz/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/Planetable/Planet/main/Planet/Assets.xcassets/AppIcon.appiconset/Planetable%20Lite%20512.png"
    credit: "Planetable Development Team"
    license: "MIT; upstream app icon, trademarks retained"
---

Planet publishes websites without a hosting service. You write posts in a Markdown editor with live preview, attach images, audio, video or other files, choose a template, and the app serves the site from the IPFS node it bundles. Each site gets an IPNS address that can be set as the content hash of an Ethereum Name Service (.eth) name, so readers can reach and follow it by that name.

The same app is also a reader: it follows other sites published on ENS, pins their content so it stays readable offline, and subscribes to RSS, Atom and JSON Feed sources. It suits people who want to run a blog or small site without a central server, and readers who follow .eth sites.

The app bundle targets macOS 12 or later as a universal build, it is signed, notarized and sandboxed, and its optional Apple Intelligence features need macOS 26. The stable download is a zip on the project website; the GitHub releases page also carries Insider pre-release builds. The developers describe the project as early and changing, and recommend backing up your sites, including the IPNS key, with Export Planet. They state that the app collects no information and uses no third-party analytics.
