---
name: "MacHead"
summary: "Runs a MacBook as a headless server with the lid closed: the built-in display and keyboard switch off and the Mac keeps running."
category: "Utilities"
tags:
  - menu-bar
  - network
  - automation
repository: "https://github.com/ox01024/MacHead"
website: "https://headlessmac.com"
license: "Apache-2.0"
licenseUrl: "https://github.com/ox01024/MacHead/blob/main/LICENSE"
download: "https://github.com/ox01024/MacHead/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ox01024/MacHead"
  - "https://github.com/ox01024/MacHead/blob/main/LICENSE"
  - "https://github.com/ox01024/MacHead/releases"
  - "https://github.com/ox01024/MacHead/releases/tag/v0.1.29"
  - "https://headlessmac.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/ox01024/MacHead/main/Resources/AppIcon.icns"
    credit: "The MacHead Authors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

MacHead turns a MacBook into a server that keeps running with the lid closed. In headless mode the built-in display is switched off, the built-in keyboard and trackpad are locked while external keyboards and mice keep working, the microphone is muted, and clamshell sleep is handled. If the battery runs low after a power loss, it lets the Mac sleep to protect the battery. A menu bar app controls it, a local web console shows CPU, memory, GPU and battery, and a `machead` command-line tool can switch modes over SSH. Optional remote access through Cloudflare Tunnel, FRP or Microsoft Dev Tunnels, and monitoring through Nezha, ServerStatus or Uptime Kuma, are set up only when you switch them on.

It supports macOS 12 or later on Apple silicon and Intel, as a universal build. It needs the Accessibility permission to block the built-in keyboard and the Input Monitoring permission to lock the trackpad. The app sends anonymous usage statistics, which you can turn off in General preferences. The Microsoft Dev Tunnels CLI is proprietary and is not bundled; you install it yourself. Dragging the app to the Trash removes it.
