---
name: "Copilot for Xcode"
summary: "An Xcode source editor extension that adds GitHub Copilot or Codeium suggestions and LLM chat to Xcode."
category: "Developer tools"
tags:
  - xcode
  - code-completion
  - chat
  - coding-agents
repository: https://github.com/intitni/CopilotForXcode
website: https://copilotforxcode.intii.com
license: "MIT"
licenseUrl: https://github.com/intitni/CopilotForXcode/blob/main/LICENSE
download: https://github.com/intitni/CopilotForXcode/releases
homebrew: "copilot-for-xcode"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/intitni/CopilotForXcode
  - https://github.com/intitni/CopilotForXcode/blob/main/LICENSE
  - https://github.com/intitni/CopilotForXcode/releases
  - https://copilotforxcode.intii.com
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/intitni/CopilotForXcode/main/Copilot%20for%20Xcode/Assets.xcassets/AppIcon.appiconset/app-icon.png
    credit: "Shangxin Guo (intitni)"
    license: "MIT; upstream project asset, trademarks retained"
---

Copilot for Xcode brings AI coding help into Apple's IDE through a source editor extension. It shows inline code suggestions from GitHub Copilot or Codeium as you type, and adds a chat panel and a prompt-to-code feature that edits a selection with an OpenAI-compatible model. Custom commands let you save your own prompts and run them from Xcode's Editor menu.

Setup takes a few steps: enable the extension in System Settings, grant Accessibility permission to the bundled `CopilotForXcodeExtensionService` helper, which runs from the menu bar whenever Xcode or the host app is open, and sign in to the services you use. Copilot suggestions need an active Copilot subscription and Node.js for its language server, Codeium needs an account, and chat needs your own API key. Files listed in `.gitignore` get no suggestions.

This is an independent project, not GitHub's own Copilot extension for Xcode. The download is free; an optional paid Plus license unlocks extra features that are not part of the open-source code.
