---
name: "Cocoa-Way"
summary: "A Wayland compositor for macOS that shows Linux GUI apps from containers or remote machines in Mac windows."
category: "Developer tools"
tags: ["linux", "containers", "wayland", "remote-desktop"]
repository: "https://github.com/J-x-Z/cocoa-way"
website: "https://github.com/J-x-Z/cocoa-way"
license: "GPL-3.0"
licenseUrl: "https://github.com/J-x-Z/cocoa-way/blob/main/LICENSE"
download: "https://github.com/J-x-Z/cocoa-way/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/J-x-Z/cocoa-way", "https://github.com/J-x-Z/cocoa-way/blob/main/LICENSE", "https://github.com/J-x-Z/cocoa-way/blob/main/README.md", "https://github.com/J-x-Z/cocoa-way/releases/tag/v2.1.2"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/J-x-Z/cocoa-way/main/assets/icon.png", "credit": "J-x-Z and Cocoa-Way contributors", "license": "GPL-3.0 repository asset; trademarks retained"}]
screenshots: []
---

Cocoa-Way lets you run Linux GUI programs on a Mac and see them in Mac windows. It accepts the Wayland display protocol and draws what Linux apps render through Metal, with Retina scaling. The Linux side can be a remote machine reached over SSH with Waypipe, or a container started on the Mac itself.

- Desktop mode puts a whole Linux session, such as the niri or Hyprland compositor, in one window.
- Rootless mode gives each Wayland app its own macOS window that you move, resize, minimize and make full screen as usual.
- Saved application profiles start an image through Apple Container, a Docker-compatible engine or OrbStack, with logs, a terminal and resource limits in the same panel.
- Text and PNG images cross the clipboard in both directions, and audio, keyboard, pointer and gestures are forwarded.

A menu bar icon holds connections, displays and environment checks. The `cocoa-wayctl` command reaches the same controls from scripts, and an optional MCP adapter is read-only unless you start it with an explicit flag.

The 2.1.2 release is a DMG or ZIP for Apple silicon only. Its app declares macOS 26 as the minimum. The build is ad-hoc signed, not notarized, so the first launch has to be allowed under Privacy & Security. A Homebrew tap is also available. The code is GPL-3.0.

Apple Container gives no GPU passthrough, so Linux apps may render on the CPU before the frames reach Metal. X11 programs need Xwayland inside Linux. Waypipe has to be installed on the Mac and on the Linux side, and the container runtime is a separate install. The project says latency is still being worked on.
