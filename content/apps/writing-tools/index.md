---
name: "Writing Tools"
summary: "Proofreads, rewrites and summarizes selected text in any app from a shortcut, using cloud AI or local MLX and Ollama models."
category: "Writing"
tags:
  - ai-writing
  - local-ai
  - language-models
  - keyboard-shortcuts
  - cross-platform
repository: "https://github.com/theJayTea/WritingTools"
website: "https://github.com/theJayTea/WritingTools"
license: "GPL-3.0"
licenseUrl: "https://github.com/theJayTea/WritingTools/blob/main/LICENSE"
download: "https://github.com/theJayTea/WritingTools/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/theJayTea/WritingTools"
  - "https://github.com/theJayTea/WritingTools/blob/main/LICENSE"
  - "https://github.com/theJayTea/WritingTools/tree/main/macOS"
  - "https://github.com/theJayTea/WritingTools/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/theJayTea/WritingTools/main/macOS/WritingTools/Assets/Assets.xcassets/AppIcon.appiconset/WritingTools-macOS-Default-1024x1024%401x.png"
    credit: "Writing Tools contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Writing Tools adds AI text actions to every app. You select text, press your shortcut and pick Proofread, Rewrite, a friendlier or more professional tone, Concise, Summarize, Key Points, Table or a command you wrote yourself; the result replaces the selection, and proofreading keeps rich-text formatting such as bold and lists. Pressing the shortcut with nothing selected opens a chat with the current model.

It is for people who want writing help similar to Apple's Writing Tools but with a free choice of model. The Mac version is a native Swift port, separate from the Windows and Linux app, and works with OpenAI, Google Gemini, Anthropic, Mistral and OpenRouter through your own API key, or with local models through Ollama or MLX.

It requires macOS 14 or later. The app is a universal build for Apple silicon and Intel, though local MLX models need Apple silicon, and it is signed and notarized; the macOS release asset is a zip containing a disk image. It needs the Accessibility permission, plus Screen Recording for some apps that restrict access to their text. With a cloud provider, the selected text is sent to that provider; the app itself keeps your API key on the Mac and collects no logs.
