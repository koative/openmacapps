---
name: "Live Translator"
summary: "Translates system audio live on screen with on-device speech recognition and your own OpenAI, Gemini or Claude key."
category: "Productivity"
tags:
  - translation
  - speech-to-text
  - audio
repository: "https://github.com/umutcetinkaya/live-translator"
website: "https://github.com/umutcetinkaya/live-translator"
license: "MIT"
licenseUrl: "https://github.com/umutcetinkaya/live-translator/blob/main/LICENSE"
download: "https://github.com/umutcetinkaya/live-translator/releases/download/v0.1.0/LiveTranslator-v0.1.0-macOS.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/umutcetinkaya/live-translator"
  - "https://github.com/umutcetinkaya/live-translator/blob/main/LICENSE"
  - "https://github.com/umutcetinkaya/live-translator/releases/download/v0.1.0/LiveTranslator-v0.1.0-macOS.dmg"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/umutcetinkaya/live-translator/releases/download/v0.1.0/LiveTranslator-v0.1.0-macOS.dmg"
    credit: "Umut Çetinkaya"
    license: "MIT; upstream app icon, trademarks retained"
---

Live Translator is an MIT-licensed menu bar app. It captures whatever audio your Mac is playing, transcribes it with on-device speech recognition, and shows a running translation in a floating window. It suits people who follow videos, podcasts or meetings in another language. You supply an OpenAI, Gemini or Anthropic key; the Claude option translates text only, because Anthropic has no audio API.

The DMG requires macOS 13 or later and Screen & System Audio Recording permission. It is signed but not notarized, so allow the first launch in System Settings or clear the quarantine attribute with xattr, as the README explains. The setup wizard installs Python 3.11 or later if it is missing. Realtime mode streams audio to OpenAI; the default keeps audio on the Mac and sends only text to your provider.
