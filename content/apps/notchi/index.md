---
name: "Notchi"
summary: "An AI prompt in the MacBook notch that answers questions, saves notes and reminders, and hands work to coding agents."
category: "AI"
tags: ["notch", "notes", "reminders", "coding-agents"]
repository: "https://github.com/cyrus-cai/notchi"
website: "https://github.com/cyrus-cai/notchi"
license: "MIT"
licenseUrl: "https://github.com/cyrus-cai/notchi/blob/master/LICENSE"
download: "https://github.com/cyrus-cai/notchi/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/cyrus-cai/notchi", "https://raw.githubusercontent.com/cyrus-cai/notchi/master/README.md", "https://github.com/cyrus-cai/notchi/blob/master/LICENSE", "https://github.com/cyrus-cai/notchi/releases", "https://github.com/cyrus-cai/notchi/releases/tag/v0.9.28", "https://notch.website/pricing"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/cyrus-cai/notchi/master/NotchGlass/Resources/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x.png", "credit": "Cyrus Cai", "license": "MIT; upstream project asset, trademarks retained"}]
screenshots: []
---

Notchi puts an AI prompt in the MacBook notch. You type a line there and the answer appears in place, with a web search when the question calls for one. The last answer stays above the prompt, so a follow-up reads like the next message in one ongoing thread.

A slash menu changes what a line does:

- Ask sends it to a model as a question.
- Capture saves it as a note.
- Remind turns a line with a time in it, such as "call mum tomorrow 9am", into an entry in Reminders.
- Code hands a project folder to Codex, Claude Code or Cursor, and the collapsed notch tracks the task while it runs.

Answers can include bar charts when the reply is about numbers, and Notchi can run shell commands on your Mac to finish a job, such as measuring a folder with `du`. It suggests a next question and keeps a memory across conversations.

You can connect your own model provider with an API key. The developer says requests then go straight to that provider, that chats and memory stay on your Mac and that no sign-up is needed. Settings → Audit lists every request the app has sent, so you can see for yourself what leaves the machine.

Notchi needs macOS 14 or later and Apple silicon. Releases come as a zip on GitHub, and there is a Homebrew cask in the developer's own tap. The pricing page says copies downloaded before January 1, 2027 stay free, and that after that date it becomes a one-time purchase that includes the hosted models.
