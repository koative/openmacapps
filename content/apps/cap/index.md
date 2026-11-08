---
name: Cap
summary: Records your screen, camera and microphone, then shares a link or opens the video in an editor.
category: Media
tags:
  - screen-recording
  - video-editing
  - sharing
  - screen-recorder
alternativeTo:
  - screenflow
  - camtasia
  - screen-studio
  - loom
repository: https://github.com/CapSoftware/Cap
website: https://cap.so
license: AGPL-3.0
licenseUrl: https://github.com/CapSoftware/Cap/blob/main/LICENSE
download: https://cap.so/download
freeDownload: true
homebrew: "cap"
icon: ./assets/icon.png
screenshots:
  - src: ./assets/editor.webp
    alt: Cap video editor with a recording preview, background settings, and zoom
      tracks on the timeline.
    source: https://github.com/CapSoftware/Cap/blob/main/apps/web/public/illustrations/app.webp
    credit: Cap Software, Inc.
sources:
  - https://github.com/CapSoftware/Cap
  - https://github.com/CapSoftware/Cap/blob/main/LICENSE
  - https://raw.githubusercontent.com/CapSoftware/Cap/main/README.md
  - https://cap.so/download
  - https://cap.so/pricing
assets:
  - path: ./assets/icon.png
    source: https://github.com/CapSoftware/Cap/blob/main/apps/desktop/src-tauri/icons/128x128%402x.png
    credit: Cap Software, Inc.
    license: AGPL-3.0; trademarks retained
  - path: ./assets/editor.webp
    source: https://github.com/CapSoftware/Cap/blob/main/apps/web/public/illustrations/app.webp
    credit: Cap Software, Inc.
    license: AGPL-3.0; trademarks retained
featured: false
added: "2026-10-17"
verified: "2026-11-08"
---

Cap records your screen, camera and microphone, then lets you either share a link straight away or polish the video in an editor first. You pick between two modes before you start.

In Instant Mode the recording uploads while you talk, so a share link is ready the moment you press stop. Studio Mode keeps the recording on the Mac and opens it in the editor, where you trim, add zooms, set a background, generate captions and choose export settings. Shared videos can carry comments, reactions, transcripts and viewer analytics, and AI features can write titles, summaries and chapters.

Cap Pro is the hosted cloud plan. Cap Desktop can instead upload to an S3-compatible bucket you own or point at a self-hosted Cap server, which runs under Docker Compose. The free plan covers personal use; commercial use needs a Desktop License or Cap Pro. The getting-started steps include signing in or creating an account.

Loom users can import their existing videos into Cap. The practical difference is where recordings live, since Cap can keep them on the Mac, in your own storage or on a server you run.

The download page offers separate builds for Apple silicon and Intel and recommends macOS 13.1 or later. The Apple silicon DMG is signed with a Developer ID and notarized. The app code is AGPL-3.0, with the camera and screen-capture crates under MIT.
