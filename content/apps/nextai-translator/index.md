---
name: "NextAI Translator"
summary: "Translates, polishes or summarizes selected text with a language model, from a desktop window or a global shortcut."
category: "AI"
tags:
  - translation
  - language-models
  - cross-platform
repository: https://github.com/nextai-translator/nextai-translator
website: https://github.com/nextai-translator/nextai-translator
license: "AGPL-3.0"
licenseUrl: https://github.com/nextai-translator/nextai-translator/blob/main/LICENSE
download: https://github.com/nextai-translator/nextai-translator/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/nextai-translator/nextai-translator
  - https://github.com/nextai-translator/nextai-translator/blob/main/LICENSE
  - https://github.com/nextai-translator/nextai-translator/releases
  - https://raw.githubusercontent.com/nextai-translator/nextai-translator/main/README.md
  - https://github.com/nextai-translator/nextai-translator/releases/tag/v0.6.55
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nextai-translator/nextai-translator/main/src-tauri/icons/icon.icns
    credit: "nextai-translator contributors"
    license: "AGPL-3.0; upstream project asset, trademarks retained"
---

NextAI Translator sends text to a large language model and gives you back a translation, a polished version or a summary, in any of 55 languages. Select text in another app and press a global shortcut, or type into the app's window. Results stream in as the model writes them, and you can copy them with one click or have them read aloud.

The developer renamed the project after a trademark warning from OpenAI. The author had first written a ChatGPT translation plugin for Bob, a macOS translation app, and started this project for people without a Mac. It began as a Chrome extension before the desktop app arrived.

It can also translate text from a screenshot, and a vocabulary book keeps words you save and can generate memory aids for them. The latest release also carries an extension for PopClip, the macOS text-selection menu.

NextAI Translator does no translation itself. You need an API key for OpenAI, Azure OpenAI, MiniMax, TeamoRouter or another supported provider, and your text is sent to that provider. The README recommends TeamoRouter, a gateway that reaches several model makers through one key.

The desktop app is built with Tauri and also runs on Windows and Linux; Chrome and Firefox extensions are released from the same repository. The latest release offers a DMG for Apple silicon only. The README says macOS may refuse to open the app because the developer cannot be verified, and explains how to allow it in Privacy & Security.
