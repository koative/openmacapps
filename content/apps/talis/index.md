---
name: "Talis"
summary: "Prompt editor that opens with a shortcut, asks follow-up questions to fill in a draft, and copies it for any AI tool."
category: "AI"
tags:
  - prompts
  - llm
  - templates
  - writing
  - productivity
repository: "https://github.com/viowai/7viow-talis"
website: "https://viow.ai/work/talis/en/"
license: "Apache-2.0"
licenseUrl: "https://github.com/viowai/7viow-talis/blob/main/LICENSE"
download: "https://github.com/viowai/7viow-talis/releases/latest"
macos: "13"
arch: apple-silicon
notarized: false
freeDownload: true
featured: false
added: "2026-11-23"
verified: "2026-11-23"
screenshots:
  - src: ./assets/editor.webp
    alt: The Talis editor with a draft request about a product launch, above the Refine, Rewrite, Grill-me and Copy Prompt buttons.
    source: https://viow.ai/additions/talis/assets/launch-story-draft-en.webp
    credit: Talis contributors
  - src: ./assets/grill-me.webp
    alt: A Grill-me round in Talis asking which sources to use, with three suggested answers, a field for your own answer, and Skip and Submit Answers buttons.
    source: https://viow.ai/additions/talis/assets/launch-story-follow-up-en.webp
    credit: Talis contributors
sources:
  - "https://github.com/viowai/7viow-talis"
  - "https://github.com/viowai/7viow-talis/blob/main/LICENSE"
  - "https://github.com/viowai/7viow-talis/releases/tag/v1.0.1"
  - "https://github.com/viowai/7viow-talis/blob/main/README.en.md"
  - "https://github.com/viowai/7viow-talis/blob/main/docs/ai-services.en.md"
  - "https://github.com/koative/openmacapps/issues/80"
assets:
  - path: ./assets/editor.webp
    source: https://viow.ai/additions/talis/assets/launch-story-draft-en.webp
    credit: Talis contributors
    license: "Apache-2.0; upstream project asset, trademarks retained"
  - path: ./assets/grill-me.webp
    source: https://viow.ai/additions/talis/assets/launch-story-follow-up-en.webp
    credit: Talis contributors
    license: "Apache-2.0; upstream project asset, trademarks retained"
  - path: ./assets/icon.png
    source: https://github.com/viowai/7viow-talis/blob/bdcb9980090bb0b24fd4b13eac4a28f11013c926/Resources/AppIconSource.png
    credit: Talis contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Talis is a small editor for writing a request before you paste it into an AI tool. Press Option-Space, type a rough idea, and press Command-Return to copy it. Nothing is sent anywhere for you.

Three actions help with the draft when an AI service is set up:

- Grill-me asks one to three questions per round, for up to five rounds, and you can skip any of them
- Rewrite reorganizes the whole draft
- Refine edits only the passage you select

Each result stays editable, and Revision History keeps every round of the current session. Templates cover writing, presentations, interface design and research, and you can save your own. Placeholders in brackets are plain text that Tab jumps between.

Editing, templates and copying work offline. The AI actions use an API key for a provider such as OpenAI, Anthropic, Google, DeepSeek, Kimi or Qwen, stored in the Keychain. A subscription mode instead talks to a separate gateway running on the Mac.

Drafts are not kept after you quit, and there is no sync. Version 1.0.1 needs macOS 13 or later on Apple silicon. It is ad-hoc signed and not notarized, so the first launch needs Open Anyway in Privacy & Security.
