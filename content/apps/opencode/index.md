---
name: "OpenCode"
summary: "An open-source AI coding agent with a terminal interface and a beta desktop app for macOS."
category: "AI"
tags:
  - coding-agents
  - agents
  - terminal
  - cross-platform
alternativeTo:
  - claude-code
repository: https://github.com/anomalyco/opencode
website: https://opencode.ai
license: "MIT"
licenseUrl: https://github.com/anomalyco/opencode/blob/dev/LICENSE
download: https://opencode.ai/download
freeDownload: true
homebrew: "opencode-desktop"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/anomalyco/opencode
  - https://github.com/anomalyco/opencode/blob/dev/LICENSE
  - https://github.com/anomalyco/opencode/releases
  - https://opencode.ai/download
  - https://formulae.brew.sh/cask/opencode-desktop
  - "https://raw.githubusercontent.com/anomalyco/opencode/dev/README.md"
  - "https://opencode.ai"
  - "https://github.com/anomalyco/opencode/releases/tag/v1.19.5"
  - "https://docs.anthropic.com/en/docs/claude-code/overview"
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/anomalyco/opencode/dev/packages/desktop/icons/prod/icon.png
    credit: "OpenCode contributors"
    license: "MIT repository asset; OpenCode name and logo retained by the project"
---

OpenCode works through a coding task with you: it reads the project, edits files and runs shell commands. You type a request in its terminal interface or in the desktop app, choose which actions run on their own and which wait for your approval, and roll back recent changes with `/undo`.

Two built-in agents share the session, and Tab switches between them. Build has full access and is the default. Plan is for reading and planning: it refuses file edits unless you allow them and asks before any shell command runs. A third agent, general, handles longer searches and multistep jobs, and you can call it with `@general`.

The desktop app adds sessions in tabs, diff views, a built-in browser and plugins. It is still labelled beta. Releases include separate DMG and ZIP files for Apple silicon and Intel, and there is a Homebrew cask, `opencode-desktop`. The terminal version installs with Homebrew, npm or an install script that places it in `~/.opencode/bin`. A mobile app lets you start and steer sessions away from the Mac.

Models are your choice. OpenCode ships with a set of free models you can use without creating an account. Beyond those, it reaches more than 200 providers through Models.dev, local models included, and you can log in with a ChatGPT Plus or Pro or GitHub Copilot subscription you already pay for. MCP servers, plugins and SKILL.md files add tools and workflows to the agents.

Claude Code is Anthropic's agent for the same job of reading, editing and running code in your project, and most of its versions need a Claude subscription or an Anthropic Console account. OpenCode is MIT-licensed, and its free models let you start without signing up anywhere.
