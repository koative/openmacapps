---
name: "BentoTerm"
summary: "Terminal app that runs several CLI coding agents side by side on tmux and shows the state of each pane."
category: "Developer tools"
tags:
  - terminal
  - coding-agents
  - ssh
repository: "https://github.com/NovaShang/BentoTerm"
website: "https://bentoai.dev/term"
license: "Apache-2.0"
licenseUrl: "https://github.com/NovaShang/BentoTerm/blob/main/LICENSE"
download: "https://github.com/NovaShang/BentoTerm/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/NovaShang/BentoTerm"
  - "https://github.com/NovaShang/BentoTerm/blob/main/LICENSE"
  - "https://github.com/NovaShang/BentoTerm/releases/latest"
  - "https://bentoai.dev/term"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/NovaShang/BentoTerm/main/BentoTermMac/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "BentoTerm contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

BentoTerm runs several CLI coding agents in one window. Each agent gets its own tmux pane, and the pane title bars and sidebar show whether an agent is working, waiting for input or done. Those states come from hooks that Claude Code and Codex report through tmux rather than from reading the screen. It suits people who keep several agent sessions open at once and want them to stay in tmux, so other tmux clients see the same layout.

It requires macOS 14 or later on Apple silicon. The release build is signed and notarized, so it opens without a warning. Pane colors only appear after you add the hook lines from the project's README to each agent's settings. The app is built on libghostty for rendering and bundles its own tmux.
