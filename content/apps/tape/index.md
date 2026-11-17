---
name: "Tape"
summary: "Shows your stocks, ETFs, indices and crypto in the empty corner beside the Dock, each name in its logo's colour."
category: "Utilities"
tags:
  - finance
  - stocks
  - crypto
  - dock
  - ticker
repository: "https://github.com/Yvsleyen00941/Tape"
website: "https://yorben.me/tape/"
license: "MIT"
licenseUrl: "https://github.com/Yvsleyen00941/Tape/blob/main/LICENSE"
download: "https://github.com/Yvsleyen00941/Tape/releases/latest"
macos: "26"
arch: both
notarized: false
homebrew: "yvsleyen00941/tap/tape"
freeDownload: true
featured: false
added: "2026-11-15"
verified: "2026-11-15"
icon: "./assets/icon.png"
sources:
  - "https://github.com/Yvsleyen00941/Tape"
  - "https://github.com/Yvsleyen00941/Tape/blob/main/LICENSE"
  - "https://github.com/Yvsleyen00941/Tape/releases"
  - "https://yorben.me/tape/"
  - "https://github.com/Yvsleyen00941/homebrew-tap/blob/main/Casks/tape.rb"
assets:
  - path: ./assets/icon.png
    source: https://github.com/Yvsleyen00941/Tape/blob/main/icon.png
    credit: Yorben Vander Sleyen
    license: MIT; upstream app icon, trademarks retained
---

Tape shows your stocks, ETFs, indices and crypto in the empty corner beside the Dock. Each name is drawn in its logo's colour with the price and the day's move in mint or coral, and there is no bar or background behind them. Hover to stop the tape, or click a listing for a card with the logo, the full price and the move.

Six designs change the whole look and switch live from the menu:

- Liquid, a rail of glass capsules beside the Dock
- LED, a dot-matrix face on smoked black
- Paper, printed ticker tape with serif names
- Aura, Focus and Classic, from floating type to one large listing at a time

Tape follows the Dock as it grows, hides or moves to a side, and stays off full-screen apps. With Accessibility access it reads the Dock's exact frame; without it, it works the Dock out from the Dock's own preferences.

Quotes come from Yahoo Finance's unofficial endpoints, so prices can be up to 15 minutes late and the source can change. Brand colours for names outside its own table come from Parqet and Financial Modeling Prep logos.

It needs macOS 26 or later on Apple silicon or Intel. The build is signed with a Developer ID but not notarized, so the first launch has to be allowed in System Settings under Privacy & Security. It also installs from the developer's Homebrew tap.
