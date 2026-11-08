---
name: "CartCut"
summary: "A layer-based video editor with keyframe animation, audio mixing, captions and an MCP interface for AI agents."
category: "Media"
tags:
  - video-editor
  - video-editing
  - agents
  - cross-platform
alternativeTo:
  - final-cut-pro
  - adobe-premiere-pro
  - davinci-resolve
repository: "https://github.com/cartesiancs/cartcut"
website: "https://cartesiancs.com/cartcut"
license: "MIT"
licenseUrl: "https://github.com/cartesiancs/cartcut/blob/main/LICENSE"
download: "https://github.com/cartesiancs/cartcut/releases"
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - "https://github.com/cartesiancs/cartcut"
  - "https://github.com/cartesiancs/cartcut/blob/main/LICENSE"
  - "https://github.com/cartesiancs/cartcut/releases"
  - "https://raw.githubusercontent.com/cartesiancs/cartcut/main/README.md"
  - "https://github.com/cartesiancs/cartcut/releases/tag/v0.6.1"
  - "https://www.apple.com/final-cut-pro/"
assets:
  - path: ./assets/icon.png
    source: "https://raw.githubusercontent.com/cartesiancs/cartcut/main/assets/icons/mac/icon.icns"
    credit: "cartesiancs"
    license: "MIT; upstream app icon, trademarks retained"
---

CartCut edits video on layers instead of tracks, which makes it easier to stack several effects on one asset, and a project can hold as many layers as you need. You cut footage, animate position, scale, opacity and rotation with keyframes, mix audio, and render the result with FFmpeg.

- Common formats such as MP4, MOV, MP3 and WAV import directly, and projects save to a file.
- Whisper generates captions automatically.
- Chroma key, WebGL blur, shapes, text, effects and transitions are built in.
- It records the screen and audio, and edits at 4K, 8K and other resolutions.

CartCut also exposes its live timeline over MCP. Install the project's plugin in Claude Code, paste the token from the lightning icon at the bottom right of the app, and ask for edits such as cutting from a transcript or adding subtitles. Other MCP clients, including Claude Desktop, Cursor and Codex, connect through the `@cartesiancs/cartcut-mcp` bridge. Agent edits land in your undo history, so Command-Z takes them back.

Final Cut Pro arranges clips on Apple's Magnetic Timeline. CartCut replaces tracks with layers and adds the agent interface, under the MIT license.

The project was earlier named nugget-app. Releases on GitHub carry separate Apple silicon and Intel downloads, each as a DMG or ZIP of about 375 to 390 MB, and the app's auto-update reads from them. The source also builds for Windows.
