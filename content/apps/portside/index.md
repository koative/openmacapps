---
name: "Portside"
summary: "Menu bar app listing running dev servers by git repo and worktree, with process details and one-click stop."
category: "Developer tools"
tags:
  - menu-bar
  - developer-tools
  - ports
  - git
repository: "https://github.com/brentc22/portside"
website: "https://github.com/brentc22/portside"
license: "MIT"
licenseUrl: "https://github.com/brentc22/portside/blob/main/LICENSE"
download: "https://github.com/brentc22/portside/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/brentc22/portside"
  - "https://github.com/brentc22/portside/blob/main/LICENSE"
  - "https://github.com/brentc22/portside/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/brentc22/portside/main/Resources/Portside.icns"
    credit: "Brent Ceulemans"
    license: "MIT; upstream app icon, trademarks retained"
---

Portside sits in the menu bar and lists the dev servers running on your Mac, grouped by repository and by git worktree. For each one it shows the port, the tool behind it (such as Vite or Wrangler, read from the process arguments), the branch and the uptime. You can open localhost on the port, copy the URL, or stop the process. It is for developers who run several repositories or worktrees at once.

It requires macOS 14 or later. The zip is a universal build for Apple silicon and Intel. The app is ad hoc signed and not notarized, so the first launch has to be allowed by right-clicking the app and choosing Open. Its only network call is a daily check of GitHub for new releases, which can be turned off.
