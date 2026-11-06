---
name: "Rookie"
summary: "Local chess coach: Stockfish analyzes each move and a model running in Ollama explains it while you play."
category: "Games"
tags:
  - chess
  - games
  - local-ai
repository: "https://github.com/jordanpainter/rookie"
website: "https://github.com/jordanpainter/rookie"
license: "GPL-3.0-only"
licenseUrl: "https://github.com/jordanpainter/rookie/blob/main/LICENSE"
download: "https://github.com/jordanpainter/rookie/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/jordanpainter/rookie"
  - "https://github.com/jordanpainter/rookie/blob/main/LICENSE"
  - "https://github.com/jordanpainter/rookie/releases/latest"
assets:
  - path: "./assets/icon.png"
    source: "https://github.com/jordanpainter/rookie/releases/download/v0.1.0/Rookie.zip"
    credit: "Jordan Painter"
    license: "GPL-3.0-only; upstream app icon, trademarks retained"
---

Rookie is a chess app with a coach named Chichi. Stockfish works out the moves and threats, and a language model running locally through Ollama comments on them, stops you before a move that would drop a piece, and answers plain-English questions about the board. You can play Stockfish at eight levels, step through over 3,300 named openings, link a chess.com account to review your own games, and drill puzzles built from your mistakes.

It is for people learning chess who want feedback during the game rather than a report afterward, and who would rather not send their games to a cloud service.

Requires an Apple silicon Mac on macOS 14 or later, with about 10 GB of free space. Install Ollama first; on first launch Rookie offers to download a model of about 8 GB. The app is not notarized and not signed with a developer certificate, so the first open needs right-click, then Open, or Open Anyway in System Settings. The author tested it with `gemma4:12b`, and smaller models give a blunter coach. Games stay on the Mac, but a chess.com review or a Lichess opening lookup sends the data you asked for online.
