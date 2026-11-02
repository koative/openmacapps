---
name: "Glide"
summary: "A keyboard-driven tiling window manager inspired by i3 and Sway that works alongside macOS Spaces."
category: "Productivity"
tags:
  - window-management
  - tiling
  - window-manager
  - keyboard-shortcuts
repository: https://github.com/tmandry/glide
website: https://glidewm.org
license: "Apache-2.0 OR MIT"
licenseUrl: https://github.com/tmandry/glide/blob/main/LICENSE-APACHE
download: https://github.com/tmandry/glide/releases/latest
homebrew: "glide"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/tmandry/glide
  - https://github.com/tmandry/glide/blob/main/LICENSE-APACHE
  - https://github.com/tmandry/glide/blob/main/LICENSE-MIT
  - https://github.com/tmandry/glide/releases
  - https://glidewm.org
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tmandry/glide/main/assets/app_icon-128x128@2x.png
    credit: "Glide contributors"
    license: "Apache-2.0 OR MIT; upstream project asset, trademarks retained"
---

Glide arranges windows into tiled layouts in the style of i3, Sway and Hyprland. You turn tiling on per Space with a shortcut, then move, resize and group windows into rows, columns, tabs or stacks from the keyboard. Optional focus-follows-mouse and mouse-follows-focus speed up trackpad use, and layouts are saved so they can come back after a restart of the app in the same login session.

Key bindings and settings live in a TOML file, and a bundled command-line tool reloads the configuration and can install Glide as a login service. It needs Accessibility permission and expects the macOS "Displays have separate Spaces" setting to stay on. Releases include Apple silicon and Intel builds; the project is still at 0.x versions.
