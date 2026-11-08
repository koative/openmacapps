---
name: Markdown Preview
summary: "Opens Markdown files as formatted documents with a heading outline, and previews them in Finder with Quick Look."
category: Writing
tags:
  - markdown
  - reading
  - quick-look
repository: https://github.com/pluk-inc/markdown-preview
website: https://markdownpreview.app
license: MIT
licenseUrl: https://github.com/pluk-inc/markdown-preview/blob/main/LICENSE
download: https://github.com/pluk-inc/markdown-preview/releases
freeDownload: true
homebrew: "markdown-preview"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
sources: ["https://github.com/pluk-inc/markdown-preview", "https://github.com/pluk-inc/markdown-preview/blob/main/LICENSE", "https://github.com/pluk-inc/markdown-preview/releases", "https://formulae.brew.sh/cask/markdown-preview", "https://raw.githubusercontent.com/pluk-inc/markdown-preview/main/README.md", "https://markdownpreview.app", "https://github.com/pluk-inc/markdown-preview/releases/tag/v0.0.71"]
icon: ./assets/icon.png
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/pluk-inc/markdown-preview/main/docs/app-icon.png
    credit: Pluk
    license: MIT repository asset; Markdown Preview name and icon retained by Pluk
---

Markdown Preview opens `.md` files as formatted pages, so a README or a folder of notes reads as a document and not as raw text full of `#` and `**`. Drop a file on the icon, or let the app become the default handler for Markdown. A sidebar outline lists every heading, and clicking one jumps to that section.

- Mermaid blocks render as diagrams with a bundled renderer that needs no network, and LaTeX math renders through bundled KaTeX.
- A Quick Look extension shows the same rendering when you press Space on a file in Finder, and in Spotlight.
- Edit Mode adds a formatting toolbar, and task checkboxes can be ticked from the reading view, saving the change to the file.
- Command line tools let you open a file or folder with `mdp README.md` or `mdp .`.
- Export covers PDF, HTML, PNG and EPUB, and printing has its own font size and scale controls.

Reading settings cover text size, content width, alignment and how single line breaks are handled. Themes change fonts, spacing and colors. Open With hands the file to an editor such as BBEdit, Nova or Xcode. Share as Link uploads the document and returns a link anyone can open for seven days.

The app requires macOS 15. The DMG on GitHub holds a Universal app that is Developer ID-signed and notarized, and the official Homebrew cask installs the same release. It is free under the MIT license and needs no account.
