---
name: "Chorus"
summary: "Mac app that sends one prompt to ChatGPT, Claude, Gemini and other AI sites at once, showing the replies side by side."
category: "AI"
tags:
  - chat
  - ai-client
  - language-models
repository: "https://github.com/askchorus/chorus"
website: "https://askchorus.app"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/askchorus/chorus/blob/main/LICENSE"
download: "https://github.com/askchorus/chorus/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/askchorus/chorus"
  - "https://github.com/askchorus/chorus/blob/main/LICENSE"
  - "https://github.com/askchorus/chorus/releases/latest"
  - "https://askchorus.app"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/askchorus/chorus/releases/download/v0.2.8/Chorus-0.2.8.dmg"
    credit: "Chorus contributors"
    license: "GPL-3.0-only; upstream app icon, trademarks retained"
---

Chorus opens several AI chat websites in one window, signed in with your own accounts. A prompt goes to every panel at once and the answers sit next to each other. You can add an OpenAI-compatible API model that reads all the replies and points out where they agree and disagree, and type @ to send a follow-up to a single panel. The panels work the way a browser does, so they need no API key.

It suits people who compare answers from different assistants and do not want a row of browser tabs open for them.

Requires macOS 13 or later; the release is universal (Apple silicon and Intel). The DMG is not notarized, so the first launch has to be allowed in System Settings or cleared with `xattr`. The chat panels depend on each site's own page, so a redesign can break sending until Chorus is updated. The one-click comparison uses an API you configure, and that provider charges for the usage.
