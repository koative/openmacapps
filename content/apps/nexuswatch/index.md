---
name: nEXUSWATCH
summary: "Watches a mod author's Nexus Mods pages for new posts, bug reports, stats and file scans, and notifies on changes."
category: Games
tags:
  - modding
  - nexus-mods
  - mod-authors
  - notifications
  - bug-tracking
repository: https://github.com/starbudweiser/nEXUSWATCH
website: https://skyrimtools.com
license: MIT
licenseUrl: https://github.com/starbudweiser/nEXUSWATCH/blob/main/LICENSE
download: https://github.com/starbudweiser/nEXUSWATCH/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
screenshots:
  - src: ./assets/screenshot.png
    alt: "Several mods in the sidebar with their latest posts sorted into bug reports and requests."
    source: https://github.com/starbudweiser/nEXUSWATCH/blob/main/docs/screenshots/01_posts.png
    credit: Starbudweiser
sources:
  - https://github.com/starbudweiser/nEXUSWATCH
  - https://github.com/starbudweiser/nEXUSWATCH/blob/main/LICENSE
  - https://github.com/starbudweiser/nEXUSWATCH/releases
  - https://raw.githubusercontent.com/starbudweiser/nEXUSWATCH/main/README.md
assets:
  - path: ./assets/screenshot.png
    source: https://github.com/starbudweiser/nEXUSWATCH/blob/main/docs/screenshots/01_posts.png
    credit: Starbudweiser
    license: MIT
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/nEXUSWATCH/releases/download/v2.0.0/nEXUSWATCH_2.0.0_macOS_arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

nEXUSWATCH checks your Nexus Mods pages in the background and sends a macOS notification when a comment, a bug report or a file status changes. It only reads public pages, so it needs no API key and no login.

Each watched mod gets its own place in the sidebar, with unread counts:

- stats with endorsements, downloads, unique downloads and the change over 24 hours;
- the latest posts and their replies, with your own messages marked as read;
- bug reports with their Nexus status, local tracking from triage to released fix, and test notes;
- files with downloads and the Nexus virus scan status, so a quarantined file stands out.

A bug audit ranks open reports by priority and suggests an action for each one, without any AI. You can read it as an A4 page, save it as PDF, or copy a brief for whoever fixes the mod. A Watch tab follows new releases of other tools through GitHub, Nexus or any web page.

AI features stay off by default. When enabled, they work with any OpenAI-compatible API, Anthropic Claude or a built-in MCP server, and an optional read-only Discord bot can list unanswered support threads. Checks run every 5 minutes to 3 hours, with a Dock badge. Builds are universal, for macOS 14 or later.
