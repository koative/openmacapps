---
name: "Purr"
summary: "Types speech into any app with on-device Parakeet and Whisper models, and records meetings with speaker labels and summaries."
category: "AI"
tags:
  - dictation
  - voice-typing
  - speech-to-text
  - transcription
  - meetings
  - local-ai
  - menu-bar
alternativeTo:
  - wispr-flow
  - granola
repository: "https://github.com/iamarunbrahma/purr"
website: "https://purr.arunbrahma.com"
license: "MIT"
licenseUrl: "https://github.com/iamarunbrahma/purr/blob/main/LICENSE"
download: "https://github.com/iamarunbrahma/purr/releases/latest"
macos: "14"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-21"
icon: "./assets/icon.png"
sources:
  - "https://github.com/iamarunbrahma/purr"
  - "https://github.com/iamarunbrahma/purr/blob/main/LICENSE"
  - "https://github.com/iamarunbrahma/purr/releases"
  - "https://purr.arunbrahma.com"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/iamarunbrahma/purr/main/Resources/AppIcon.icns"
    credit: "Arun Brahma"
    license: "MIT; upstream app icon, trademarks retained"
---

Holding the Right Option key records speech, and letting go types the transcript into whichever app is in front. Purr lives in the menu bar. Recognition runs on the Mac: NVIDIA's Parakeet handles English, and Whisper covers about 100 languages. In Smart Typing mode, English words appear in the text field while the speaker is still talking.

Other features have their own shortcuts:

- Meeting recording captures the microphone and the Mac's audio without a bot joining the call, labels who spoke and saves the transcript as a Markdown file.
- A meeting summary can be written on the Mac with Apple Intelligence or with a Gemma model that Purr downloads.
- Voice Edit rewrites selected text from a spoken instruction, such as asking for a shorter version.
- A word list helps with names and jargon. Replacements swap words that keep coming out wrong.

The main difference from Wispr Flow is where audio goes. Wispr Flow processes speech in its cloud service, while Purr keeps recognition local and asks for no account. Unlike Granola, meeting notes stay in a folder on the Mac instead of a cloud workspace.

Models download on first use. After that, dictation works offline. Purr needs macOS 14 or later on Apple silicon, plus Microphone and Accessibility permissions. Recording the other side of a call needs macOS 14.2. Releases are notarized DMGs on GitHub, and the app checks GitHub for updates.
