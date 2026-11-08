---
name: "Nextpad++"
summary: "A macOS port of the Notepad++ code editor, with syntax highlighting, macros, plugins and find in files."
category: "Developer tools"
tags:
  - code-editor
  - text-editor
  - plugins
alternativeTo:
  - notepad-plus-plus
repository: https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos
website: https://nextpad.org
license: "GPL-3.0"
licenseUrl: https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos/blob/main/LICENSE
download: https://nextpad.org/download/
freeDownload: true
homebrew: "nextpad++"
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos
  - https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos/blob/main/LICENSE
  - https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos/releases
  - https://nextpad.org/download/
  - https://formulae.brew.sh/cask/nextpad++
  - https://nextpad.org/
  - https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos/blob/main/README.md
  - https://github.com/nextpad-plus-plus/nextpad-plus-plus-macos/releases/tag/v1.1.2
  - https://notepad-plus-plus.org/
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/nextpad-plus-plus/nextpad-plus-plus-macos/main/resources/npp.icns
    credit: "Nextpad++ contributors"
    license: "GPL-3.0 repository asset; trademarks retained"
---

Nextpad++ runs Notepad++ on a Mac as a native app. Andrey Letov ported the original Windows codebase to Objective-C++ and kept Scintilla as the editing component, which Notepad++ also uses.

- Syntax highlighting covers more than 80 languages, with color themes, code folding and user-defined languages.
- Search handles regular expressions, find in files, incremental search and bookmarked lines.
- Macros record repetitive edits and play them back.
- Split view puts two documents, or two parts of one, side by side.
- The port also keeps the document map, the column editor, a clipboard history panel, the character panel and a command palette.

Mac menus, keyboard shortcuts, file dialogs and dark mode replace the Windows ones, and the interface is translated into 137 languages. Plugins are being ported from the Windows version gradually. A built-in Plugin Admin installs them, and a plugin page on nextpad.org shows which ones already work. The developer says the editor has no telemetry and only goes online when you browse or install plugins through Plugin Admin.

There is no automatic updating. A menu item checks GitHub for a newer version, and you replace the old copy yourself. The download page lists macOS 11 or later, although the 1.1.2 app declares macOS 12 as its minimum. That build is a Universal app for Apple silicon and Intel, Developer ID-signed and notarized.

Don Ho's Notepad++ is written for Windows and its Win32 API. Nextpad++ is a separate project built on his code, under the same GPL-3.0 license.
