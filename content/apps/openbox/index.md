---
name: "OpenBox"
summary: "Creates, starts and removes isolated Linux and macOS sandboxes on Apple silicon, with a terminal in each one."
category: "Developer tools"
tags:
  - virtual-machines
  - sandbox
  - developer-utilities
repository: "https://github.com/jianliang00/open-box"
website: "https://github.com/jianliang00/open-box"
license: "Apache-2.0"
licenseUrl: "https://github.com/jianliang00/open-box/blob/main/LICENSE"
download: "https://github.com/jianliang00/open-box/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jianliang00/open-box"
  - "https://github.com/jianliang00/open-box/blob/main/LICENSE"
  - "https://github.com/jianliang00/open-box/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jianliang00/open-box/main/OpenBox/Assets.xcassets/AppIcon.appiconset/icon-mac-512%402x.png"
    credit: "OpenBox contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

OpenBox is a desktop app for making disposable sandboxes, so commands, app tests and installs stay away from your everyday Mac. You can create, start, stop, inspect and remove sandboxes from a visual list, and each one keeps its own logs and diagnostics. macOS guest sandboxes can open a desktop session and an embedded terminal, and ready-made images make the first sandbox quick to start. It is aimed at people who want an isolated environment for AI agents or experiments.

It needs an Apple silicon Mac running macOS 26 or later, and the README points to Apple's container runtime requirements for that. The project describes itself as early alpha software in the 0.0.x line. The README says the release DMG is signed and notarized. Linux desktop sessions are listed as a future area, and the interactive terminal currently targets macOS guest sandboxes.
