---
name: OmniWM
summary: "Tiles windows into scrolling columns or binary-split layouts, with the layout chosen separately for each workspace."
category: Productivity
tags:
  - window-management
  - tiling
  - workspaces
  - window-manager
repository: https://github.com/OmniNull/OmniWM
website: https://omniwm.app
license: GPL-2.0
licenseUrl: https://github.com/OmniNull/OmniWM/blob/main/LICENSE
download: https://github.com/OmniNull/OmniWM/releases
freeDownload: true
homebrew: "omniwm"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources:
  - https://github.com/OmniNull/OmniWM
  - https://github.com/OmniNull/OmniWM/blob/main/LICENSE
  - https://github.com/OmniNull/OmniWM/blob/main/README.md
  - https://github.com/OmniNull/OmniWM/releases
  - https://github.com/OmniNull/OmniWM/releases/tag/v0.8.0
  - https://omniwm.app
  - https://omniwm.app/guides/layouts/
  - https://omniwm.app/help/known-limitations/
assets:
  - path: ./assets/icon.png
    source: https://github.com/OmniNull/OmniWM/blob/5e12e4855f99eeae530bc0df3cdf932e0e8d036d/assets/brand/app/omniwm-app-icon-1024.png
    credit: OmniWM contributors
    license: GPL-2.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

OmniWM arranges your windows for you as they open, and you move between them from the keyboard. Option and a number from 1 to 9 switches workspace; adding Shift sends the focused window there.

Each workspace uses one of two layouts, and Option-Shift-L toggles between them. The Niri-style layout puts windows in columns on a strip that scrolls sideways, or in rows that scroll vertically on a monitor in portrait orientation. The Dwindle layout splits the screen into a binary tree, the way Hyprland does on Linux.

- A command palette searches windows, app menus, clipboard history, applications and files.
- A Quake-style terminal built on Ghostty opens over any workspace with Option and the backtick key.
- Scratchpads and sticky windows work with any app.
- The `omniwmctl` command and a local IPC interface drive it from scripts.
- An overview, a workspace bar and a window switcher with previews round it out.

OmniWM runs only on Apple silicon with macOS 26 or later, and System Integrity Protection stays on. It needs the Accessibility and Input Monitoring permissions, and "Displays have separate Spaces" must be turned on in Mission Control settings. Screen Recording is optional and feeds overview thumbnails and drag previews. Hiding status-bar icons needs macOS 27. The release ZIP holds an arm64 app, Developer ID-signed and notarized. It checks for updates once a day but never installs one by itself.

Configuration is a TOML file in `~/.config/omniwm`, and OmniWM picks up changes as soon as the file is saved.
