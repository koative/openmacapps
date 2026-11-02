---
name: "Radix"
summary: "A native disk space analyzer with sunburst and treemap views, scan comparisons and a review pile before files go to the Trash."
category: "Utilities"
tags:
  - disk-usage
  - storage
  - visualization
  - cleanup
  - native
alternativeTo:
  - daisydisk
repository: https://github.com/colinvkim/Radix
website: https://tryradix.app
license: "MIT"
licenseUrl: https://github.com/colinvkim/Radix/blob/main/LICENSE
download: https://github.com/colinvkim/Radix/releases/latest
homebrew: "radix"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/colinvkim/Radix
  - https://github.com/colinvkim/Radix/blob/main/LICENSE
  - https://github.com/colinvkim/Radix/releases
  - https://tryradix.app
assets:
  - path: ./assets/icon.png
    source: https://github.com/colinvkim/Radix/blob/main/icon.png
    credit: "Colin Kim"
    license: "MIT; upstream project asset, trademarks retained"
---

Radix scans a folder or volume and draws where the space went, either as a sunburst or a treemap. You can drill into folders, search the whole scan, filter by size or kind, preview files with Quick Look, and see an inspector with the largest children of any item.

Items you want to remove go onto a Discard Pile first, so you can review them together before moving them to the Trash. Scans can be saved as snapshot files and compared later to see what grew, shrank, appeared or disappeared. Follow-up scans reuse earlier results where they can, and APFS clones are accounted for rather than counted twice.

Radix needs macOS 14 or later and updates itself through Sparkle. Some folders are only readable after you grant Full Disk Access; the app tells you when files were skipped for that reason.
