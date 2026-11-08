---
name: "ClaudeBar"
summary: "A menu bar monitor for the remaining quota of AI coding services, with reset countdowns and low-quota alerts."
category: "AI"
tags:
  - menu-bar
  - coding-agents
  - usage-tracking
  - notifications
repository: https://github.com/tddworks/ClaudeBar
website: https://claudebar.tddworks.com
license: "Apache-2.0"
licenseUrl: https://github.com/tddworks/ClaudeBar/blob/main/LICENSE
download: https://github.com/tddworks/ClaudeBar/releases
freeDownload: true
homebrew: "claudebar"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/tddworks/ClaudeBar
  - https://github.com/tddworks/ClaudeBar/blob/main/LICENSE
  - https://github.com/tddworks/ClaudeBar/releases
  - https://formulae.brew.sh/cask/claudebar
  - https://github.com/tddworks/ClaudeBar/blob/main/README.md
  - https://github.com/tddworks/ClaudeBar/blob/main/docs/providers/claude/README.md
  - https://claudebar.tddworks.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tddworks/ClaudeBar/main/Sources/App/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "tddworks and ClaudeBar contributors"
    license: "Apache-2.0 repository asset; ClaudeBar name and icon retained by the authors"
---

ClaudeBar tells you how much of each AI coding plan you have left before you hit a limit. Open the menu bar item and every provider you track appears with its remaining share and a countdown to the next reset; a notification arrives before a quota runs out.

Claude is one of almost thirty providers, alongside Codex, Gemini, Copilot, Cursor, Kimi, Windsurf, OpenRouter and AWS Bedrock. Each is switched on separately in Settings, and each reports what that service exposes: a five-hour session window, a weekly or monthly limit, credits or a spend total. Claude, for example, reads its numbers through the `claude` command-line tool or the OAuth credentials that `claude login` leaves in the Keychain, so Claude Code has to be installed and signed in.

- A forecast under each countdown says whether the window lasts until it resets at the current pace.
- The menu bar item can be a plain status icon, or show a percentage and countdown for as many as three providers.
- Webhooks send quota alerts to Slack or to a URL you run.
- Extensions add any quota source that a script can print.

Several Codex accounts can be tracked side by side, each with its own quota. There is also a view for the MacBook notch and gauges for the Touch Bar.

ClaudeBar requires macOS 15 or later. Homebrew installs it with `brew install --cask claudebar`, and GitHub releases carry a signed, notarized DMG.
