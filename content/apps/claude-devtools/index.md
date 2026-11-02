---
name: "claude-devtools"
summary: "A visual viewer for Claude Code session logs: tool calls, diffs, subagents, thinking and per-turn token usage."
category: "Developer tools"
tags:
  - coding-agents
  - inspection
  - debugging
  - usage-tracking
  - cross-platform
repository: https://github.com/matt1398/claude-devtools
website: https://claude-dev.tools
license: "MIT"
licenseUrl: https://github.com/matt1398/claude-devtools/blob/main/LICENSE
download: https://github.com/matt1398/claude-devtools/releases
homebrew: "claude-devtools"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/matt1398/claude-devtools
  - https://github.com/matt1398/claude-devtools/blob/main/LICENSE
  - https://github.com/matt1398/claude-devtools/releases
  - https://claude-dev.tools
assets:
  - path: ./assets/icon.png
    source: https://github.com/matt1398/claude-devtools/blob/main/resources/icons/mac/icon.icns
    credit: "claude-devtools contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

claude-devtools opens the session transcripts that Claude Code already writes to `~/.claude` and lays them out as a browsable interface. Each turn shows the exact files read, the search patterns used, inline diffs for edits, shell output, extended thinking and the full tree of any subagents, with token counts and cost attributed per turn and a view of when context compaction happened.

It does not wrap or change Claude Code and needs no API key; it only reads local logs, and can also read sessions on another machine over SSH. Extras include cross-session search, side-by-side panes, a viewer for per-project memory files and notifications for events such as `.env` access or tool errors.

It is an Electron app with separate Apple silicon and Intel downloads. The project's install notes say the first launch on macOS needs a right-click and Open, which points to a build that is not notarized. claude-devtools is an independent tool, not made by Anthropic.
