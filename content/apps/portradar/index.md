---
name: "PortRadar"
summary: "Menu bar view of listening localhost ports with process details and one-click stop or open for dev servers."
category: "Developer tools"
tags:
  - menu-bar
  - developer-utilities
  - network
  - monitoring
repository: "https://github.com/joeystdio/PortRadar"
website: "https://joeystdio.github.io/PortRadar/"
license: "MIT"
licenseUrl: "https://github.com/joeystdio/PortRadar/blob/main/LICENSE"
download: "https://github.com/joeystdio/PortRadar/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/joeystdio/PortRadar"
  - "https://github.com/joeystdio/PortRadar/blob/main/LICENSE"
  - "https://github.com/joeystdio/PortRadar/releases"
  - "https://joeystdio.github.io/PortRadar/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/joeystdio/PortRadar/main/assets/icon.png"
    credit: "Joey Stevense"
    license: "MIT; upstream app icon, trademarks retained"
---

PortRadar lists the TCP ports your Mac is listening on, in the menu bar, with the owning process, a guess at its framework (such as Next.js, Vite, Postgres or Docker), and CPU and memory figures. You can pin the ports you care about, open them in a browser, copy their URLs, and stop a process with SIGTERM or SIGKILL. It is for developers who hit EADDRINUSE and want to free a port without digging through lsof and kill in Terminal.

The README says it needs macOS 14 or later and is universal. It does not say whether the DMG is notarized, and it warns that Gatekeeper may block the first launch, with a right-click Open or an xattr command as the workaround. The SIGKILL option ends a process without giving it a chance to clean up. The README describes the app as free and MIT licensed.
