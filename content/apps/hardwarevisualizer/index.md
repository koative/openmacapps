---
name: "HardwareVisualizer"
summary: "A hardware monitor with live CPU, GPU and memory graphs, a specs sheet, and locally stored usage history."
category: "Utilities"
tags:
  - system-monitoring
  - monitoring
  - cross-platform
  - system-monitor
repository: https://github.com/shm11C3/HardwareVisualizer
website: https://hardviz.com
license: GPL-3.0-or-later
licenseUrl: https://github.com/shm11C3/HardwareVisualizer/blob/develop/LICENSE
download: https://github.com/shm11C3/HardwareVisualizer/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/shm11C3/HardwareVisualizer
  - https://github.com/shm11C3/HardwareVisualizer/blob/develop/LICENSE
  - https://github.com/shm11C3/HardwareVisualizer/releases
  - https://hardviz.com
  - https://github.com/shm11C3/HardwareVisualizer/blob/develop/README.md
  - https://github.com/shm11C3/HardwareVisualizer/blob/develop/CODE_SIGNING_POLICY.md
  - https://github.com/shm11C3/HardwareVisualizer/releases/tag/v1.11.3
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/shm11C3/HardwareVisualizer/develop/src-tauri/icons/icon.icns
    credit: "shm11C3 and HardwareVisualizer contributors"
    license: "GPL-3.0-or-later repository asset; name and logo retained by the project"
---

HardwareVisualizer graphs what your Mac's processor, graphics and memory are doing right now and keeps a record of it. After a long render or game, you can come back and see when the load peaked and which processes were using CPU and memory.

- The Performance view shows live CPU, memory and GPU gauges and graphs, per-core usage and running processes, laid out as Panels, Compact or Monitor.
- Insights keeps averages, peaks and lows for up to a year, and process history for up to 30 days.
- System Specifications lists the CPU, GPU, memory, storage and network hardware and can copy the whole list as a hardware report.
- Storage Health shows SMART data for each drive once smartmontools is installed.
- A menu bar readout shows CPU and GPU usage, and the app can keep running there after you close the window.

History goes into a local database, and how long it is kept is a setting. The developer says hardware data stays on the computer and that the app goes online only to look for updates on GitHub.

Separate disk images serve Apple silicon and Intel Macs, and the project lists its Mac builds as signed and notarized. The same Tauri-based app runs on Windows and Linux. The code is GPL-3.0-or-later, while releases up to the 1.10 line remain available under MIT.

Sensor coverage on the Mac is narrower than on Windows. Apple silicon Macs report power draw for the CPU, GPU, Neural Engine and whole package. The Mac build reads no CPU or GPU temperatures and no fans, and Cooling Insight, which compares temperatures against load over time, is missing.
