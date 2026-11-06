---
name: "GrokBuild Desktop"
summary: "Native macOS window for the grok agent CLI, with project workspaces, resumable sessions and custom model settings."
category: "Developer tools"
tags:
  - coding-agents
  - terminal
  - workspaces
repository: "https://github.com/rimusz/grok-build-desktop"
website: "https://rimusz.net/grokbuild-desktop-the-native-macos-home-your-grok-build-cli-deserves/"
license: "Apache-2.0"
licenseUrl: "https://github.com/rimusz/grok-build-desktop/blob/main/LICENSE"
download: "https://github.com/rimusz/grok-build-desktop/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/rimusz/grok-build-desktop"
  - "https://github.com/rimusz/grok-build-desktop/blob/main/LICENSE"
  - "https://github.com/rimusz/grok-build-desktop/releases/latest"
  - "https://rimusz.net/grokbuild-desktop-the-native-macos-home-your-grok-build-cli-deserves/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/rimusz/grok-build-desktop/main/AppIcon.png"
    credit: "GrokBuild Desktop contributors"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

GrokBuild Desktop is a SwiftUI window for the grok command-line agent. It groups work into project folders, runs each project's agent sessions in tabs that can be resumed later, and shows tool calls, permission prompts and diffs inside the app. A settings page can also add OpenAI-compatible models to the grok configuration file without opening a project. The project is independent and is not affiliated with xAI.

It needs macOS 26 or later and the grok CLI installed. Agent sessions need a signed-in CLI, so run `grok login` once in Terminal; the model settings work without it. Releases are notarized, so the first launch needs no workaround. Browser and computer-use features are off until you enable them, and computer use also needs the Accessibility permission. Tools the agent should find, such as `gh` or `uv`, must be on your login-shell PATH.
