---
name: "Text to Speech"
summary: "Reads selected text aloud from any Mac app with one shortcut, using an online voice; no offline voice."
category: "Utilities"
tags:
  - text-to-speech
  - accessibility
  - keyboard-shortcuts
  - native
repository: "https://github.com/ciro-maciel/text-to-speech"
website: "https://ciromaciel.click/tools/text-to-speech"
license: "MIT"
licenseUrl: "https://github.com/ciro-maciel/text-to-speech/blob/main/LICENSE"
download: "https://github.com/ciro-maciel/text-to-speech/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/ciro-maciel/text-to-speech"
  - "https://github.com/ciro-maciel/text-to-speech/blob/main/LICENSE"
  - "https://github.com/ciro-maciel/text-to-speech/releases"
  - "https://ciromaciel.click/tools/text-to-speech"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/ciro-maciel/text-to-speech/blob/main/Resources/AppIcon.icns"
    credit: "Ciro Cesar Maciel; letter T from Candal by Vernon Adams"
    license: "SIL OFL 1.1 for the Candal letterform; upstream app icon, trademarks retained"
---

Text to Speech reads whatever you select in any Mac app. Press Cmd + Shift + S and the app copies the selection, puts your clipboard back and starts reading, with a small floating player where you can pause, skip and change speed. The voice is a Brazilian Portuguese one made by Fish Audio. The app sends each part of the text over HTTPS to the maker's public server, which passes it to Fish Audio and does not store it. It suits people who would rather listen to e-mails, PDFs and web pages than read them.

Requires macOS 14 or later on Apple silicon and the Accessibility permission, which lets the app send Cmd + C to the app in front. It needs an internet connection and depends on the public server and on Fish Audio, so a reading can fail when either is busy, and there is no offline voice. Text in other languages is read with a Portuguese accent. The README says the disk image is signed with Developer ID and notarized by Apple. The app has no automatic updates yet.
