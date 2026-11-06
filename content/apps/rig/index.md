---
name: "Rig"
summary: "Ghostty sidecar that starts, focuses and arranges terminal sessions for projects and coding agents."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - window-management
  - automation
repository: "https://github.com/backnotprop/rig"
website: "https://github.com/backnotprop/rig"
license: "MIT OR Apache-2.0"
licenseUrl: "https://github.com/backnotprop/rig/blob/main/LICENSE"
download: "https://github.com/backnotprop/rig/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/backnotprop/rig"
  - "https://github.com/backnotprop/rig/blob/main/LICENSE"
  - "https://github.com/backnotprop/rig/blob/main/LICENSE-APACHE"
  - "https://github.com/backnotprop/rig/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/backnotprop/rig/main/Rig/Assets.xcassets/AppIcon.appiconset/icon_256x256.png"
    credit: "backnotprop"
    license: "MIT OR Apache-2.0; upstream app icon, trademarks retained"
---

Rig is a small macOS helper for Ghostty. It starts Ghostty sessions for the coding tools you configure, keeps their windows reachable from a floating side panel, switches to a session's Space, and arranges managed windows as a grid, cascade, side-by-side or full-screen layout. It also detects local servers started from a session and opens their URLs beside it. It is for developers who run coding agents across several projects in Ghostty.

Rig needs Ghostty, plus Accessibility permission for window arrangement and Automation permission to control Ghostty. The app's Info.plist sets a minimum of macOS 26.0; the README does not state a version. The release is notarized. Session state is kept in memory, so window references are lost when Rig or Ghostty restarts. The code is dual-licensed under MIT and Apache-2.0.
