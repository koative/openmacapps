---
name: "Freeplane"
summary: "Builds mind maps whose nodes carry notes, attributes, formulas and scripts."
category: "Productivity"
tags: ["mind-mapping", "outliner", "planning"]
repository: "https://github.com/freeplane/freeplane"
website: "https://www.freeplane.org/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/freeplane/freeplane/blob/1.13.x/license.txt"
download: "https://github.com/freeplane/freeplane/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/freeplane/freeplane", "https://github.com/freeplane/freeplane/blob/1.13.x/license.txt", "https://github.com/freeplane/freeplane/blob/1.13.x/README.md", "https://github.com/freeplane/freeplane/releases", "https://raw.githubusercontent.com/freeplane/freeplane/1.13.x/freeplane/src/main/java/org/freeplane/main/application/FreeplaneStarter.java", "https://www.freeplane.org/", "https://docs.freeplane.org/", "https://docs.freeplane.org/getting-started/Distributions.html", "https://docs.freeplane.org/ai/ai-integration-getting-started.html", "https://docs.freeplane.org/scripting/Formulas.html", "https://docs.freeplane.org/user-documentation/Relationship_to_FreeMind.html", "https://github.com/freeplane/freeplane/releases/tag/release-1.13.4"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/freeplane/freeplane/1.13.x/freeplane/src/editor/resources/images/Freeplane_frame_icon_256x256.png", "credit": "Freeplane contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

Freeplane lays out your thinking as a mind map. You start from one central node and branch out from there, and each node can hold a note, attributes, links to other nodes and its own formatting.

When a map needs structure, Freeplane goes further:

- Formulas that start with `=` compute values from other nodes, the way spreadsheet cells do, and run as Groovy expressions.
- Styles, conditional styles and templates keep a whole map consistent.
- LaTeX can appear in nodes, and a spell checker covers the text.
- Groovy scripts and add-ons extend what the program does.

Since version 1.13.1 an AI panel can summarize, rewrite and edit map content through OpenRouter, Gemini or an Ollama server you point it at. The documentation warns that map text may leave your machine, depending on the provider. A tool setting decides whether the AI may only read the map, edit it or also run scripts, and the Model Context Protocol server is off by default.

Freeplane began as a fork of FreeMind and is written in Java. The macOS downloads bundle Java 21 and need macOS 14 or later. The DMG marked `apple` is for Apple silicon, and the one marked `intel` runs on Intel Macs and on Apple silicon too.
