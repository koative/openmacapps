---
name: "reManager"
summary: "Installs and manages community mods on reMarkable tablets over SSH, with backups, file transfer and a terminal."
category: "Utilities"
tags: ["mods", "ssh", "backup", "file-transfer", "cross-platform"]
repository: "https://github.com/rmitchellscott/reManager"
website: "https://remanager.io"
license: "GPL-3.0"
licenseUrl: "https://github.com/rmitchellscott/reManager/blob/main/LICENSE"
download: "https://github.com/rmitchellscott/reManager/releases"
homebrew: "remanager"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
sources: ["https://github.com/rmitchellscott/reManager", "https://github.com/rmitchellscott/reManager/blob/main/LICENSE", "https://github.com/rmitchellscott/reManager/releases"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://github.com/rmitchellscott/reManager/blob/main/build/appicon.png", "credit": "Mitchell Scott", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
---

reManager is a desktop app for people who customize their reMarkable tablet. It connects to the tablet over SSH, using saved password or key credentials for one or more devices, and installs, upgrades and removes community mods from the Vellum package index with their dependencies resolved automatically. It supports the reMarkable 1 and 2 and the Paper Pro, Paper Pro Move and Paper Pure.

Beyond packages, it can back up and restore the document library and settings, import PDFs, browse the tablet's files, open a shell, edit configuration files, switch or install reMarkable OS versions, and turn automatic updates off. Mods change the tablet's system software, and problems with a particular mod are handled by that mod's own project. The Mac download is a universal build for Apple silicon and Intel.
