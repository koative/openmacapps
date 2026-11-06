---
name: "PullMark"
summary: "Native Markdown reader that shows documentation changes in GitHub pull requests as rendered diffs."
category: "Developer tools"
tags:
  - markdown
  - code-review
  - git
repository: "https://github.com/jedijashwa/pullmark"
website: "https://pullmark.app"
license: "MIT"
licenseUrl: "https://github.com/jedijashwa/pullmark/blob/main/LICENSE"
download: "https://github.com/jedijashwa/pullmark/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jedijashwa/pullmark"
  - "https://github.com/jedijashwa/pullmark/blob/main/LICENSE"
  - "https://github.com/jedijashwa/pullmark/releases"
  - "https://pullmark.app"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/jedijashwa/pullmark/main/assets/AppIcon.icns"
    credit: "PullMark contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

PullMark renders Markdown the way a reader would see it, for local files and for Markdown changed in GitHub pull requests. Changed blocks are highlighted word by word. You can leave review comments and suggestions on the rendered text, or write margin notes into a local file for an agent to act on. It uses the GitHub credentials you already have, through the `gh` CLI or your git credential helper. It is for people who review design documents, runbooks and READMEs.

Requires macOS 13 or later. The README says the release DMG is signed with a Developer ID and notarized by Apple, while a source build made with `make app` is ad-hoc signed and not notarized. PullMark is a reader first: only Markdown files appear for a pull request, and code changes stay in your usual review tool. The README marks margin notes as beta.
