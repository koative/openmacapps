---
name: Syntax Highlight
summary: "Shows source files with syntax highlighting in Finder's Quick Look previews."
category: Utilities
tags:
  - quick-look
  - code
  - previews
repository: https://github.com/sbarex/SourceCodeSyntaxHighlight
website: https://sbarex.github.io/SourceCodeSyntaxHighlight/
license: GPL-3.0
licenseUrl: https://github.com/sbarex/SourceCodeSyntaxHighlight/blob/master/LICENSE.txt
download: https://github.com/sbarex/SourceCodeSyntaxHighlight/releases
freeDownload: true
homebrew: "syntax-highlight"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/sbarex/SourceCodeSyntaxHighlight
  - https://github.com/sbarex/SourceCodeSyntaxHighlight/blob/master/LICENSE.txt
  - https://github.com/sbarex/SourceCodeSyntaxHighlight/blob/master/README.md
  - https://github.com/sbarex/SourceCodeSyntaxHighlight/releases
  - https://raw.githubusercontent.com/sbarex/SourceCodeSyntaxHighlight/master/README.md
  - https://github.com/sbarex/SourceCodeSyntaxHighlight/releases/tag/2.1.32
assets:
  - path: ./assets/icon.png
    source: https://github.com/sbarex/SourceCodeSyntaxHighlight/blob/a8eb669d49c2d1a019b5dc7d11d1adb8ee34a162/Application/Assets.xcassets/AppIcon.appiconset/icon_256x256%402x%402x.png
    credit: Syntax Highlight contributors
    license: GPL-3.0; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

Syntax Highlight adds coloured source-code previews to Quick Look. Select a script or source file in Finder, press Space, and the preview shows highlighted code. Rendering uses the Highlight engine, so it covers most programming languages along with Dockerfiles, diffs and configuration files.

The extension only appears after you launch the app once. You then switch it on under Quick Look in the Extensions settings. The app holds the rendering settings:

- Colour schemes for light and dark appearance, with an editor for your own
- Font, word wrap and a choice of RTF or HTML rendering
- Previews of files without an extension, with a hex dump for binaries
- An inquiry window that tells you whether a file type is handled

Some file types are out of reach. macOS reserves `.ts` for MPEG video streams and also keeps `.dart` for itself. A command-line tool, `syntax_highlight_cli`, sits inside the app bundle and converts files in batches.

The current version needs macOS 12, and 2.1.30 remains for macOS 10.15 and 11. The release ZIP holds a Universal app for Apple silicon and Intel, signed with a Developer ID and notarized, and the app checks for updates when it starts.
