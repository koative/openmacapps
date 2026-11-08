---
name: "VLC"
summary: "Plays video and audio files, discs and network streams with its own built-in codecs."
category: "Media"
tags: ["video", "audio", "cross-platform", "video-player"]
alternativeTo: ["potplayer"]
repository: "https://github.com/videolan/vlc"
website: "https://www.videolan.org/vlc/"
license: "GPL-2.0-or-later"
licenseUrl: "https://github.com/videolan/vlc/blob/master/COPYING"
download: "https://www.videolan.org/vlc/download-macosx.html"
freeDownload: true
homebrew: "vlc"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/videolan/vlc", "https://github.com/videolan/vlc/blob/master/COPYING", "https://www.videolan.org/vlc/", "https://www.videolan.org/vlc/download-macosx.html", "https://www.videolan.org/vlc/features.html", "https://github.com/videolan/vlc/blob/master/README.md"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/videolan/vlc/master/share/icons/256x256/vlc.png", "credit": "VLC contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

VLC plays local video and audio files, discs, webcams, capture devices and network streams from one window. Drag a file onto it or open a stream URL, and it decodes the media with its own built-in codecs, so no separate codec packs are needed.

- Containers such as MKV, MP4, MOV, AVI, WMV, FLV, MXF and MPEG transport streams, plus audio formats including FLAC, AAC, WAV and AC3.
- Subtitle files in SubRip, SubViewer, SSA, SAMI, VobSub and other formats, with subtitle synchronisation to fix timing.
- Video and audio filters applied during playback.
- DVD and audio CD playback alongside streaming protocols.

VideoLAN states that the player contains no spyware, no ads and no user tracking. It costs nothing and needs no account.

PotPlayer covers the same job on Windows: a single player that opens almost any file and exposes many playback settings. PotPlayer has no Mac version, while VLC ships for macOS with the same broad format support and a Mac-specific interface.

The download page offers separate builds for Apple silicon and Intel Macs, as well as a Universal build that runs on both. VideoLAN lists Mac OS X 10.7.5 as the minimum and supports any Mac with a 64-bit Intel processor or an Apple silicon chip. PowerPC and 32-bit Intel Macs need the older releases linked on that page.

The VLC player is licensed under GPL-2.0-or-later. Its libVLC engine uses LGPL-2.1-or-later, which lets other applications embed it.
