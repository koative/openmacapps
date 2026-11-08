---
name: "Ora Browser"
summary: "A WebKit web browser for macOS built with SwiftUI and AppKit, with built-in content blocking."
category: "Internet"
tags:
  - browser
  - privacy
  - native
repository: https://github.com/the-ora/browser
website: https://www.orabrowser.com
license: "GPL-3.0"
licenseUrl: https://github.com/the-ora/browser/blob/main/LICENSE
download: https://github.com/the-ora/browser/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/the-ora/browser
  - https://github.com/the-ora/browser/blob/main/LICENSE
  - https://github.com/the-ora/browser/releases
  - https://github.com/the-ora/browser/blob/main/README.md
  - https://github.com/the-ora/browser/blob/main/ROADMAP.md
  - https://github.com/the-ora/browser/releases/tag/v0.2.14
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/the-ora/browser/main/ora/Assets/Catalogs/Assets.xcassets/OraIcon.appiconset/Icon-512.png
    credit: "Ora Browser contributors"
    license: "GPL-3.0; upstream project asset, trademarks retained"
---

Ora loads web pages with Apple's WebKit engine inside a window drawn with SwiftUI and AppKit. It has a quick launcher and URL suggestions, and you can change the search engine.

Tabs can sit in a vertical list. The project's roadmap lists these features as available today:

- Spaces, with tab pinning and reordering.
- A floating tab switcher, plus cleanup of tabs left inactive.
- Picture in picture for video.
- Session restore and private browsing.
- Password autofill from iCloud Keychain.

Content blocking and privacy protections are built in, and developer tools come with the app. Many core browsing actions have keyboard shortcuts.

The project says Ora is in active development and not ready for daily use yet. Its roadmap puts history, folders, web notifications, passkeys and a beta of browser extension support among the near-term priorities.

Release 0.2.14 is a small DMG holding a Universal app for Apple silicon and Intel. It is signed with a Developer ID and notarized, and it needs macOS 15 or later. The source code is under GPL-3.0.
