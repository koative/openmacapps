---
name: hERALD
summary: "Plans and tracks a mod release campaign across channels, with drafts in four languages and post statistics, without posting."
category: Productivity
tags:
  - marketing
  - planning
  - modding
  - social-media
  - analytics
repository: https://github.com/starbudweiser/hERALD
website: https://github.com/starbudweiser/hERALD
license: MIT
licenseUrl: https://github.com/starbudweiser/hERALD/blob/main/LICENSE
download: https://github.com/starbudweiser/hERALD/releases
freeDownload: true
featured: false
added: '2026-11-10'
verified: '2026-11-10'
sources:
  - https://github.com/starbudweiser/hERALD
  - https://github.com/starbudweiser/hERALD/blob/main/LICENSE
  - https://github.com/starbudweiser/hERALD/releases
  - https://raw.githubusercontent.com/starbudweiser/hERALD/main/README.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/starbudweiser/hERALD/releases/download/v1.0.0/hERALD-1.0.0-macOS-arm64.zip
    credit: Starbudweiser
    license: MIT; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

hERALD organizes the posts around a release, such as a mod launch, and tracks how each one does once it is out. It never publishes anything. You copy the text and post it yourself.

A campaign has an event date with a countdown, dated milestones and one entry per post and channel. Channels include Nexus Mods, Reddit, Discord, YouTube, GitHub, X, Bluesky, Instagram and forums. Each post moves from idea to draft, then approved and finally published, so you see at a glance what is still waiting.

What else it keeps:

- drafts per post in French, English, Spanish and Italian, copied in one click;
- weekly checks of GitHub releases and Nexus mod pages, through public APIs;
- statistics read from each post's link, with views, likes, comments and downloads for YouTube, Reddit, Bluesky, GitHub and Nexus;
- feedback entered by hand or imported from CSV.

An AI agent is optional and off by default. When enabled, each task gets a chat with Claude Code, Codex or an OpenAI-compatible API. Its proposed edits show as a card you apply or undo, and it can never mark a post published.

Data stays in a local JSON file, and API keys go in the Keychain. Builds are universal, for macOS 14 or later, and an example campaign is offered at first launch.
