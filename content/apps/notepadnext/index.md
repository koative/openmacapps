---
name: Notepad Next
summary: A cross-platform reimplementation of the Notepad++ text editor, with macOS disk images.
category: Writing
tags:
- text-editor
- code-editor
- cross-platform
alternativeTo:
- notepad-plus-plus
repository: https://github.com/dail8859/NotepadNext
website: https://github.com/dail8859/NotepadNext
license: GPL-3.0
licenseUrl: https://github.com/dail8859/NotepadNext/blob/master/LICENSE
download: https://github.com/dail8859/NotepadNext/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/dail8859/NotepadNext
- https://github.com/dail8859/NotepadNext/blob/master/LICENSE
- https://github.com/dail8859/NotepadNext/releases
- https://github.com/dail8859/NotepadNext/blob/master/README.md
- https://github.com/dail8859/NotepadNext/releases/tag/v0.15
- https://github.com/dail8859/NotepadNext/blob/master/src/CMakeLists.txt
- https://notepad-plus-plus.org/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/dail8859/NotepadNext/master/icon/NotepadNext.icns
  credit: Justin Dailey and Notepad Next contributors
  license: GPL-3.0 repository asset; Notepad Next name and icon retained by the project
---

Notepad Next reimplements the Notepad++ text editor, so you can edit text and code in it on a Mac as well as on Linux and Windows. It is written in C++ with Qt, and its editing view comes from the Scintilla component.

The README describes the app as stable and usable, but it lists numerous bugs and half-working features, and the author says not to rely on it for critically important work.

Releases on GitHub include separate disk images for Apple silicon and Intel Macs, and a Homebrew tap installs it too. The author does not pay Apple for signing, so macOS can report the app as damaged; the README gives an `xattr` command that clears the quarantine flag. Text can look different from the Windows version because of macOS font smoothing, which a `defaults` command turns off system-wide after a restart.

Notepad++ is written in C++ against the Win32 API and runs in Windows, as its own site describes. Notepad Next is a separate reimplementation built on Qt instead. Translations come from the community through Crowdin.
