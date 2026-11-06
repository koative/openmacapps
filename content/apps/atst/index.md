---
name: "atst"
summary: "Menu bar translator: select text in any app, press a hotkey and read the translation in a tooltip."
category: "Utilities"
tags:
  - translation
  - menu-bar
  - text-selection
repository: "https://github.com/itaober/atst"
website: "https://github.com/itaober/atst"
license: "Apache-2.0"
licenseUrl: "https://github.com/itaober/atst/blob/main/LICENSE"
download: "https://github.com/itaober/atst/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/itaober/atst"
  - "https://github.com/itaober/atst/blob/main/LICENSE"
  - "https://github.com/itaober/atst/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/itaober/atst/main/Resources/AppIconSource.png"
    credit: "itaober"
    license: "Apache-2.0; upstream app icon, trademarks retained"
---

atst translates selected text from any app. Press ⌥D over a selection and a tooltip shows the translation from built-in Google and Microsoft providers, which need no API key. Press ⌥S to translate text inside a screenshot region, using on-device OCR. An optional OpenAI-compatible endpoint adds dictionary-style output and explanations, and any result can be pinned as a sticky note. It suits people who read in several languages and want a quick lookup without leaving the page.

It needs macOS 14 or later on Apple silicon: the README says the release DMG is arm64 only, and Intel Macs need a source build. The app is self-signed rather than notarized, so the first launch may be refused until you right-click it and choose Open. It needs Accessibility permission for the hotkeys and Screen Recording for screenshot translation. Selected text goes to the translation providers you use, and the app checks api.github.com for updates at most every four hours. Its diagnostic log in `/tmp` includes the first characters of translated text.
