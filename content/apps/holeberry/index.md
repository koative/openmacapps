---
name: "Holeberry"
summary: "Shows Pi-hole status in the menu bar, pauses blocking on a timer, and unblocks the site in your current browser tab."
category: "Utilities"
tags: ["menu-bar", "network", "privacy"]
repository: "https://github.com/pedrovieira/Holeberry"
website: "https://github.com/pedrovieira/Holeberry"
license: "MIT"
licenseUrl: "https://github.com/pedrovieira/Holeberry/blob/main/LICENSE"
download: "https://github.com/pedrovieira/Holeberry/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/pedrovieira/Holeberry", "https://github.com/pedrovieira/Holeberry/blob/main/LICENSE", "https://github.com/pedrovieira/Holeberry/releases", "https://github.com/pedrovieira/Holeberry/blob/main/README.md", "https://github.com/pedrovieira/Holeberry/releases/tag/v1.2.0"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/pedrovieira/Holeberry/main/Assets/AppIcon.png", "credit": "Pedro Vieira", "license": "MIT repository asset; Pi-hole is a trademark of Pi-hole LLC; trademarks retained"}]
---

Holeberry puts a Pi-hole you already run into the Mac menu bar. The icon reflects the server's status, and the menu adds total queries and blocked domains, so daily jobs no longer need the Pi-hole admin page.

- Blocking can be switched off for a set time or until you turn it back on. A countdown pill sits in the menu bar, and blocking returns when it runs out.
- When a page fails because Pi-hole blocked it, one click unblocks that domain for the tab open in Safari, Orion, Chrome and other Chromium browsers, or Firefox and Zen. You can allowlist it instead.
- A list of recently blocked domains, from your Mac or from every client, lets you unblock or allowlist entries.
- Gravity updates, which refresh Pi-hole's blocklists, run from the menu, from a global shortcut, or on a schedule of every 6 or 12 hours, daily or weekly.

Holeberry needs Local Network access to reach the servers, plus Automation access for each browser if you use tab unblocking. The app needs macOS 14 or later and is a Universal build, which the developer says is signed with a Developer ID and notarized. It is an independent project, not affiliated with Pi-hole LLC.

Up to two Pi-hole servers can be connected, and every action goes to both at once. That keeps them in step when the Mac sends its DNS queries to the second server. Pi-hole v6 is supported, and v5 support is marked as not fully tested. Passwords go into the macOS Keychain, and instances without a password work too. Deeper settings such as adlists and DHCP stay in the Pi-hole web interface.
