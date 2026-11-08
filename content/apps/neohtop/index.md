---
name: NeoHtop
summary: Shows CPU, memory, GPU and network use above a searchable, sortable table of running processes.
category: Utilities
tags:
  - system-monitoring
  - processes
  - cpu
  - system-monitor
alternativeTo:
  - task-manager
repository: https://github.com/Abdenasser/neohtop
website: https://abdenasser.github.io/neohtop/
license: MIT
licenseUrl: https://github.com/Abdenasser/neohtop/blob/main/LICENSE
download: https://github.com/Abdenasser/neohtop/releases
freeDownload: true
homebrew: "neohtop"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/Abdenasser/neohtop
  - https://github.com/Abdenasser/neohtop/blob/main/LICENSE
  - https://github.com/Abdenasser/neohtop/blob/main/README.md
  - https://github.com/Abdenasser/neohtop/releases
  - https://raw.githubusercontent.com/Abdenasser/neohtop/main/README.md
  - https://github.com/Abdenasser/neohtop/releases/tag/v1.3.0
  - https://abdenasser.github.io/neohtop/privacy.html
assets:
  - path: ./assets/icon.png
    source: https://github.com/Abdenasser/neohtop/blob/a034e4b931d6e8daf183205e9d122f0d6a8f0f41/src-tauri/icons/icon.png
    credit: NeoHtop contributors
    license: MIT; upstream app artwork, trademark rights retained.
  - path: ./assets/screenshot.png
    source: https://github.com/Abdenasser/neohtop/blob/a034e4b931d6e8daf183205e9d122f0d6a8f0f41/screenshot.png
    credit: NeoHtop contributors
    license: MIT; upstream documentation screenshot, trademark rights retained.
screenshots:
  - src: ./assets/screenshot.png
    alt: NeoHtop process table showing CPU and memory usage with search and filters.
    source: https://github.com/Abdenasser/neohtop/blob/a034e4b931d6e8daf183205e9d122f0d6a8f0f41/screenshot.png
    credit: NeoHtop contributors
icon: ./assets/icon.png
---

NeoHtop shows what your Mac is doing in one window: CPU, memory, GPU, storage and network charts above a table of running processes. Sort the table by usage, pin a process you want to keep in sight, or open its inspector for the details.

- Tree view groups processes into families and shows their combined CPU and RAM.
- Search takes names, commands and PIDs, with commas for several terms and regular expressions for patterns.
- Typing `:3000` or `port:443` finds the process holding that port.
- Filters combine CPU, RAM, runtime and status conditions.
- A menu bar companion lists the five busiest processes and live readings without bringing the main window forward.

The charts hold about two minutes of history in memory, and you can pause sampling to look at a spike with the pointer or the arrow keys. On a Mac, GPU figures come from the IORegistry, and counters such as temperature appear only when the system exposes them. Family totals can pass 100% across cores. Closing the main window quits the app unless you turn on the setting that keeps it running in the menu bar.

The app needs no account. Official builds send a launch count and the app version without a persistent identifier, and the developer says process names, searches and readings stay on the machine.

Task Manager gives Windows users a similar process list and performance graphs, plus control over startup apps. NeoHtop adds port lookup and process trees, and it also runs on macOS and Linux.

Apple silicon and Intel Macs get separate DMGs. The Apple silicon app is Developer ID-signed and notarized, and it declares macOS 10.13 as its minimum. NeoHtop is MIT-licensed.
