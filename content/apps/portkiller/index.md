---
name: "PortKiller"
summary: "Lists listening ports with their processes so you can stop them, and manages Kubernetes port forwards from the menu bar."
category: "Developer tools"
tags:
  - network
  - processes
  - menu-bar
  - cross-platform
repository: https://github.com/productdevbook/port-killer
website: https://github.com/productdevbook/port-killer
license: "MIT"
licenseUrl: https://github.com/productdevbook/port-killer/blob/main/LICENSE
download: https://github.com/productdevbook/port-killer/releases
freeDownload: true
homebrew: "portkiller"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/productdevbook/port-killer", "https://github.com/productdevbook/port-killer/blob/main/LICENSE", "https://github.com/productdevbook/port-killer/releases", "https://formulae.brew.sh/cask/portkiller", "https://raw.githubusercontent.com/productdevbook/port-killer/main/README.md", "https://raw.githubusercontent.com/productdevbook/port-killer/main/LICENSE", "https://github.com/productdevbook/port-killer/releases/tag/v3.4.0"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/productdevbook/port-killer/main/platforms/macos/Resources/AppIcon.icns
    credit: "PortKiller contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

When a dev server refuses to start because its port is taken, PortKiller shows you what holds it. It finds every listening TCP port, names the process behind each one, and stops that process with a click, either gracefully or by force.

- Search filters the list by port number or process name.
- Ports are sorted into web servers, databases, development tools and system services.
- Favorites keep important ports at hand, and watched ports send a notification.
- The list refreshes on an interval you set.

PortKiller also manages Kubernetes port forwards. It starts kubectl port-forward sessions, reconnects them when the connection drops, keeps a log and notifies you on connect and disconnect. Active Cloudflare Tunnel connections show up with their status.

On the Mac it runs from the menu bar. Version 3.4.0 requires macOS 15 or later, and its DMG holds a Universal app for Apple silicon and Intel; both the disk image and the app are notarized. The same release has a system-tray build for Windows and a Linux AppImage. Homebrew users can install it from the project's own tap.
