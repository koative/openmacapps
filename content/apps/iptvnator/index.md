---
name: "IPTVnator"
summary: "An IPTV player for M3U playlists and Xtream Codes or Stalker portals, with a programme guide and favourites."
category: "Media"
tags:
  - video
  - streaming
  - cross-platform
  - video-player
repository: https://github.com/4gray/iptvnator
website: https://4gray.github.io/iptvnator/
license: "MIT"
licenseUrl: https://github.com/4gray/iptvnator/blob/master/LICENSE.md
download: https://github.com/4gray/iptvnator/releases
freeDownload: true
homebrew: "iptvnator"
featured: false
added: '2026-10-17'
verified: '2026-10-17'
icon: ./assets/icon.png
screenshots:
  - src: ./assets/dashboard-dark.webp
    alt: IPTVnator's dark dashboard with Continue Watching and favourite live channels.
    source: https://github.com/4gray/iptvnator/blob/52462418615b4e928db49109884dee22cfc3292d/apps/website/public/screenshots/dashboard-cinematic.webp
    credit: "4gray and IPTVnator contributors"
  - src: ./assets/series-details.webp
    alt: A series detail page with season tabs, episode thumbnails and playback controls.
    source: https://github.com/4gray/iptvnator/blob/52462418615b4e928db49109884dee22cfc3292d/apps/website/public/screenshots/series-details-cinematic.webp
    credit: "4gray and IPTVnator contributors"
  - src: ./assets/settings-light.webp
    alt: IPTVnator's light settings page with theme, cover size and startup options.
    source: https://github.com/4gray/iptvnator/blob/dc4b33991d640fa353b698f316dbd863e44bfef4/apps/website/public/blog/v0-24/screenshots/settings-light.png
    credit: "4gray and IPTVnator contributors"
sources:
  - https://github.com/4gray/iptvnator
  - https://github.com/4gray/iptvnator/blob/master/LICENSE.md
  - https://github.com/4gray/iptvnator/releases
  - https://formulae.brew.sh/cask/iptvnator
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/4gray/iptvnator/master/apps/web/src/assets/icons/favicon.icns
    credit: "4gray and IPTVnator contributors"
    license: "MIT repository asset; trademarks retained"
  - path: ./assets/dashboard-dark.webp
    source: https://github.com/4gray/iptvnator/blob/52462418615b4e928db49109884dee22cfc3292d/apps/website/public/screenshots/dashboard-cinematic.webp
    credit: "4gray and IPTVnator contributors"
    license: MIT
  - path: ./assets/series-details.webp
    source: https://github.com/4gray/iptvnator/blob/52462418615b4e928db49109884dee22cfc3292d/apps/website/public/screenshots/series-details-cinematic.webp
    credit: "4gray and IPTVnator contributors"
    license: MIT
  - path: ./assets/settings-light.webp
    source: https://github.com/4gray/iptvnator/blob/dc4b33991d640fa353b698f316dbd863e44bfef4/apps/website/public/blog/v0-24/screenshots/settings-light.png
    credit: "4gray and IPTVnator contributors"
    license: MIT
---

IPTVnator plays IPTV sources that you bring yourself: M3U or M3U8 playlists from a file or URL, plus Xtream Codes and Stalker portal accounts. Channels are grouped and searchable, an XMLTV guide shows what is airing, and favourites and watch history are kept across playlists. Movies and series from portals get detail pages with resume positions and an optional download manager.

The project is a player only and supplies no channels or subscriptions; it warns that sites selling "IPTVnator" content are not affiliated with it. Streams play in a built-in HTML5 player or can be handed to mpv, VLC or IINA on macOS. Builds for macOS, Windows and Linux are published on GitHub.
