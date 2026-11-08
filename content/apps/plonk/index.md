---
name: "Plonk"
summary: "A modular menu bar toolbox for screenshots, OCR, measuring, keep-awake, window zones and workspaces."
category: "Utilities"
tags:
  - screenshots
  - ocr
  - window-management
  - menu-bar
repository: https://github.com/ostapondo/Plonk
website: https://ostapondo.github.io/Plonk/
license: "MIT"
licenseUrl: https://github.com/ostapondo/Plonk/blob/main/LICENSE
download: https://github.com/ostapondo/Plonk/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/ostapondo/Plonk
  - https://github.com/ostapondo/Plonk/blob/main/LICENSE
  - https://github.com/ostapondo/Plonk/releases
  - https://raw.githubusercontent.com/ostapondo/Plonk/main/README.md
  - https://github.com/ostapondo/Plonk/releases/tag/v0.4.3
  - https://ostapondo.github.io/Plonk/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/ostapondo/Plonk/main/App/Resources/AppIcon.icns
    credit: "ostapondo"
    license: "MIT; upstream project asset, trademarks retained"
---

Plonk gathers screen and window tools behind one menu bar icon and one command palette, and you switch off the modules you have no use for. A disabled module loses its menu items and shortcuts, and agents can no longer call it.

- Screenshots of a region, window or the full screen, with pen, arrows, shapes and highlights added before saving.
- OCR on the Mac with Control-Option-T, for text in a paused video, a dialog or a locked PDF.
- A ruler (Control-Option-R) that reads distances in points and in physical pixels.
- Live crops that pin part of the screen above other windows.
- Keep-awake sessions that end on a timer, a time of day, charging state or when a process exits.
- Snap zones, window rules for new apps, and workspaces that put apps back on the right displays.

Pointer tools add crosshairs and click rings, and a shortcut guide reads the menu shortcuts of the front app. Rectangle bindings import with one button. Tiling managers such as yabai and Amethyst pull windows back out of Plonk's zones, so you use one or the other.

A `plonk` command and an MCP server with 22 tools let scripts and AI agents use the same features over a local API. The developer says there is no account and no telemetry, and the update check is the only outbound connection.

Version 0.4.3 comes from one author. Its shortcuts, zone files and workspaces are settled, but the MCP tool names and HTTP API are not yet fixed. It needs macOS 13 and runs on Apple silicon only. Builds are signed with a self-made certificate and not notarized, so a manual download needs its quarantine flag cleared. Each release carries a GitHub attestation you can check with `gh attestation verify`.
