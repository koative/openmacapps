---
name: "Quick Markdown"
summary: "Opens one Markdown file at a time, renders it the way GitHub does and copies it out as rich text or PDF."
category: "Writing"
tags:
  - markdown
  - markdown-editor
  - mermaid
  - latex
  - pdf
  - text-to-speech
  - accessibility
alternativeTo:
  - typora
repository: "https://github.com/Zesty0wl/quick-markdown"
website: "https://github.com/Zesty0wl/quick-markdown"
license: "MIT"
licenseUrl: "https://github.com/Zesty0wl/quick-markdown/blob/main/LICENSE"
download: "https://github.com/Zesty0wl/quick-markdown/releases/latest"
freeDownload: true
featured: false
added: "2026-11-11"
verified: "2026-11-11"
icon: "./assets/icon.png"
screenshots:
  - src: "./assets/diagrams.webp"
    alt: "A Markdown file on the Dark theme with a Mermaid flowchart, a sequence diagram and a pie chart rendered in the preview."
    source: "https://github.com/Zesty0wl/quick-markdown/blob/39683b3ac731b3c43aa2b14b5091224e6977ac6d/media/showcase/diagrams.png"
    credit: "Neil Johnson"
  - src: "./assets/light.webp"
    alt: "The welcome document on the Light theme, with front matter shown as a table, an embedded SVG banner, a shortcut table, task list and highlighted code."
    source: "https://github.com/Zesty0wl/quick-markdown/blob/39683b3ac731b3c43aa2b14b5091224e6977ac6d/media/light.png"
    credit: "Neil Johnson"
sources:
  - "https://github.com/Zesty0wl/quick-markdown"
  - "https://github.com/Zesty0wl/quick-markdown/blob/main/LICENSE"
  - "https://github.com/Zesty0wl/quick-markdown/releases/latest"
  - "https://github.com/Zesty0wl/quick-markdown/releases/tag/v1.0.11"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/Zesty0wl/quick-markdown/blob/39683b3ac731b3c43aa2b14b5091224e6977ac6d/QuickMarkdown/Assets.xcassets/AppIcon.appiconset/icon_512x512.png"
    credit: "Neil Johnson"
    license: "MIT; upstream app icon, trademarks retained"
  - path: "./assets/diagrams.webp"
    source: "https://github.com/Zesty0wl/quick-markdown/blob/39683b3ac731b3c43aa2b14b5091224e6977ac6d/media/showcase/diagrams.png"
    credit: "Neil Johnson"
    license: "MIT; upstream README screenshot, trademarks retained"
  - path: "./assets/light.webp"
    source: "https://github.com/Zesty0wl/quick-markdown/blob/39683b3ac731b3c43aa2b14b5091224e6977ac6d/media/light.png"
    credit: "Neil Johnson"
    license: "MIT; upstream README screenshot, trademarks retained"
---

Quick Markdown opens a single Markdown file and shows it rendered, with the source view one shortcut away (Option-Command-P). There is no vault, library or workspace. Each window is one file on disk.

When another program writes to that file, such as a coding agent drafting a plan, the preview redraws as the file changes and keeps your scroll position. Editing an SVG or PNG next to the file refreshes the preview too.

Rendering follows GitHub Flavored Markdown and works offline, with the extras that turn up in technical documents:

- syntax highlighting for 193 languages
- KaTeX maths and Mermaid diagrams
- GitHub alerts, footnotes and task lists
- Obsidian-style callouts and wiki links

Getting a document out matters as much as reading it. Shift-Command-C copies it as HTML, RTF and Markdown at once, so the formatting survives a paste into Mail, Word, Outlook, Notion or Slack. Shift-Command-E exports a PDF. Text copied from a Claude, ChatGPT or Gemini conversation loses the chat interface around it when you paste it in.

Six reading themes are included. One of them switches to the OpenDyslexic font when it is installed. The built-in macOS voices can read a document aloud, highlighting the source as they go.

Typora renders Markdown inline as you type. Quick Markdown keeps the preview and the source as separate views and puts more weight on reading and exporting than on writing long documents.

The app needs macOS 15 or later and is a universal build for Apple silicon and Intel Macs. It runs in the App Sandbox and ships as a pkg installer signed with a Developer ID and notarized. It tells you when a new release is out.
