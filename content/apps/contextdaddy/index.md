---
name: "ContextDaddy"
summary: "Inspects coding-agent skills, context and token use on your Mac, and reviews their invocation policies without storing prompts."
category: "Developer tools"
tags:
  - coding-agents
  - usage-tracking
  - local-first
  - monitoring
repository: "https://github.com/Significant-Hobbies/contextdaddy"
website: "https://daddyrad.com/context/"
license: "MIT"
licenseUrl: "https://github.com/Significant-Hobbies/contextdaddy/blob/main/LICENSE"
download: "https://github.com/Significant-Hobbies/contextdaddy/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Significant-Hobbies/contextdaddy"
  - "https://github.com/Significant-Hobbies/contextdaddy/blob/main/LICENSE"
  - "https://github.com/Significant-Hobbies/contextdaddy/releases/latest"
  - "https://daddyrad.com/context/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Significant-Hobbies/contextdaddy/releases/download/v0.2.12-22/ContextDaddy-0.2.12-22-arm64.dmg"
    credit: "Sarthak Agrawal"
    license: "MIT; upstream app icon, trademarks retained"
---

ContextDaddy is a local control room for coding agents. It lists the skills that Codex, Claude, Cursor, Devin and Grok can discover, shows how much context and how many tokens each agent consumes, and reviews the invocation policy of each skill. It works from local files and telemetry, and labels each value as measured, derived, estimated, partial or unavailable. It is aimed at developers who run several coding agents and want to see what they load.

It needs macOS 14 or later on Apple silicon. The release disk image is signed and notarized. The project calls it a public early-access beta that is free to download. Some features are opt-in: allowance checks call the Claude and Codex command-line tools, and the Claude check reads the default Claude Code sign-in from the Keychain to fetch reset details. The app does not capture prompt bodies or write agent configuration.
