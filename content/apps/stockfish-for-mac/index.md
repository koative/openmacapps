---
name: "Stockfish for Mac"
summary: "A chess board for two-player games and position analysis, powered by the open-source Stockfish engine."
category: "Games"
tags:
  - chess
  - analysis
repository: https://github.com/daylen/stockfish-mac
website: https://stockfishchess.org/mac/
license: "GPL-3.0"
licenseUrl: https://github.com/daylen/stockfish-mac/blob/master/license.txt
download: https://apps.apple.com/us/app/stockfish-chess/id801463932?mt=12
freeDownload: true
featured: false
added: '2026-10-17'
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/daylen/stockfish-mac
  - https://github.com/daylen/stockfish-mac/blob/master/license.txt
  - https://apps.apple.com/us/app/stockfish-chess/id801463932?mt=12
  - https://raw.githubusercontent.com/daylen/stockfish-mac/master/README.md
  - https://github.com/daylen/stockfish-mac/releases/tag/v2.4.1
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/daylen/stockfish-mac/master/Stockfish/Images.xcassets/AppIcon.appiconset/icon_256x256.png
    credit: "Daylen Yang and Stockfish for Mac contributors"
    license: "GPL-3.0; upstream app icon, trademarks retained"
---

Stockfish for Mac puts a chess board in front of the Stockfish engine. Two people can play a game on it, or you can load a game or position and let the engine assess it, with an arrow for the best move and several candidate lines shown at once (MultiPV).

- It opens, reads and saves PGN files that hold many games.
- FEN strings can be copied and pasted to set up a position.
- Any UCI chess engine can be used in place of Stockfish, and some UCI options are exposed.
- Moves can be undone and redone, and the board highlights legal moves.

Stockfish for Mac requires macOS 12 Monterey or later. It is a free download on the Mac App Store, while the GitHub repository holds the GPL-3.0 source and the release notes, with no build attached. The README invites pull requests from anyone who improves it.

Version 2.4.1 from September 2026 bundles Stockfish 19. It fixed how PGN comments are kept, navigation and export in very long games and repetition detection, and it lets engine preferences change while analysis runs. Part of the code comes from Stockfish for iOS, the app by Tord Romstad.
