---
name: "Markdown Quick Look"
summary: "Finder Quick Look previews that render Markdown files with a GitHub-style layout, plus a menu-bar switch back to source."
category: "Utilities"
tags:
  - quick-look
  - markdown
  - finder
  - previews
repository: "https://github.com/ruspg/markdown-quicklook"
website: "https://github.com/ruspg/markdown-quicklook"
license: "MIT"
licenseUrl: "https://github.com/ruspg/markdown-quicklook/blob/main/LICENSE"
download: "https://github.com/ruspg/markdown-quicklook/releases/download/v2.1.0/markdown-quicklook-v2.1.0-macos-universal.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/ruspg/markdown-quicklook"
  - "https://github.com/ruspg/markdown-quicklook/blob/main/LICENSE"
  - "https://github.com/ruspg/markdown-quicklook/releases"
---

Pressing Space on a Markdown file in Finder normally shows its raw source. This project changes the Quick Look preview so the file is rendered, with a GitHub-compact type system and automatic light and dark pages. A menu-bar item toggles between rendered and plain-text previews for both the preview and the thumbnail. It is for people who keep notes, READMEs or drafts as Markdown and want to read them quickly in Finder. The release zip also contains PreviewMarkdown's Quick Look extensions, which the project builds on and which are MIT licensed upstream.

The zip is a universal build for macOS 13 or later on Apple silicon or Intel. It is ad-hoc signed and not notarized, so macOS needs its quarantine flag cleared before it loads the extensions; the project's install script does that for you. After toggling the renderer, press Space twice, because Quick Look caches the previous one.
