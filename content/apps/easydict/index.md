---
name: "Easydict"
summary: "Looks up words and translates selected text or screenshots with dictionaries, system translation and AI services."
category: "Productivity"
tags:
  - dictionary
  - translation
  - ocr
repository: https://github.com/tisfeng/Easydict
website: https://github.com/tisfeng/Easydict
license: "GPL-3.0"
licenseUrl: https://github.com/tisfeng/Easydict/blob/dev/LICENSE
download: https://github.com/tisfeng/Easydict/releases
freeDownload: true
homebrew: "easydict"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/tisfeng/Easydict
  - https://github.com/tisfeng/Easydict/blob/dev/LICENSE
  - https://github.com/tisfeng/Easydict/releases
  - https://formulae.brew.sh/cask/easydict
  - https://raw.githubusercontent.com/tisfeng/Easydict/dev/README.md
  - https://github.com/tisfeng/Easydict/blob/dev/docs/user-docs/en/SERVICES.md
  - https://github.com/tisfeng/Easydict/releases/tag/2.25.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/tisfeng/Easydict/dev/Easydict/App/Assets.xcassets/white-black-icon.appiconset/icon_512x512.png
    credit: "tisfeng and Easydict contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Easydict looks up words and translates text in a small panel. Select text and press Option-D, or press Option-A and type a query, and the panel lists answers from several services side by side. Selecting text with the mouse also shows a small icon; hover over it to look the text up.

Screenshots work the same way. Option-S lets you drag across part of the screen and translates the text it recognizes, while Option-Shift-S only copies the recognized text to the clipboard. The language of the input is detected automatically, and 52 target languages are available.

- Apple Dictionary and MDict files you import answer word lookups.
- Apple Translate can work offline on macOS 15 and later.
- Ollama runs AI translation on your own Mac or on a server you name.
- Several text-to-speech services read results aloud.

Services differ in what they need. Google, Bing and DeepL work without a key, while OpenAI, Gemini, Claude and Baidu Translate need your own API key or credentials. Claude Code and Codex CLI only answer when that command-line tool is installed and signed in. New installations start with Youdao, DeepL and the built-in AI service, and you can reorder or switch off any of them in settings.

Easydict needs macOS 13 or later, and version 2.7.2 remains for older systems. The release DMG holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized.
