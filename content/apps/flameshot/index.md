---
name: "Flameshot"
summary: "A cross-platform screenshot tool with an in-place editor for arrows, text, blur and quick sharing."
category: "Utilities"
tags:
  - screenshots
  - annotation
  - cross-platform
  - screenshot-tool
alternativeTo:
  - snagit
repository: https://github.com/flameshot-org/flameshot
website: https://flameshot.org
license: "GPL-3.0-or-later"
licenseUrl: https://github.com/flameshot-org/flameshot/blob/master/LICENSE
download: https://github.com/flameshot-org/flameshot/releases/latest
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/flameshot-org/flameshot
  - https://github.com/flameshot-org/flameshot/blob/master/LICENSE
  - https://github.com/flameshot-org/flameshot/releases/latest
  - https://flameshot.org/docs/installation/installation-osx/
  - https://raw.githubusercontent.com/flameshot-org/flameshot/master/README.md
  - https://raw.githubusercontent.com/flameshot-org/flameshot/master/src/main.cpp
  - https://github.com/flameshot-org/flameshot/releases/tag/v15.0.0
  - https://www.techsmith.com/snagit
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/flameshot-org/flameshot/master/data/img/app/org.flameshot.Flameshot-1024.png
    credit: "Flameshot contributors"
    license: "Free Art License 1.3 (Flameshot logo license)"
---

You drag across part of the screen, and Flameshot opens its editing tools right on top of the selection. Most tools have a one-key shortcut while you are in capture mode:

- P, D, A, R, C and M pick the pencil, line, arrow, rectangle, circle and marker.
- T adds text, and B pixelates anything you want hidden.
- A circle counter numbers steps, and G opens a color picker.
- Undo and redo work as you go, and the result can be copied, saved to a file or opened in another app.

Pressing Return uploads the selection to Imgur, and a capture can also be pinned to stay on screen. The project says Flameshot sends nothing over the network unless you ask it to.

The `flameshot` command drives captures from scripts. `flameshot gui -d 2000` waits two seconds before the selection starts, which helps with hover tooltips, and `flameshot full -c` puts the whole screen on the clipboard. Settings can be changed with `flameshot config`.

Version 15.0.0 ships separate DMGs for Apple silicon and Intel. The Apple silicon app is ad-hoc signed, not notarized, and requires macOS 14 or later. macOS blocks it until you choose Open Anyway in Privacy & Security, and then it needs the Screen & System Audio Recording permission. The README also lists a Homebrew tap and MacPorts.

TechSmith's Snagit, now sold as Camtasia Snagit, also takes scrolling captures of long pages, records the screen to video and turns a series of clicks into a step-by-step guide. Flameshot is a GPL-licensed screenshot tool, and much of its documentation is written for Linux desktops.
