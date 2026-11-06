---
name: "OpenWispr"
summary: "Menu-bar dictation that runs the Moonshine speech model on your Mac and types the text at the cursor."
category: "AI"
tags:
  - dictation
  - speech-to-text
  - local-ai
  - voice-typing
alternativeTo:
  - wispr-flow
repository: "https://github.com/seeknull/openwispr"
website: "https://seeknull.github.io/openwispr/"
license: "MIT"
licenseUrl: "https://github.com/seeknull/openwispr/blob/main/LICENSE"
download: "https://github.com/seeknull/openwispr/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/seeknull/openwispr"
  - "https://github.com/seeknull/openwispr/blob/main/LICENSE"
  - "https://github.com/seeknull/openwispr/releases/latest"
  - "https://seeknull.github.io/openwispr/"
---

OpenWispr is a small menu-bar app for dictation. You press Fn and Option to start, speak, then press them again to stop, and the transcript appears in whichever app has the cursor. The Moonshine speech model runs on the Mac's processor, and the project's README states that the dictation path makes no network calls. It suits people who want offline dictation without an account, subscription or telemetry.

It needs macOS 13 or later and an Apple silicon Mac, since the app binary is arm64 only. The release is a zip file that is not notarized: it is ad-hoc signed, so the first launch has to be allowed in System Settings. Microphone and Accessibility access are required. The README calls version 0.1 early but working, and lists hotkey rebinding and notarized distribution as roadmap items.
