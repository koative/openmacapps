---
name: "Qwen Audio Agent"
summary: "A realtime voice assistant that keeps talking with you while delegating tasks to coding agents in the background."
category: "AI"
tags:
  - agents
  - coding-agents
  - speech-to-text
  - audio
  - cross-platform
repository: https://github.com/QwenAudio/qwen-audio-agent
website: https://qwenaudio.github.io/qwen-audio-agent/
license: "Apache-2.0"
licenseUrl: https://github.com/QwenAudio/qwen-audio-agent/blob/main/LICENSE
download: https://github.com/QwenAudio/qwen-audio-agent/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/QwenAudio/qwen-audio-agent
  - https://github.com/QwenAudio/qwen-audio-agent/blob/main/LICENSE
  - https://github.com/QwenAudio/qwen-audio-agent/releases
  - https://qwenaudio.github.io/qwen-audio-agent/
  - https://github.com/QwenAudio/qwen-audio-agent/blob/main/README.md
  - https://github.com/QwenAudio/qwen-audio-agent/blob/main/docs/desktop/overview.md
  - https://github.com/QwenAudio/qwen-audio-agent/blob/main/PRIVACY.md
  - https://github.com/QwenAudio/qwen-audio-agent/releases/tag/v2.0.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/QwenAudio/qwen-audio-agent/main/desktop/build/icon.png
    credit: "Qwen Audio Agent contributors"
    license: "Apache-2.0 repository asset; Qwen name and icon retained by their owners"
---

Qwen Audio Agent lets you keep talking to a voice assistant while it hands longer work to a coding agent in the background. You speak, cut it off mid-sentence and carry on. When a delegated task finishes, the result lands in the same chat, where you can ask follow-up questions or request changes.

- The voice side is replaceable: cloud realtime services such as Qwen Audio Realtime, OpenAI Realtime and Google Gemini Live, or a local pipeline through Hugging Face Speech-to-Speech.
- Backend agents include Qwen Code, OpenCode, Codex and Claude Code, and each keeps its own models, tools and logins.
- Several tasks can run at once, and you can ask about progress or cancel any of them.
- Memory carries across sessions for each user.

The desktop app shows a floating orb with a conversation panel that accepts text, images and files. It starts its own gateway, so no terminal is needed, and the macOS download is a Universal disk image of about 228 MB. After an idle period the orb can go to sleep while the app stays in the menu bar. Shift-Command-Space wakes it by default, as can an optional Chinese wake word. A web UI and terminal interface install separately through npm, which requires a recent Node.js release (22.22.2 and up, or 24.15.0 and up).

By default, microphone audio goes to Alibaba Cloud's DashScope service, which needs a Bailian API key. The project says the runtime has no built-in telemetry and that wake-word audio stays on the machine.
