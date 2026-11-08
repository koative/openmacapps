---
name: "Sequel Ace"
summary: "Connects to MySQL and MariaDB databases so you can browse tables and run queries, locally or over SSH."
category: "Developer tools"
tags: ["database", "mysql", "native", "database-client"]
repository: "https://github.com/Sequel-Ace/Sequel-Ace"
website: "https://sequel-ace.com"
license: "MIT"
licenseUrl: "https://github.com/Sequel-Ace/Sequel-Ace/blob/main/LICENSE"
download: "https://github.com/Sequel-Ace/Sequel-Ace/releases"
freeDownload: true
homebrew: "sequel-ace"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/Sequel-Ace/Sequel-Ace", "https://github.com/Sequel-Ace/Sequel-Ace/blob/main/LICENSE", "https://sequel-ace.com", "https://raw.githubusercontent.com/Sequel-Ace/Sequel-Ace/main/readme.md", "https://sequel-ace.com/get-started/", "https://github.com/Sequel-Ace/Sequel-Ace/releases/tag/production%2F6.1.0-20117", "https://apps.apple.com/us/app/sequel-ace/id1518036000"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/Sequel-Ace/Sequel-Ace/main/Resources/Images.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "Sequel Ace contributors", "license": "MIT; upstream project asset, trademarks retained"}]
---

Sequel Ace connects to a MySQL or MariaDB server and opens its databases in a window, where you browse tables and run queries. It carries on from Sequel Pro, the older Mac client, and can import your saved Sequel Pro favorites.

Connections can use:

- standard TCP/IP or a local socket
- an SSH tunnel
- AWS RDS or Aurora with IAM authentication
- short-lived credentials from HashiCorp Vault

Favorites keep their passwords in the Keychain. A `mysql://` URL opens a connection from a script or an access tool, and each new window can hold another server. A built-in MCP server lets AI agents query your connections; it is off by default, listens only on localhost and stays read-only unless you change that.

The app is sandboxed, and that has costs. It cannot reach a socket outside its own container, so a local server needs its socket placed there, or you connect to 127.0.0.1 over TCP. Your `~/.ssh/config` is ignored until you choose it in the Network settings.

Sequel Ace requires macOS 13.5 or later and runs on Apple silicon and Intel. It supports MySQL 5.7 and later and MariaDB 10.0 and later. Older releases for earlier macOS versions and MySQL 5.6 stay on GitHub, without support. The same app is on the Mac App Store, and the GitHub ZIP holds a Universal build, Developer ID-signed and notarized.
