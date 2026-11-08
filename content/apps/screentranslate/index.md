---
name: "ScreenTranslate"
summary: "Translates text from any area of the screen or a selection, with on-device OCR and translation by default."
category: "Productivity"
tags:
  - translation
  - ocr
  - languages
  - keyboard-shortcuts
repository: https://github.com/hcmhcs/screenTranslate
website: https://screentranslate.filient.ai/
license: "GPL-3.0"
licenseUrl: https://github.com/hcmhcs/screenTranslate/blob/main/LICENSE
download: https://github.com/hcmhcs/screenTranslate/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/hcmhcs/screenTranslate
  - https://github.com/hcmhcs/screenTranslate/blob/main/LICENSE
  - https://github.com/hcmhcs/screenTranslate/releases
  - https://github.com/hcmhcs/screenTranslate/blob/main/README.md
  - https://github.com/hcmhcs/screenTranslate/releases/tag/v1.6.0
  - https://screentranslate.filient.ai/
  - https://screentranslate.filient.ai/privacy
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/hcmhcs/screenTranslate/main/ScreenTranslate/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "hcmhcs and ScreenTranslate contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

ScreenTranslate translates text on your screen, including text you cannot select. Press Command-E, drag a rectangle around it, and the translation appears in a popup next to the selection. Apple's Vision framework reads the text and Apple Translation translates it on the Mac.

- Select text in any app and press Command-Option-Z to translate it without OCR.
- Command-Shift-E opens a small panel where you type or paste text.
- Live Translate, a beta, keeps translating an area you pick, such as subtitles burned into a video or game. It uses only Apple Translation, cannot capture protected video such as Netflix and drains more battery while it runs.
- Results go to the clipboard by default, and a searchable history keeps every translation.

Capturing needs the Screen Recording permission, and translating selected text needs Accessibility. The developer says the app collects only anonymous usage statistics and no personal data.

ScreenTranslate needs macOS 15 or later and no account. The 1.6.0 DMG holds a Universal app for Apple silicon and Intel, Developer ID-signed and notarized, and it updates itself through Sparkle. You can hide the menu bar icon; opening the app again brings up Settings.

Every shortcut can be changed. Apple Translation covers 20 languages and detects the source language. Once you download the language packs, it works offline. API keys for DeepL, Google Cloud or Azure, which you supply yourself, add more languages.
