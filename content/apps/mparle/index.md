---
name: "mPARLE"
summary: "Menu bar translator for text selected in any Mac app, with one shortcut and Apple on-device translation by default."
category: "Productivity"
tags: ["translation", "menu-bar", "shortcut", "offline", "text-selection", "services"]
repository: "https://github.com/starbudweiser/mPARLE"
website: "https://starbudweiser.github.io/wshowcase/#mPARLE"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mPARLE/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mPARLE/releases/latest"
macos: "26"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-17"
verified: "2026-11-18"
sources: ["https://github.com/starbudweiser/mPARLE", "https://github.com/starbudweiser/mPARLE/blob/main/LICENSE", "https://github.com/starbudweiser/mPARLE/releases/tag/v1.0.1", "https://github.com/starbudweiser/mPARLE/blob/main/README.md"]
icon: "./assets/icon.png"
screenshots: [{"src": "./assets/screenshot-bubble.png", "alt": "The mPARLE bubble next to the cursor, translating a French sentence into English with Apple's local engine, with Copy, Listen and Best quality buttons.", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/bubble.png", "credit": "mPARLE authors"}, {"src": "./assets/screenshot-quick-input.png", "alt": "The mPARLE Quick input window with a Spanish question on the left and its English translation on the right.", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/quick-input.png", "credit": "mPARLE authors"}, {"src": "./assets/screenshot-settings.png", "alt": "The mPARLE settings: target and alternate languages, engines, DeepL key, shortcuts, replace in place and history.", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/settings.png", "credit": "mPARLE authors"}]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mPARLE/blob/main/assets/mPARLE_1024.png", "credit": "mPARLE authors", "license": "MIT (mPARLE repository)"}, {"path": "./assets/screenshot-bubble.png", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/bubble.png", "credit": "mPARLE authors", "license": "MIT (mPARLE repository)"}, {"path": "./assets/screenshot-quick-input.png", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/quick-input.png", "credit": "mPARLE authors", "license": "MIT (mPARLE repository)"}, {"path": "./assets/screenshot-settings.png", "source": "https://github.com/starbudweiser/mPARLE/blob/main/docs/settings.png", "credit": "mPARLE authors", "license": "MIT (mPARLE repository)"}]
---

mPARLE translates whatever text you have selected, in any app, without switching windows. Select a sentence, press Option-T, and a small bubble appears next to the cursor with the translation, the detected source language and the engine used. From the bubble you can copy the result, listen to it, or replace the selected text in place when the field is editable.

A second shortcut, Option-Shift-T, opens a quick input window for typing or pasting text, and the app also adds a Translate with mPARLE entry to the macOS Services menu. The target language is set once in the settings. If the selected text is already in that language, mPARLE translates it into a second language you choose instead. An optional history is kept locally and can be cleared.

The default engine is Apple's on-device translation, which runs offline once the language pair is downloaded from the settings. Alternatives are Google, DeepL with your own free API key kept in the Keychain, and a local model served through an OpenAI-compatible endpoint such as Ollama. The Google engine needs no key. Google and DeepL receive the text, so choose the Apple engine to keep it on the Mac.

mPARLE reads the selection through the Accessibility permission, so macOS asks for it on first use. The interface is in French, English, Spanish and Italian, with light and dark appearance, and it checks GitHub releases for updates. The release build is for Apple silicon and requires macOS 26, and the app is Developer ID signed and notarized.
