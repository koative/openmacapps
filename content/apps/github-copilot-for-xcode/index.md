---
name: "GitHub Copilot for Xcode"
summary: "GitHub's AI assistant inside Xcode, with inline code completions, chat, an agent mode and code review."
category: "AI"
tags:
  - xcode
  - coding-agents
  - language-models
repository: https://github.com/github/CopilotForXcode
website: https://github.com/github/CopilotForXcode
license: "MIT"
licenseUrl: https://github.com/github/CopilotForXcode/blob/main/LICENSE.txt
download: https://github.com/github/CopilotForXcode/releases/latest
homebrew: "github-copilot-for-xcode"
freeDownload: true
featured: false
added: '2026-11-02'
verified: '2026-11-02'
icon: ./assets/icon.png
sources:
  - https://github.com/github/CopilotForXcode
  - https://github.com/github/CopilotForXcode/blob/main/LICENSE.txt
  - https://github.com/github/CopilotForXcode/releases
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/github/CopilotForXcode/main/Copilot%20for%20Xcode/Assets.xcassets/AppIcon.appiconset/CopilotforXcode-Icon@256w_1x.png
    credit: "GitHub, Inc."
    license: "MIT code license; GitHub and Copilot names and logos are trademarks of GitHub, Inc. and are not covered by the code license"
---

GitHub Copilot for Xcode brings GitHub's AI coding assistant into Apple's IDE. It suggests code inline as you type, offers a chat panel for questions about your project, and has an agent mode that can edit files, search the codebase and run terminal commands. It also provides code review suggestions. It works through an Xcode Source Editor Extension together with a companion app that runs in the background.

It needs macOS 13 or later, Xcode 14 or later and a GitHub account with access to GitHub Copilot. Requests go to GitHub's Copilot service and count toward that account's Copilot plan. Setup asks for Accessibility permission, a background item, and for the Copilot extension to be switched on under Xcode Source Editor in System Settings. The app installs its own updates, and Xcode must be restarted after each one.
