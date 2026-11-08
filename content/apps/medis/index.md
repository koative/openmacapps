---
name: "Medis"
summary: "A graphical Redis client for browsing keys and inspecting stored values."
category: "Developer tools"
tags: ["database", "redis", "database-client"]
repository: "https://github.com/luin/medis"
website: "https://getmedis.com"
license: "MIT"
licenseUrl: "https://github.com/luin/medis/blob/master/LICENSE"
download: "https://github.com/luin/medis/releases"
freeDownload: true
maintenance: "unmaintained"
maintenanceNote: "No release since February 2017."
homebrew: "medis"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/luin/medis", "https://github.com/luin/medis/blob/master/LICENSE", "https://github.com/luin/medis/blob/master/README.md", "https://github.com/luin/medis/blob/master/package.json", "https://github.com/luin/medis/releases", "https://github.com/luin/medis/releases/tag/0.6.1", "https://github.com/luin/medis/releases/tag/v0.5.0", "https://getmedis.com"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/luin/medis/blob/master/resources/icns/Icon1024.png", "credit": "Medis contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

Medis connects to a Redis server and lets you browse its keys, open a value and edit it in a window. A connection can go directly, over SSL, or through an SSH tunnel to a remote host. Heroku Redis works by pasting in the host, port and password from `heroku redis:credentials`.

- Keys are listed with `SCAN`, so large databases load without blocking the server.
- A pattern manager narrows the list to a group of keys.
- JSON and MessagePack values are shown with highlighting and checked when you edit them.
- A built-in terminal runs any command, and the server config can be viewed and changed.

Because it depends on `SCAN`, Medis needs Redis 2.8 or newer.

This repository holds the original Electron app. Its last release, 0.6.1, came out in February 2017 with search inside a key and fixes for Heroku and sorted sets. That release has no Mac download attached; the newest packaged build is the Intel-only `medis-v0.5.0-mac-x64.zip` from December 2016. Otherwise you build it from source with npm.

The project site now offers Medis 2, a separate rewrite in native code for macOS 12 or later, distributed through the App Store and Homebrew. It adds a tree view, streams and dark mode. Its code is not in this repository, so the MIT license here covers only the original app.
