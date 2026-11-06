---
name: "Prowl"
summary: "Terminal app for running several AI coding agents in parallel, with a view of which ones are blocked or finished."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - terminal-emulator
  - git
repository: "https://github.com/onevcat/Prowl"
website: "https://prowl.cat/"
license: "FSL-1.1-ALv2"
sourceAvailability: "source-available"
licenseNotes: "FSL-1.1-ALv2: you may use, change and redistribute Prowl for any purpose except a Competing Use, meaning a commercial product or service that substitutes for Prowl or offers substantially similar functionality. Each release becomes available under the Apache-2.0 license two years after it is published. No trademark rights are granted."
licenseUrl: "https://github.com/onevcat/Prowl/blob/main/LICENSE"
download: "https://github.com/onevcat/Prowl/releases/latest/download/Prowl.dmg"
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/onevcat/Prowl"
  - "https://github.com/onevcat/Prowl/blob/main/LICENSE"
  - "https://github.com/onevcat/Prowl/releases"
  - "https://prowl.cat/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/onevcat/Prowl/main/App/Sources/Assets.xcassets/AppIcon.appiconset/appicon-macOS-Dark-512x512@1x.png"
    credit: "Prowl contributors"
    license: "FSL-1.1-ALv2; upstream app icon, trademarks retained"
---

Prowl is a native macOS terminal for running several AI coding agents at the same time. A repository can hold several git worktrees, and each worktree can run agents such as Claude Code, Codex and Gemini CLI in its own tab. A canvas and a shelf view show the sessions side by side, and an agent roster marks each one as blocked, done, working or idle, with a notification when an agent finishes or asks for input. It is aimed at developers who work on several branches at once, and it can also open a project on an SSH host.

The app needs macOS 26.0 or later. The release is notarized, and it updates itself with Sparkle. The interface is available in English and Simplified Chinese. The README calls it a personal fork of Supacode, built on libghostty, and the license file names Supabit, LLC as the copyright holder.
