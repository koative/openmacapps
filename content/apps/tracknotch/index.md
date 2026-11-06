---
name: "TrackNotch"
summary: "Shows live LLM usage for Claude, OpenAI, Cursor and Codex in the notch or on the menu bar."
category: "AI"
tags:
  - usage-tracking
  - notch
  - menu-bar
  - coding-agents
repository: "https://github.com/manojacharix/tracknotch"
website: "https://github.com/manojacharix/tracknotch"
license: "MIT"
licenseUrl: "https://github.com/manojacharix/tracknotch/blob/main/LICENSE"
download: "https://github.com/manojacharix/tracknotch/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/manojacharix/tracknotch"
  - "https://github.com/manojacharix/tracknotch/blob/main/LICENSE"
  - "https://github.com/manojacharix/tracknotch/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/manojacharix/tracknotch/main/TrackNotch/TrackNotch/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024x1024.png"
    credit: "Manoj Achari"
    license: "MIT; upstream app icon, trademarks retained"
---

TrackNotch shows your usage of several AI services in a pill at the top of the screen: in the notch on notched Macs and in the menu bar elsewhere. It reads Claude Code session files and Cursor usage locally. Optional settings add Claude rate-limit data through an OAuth token and monthly spend for OpenAI or Anthropic through admin keys. The README says API keys are kept in the macOS Keychain and that the app has no telemetry. It is unsandboxed so it can read provider folders such as `~/.claude`, which the README explains in its privacy notes.

It needs macOS 13 or later on Apple silicon or Intel. The README says the build is unsigned and not notarized, so macOS blocks the first launch: right-click the app, choose Open and confirm, or clear the quarantine flag with `xattr`. The README marks the project as beta, and it lists Developer ID signing, notarization and Sparkle updates as roadmap items.
