---
name: "SSMV"
summary: "Read-only native Markdown viewer with a sidebar, heading navigation, offline Mermaid diagrams and PDF export."
category: "Productivity"
tags:
  - markdown
  - reader
  - cross-platform
  - native
repository: "https://github.com/raeseoklee/ssmv"
website: "https://github.com/raeseoklee/ssmv"
license: "MIT"
licenseUrl: "https://github.com/raeseoklee/ssmv/blob/main/LICENSE"
download: "https://github.com/raeseoklee/ssmv/releases"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/raeseoklee/ssmv"
  - "https://github.com/raeseoklee/ssmv/blob/main/LICENSE"
  - "https://github.com/raeseoklee/ssmv/releases"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/raeseoklee/ssmv/main/macos/Resources/AppIcon.iconset/icon_512x512%402x.png"
    credit: "raeseoklee and SSMV contributors"
    license: "MIT; upstream app icon, trademarks retained"
---

SSMV opens local Markdown files and public Markdown URLs in a native window. A collapsible sidebar keeps several documents together, you can jump between headings, and any document can be exported to PDF. Mermaid diagrams render locally, without a background server. It is read-only by design, so it is for reading Markdown rather than editing it. The Windows edition is a preview and does not yet match every macOS feature.

The macOS app needs macOS 13 or later and runs on Apple silicon and Intel as a universal build; it can also be installed with Homebrew. Version 0.6.0 is ad-hoc signed and not notarized by Apple. The Homebrew cask removes the quarantine flag, but a manually downloaded copy may be blocked on first launch and then needs approval under System Settings > Privacy & Security. The README says the app has no analytics; opening a remote document sends a request to that document's server, including its query parameters. The Windows installers are unsigned.
