---
name: "xCreen"
summary: "Captures your screen locally with OCR, and Hermes Agent writes short daily takeaways into your Obsidian notes."
category: "AI"
tags:
  - ocr
  - screen-recording
  - obsidian
  - agents
repository: "https://github.com/Al-ex-W/xCreen"
website: "https://al-ex-w.github.io/xCreen/"
license: "Apache-2.0"
licenseUrl: "https://github.com/Al-ex-W/xCreen/blob/main/LICENSE"
download: "https://github.com/Al-ex-W/xCreen/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/Al-ex-W/xCreen"
  - "https://github.com/Al-ex-W/xCreen/blob/main/LICENSE"
  - "https://github.com/Al-ex-W/xCreen/releases/latest"
  - "https://al-ex-w.github.io/xCreen/"
---

xCreen keeps a seven-day, searchable record of what was on your screen. The Mac app takes screenshots of the display with the focused window and runs Apple Vision OCR on them locally, dropping text that is nearly the same as the previous snapshot. Every 30 screenshots form a batch that goes to one persistent session in Hermes Agent, which writes short takeaways such as decisions, deadlines and people into that day's Obsidian daily note. You can ask questions from the menu bar or the terminal.

It is for people who already run Hermes Agent and keep their notes in Obsidian. The project presents it as an open source alternative to Rewind and Microsoft Recall for that setup.

Requires macOS 14 or later on Apple silicon (the release is arm64 only) and a working Hermes Agent install; xCreen ships no model. Local OCR does not mean local inference, because batches go to whichever provider your Hermes route uses. The release app is not notarized, so the first launch must be allowed in System Settings. Capture stays off until you turn the Integrity switch off, and the README warns that browser password fields and private windows are not redacted.
