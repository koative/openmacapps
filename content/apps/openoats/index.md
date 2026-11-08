---
name: "OpenOats"
summary: "A meeting companion that transcribes both sides of a call on the Mac and surfaces talking points from your notes."
category: "AI"
tags:
  - meetings
  - transcription
  - local-ai
  - notes
alternativeTo:
  - granola
repository: https://github.com/yazinsai/OpenOats
website: https://openoats.com
license: "MIT"
licenseUrl: https://github.com/yazinsai/OpenOats/blob/main/LICENSE
download: https://github.com/yazinsai/OpenOats/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/yazinsai/OpenOats
  - https://github.com/yazinsai/OpenOats/blob/main/LICENSE
  - https://github.com/yazinsai/OpenOats/releases
  - https://openoats.com
  - https://github.com/yazinsai/OpenOats/blob/main/README.md
  - https://github.com/yazinsai/OpenOats/releases/tag/v1.90.0
  - https://www.granola.ai/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/yazinsai/OpenOats/main/OpenOats/Sources/OpenOats/Assets/AppIcon.icns
    credit: "OpenOats contributors"
    license: "MIT repository asset; name and logo retained by the project"
---

OpenOats sits beside a call and writes down what both sides say as they say it. Press Live, and it captures your microphone and the system audio, transcribing both speakers on the Mac. When the talk reaches a question or a decision point, it searches your notes and shows talking points that fit.

- Your notes are folders of Markdown or plain-text files. OpenOats splits them into chunks, embeds them and caches the index locally.
- Suggestions come from a language model you pick: cloud models through OpenRouter or Requesty, or local ones through Ollama.
- Embeddings can come from Voyage AI, Ollama or any OpenAI-compatible endpoint, such as llama.cpp or vLLM.
- Every session is saved as a plain-text transcript in `~/Documents/OpenOats/`. By default the window does not show up in screen shares.

With Ollama handling both suggestions and embeddings, the developer says nothing leaves the Mac. In cloud mode, text from your notes and the transcript goes to the chosen providers, never audio, and API keys sit in the Keychain. The first run downloads a local speech model of about 600 MB.

Granola also uses the computer's audio instead of a meeting bot, writes notes and actions, and runs on macOS, Windows, iOS and Android. OpenOats instead searches your own files for talking points while the call is still going.

OpenOats needs an Apple silicon Mac with macOS 14.2 or later. The 1.90.0 DMG holds an arm64 app that is notarized. Before the first recording, the app asks you to acknowledge that some places require every participant's consent.
