---
name: "OpenPencil"
summary: "An open design editor that opens and saves Figma .fig files, with components, auto layout, AI tools and a scriptable CLI."
category: "Design"
tags:
  - ui-design
  - vector
  - prototyping
  - collaboration
  - cross-platform
repository: https://github.com/open-pencil/open-pencil
website: https://openpencil.dev
license: "MIT"
licenseUrl: https://github.com/open-pencil/open-pencil/blob/master/LICENSE
download: https://github.com/open-pencil/open-pencil/releases/latest
homebrew: "openpencil"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/open-pencil/open-pencil
  - https://github.com/open-pencil/open-pencil/blob/master/LICENSE
  - https://github.com/open-pencil/open-pencil/releases
  - https://openpencil.dev/overview/privacy
assets:
  - path: ./assets/icon.png
    source: https://github.com/open-pencil/open-pencil/releases/download/v0.16.0/OpenPencil_0.16.0_aarch64.dmg
    credit: "Danila Poyarkov and OpenPencil contributors"
    license: "MIT; app icon from the official release bundle, trademarks retained"
---

OpenPencil is a design editor for interface work. It reads and writes Figma `.fig` files as well as Pencil `.pen` documents, and supports components and variants, flex and grid auto layout, and export to images, SVG, PDF and code such as JSX with Tailwind. Live collaboration works peer to peer over WebRTC without an account, and teams can optionally keep documents on a self-hosted OpenPencil Cloud server.

A built-in chat can create and change designs through an AI model, using your own API key for a major provider or any compatible endpoint. The same engine is exposed through a command-line tool and an MCP server, so documents can be inspected, linted, converted and edited by scripts or coding agents.

The project is under active development and its authors describe it as usable with rough edges. The desktop app is built with Tauri, ships separate Apple silicon and Intel disk images, and needs macOS 13 or later. Official builds send one anonymous ping a day and share usage statistics only with your consent; the privacy page explains how to turn this off. The editor itself is MIT-licensed, while the OpenPencil Cloud server code is under Apache-2.0.
