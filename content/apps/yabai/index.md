---
name: yabai
summary: Tiles windows automatically with binary space partitioning, controlled from
  the command line and your own shortcuts.
category: Productivity
tags:
- window-management
- tiling
- keyboard-shortcuts
- window-manager
repository: https://github.com/asmvik/yabai
website: https://github.com/asmvik/yabai
license: MIT
licenseUrl: https://github.com/asmvik/yabai/blob/master/LICENSE.txt
download: https://github.com/asmvik/yabai/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/asmvik/yabai
- https://github.com/asmvik/yabai/blob/master/LICENSE.txt
- https://github.com/asmvik/yabai/releases
- https://github.com/asmvik/yabai/wiki
- https://github.com/asmvik/yabai/blob/master/README.md
- https://github.com/asmvik/yabai/blob/master/doc/yabai.asciidoc
- https://github.com/asmvik/yabai/wiki/Installing-yabai-(latest-release)
- https://github.com/asmvik/yabai/wiki/Configuration
- https://github.com/asmvik/yabai/releases/tag/v7.1.25
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/asmvik/yabai/master/assets/icon/2x/icon-256px%402x.png
  credit: Logo by fools-mate (https://github.com/fools-mate), made freely available for yabai by Åsmund Vikane
  license: MIT; upstream project asset, trademarks retained
---

yabai tiles your windows as you open them, splitting the screen by binary space partitioning so nothing overlaps. It works alongside the window manager built into macOS rather than replacing it. You drive it with `yabai -m` commands in Terminal and bind the ones you use to keys with skhd or other hotkey software.

There is no settings window. Configuration is a shell script called yabairc, kept in your home folder or under `~/.config/yabai`, which yabai runs when it starts.

- Each space can use the bsp, stack or float layout, with its own padding and gaps.
- Commands focus, swap, stack, resize or float windows and move them between spaces and displays.
- Rules decide how new windows from a given app or with a given title are handled.
- Signals run a shell command when a window opens, a space changes or a display is added.
- Queries report on displays, spaces and windows for your own scripts.

Focus-follows-mouse, switching spaces without the animation and creating more than 16 spaces are also available.

yabai needs the Accessibility permission and a restart after you grant it, plus Screen Recording only if you want window animations. Mission Control's "Displays have separate Spaces" setting must be on. Intel Macs need macOS 11 or later and Apple silicon Macs macOS 12 or later. Windows with macOS's own tabs, as in Terminal and Finder, misbehave when you create tabs, so avoid those tabs or float such windows.

Some window controls, such as sticky windows, opacity and scratchpads, work only after you partially disable System Integrity Protection so yabai can load a scripting addition into the Dock. That step is optional, and the developer makes no recommendation either way. The release archive holds a Universal binary for Apple silicon and Intel, a man page and example config files.
