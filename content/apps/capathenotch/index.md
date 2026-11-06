---
name: "CapaTheNotch"
summary: "Shows Codex, Claude Code and OpenCode Go usage limits in the MacBook notch, with a teleprompter and dictation."
category: "Productivity"
tags:
  - notch
  - usage-tracking
  - teleprompter
  - dictation
repository: "https://github.com/maximfakel/capa-the-notch"
website: "https://capathenotch.tech/en/"
license: "MIT"
licenseUrl: "https://github.com/maximfakel/capa-the-notch/blob/main/LICENSE"
download: "https://github.com/maximfakel/capa-the-notch/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/maximfakel/capa-the-notch"
  - "https://github.com/maximfakel/capa-the-notch/blob/main/LICENSE"
  - "https://github.com/maximfakel/capa-the-notch/releases/tag/v0.4.0"
  - "https://capathenotch.tech/en/"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/maximfakel/capa-the-notch/releases/download/v0.4.0/CapaTheNotch-0.4.0.zip"
    credit: "Capacity Notch contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

CapaTheNotch shows what is left in the five-hour and weekly usage windows of Codex, Claude Code and OpenCode Go, with reset times, and warns when a window drops below 10 percent. Each module is turned on separately in its settings: music, a teleprompter that scrolls under the camera or follows your voice, on-device dictation, a shelf for dropped files, the next calendar event and a Russian and English translator. It suits people who run coding agents on a notched MacBook and want their limits in view.

It needs an Apple silicon Mac and macOS 14 or later; the translator needs macOS 26. The project calls it a free beta. The app is signed with the author's own certificate rather than Apple's and is not notarized, so macOS warns on first launch and you have to approve it under Privacy & Security. Codex and Claude Code are read without your credentials. OpenCode is the exception: the app reads your OpenCode Go key from OpenCode's own file and asks opencode.ai for your usage. The app never checks for updates on its own.
