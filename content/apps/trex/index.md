---
name: TRex
summary: "Copies text from any area of the screen to the clipboard, recognized with on-device OCR."
category: Utilities
tags:
  - ocr
  - text-extraction
  - screen-capture
repository: https://github.com/amebalabs/TRex
website: https://github.com/amebalabs/TRex
license: MIT
licenseUrl: https://github.com/amebalabs/TRex/blob/main/LICENSE
download: https://github.com/amebalabs/TRex/releases
freeDownload: true
homebrew: "trex"
featured: false
added: 2026-10-17
verified: "2026-11-08"
sources:
  - https://github.com/amebalabs/TRex
  - https://github.com/amebalabs/TRex/blob/main/LICENSE
  - https://github.com/amebalabs/TRex/blob/main/.github/README.md
  - https://github.com/amebalabs/TRex/releases
  - https://github.com/amebalabs/TRex/releases/tag/v2.0.0
  - https://apps.apple.com/us/app/trex-easy-ocr/id1554515538
assets:
  - path: ./assets/icon.png
    source: https://github.com/amebalabs/TRex/blob/c4408b4012b80af00c2db234d88695b6138b4fc0/TRex/Resources/Assets.xcassets/AppIcon.appiconset/mac_256.png
    credit: TRex contributors
    license: MIT; upstream app artwork, trademark rights retained.
screenshots: []
icon: ./assets/icon.png
---

TRex reads text off anything on your screen and puts it on the clipboard. Start a capture from the menu bar or a shortcut you set, drag over the area as you would for a screenshot, and the recognized text is ready to paste. That covers a PDF whose text cannot be selected, a video or a shared screen in a call.

- TRex also reads QR codes and barcodes, and it can open a URL found in a QR code.
- Recognition language and a custom word list are set in preferences.
- A command-line tool ships inside the app bundle, and `trex://` URLs start a capture, a clipboard capture or the preferences window.
- Captured text can be passed to a Shortcut you choose.

Version 2.0 adds several modes. Multi-region capture takes up to 50 areas at once and merges the results. Watch mode keeps an eye on one region and captures again whenever it changes, sending the text to the clipboard, a file or notifications. A history window keeps earlier captures with thumbnails.

The GitHub download is a ZIP with an Apple silicon app that needs macOS 14 or later, signed with a Developer ID and notarized. The same app is sold on the Mac App Store.

Built-in recognition runs offline. The 2.0 release can also hand images to OpenAI, Anthropic, Ollama or Apple Intelligence for recognition or cleanup, and it falls back to the built-in engine without a connection. Table detection exports Markdown, CSV or plain text; it uses Apple's document recognition on macOS 26 or later and a language model on older systems.
