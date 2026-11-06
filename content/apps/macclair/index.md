---
name: "MacClair"
summary: "Maps disk usage and finds caches, large files and duplicates, moving only what you confirm to the Trash."
category: "Utilities"
tags:
  - disk-usage
  - cleanup
  - files
  - native
alternativeTo:
  - daisydisk
repository: "https://github.com/n-khd/MacClair"
website: "https://macclair.waaplink.com"
license: "MIT"
licenseUrl: "https://github.com/n-khd/MacClair/blob/main/LICENSE"
download: "https://github.com/n-khd/MacClair/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/n-khd/MacClair"
  - "https://github.com/n-khd/MacClair/blob/main/LICENSE"
  - "https://github.com/n-khd/MacClair/releases"
  - "https://macclair.waaplink.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/n-khd/MacClair/main/Assets/MacClair.icns"
    credit: "MacClair contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

MacClair maps where disk space goes and runs a focused cleanup scan. It looks at your account's caches, logs and installers older than 30 days, large files, old installers, and exact and similar duplicates, and reports them with real names and paths. Selected items go to the Trash after an explicit confirmation; nothing is deleted for good, and system files are not touched. It is for people who want to see what is using their disk and clear it without a commercial suite. It does not implement every CleanMyMac feature. A local MCP server lets agent clients run the same scans; the results go to that client.

Requires macOS 14 or later. The universal build runs on Apple silicon and Intel. The README says each release is signed with a Developer ID and notarized by Apple, so it opens without a Gatekeeper warning. The project has no account, no telemetry and no network calls of its own. Caveats from the README: it has not been independently audited, scans are capped at 10,000 files and 80,000 entries, hidden folders and application packages are skipped, and it does not yet guard against every concurrent filesystem change, so review each selection before you confirm.
