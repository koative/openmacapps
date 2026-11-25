---
name: "FormRef"
summary: "Reference boards for images, notes and links on a free canvas, with value studies, palettes and image comparison."
category: "Design"
tags:
  - images
  - reference
  - moodboard
  - drawing
  - mcp
alternativeTo:
  - pureref
repository: "https://github.com/nodemode-dev/formref"
website: "https://formai.studio/formref/"
license: "Apache-2.0"
licenseUrl: "https://github.com/nodemode-dev/formref/blob/main/LICENSE"
download: "https://github.com/nodemode-dev/formref/releases/latest"
macos: "12"
arch: both
notarized: true
freeDownload: true
featured: false
added: "2026-11-25"
verified: "2026-11-25"
screenshots:
  - src: ./assets/board.webp
    alt: A FormRef board of sunset photographs and brick, marble, plank and velvet textures, with coloured notes linked by orange arrows and the board list in the sidebar.
    source: https://github.com/nodemode-dev/formref/blob/5799bc99d3c8622ebe2a767faadc272b72d56ff6/docs/images/formref-hero.webp
    credit: FormRef contributors
  - src: ./assets/value-study.webp
    alt: The same FormRef board with one harbour photograph reduced to three grey values by Value Study, and its position, size and blending settings in the inspector.
    source: https://github.com/nodemode-dev/formref/blob/5799bc99d3c8622ebe2a767faadc272b72d56ff6/docs/images/formref-value-study.webp
    credit: FormRef contributors
sources:
  - "https://github.com/nodemode-dev/formref"
  - "https://github.com/nodemode-dev/formref/blob/main/LICENSE"
  - "https://github.com/nodemode-dev/formref/releases/tag/v0.46.1"
  - "https://formai.studio/formref/"
assets:
  - path: ./assets/board.webp
    source: https://github.com/nodemode-dev/formref/blob/5799bc99d3c8622ebe2a767faadc272b72d56ff6/docs/images/formref-hero.webp
    credit: FormRef contributors
    license: "Apache-2.0; upstream project asset, trademarks retained"
  - path: ./assets/value-study.webp
    source: https://github.com/nodemode-dev/formref/blob/5799bc99d3c8622ebe2a767faadc272b72d56ff6/docs/images/formref-value-study.webp
    credit: FormRef contributors
    license: "Apache-2.0; upstream project asset, trademarks retained"
  - path: ./assets/icon.png
    source: https://github.com/nodemode-dev/formref/blob/5799bc99d3c8622ebe2a767faadc272b72d56ff6/assets/app-icon/formref-256.png
    credit: FormRef contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

FormRef is a reference board in the style of PureRef. Pictures, notes, tasks, tables, links and nested boards sit anywhere on an endless canvas. You can group them, put them in columns and draw solid, dashed or curved connections between them.

Study tools are built for drawing from reference:

- Value Study reduces a picture to between two and eight grey values, and a drawing grid sits on top of it.
- Extract Palette adds a picture's main colours to the board as swatches with hex and RGB values.
- Two pictures can be compared side by side, as an onion skin, with a swipe divider or as a difference.
- Timed Practice shows pictures one at a time for gesture drawing, with a log of every session.

It opens images, GIFs, PDF pages, video, audio and BeeRef boards. Boards export as PNG, SVG, PDF, Markdown or JSON, or as a ZIP of the original files.

Boards and files stay on your Mac, and no account is needed. The app runs a local service on this machine only, which also serves an MCP server with 47 tools for agents such as Claude Code, Codex and Cursor. Outside agents are refused until you allow them in the app. An agent panel can run one of them on the open board.

Version 0.46.1 needs macOS 12 or later and has separate downloads for Apple silicon and Intel, signed with a Developer ID and notarized.
