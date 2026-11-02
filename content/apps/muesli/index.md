---
name: "Muesli"
summary: "On-device dictation and bot-free meeting transcription for Apple silicon Macs, with optional AI meeting notes."
category: "AI"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - transcription
  - meetings
  - local-ai
alternativeTo:
  - granola
repository: https://github.com/Muesli-HQ/muesli
website: https://muesli.works
license: "MIT"
licenseUrl: https://github.com/Muesli-HQ/muesli/blob/main/LICENSE
download: https://github.com/Muesli-HQ/muesli/releases
homebrew: "muesli"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/Muesli-HQ/muesli
  - https://github.com/Muesli-HQ/muesli/blob/main/LICENSE
  - https://github.com/Muesli-HQ/muesli/releases
  - https://muesli.works/privacy
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/Muesli-HQ/muesli/main/assets/muesli_app_icon.png
    credit: "Muesli contributors"
    license: "MIT; upstream project asset, trademarks retained"
---

Muesli does two jobs. Hold a hotkey and speak, and it types the transcribed text at the cursor in whatever app you are using, with a custom dictionary for names and jargon. Start a meeting recording, and it captures your microphone and the Mac's system audio without joining the call as a bot, labels speakers, and can turn the transcript into notes you can search, question and export as Markdown or PDF.

Speech recognition runs on the Mac with a choice of downloadable models, including Parakeet, Whisper and Apple's own speech engine. Summaries, rewriting and hosted dictation are optional and send the needed text to the provider you pick, such as OpenAI, Anthropic, OpenRouter, Ollama or LM Studio. Transcript text can sync to the iPhone app through your private iCloud account; audio stays on the device that recorded it.

Muesli needs an Apple silicon Mac with macOS 14.2 or later, plus Microphone, Accessibility, Input Monitoring and Screen Recording permissions for the features that use them. Its privacy policy says it sends aggregate usage and error analytics to TelemetryDeck, without audio or transcript content. A command-line tool inside the app lets coding agents read and transcribe meetings.
