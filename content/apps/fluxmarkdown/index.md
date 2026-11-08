---
name: "FluxMarkdown"
summary: "A Quick Look extension that previews Markdown with GitHub-style rendering, diagrams, math and a table of contents."
category: "Utilities"
tags: ["quick-look", "markdown", "previews", "finder"]
repository: "https://github.com/xykong/flux-markdown"
website: "https://github.com/xykong/flux-markdown"
license: "GPL-3.0"
licenseUrl: "https://github.com/xykong/flux-markdown/blob/master/LICENSE"
download: "https://github.com/xykong/flux-markdown/releases"
freeDownload: true
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/xykong/flux-markdown", "https://github.com/xykong/flux-markdown/blob/master/LICENSE", "https://github.com/xykong/flux-markdown/releases", "https://raw.githubusercontent.com/xykong/flux-markdown/master/README.md", "https://raw.githubusercontent.com/xykong/flux-markdown/master/docs/PRIVACY.md", "https://github.com/xykong/flux-markdown/releases/tag/v1.47.799"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/xykong/flux-markdown/master/Sources/Markdown/Assets.xcassets/AppIcon.appiconset/icon_256x256.png", "credit": "xykong and FluxMarkdown contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

FluxMarkdown renders Markdown files in Finder's Quick Look. Select a README or a notes file, press Space, and the preview shows formatted GitHub Flavored Markdown with tables, task lists and GitHub alerts in place of the raw text.

- Mermaid diagrams, KaTeX math, and Vega, Vega-Lite and Graphviz charts render inside the preview.
- A table of contents panel follows the section you are reading.
- YAML frontmatter turns into a table at the top.
- Code blocks get syntax highlighting, with a choice of themes such as GitHub and Monokai.
- Command-Shift-P exports the document as PDF, and Command-Shift-E as HTML.

Beyond `.md`, it recognizes extensions such as `.mdx`, `.qmd`, `.rmd` and `.markdown`, and it shows `.tsv` files as read-only tables, capped at 1,000 rows. The same app opens documents in its own window, where you can zoom and it remembers where you stopped scrolling.

Usage statistics are switched on by default and can be turned off in Settings for both the app and the Quick Look preview. The developer says they never include document names, paths or contents.

FluxMarkdown requires macOS 11 or later. The DMG from GitHub holds a Universal app for Apple silicon and Intel; it is not notarized, so macOS may call it damaged until you clear its quarantine flag. A Homebrew cask in the developer's own tap is the other install route. The code is GPL-3.0, and the developer sells a separate commercial license for closed-source use.
