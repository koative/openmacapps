---
name: "PerformanceDaddy"
summary: "Shows local processes, ports, RAM and coding-agent sessions, with reviewed stop actions and saved diagnostic recordings."
category: "Developer tools"
tags:
  - system-monitor
  - processes
  - diagnostics
  - coding-agents
repository: "https://github.com/Significant-Hobbies/performancedaddy"
website: "https://performance.daddyrad.com"
license: "MIT"
licenseUrl: "https://github.com/Significant-Hobbies/performancedaddy/blob/main/LICENSE"
download: "https://github.com/Significant-Hobbies/performancedaddy/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Significant-Hobbies/performancedaddy"
  - "https://github.com/Significant-Hobbies/performancedaddy/blob/main/LICENSE"
  - "https://github.com/Significant-Hobbies/performancedaddy/releases/latest"
  - "https://performance.daddyrad.com"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Significant-Hobbies/performancedaddy/releases/download/v0.3.0-26/performancedaddy-0.3.0-build26-universal.dmg"
    credit: "Sarthak Agrawal"
    license: "MIT; upstream app icon, trademarks retained"
---

PerformanceDaddy is a native Mac tool for investigating slowdowns. It lists running processes, the ports they listen on, RAM use and local coding-agent sessions such as Codex and Claude, and it can stop selected processes after a review step. An incident mode records a short window around a moment that feels slow, and recordings can be compared with a saved baseline. It is for people who want to see which local workload is using the machine before they change anything.

It needs macOS 14 or later. The release disk image is a universal build for Apple silicon and Intel, and it is signed and notarized. The project describes it as a free beta. Some features ask for more access: the optional app-response probe needs Accessibility permission, and login items are reviewed in System Settings rather than changed by the app. The README says that its measurements are not a complete event log, and that a comparison does not prove what caused a change.
