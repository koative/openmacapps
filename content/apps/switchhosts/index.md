---
name: "SwitchHosts"
summary: "Keeps several named sets of hosts-file entries and writes the ones you switch on to the system hosts file."
category: "Developer tools"
tags: ["network", "hosts", "cross-platform"]
repository: "https://github.com/oldj/SwitchHosts"
website: "https://switchhosts.app"
license: "Apache-2.0"
licenseUrl: "https://github.com/oldj/SwitchHosts/blob/master/LICENSE"
download: "https://github.com/oldj/SwitchHosts/releases"
freeDownload: true
homebrew: "switchhosts"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/oldj/SwitchHosts", "https://github.com/oldj/SwitchHosts/blob/master/LICENSE", "https://github.com/oldj/SwitchHosts/releases", "https://raw.githubusercontent.com/oldj/SwitchHosts/master/README.md", "https://switchhosts.app", "https://github.com/oldj/SwitchHosts/releases/tag/v5.0.3"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/oldj/SwitchHosts/master/src-tauri/icons/icon.icns", "credit": "oldj and SwitchHosts contributors", "license": "Apache-2.0; upstream project asset, trademarks retained"}]
screenshots: []
---

SwitchHosts stores sets of hosts-file entries side by side and writes the ones you switch on into the system hosts file. You might keep one set that points a domain at a local server and another for staging, then flip between them from the main window or the menu bar.

- Entries can be local, remote, grouped or kept in folders, and multiple selection combines several at once.
- Remote lists download from a URL and refresh by hand, on a schedule or at startup.
- The editor colors IP addresses, domains and comments, offers find and replace, and toggles a line's comment with Command-/.
- Removed entries go to a trash, where you can restore or delete them later.

Settings cover the write mode, a proxy, update checks, launch at login, a command to run after applying, and a local HTTP API. Everything lives in `~/.SwitchHosts`. Copying that folder makes a full backup; the export inside the app saves hosts data only, without preferences or history. Local sets can be exported and shared with a team.

The current version is built with Tauri. Release 5.0.3 on GitHub has Apple silicon, Intel and Universal disk images; the Universal image is Developer ID-signed and notarized and requires macOS 10.15. SwitchHosts is free and open source under the Apache 2.0 license.
