---
name: "SuperCollider"
summary: "Synthesizes and processes sound from code, with a real-time audio server, its own language and an editor."
category: "Media"
tags: ["music", "live-coding", "synthesizer"]
repository: "https://github.com/supercollider/supercollider"
website: "https://supercollider.github.io/"
license: "GPL-3.0"
licenseUrl: "https://github.com/supercollider/supercollider/blob/develop/COPYING"
download: "https://github.com/supercollider/supercollider/releases"
freeDownload: true
homebrew: "supercollider"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
screenshots: []
sources: ["https://github.com/supercollider/supercollider", "https://github.com/supercollider/supercollider/blob/develop/COPYING", "https://raw.githubusercontent.com/supercollider/supercollider/develop/README.md", "https://supercollider.github.io/", "https://supercollider.github.io/downloads", "https://github.com/supercollider/supercollider/releases/tag/Version-3.14.1"]
assets: [{"path": "./assets/icon.svg", "source": "https://github.com/supercollider/supercollider/blob/develop/icons/sc_logo.svg", "credit": "SuperCollider contributors", "license": "GPL-3.0; project trademarks remain with their owners"}]
icon: "./assets/icon.svg"
---

SuperCollider turns code into sound. You type a few lines in its language, evaluate them in the editor, and the audio server plays the result while you keep changing the code.

Four programs make up the download:

- scsynth, the audio server, which runs in real time and ships hundreds of unit generators for synthesis, processing and analysis
- supernova, an alternative server that spreads DSP work across processor cores
- sclang, the interpreted language that controls the servers
- scide, the editor, with the help system built in

Musicians, artists and researchers use it for sound synthesis and algorithmic composition. The full documentation opens in the IDE's own browser. sclang has a package manager called Quarks for extensions, and both servers accept third-party plugins written in C or C++.

To get started, the README links free tutorials, among them the ebook A Gentle Introduction to SuperCollider, and users meet on the scsynth.org forum.

Version 3.14.1 comes as a universal build for macOS 11 or later. A separate legacy build for Intel covers macOS 10.15 or later. The project's downloads page says its macOS builds are signed and notarized, and older releases for earlier systems stay listed there.
