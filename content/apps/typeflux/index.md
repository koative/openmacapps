---
name: "Typeflux"
summary: "Types what you dictate while holding Fn, and adds a launcher, an AI agent, screenshots and clipboard history."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - keyboard-shortcuts
  - local-ai
  - voice-typing
repository: https://github.com/mylxsw/typeflux
website: https://typeflux.app
license: "AGPL-3.0"
licenseUrl: https://github.com/mylxsw/typeflux/blob/main/LICENSE
download: https://github.com/mylxsw/typeflux/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/mylxsw/typeflux
  - https://github.com/mylxsw/typeflux/blob/main/LICENSE
  - https://github.com/mylxsw/typeflux/releases
  - https://typeflux.app
  - https://github.com/mylxsw/typeflux/blob/main/README.md
  - https://github.com/mylxsw/typeflux/blob/main/docs/USAGE.md
  - https://github.com/mylxsw/typeflux/blob/main/docs/RELEASE.md
  - https://github.com/mylxsw/typeflux/releases/tag/v0.4.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/mylxsw/typeflux/main/app/Typeflux.icns
    credit: "Typeflux contributors"
    license: "AGPL-3.0 repository asset; Typeflux name and logo retained by the project"
---

Hold Fn, speak and let go, and Typeflux types what you said at the cursor of whichever app is in front. When it cannot insert the text, the transcript lands on the clipboard instead. Select text first and say an instruction such as "make this shorter", and the selection is rewritten in place. That needs a configured language model.

Speech recognition runs on the Mac with SenseVoice, Whisper or Qwen3-ASR, or through a cloud service. Once a local model is downloaded, dictation works offline.

Dictation is one part of a larger app, with each feature on a shortcut you can change:

- A Command-Space launcher opens apps and files, jumps to browser tabs and runs shell commands. On Apple silicon it also searches inside PDFs and text files.
- An AI agent edits files in folders you grant, runs commands and operates apps. By default it asks before changing files or running commands.
- Screenshots cover a region, a window or a scrolling page, with annotation and text recognition. Screen recordings export to MP4 or GIF.
- Clipboard history keeps text, links, images and files for as long as you choose.

Models come from Typeflux Cloud or from your own keys for OpenAI-compatible, Anthropic or Ollama endpoints. A remote provider receives whatever voice or text you send it. The developer says Typeflux itself collects none of it.

Typeflux needs macOS 13 or later and works without an account. Releases ship separate Apple silicon and Intel builds. The minimal build downloads its speech model on first use, and the full build bundles SenseVoice. The v0.4.0 minimal disk images are signed with a Developer ID and notarized.

Typeflux workflows accept the Script Filter JSON that Alfred uses, so scripts written for Alfred can move over unchanged.
