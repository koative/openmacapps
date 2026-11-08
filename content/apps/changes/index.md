---
name: "Changes"
summary: "A Git client for macOS with staging by hunk, branches, tags, stashes and commit search."
category: "Developer tools"
tags:
  - git
  - version-control
  - git-client
alternativeTo:
  - tower
  - fork
repository: https://github.com/maoyama/Changes
website: https://github.com/maoyama/Changes
license: "MIT"
licenseUrl: https://github.com/maoyama/Changes/blob/main/LICENSE
download: https://github.com/maoyama/Changes/releases
freeDownload: true
homebrew: "changes"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources: ["https://github.com/maoyama/Changes", "https://github.com/maoyama/Changes/blob/main/LICENSE", "https://github.com/maoyama/Changes/releases", "https://raw.githubusercontent.com/maoyama/Changes/main/README.md", "https://raw.githubusercontent.com/maoyama/Changes/main/LICENSE", "https://github.com/maoyama/Changes/releases/tag/v2.5", "https://github.com/maoyama/Changes/releases/tag/v1.18", "https://fork.dev/", "https://www.git-tower.com/pricing"]
assets:
  - path: ./assets/icon.png
    source: https://github.com/maoyama/Changes/releases/download/v2.5/Changes.zip
    credit: "Makoto Aoyama"
    license: "MIT; icon extracted unmodified from the official v2.5 release bundle, trademarks retained"
---

Changes puts everyday Git work in a Mac window. You stage the hunks you want, write a message, commit, and push the branch without typing a command.

- Commits can be amended, reverted or checked out, and commit message snippets can be saved for reuse.
- Branches can be created, filtered, merged, pushed and pulled.
- Tags can be created and pushed, filtered and deleted.
- Stashes can be applied, and Apple Intelligence can write a summary of one.
- History search finds commits by message, by added or removed text, by author, or by a revision range such as `main..` or `v1.0.0...v2.0.0`.

Apple Intelligence can also draft a commit message for you. The app is built with SwiftUI and AppKit and uses the Liquid Glass look of macOS 26.

Version 2 requires macOS 26. Release 1.18 and earlier, published as Tempo, run on macOS 14.6 and later and stay on the releases page. The 2.5 download is a ZIP with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. You unzip it and run it.

Fork and Tower are sold after a free trial and also run on Windows. Changes is a Mac-only app, free under the MIT license.
