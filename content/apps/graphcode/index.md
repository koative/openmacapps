---
name: "GraphCode"
summary: "Canvas for connecting coding-agent loops into live, steerable terminal sessions that a background daemon keeps running."
category: "Developer tools"
tags:
  - coding-agents
  - agents
  - developer-utilities
  - terminal-emulator
repository: "https://github.com/scgopi/GraphCode"
website: "https://graphcode.app"
license: "FSL-1.1-MIT"
sourceAvailability: "source-available"
licenseNotes: "Functional Source License 1.1 with an MIT future license: you may use, change and redistribute the software for any purpose except a Competing Use, meaning a commercial product or service that substitutes for GraphCode or offers substantially similar functionality. Each release becomes available under the MIT license two years after it is published. GraphcodeKit and graphcode-cli are MIT-licensed."
licenseUrl: "https://github.com/scgopi/GraphCode/blob/main/LICENSE"
download: "https://github.com/scgopi/GraphCode/releases/latest/download/graphcode-macos-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/scgopi/GraphCode"
  - "https://github.com/scgopi/GraphCode/blob/main/LICENSE"
  - "https://github.com/scgopi/GraphCode/releases"
  - "https://graphcode.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/scgopi/GraphCode/main/graphcode/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "scgopi"
    license: "FSL-1.1-MIT; upstream app icon, trademarks retained"
---

GraphCode treats each coding-agent session as a loop: an agent that runs repeatedly until a stop rule is met. Loops sit on a canvas and are joined by hand-off, message or spawn edges, so one agent can pass work to another. Each loop is a real terminal, and you can attach to it while it runs and correct it. Its backends are Claude Code, GitHub Copilot CLI, Codex, OpenCode and pi, and a loop can run on a remote host over SSH. A background daemon keeps sessions alive when the app is closed or the Mac restarts.

It suits people who run several coding agents unattended and want to monitor them on one canvas. The source is published, but the license is not open source: the Functional Source License allows use and self-hosting, and forbids shipping a competing commercial product built from the code until each release turns MIT two years later.

GraphCode needs macOS 15 or later on Apple silicon, and at least one supported agent CLI on your PATH; the app bundles none of them. Releases are Developer ID signed and notarized. It keeps its state in `~/.graphcode` and does not write files into the project folders you open.
