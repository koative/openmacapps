---
name: QLMarkdown
summary: Shows Markdown files formatted in Finder's Quick Look, with math, Mermaid diagrams and syntax highlighting.
category: Utilities
tags:
  - quick-look
  - markdown
  - previews
repository: https://github.com/sbarex/QLMarkdown
website: https://github.com/sbarex/QLMarkdown
license: GPL-3.0
licenseUrl: https://github.com/sbarex/QLMarkdown/blob/main/LICENSE.txt
download: https://github.com/sbarex/QLMarkdown/releases
freeDownload: true
homebrew: "qlmarkdown"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources: ["https://github.com/sbarex/QLMarkdown", "https://github.com/sbarex/QLMarkdown/blob/main/LICENSE.txt", "https://github.com/sbarex/QLMarkdown/blob/main/README.md", "https://github.com/sbarex/QLMarkdown/releases", "https://github.com/sbarex/QLMarkdown/releases/tag/1.5.7"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/sbarex/QLMarkdown/blob/3a0cdcd40c5f53584a2fd9cf9dde6007276b31ce/QLMarkdown/Assets.xcassets/AppIcon.appiconset/appicon256.png
    credit: QLMarkdown contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

QLMarkdown renders Markdown files as formatted pages when you select one in Finder and press Space. Besides `.md` it previews R Markdown (`.rmd`, without running the R code), MDX without the JSX, Quarto `.qmd`, Cursor `.mdc` rules, API Blueprint files and TextBundle packages.

Parsing uses GitHub's cmark-gfm library, so tables, task lists, footnotes and strikethrough follow GitHub Flavored Markdown. QLMarkdown adds its own extensions on top, each switched on in the settings app:

- Code in fenced blocks gets syntax highlighting.
- Math between dollar signs renders with MathJax, and Mermaid blocks become diagrams that follow light or dark mode.
- Emoji shortcodes such as `:smile:` turn into glyphs or GitHub's images.
- A YAML header at the top of a file can show as a table, for all Markdown files or only `.rmd` and `.qmd`.
- A table of contents sidebar appears when the preview window is wide enough.

MathJax and Mermaid can load from a CDN, which needs an internet connection, or be embedded in the preview. Local images only show when the inline images option is on, because Quick Look extensions cannot read other files on their own.

The app itself only sets preview options, and its built-in editor exists to try them out on a file. You have to launch it once so macOS registers the extension. The 1.5.7 release needs macOS 12, runs natively on Apple silicon and Intel, and is signed and notarized. The bundle also includes a command-line tool for converting Markdown to HTML and an experimental Shortcuts action.
