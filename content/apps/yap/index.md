---
name: Yap
summary: "Types what you dictate into any text field, transcribed on device by Apple’s speech framework without an account or API key."
category: Productivity
tags:
- dictation
- menu-bar
- keyboard-shortcuts
- privacy
- voice-typing
repository: https://github.com/FrigadeHQ/yap
website: https://frigade.com/yap
license: MIT
licenseUrl: https://github.com/FrigadeHQ/yap/blob/main/LICENSE
download: https://github.com/FrigadeHQ/yap/releases
freeDownload: true
homebrew: "yap-app"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/FrigadeHQ/yap", "https://github.com/FrigadeHQ/yap/blob/main/LICENSE", "https://github.com/FrigadeHQ/yap/releases", "https://frigade.com/yap", "https://raw.githubusercontent.com/FrigadeHQ/yap/main/README.md", "https://raw.githubusercontent.com/FrigadeHQ/yap/main/LICENSE", "https://github.com/FrigadeHQ/yap/releases/tag/v0.1.15"]
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/FrigadeHQ/yap/main/assets/yap-icon.png
  credit: Frigade, Inc.
  license: MIT; upstream project asset, trademarks retained
---

Yap types what you say into whatever app you are using. Press Command-Shift-D, talk, and press it again: the transcript is pasted into the field you were working in. While you speak, a small window near the bottom of the screen shows a waveform and the text so far.

- The shortcut can be rebound, or set to a single modifier key such as right Shift.
- Pressing Escape twice throws away a dictation in progress.
- Past transcripts stay in a local history where you can search, copy and delete them.
- Yap follows the system's default microphone, even if it changes mid-session.
- The menu bar and Dock icons can each be hidden, leaving only the shortcut.

Transcription runs on the Mac through the speech framework Apple added in macOS 26, so Yap carries no model of its own. Dictation works offline after macOS has downloaded the speech model for your language. It needs no account or API key, and the developers say the app makes no network calls and has no telemetry.

On first launch Yap asks for microphone, speech recognition, Accessibility and Automation access. You have to turn on Accessibility yourself in System Settings. Pasting works by placing the text on the clipboard, sending Command-V, then putting your old clipboard back.

Yap requires macOS 26 on an Apple silicon Mac and does not run on Intel. Version 0.1.15 is notarized.
