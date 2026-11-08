---
name: Double Commander
summary: A two-panel file manager in the style of Total Commander, with tabs, archive browsing and a multi-rename tool.
category: Utilities
tags:
- files
- file-manager
- cross-platform
repository: https://github.com/doublecmd/doublecmd
website: https://doublecmd.sourceforge.io/
license: GPL-2.0
licenseUrl: https://github.com/doublecmd/doublecmd/blob/master/LICENSE.md
download: https://github.com/doublecmd/doublecmd/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/doublecmd/doublecmd
- https://github.com/doublecmd/doublecmd/blob/master/LICENSE.md
- https://github.com/doublecmd/doublecmd/releases
- https://doublecmd.sourceforge.io/
- https://github.com/doublecmd/doublecmd/blob/master/README.md
- https://github.com/doublecmd/doublecmd/releases/tag/v1.2.11
- https://www.ghisler.com/
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/doublecmd/doublecmd/master/doublecmd.app/Contents/Resources/doublecmd.icns
  credit: Double Commander developers
  license: GPL-2.0 repository asset; no separate icon terms stated
---

Double Commander is a file manager built around two directory panels, arranged either next to each other or stacked vertically. The model is Total Commander, the Windows file manager that inspired it, and the project adds some ideas of its own on top.

- Archives open like folders, so you can copy files in and out of ZIP, 7Z, TAR, GZ, BZ2, XZ, RAR, DEB, RPM and several other formats.
- F3 opens a viewer that shows any file as text, binary or hex, and F4 opens an internal text editor with syntax highlighting.
- The search can look inside file contents as well as at names.
- A multi-rename tool renames batches of files at once.
- Remote folders open over FTP, FTPS, FTPES, SFTP and SSH with SCP.
- Plug-ins written for Total Commander work too, in its WCX, WDX, WFX and WLX formats.

Panels hold tabs and custom columns, a configurable button bar starts external programs or internal commands, and most file operations run in the background and can be logged.

Version 1.2.11 ships separate Cocoa disk images for Apple silicon and Intel, next to the Windows and Linux packages. The Apple silicon image contains an ad-hoc signed app without a Developer ID signature.
