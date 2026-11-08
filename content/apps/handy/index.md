---
name: "Handy"
summary: "Turns speech into text in any app's text field from a keyboard shortcut, with recognition running on your computer."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - cross-platform
  - voice-typing
alternativeTo:
  - wispr-flow
repository: https://github.com/cjpais/Handy
website: https://handy.computer
license: "MIT"
licenseUrl: https://github.com/cjpais/Handy/blob/main/LICENSE
download: https://github.com/cjpais/Handy/releases/latest
freeDownload: true
homebrew: "handy"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/cjpais/Handy", "https://github.com/cjpais/Handy/blob/main/LICENSE", "https://raw.githubusercontent.com/cjpais/Handy/main/README.md", "https://handy.computer", "https://github.com/cjpais/Handy/releases/latest", "https://github.com/cjpais/Handy/releases/tag/v0.10.0", "https://formulae.brew.sh/cask/handy", "https://wisprflow.ai/privacy"]
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/cjpais/Handy/main/src-tauri/icons/icon.png
    credit: "CJ Pais and Handy contributors"
    license: "MIT repository asset; name and icon retained by CJ Pais"
---

Handy types what you say into whatever text field has focus. Hold its shortcut, speak, and let go; the transcription is pasted at the cursor. A quick tap on the same shortcut toggles recording on and off instead, and hold-only or toggle-only modes are available.

Speech recognition runs on the computer. Silero voice activity detection trims the silence, then the model you choose does the transcribing. Whisper comes in Small, Medium, Turbo and Large sizes and uses the GPU when one is available. Parakeet V3 is tuned for the CPU and detects the spoken language by itself. The developer says your audio never leaves the machine.

On first launch Handy asks for microphone and Accessibility access. Two macOS quirks are worth knowing. A shortcut using the fn (Globe) key fires only from an Apple keyboard. A Bluetooth headset microphone can drop playback quality while recording, so set Handy to record from the Mac's own mic or another external one and keep the headset for listening.

For scripting, the app binary takes flags such as `--toggle-transcription` and `--start-hidden`. A transcription hook, an executable placed in Handy's Application Support folder, can rewrite the text just before it is pasted.

Release 0.10.0 has separate DMGs for Apple silicon and Intel, plus Windows and Linux builds. The Apple silicon app is Developer ID-signed and notarized. The Homebrew cask is maintained by others, not by the Handy developers.

Wispr Flow also types your speech into any app from a shortcut, but it sends your audio to Wispr's servers for transcription. Handy does the recognition on your own machine.
