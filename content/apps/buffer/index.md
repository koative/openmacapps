---
name: "Buffer"
summary: "A small menu bar clipboard manager with searchable history, pins, tags, multi-paste and on-device OCR for images."
category: "Productivity"
tags:
  - clipboard
  - menu-bar
  - ocr
  - history
  - clipboard-manager
alternativeTo:
  - paste
repository: https://github.com/samirpatil2000/Buffer
website: https://samirpatil2000.github.io/products/buffer
license: "MIT"
licenseUrl: https://github.com/samirpatil2000/Buffer/blob/main/LICENSE
download: https://github.com/samirpatil2000/Buffer/releases
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/samirpatil2000/Buffer
  - https://github.com/samirpatil2000/Buffer/blob/main/LICENSE
  - https://github.com/samirpatil2000/Buffer/releases
  - https://samirpatil2000.github.io/products/buffer
  - https://raw.githubusercontent.com/samirpatil2000/Buffer/main/README.md
  - https://pasteapp.io/
  - https://github.com/samirpatil2000/Buffer/releases/tag/buffer-v3.0.0
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/samirpatil2000/Buffer/main/Assets.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Samir Patil"
    license: "MIT repository asset; name and logo retained by the author"
---

Buffer saves the text and images you copy and brings them back with Shift-Command-V. Type to search the history, move with the arrow keys, and press Return to paste the item into the frontmost app.

- Copied images run through Apple's Vision text recognition on the Mac, so the words in a screenshot become searchable.
- Items can be pinned, bookmarked with Command-B, or given coloured tags that you filter by typing # in the search field.
- Shift with the arrow keys selects several items to paste together or delete at once.
- Text can be edited in place in the preview pane.
- Large clips such as logs and JSON get chunked previews, and multi-megabyte text is kept on disk.

History size comes in tiers of 200 items, 1,000 or unlimited, and a noise filter drops rapid duplicate copies and short fragments. Command-slash opens a cheat sheet of the keyboard shortcuts. The developer says nothing leaves the Mac and nothing is tracked.

Buffer needs macOS 13 or later. Releases come as separate Apple silicon and Intel downloads, and version 3.0.0 for Apple silicon is Developer ID-signed and notarized. A built-in updater installs new versions.

Paste also keeps a searchable clipboard history with pinboards, and syncs it through a private iCloud across Mac, iPhone and iPad. Buffer has no cloud component and runs only on macOS, from the menu bar.
