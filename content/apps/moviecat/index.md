---
name: "MovieCat"
summary: "Scans folders for movies and TV episodes, matches titles from file names and shows posters, ratings and summaries."
category: "Media"
tags:
  - video
  - metadata
  - files
  - cross-platform
repository: "https://github.com/FredrikBorgstrom/moviecat"
website: "https://moviecat.org"
license: "MIT"
licenseUrl: "https://github.com/FredrikBorgstrom/moviecat/blob/main/LICENSE"
download: "https://github.com/FredrikBorgstrom/moviecat/releases/latest/download/MovieCat-macos.zip"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/FredrikBorgstrom/moviecat"
  - "https://github.com/FredrikBorgstrom/moviecat/blob/main/LICENSE"
  - "https://github.com/FredrikBorgstrom/moviecat/releases/latest"
  - "https://moviecat.org"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/FredrikBorgstrom/moviecat/main/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png"
    credit: "Fredrik Borgström"
    license: "MIT; upstream app icon, trademarks retained"
---

MovieCat scans the folders you add for video files, works out each title from its file name, and shows a poster grid with IMDb ratings, years and summaries. You can filter movies from TV, fix a wrong match, add your own rating, and play a file or show it in its folder. Metadata comes from public sources such as IMDb, Cinemeta and TVmaze without an account; a free TMDB key is optional. It suits people with a local collection of movie and TV files.

The macOS download is a direct build that the README says is not signed, so it is not notarized either, and the first launch needs right-click, then Open, or `xattr -cr` on the app. The README does not state a minimum macOS version. The same code also builds for Windows and Linux, and the sandboxed Mac App Store build cannot search drives for movies automatically.
