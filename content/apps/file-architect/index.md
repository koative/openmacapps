---
name: File Architect
summary: Turns an indented outline of files and folders into the real structure on disk in one step.
category: Productivity
tags:
  - files
  - organization
  - cross-platform
repository: https://github.com/filearchitect/app
website: https://filearchitect.com
license: MIT
licenseUrl: https://github.com/filearchitect/app/blob/main/LICENSE
download: https://github.com/filearchitect/app/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/filearchitect/app
  - https://github.com/filearchitect/app/blob/main/LICENSE
  - https://github.com/filearchitect/app/releases
  - https://filearchitect.com
  - https://raw.githubusercontent.com/filearchitect/app/main/README.md
  - https://filearchitect.com/pricing
  - https://filearchitect.com/docs
  - https://github.com/filearchitect/app/releases/tag/v0.12.3
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/filearchitect/app/main/src-tauri/icons/icon.icns
    credit: Sébastien Lavoie and File Architect contributors
    license: MIT repository asset; File Architect name and icon retained by the project
---

You type the folders and files you want as an indented outline, and File Architect builds that tree on disk in one go. A line without an extension becomes a folder, a line with one becomes a file, and a Tab nests it under the line above.

The outline syntax handles more than empty folders:

- A path in square brackets copies an existing file, or a whole folder with its contents, into the new structure.
- A path in parentheses moves an existing file there instead of copying it.
- Adding `$*5` to a name repeats that line five times, and a repeated folder can carry its indented children.
- Where a blank file exists for the type, the app uses it, so a new PSD or DOCX opens in its app instead of failing as a zero-byte file.

Finished outlines can be saved as templates for reuse. An optional AI mode turns a written description into an outline; the site says those requests go to Google Gemini. The developer says templates and structures stay on your machine, and the app contacts its server only to check the license.

The site lists macOS 10.15 or later. Version 0.12.3 has separate DMGs for Apple silicon and Intel, with the Intel one labelled a legacy download on the site, and its Apple silicon app is notarized.

The code is MIT-licensed on GitHub, while the packaged app from the website works on a license model. It starts with a seven-day trial of every feature, then drops to a free Lite version for personal use that limits file and folder creation to 20 items. Commercial use needs a paid license.
