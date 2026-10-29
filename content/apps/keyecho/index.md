---
name: "KeyEcho"
summary: "Plays mechanical keyboard sounds for every keystroke, with free and custom sound packs, in a small Rust app."
category: "Utilities"
tags:
  - keyboard
  - audio
  - customization
  - cross-platform
repository: https://github.com/ZacharyL2/KeyEcho
website: https://keyecho.app
license: "AGPL-3.0"
licenseUrl: https://github.com/ZacharyL2/KeyEcho/blob/main/LICENSE
download: https://github.com/ZacharyL2/KeyEcho/releases
homebrew: "keyecho"
freeDownload: true
featured: false
added: '2026-10-29'
verified: '2026-10-29'
icon: ./assets/icon.png
sources:
  - https://github.com/ZacharyL2/KeyEcho
  - https://github.com/ZacharyL2/KeyEcho/blob/main/LICENSE
  - https://github.com/ZacharyL2/KeyEcho/releases
  - https://keyecho.app
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ZacharyL2/KeyEcho/main/src-tauri/icons/icon.icns
    credit: "KeyEcho contributors"
    license: "AGPL-3.0; upstream app icon, trademarks retained"
---

KeyEcho listens for key presses system-wide and plays a matching switch sound locally, so any keyboard can sound like a clicky or thocky mechanical board. It is built with Tauri, Rust and Solid, keeps no account and does not upload what you type, though macOS asks for the permission needed to read global keyboard events.

Free sound packs download inside the app, you can record and add your own, and the author sells optional extra packs that unlock with a license key; the app itself is free. Builds are published for Apple silicon and Intel Macs as well as Windows and Linux.
