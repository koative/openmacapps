---
name: "KV Studio"
summary: "Native macOS client for go-kv-store that browses keys, inspects values, runs RESP2 commands and manages a local server."
category: "Developer tools"
tags:
  - databases
  - network
  - native
repository: "https://github.com/Aybavs/KV-Studio"
website: "https://github.com/Aybavs/KV-Studio"
license: "MIT"
licenseUrl: "https://github.com/Aybavs/KV-Studio/blob/main/LICENSE"
download: "https://github.com/Aybavs/KV-Studio/releases/latest/download/KVStudio.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Aybavs/KV-Studio"
  - "https://github.com/Aybavs/KV-Studio/blob/main/LICENSE"
  - "https://github.com/Aybavs/KV-Studio/releases/latest"
---

KV Studio is a SwiftUI client for go-kv-store, a key-value server. It lists keys with paged scanning and server-side matching, shows values as text, formatted JSON or a hex dump, and includes a console that sends RESP2 commands and shows the raw reply. It can start and stop a local kv-server it owns, or connect to a server you already run, and it has a live log view. It suits developers who work with go-kv-store.

Requires macOS 14 or later. The README describes the release DMG as notarized. The DMG bundles kv-server 1.2.0, so a local server starts without installing anything else. Updates are downloaded with SHA-256 checks and roll back if a new backend fails to start, according to the README.
