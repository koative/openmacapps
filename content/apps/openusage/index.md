---
name: "OpenUsage"
summary: "A menu bar app that shows how much of your AI coding plans you have used, with limits, credits and reset times per account."
category: "AI"
tags:
  - menu-bar
  - coding-agents
  - usage-tracking
  - native
repository: https://github.com/robinebers/openusage
website: https://www.openusage.ai
license: "MIT"
licenseUrl: https://github.com/robinebers/openusage/blob/main/LICENSE
download: https://github.com/robinebers/openusage/releases
homebrew: "openusage"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/robinebers/openusage
  - https://github.com/robinebers/openusage/blob/main/LICENSE
  - https://github.com/robinebers/openusage/blob/main/docs/privacy.md
  - https://github.com/robinebers/openusage/blob/main/TRADEMARK.md
  - https://github.com/robinebers/openusage/releases
assets:
  - path: ./assets/icon.png
    source: https://github.com/robinebers/openusage/blob/main/assets/AppIcon.prebuilt/AppIcon.icns
    credit: "Robin Ebers"
    license: "OpenUsage name and logo are trademarks of Robin Ebers; not covered by the MIT code license"
---

OpenUsage keeps the limits of your AI subscriptions in the menu bar. You add each account inside the app, by browser sign-in, device code or API key, and it shows session and weekly limits, credits and balances that the provider reports, with the ones closest to running out shown in the menu bar itself. Supported providers include Claude, ChatGPT, Cursor, Copilot, Grok, OpenRouter and Ollama.

It does not read other tools' credentials or files; tokens and keys you add are kept in the app's own Keychain entries. Optional notifications warn when a limit runs low, and a command-line helper can print the last fetched usage as JSON.

OpenUsage needs macOS 15 or later and ships as a signed, notarized universal app that updates itself. It always sends an anonymous daily usage ping and crash reports; additional anonymous analytics are on by default for new installs and can be turned off under Settings → Privacy.
