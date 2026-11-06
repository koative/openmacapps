---
name: "QdrantBar"
summary: "Read-only menu bar monitor for Qdrant servers: health, point counts, collections, indexing and snapshots."
category: "Developer tools"
tags:
  - database
  - developer-utilities
  - monitoring
  - menu-bar
repository: "https://github.com/fr3on/qdrantbar"
website: "https://github.com/fr3on/qdrantbar"
license: "MIT"
licenseUrl: "https://github.com/fr3on/qdrantbar/blob/main/LICENSE"
download: "https://github.com/fr3on/qdrantbar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/fr3on/qdrantbar"
  - "https://github.com/fr3on/qdrantbar/blob/main/LICENSE"
  - "https://github.com/fr3on/qdrantbar/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/fr3on/qdrantbar/main/assets/AppIcon.icns"
    credit: "fr3on"
    license: "MIT; upstream app icon, trademarks retained"
---

QdrantBar shows the state of a Qdrant vector database server in the menu bar: a status dot, one chosen stat such as the point count, and a popover with collections, indexing progress, segments, snapshots and latency. It replaces repeated curl checks against the server's collections endpoint. It is for developers who run Qdrant locally or on a remote host and want a quick look rather than the full dashboard. The README says it sends only GET requests and cannot start, stop or change a server or its data.

The README says it needs macOS 14 or later and is universal, for Apple silicon and Intel. The build is ad-hoc signed and not notarized, so the first launch needs Open Anyway or removal of the quarantine flag. API keys are stored in the Keychain, and remote http:// servers are refused unless you allow insecure HTTP for that one server. The README calls it an unofficial community tool that is not affiliated with Qdrant.
