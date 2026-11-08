---
name: Saga Reader
summary: Collects articles on topics you choose and has a cloud or local language
  model summarise and discuss them with you.
category: AI
tags:
- rss
- reading
- language-models
- local-ai
repository: https://github.com/sopaco/saga-reader
website: https://aiqino.netlify.app
license: MIT
licenseUrl: https://github.com/sopaco/saga-reader/blob/main/LICENSE
download: https://github.com/sopaco/saga-reader/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/sopaco/saga-reader
- https://github.com/sopaco/saga-reader/blob/main/LICENSE
- https://github.com/sopaco/saga-reader/releases
- https://aiqino.netlify.app
- https://github.com/sopaco/saga-reader/blob/main/README.md
- https://github.com/sopaco/saga-reader/blob/main/docs/how-to-use-en.md
- https://github.com/sopaco/saga-reader/releases/tag/0.9.90
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/sopaco/saga-reader/main/app/src-tauri/icons/icon.png
  credit: Saga Reader contributors
  license: MIT; upstream project asset, trademarks retained
---

Saga Reader fetches articles on topics you describe with keywords, then has a language model summarise them and talk them through with you. You set up subscription groups, and each subscription draws either on search-engine results or on an RSS feed you add.

- A companion chat answers your questions about the article you are reading.
- Articles in other languages are translated into the language you prefer.
- You can read in the built-in viewer or open the article in your own browser.
- Subscriptions refresh in the background, and a button triggers a manual update.

Before first use you configure an AI service. The options are a local model run through Ollama, any cloud service compatible with the OpenAI API, or a free cloud model from Zhipu AI. The developer says all data is stored on your own computer.

The Mac download is a DMG for Apple silicon, and the project site lists macOS 10.15 or later. The app has no Developer ID signature, so Gatekeeper rejects it, and the setup guide has you clear the quarantine flag with `xattr`. Inside the DMG the app is named 麒睿智库, the Chinese name the project site also uses.
