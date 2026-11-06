---
name: "Cursor Voice"
summary: "Voice assistant at your cursor that can see the screen and operate the Mac, using your own OpenAI API key."
category: "AI"
tags:
  - ai-client
  - dictation
  - text-to-speech
  - automation
repository: "https://github.com/cursorvoice/cursor-voice"
website: "https://cursorvoice.app"
license: "MIT"
licenseUrl: "https://github.com/cursorvoice/cursor-voice/blob/main/LICENSE"
download: "https://github.com/cursorvoice/cursor-voice/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/cursorvoice/cursor-voice"
  - "https://github.com/cursorvoice/cursor-voice/blob/main/LICENSE"
  - "https://github.com/cursorvoice/cursor-voice/releases"
  - "https://cursorvoice.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/cursorvoice/cursor-voice/main/Sources/CursorVoice/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Cursor Voice contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

Cursor Voice is a macOS voice assistant that you summon with a hotkey. It streams audio to OpenAI's Realtime API, can capture the screen to answer questions about it, and can act on the Mac through mouse and keyboard events, Accessibility-tree clicks and AppleScript. It also has web search, a local memory file and an opt-in, on-device wake word. It is for people who want a voice agent that can operate their computer and who accept that it can take actions there.

It requires macOS 14 or later on Apple silicon only. The release is ad-hoc or self-signed and not notarized, so the first launch needs Right-click → Open or removal of the quarantine attribute, as the README explains. Screen Recording and Accessibility permissions must be granted, followed by a relaunch. You supply your own OpenAI API key, which stays in the local Keychain. Audio is streamed to OpenAI while the orb is active. The README says the app is free and open source.
