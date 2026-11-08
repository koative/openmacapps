---
name: "FreeFlow"
summary: "Turns speech into cleaned-up text in the focused field while you hold Fn, using Groq or another API you configure."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - keyboard-shortcuts
  - voice-typing
alternativeTo:
  - wispr-flow
repository: https://github.com/zachlatta/freeflow
website: https://freeflow.zachlatta.com
license: "MIT"
licenseUrl: https://github.com/zachlatta/freeflow/blob/main/LICENSE
download: https://github.com/zachlatta/freeflow/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/zachlatta/freeflow
  - https://github.com/zachlatta/freeflow/blob/main/LICENSE
  - https://github.com/zachlatta/freeflow/releases
  - https://freeflow.zachlatta.com
  - https://raw.githubusercontent.com/zachlatta/freeflow/main/README.md
  - https://github.com/zachlatta/freeflow/releases/tag/v1.3.1
  - https://wisprflow.ai/
  - https://wisprflow.ai/pricing
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/zachlatta/freeflow/main/Resources/AppIcon.icns
    credit: "Zach Latta and FreeFlow contributors"
    license: "MIT repository asset; name and logo retained by the project"
---

Hold Fn and talk, or toggle recording with Command-Fn, and FreeFlow pastes a tidied transcript into the text field you were working in. It reads nearby context in the current app, so names and terms on screen come out spelled correctly.

- A custom vocabulary keeps project names and jargon intact during cleanup.
- Edit Mode rewrites highlighted text from a spoken instruction such as "make this shorter".
- Hold and toggle shortcuts can be changed, and each one can keep your exact wording or apply cleanup.
- Voice macros paste predefined text when you say a set command.

You choose the models behind it. Groq is the default, and a free Groq API key is enough to start. Settings also accept any OpenAI-compatible endpoint, including a local server such as Ollama or LM Studio, though the project warns that local models are often slower. The developer says there is no FreeFlow server and only calls to your configured provider leave the Mac.

Wispr Flow's free plan caps how many words you dictate each week, and Flow Pro lifts the cap. FreeFlow has no subscription at all. It works with whatever API key you give it.

The DMG holds a Universal app for Apple silicon and Intel that needs macOS 13 or later. Version 1.3.1 is signed with a Developer ID and notarized.
