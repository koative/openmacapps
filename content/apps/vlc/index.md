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
sources: ["https://github.com/videolan/vlc", "https://github.com/videolan/vlc/blob/master/COPYING", "https://www.videolan.org/vlc/", "https://www.videolan.org/vlc/download-macosx.html", "https://www.videolan.org/vlc/features.html", "https://github.com/videolan/vlc/blob/master/README.md", "https://potplayer.tv/", "https://get.videolan.org/vlc/3.0.24/macosx/vlc-3.0.24-universal.dmg"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/videolan/vlc/master/share/icons/256x256/vlc.png", "credit": "VLC contributors", "license": "GPL-2.0; upstream project asset, trademarks retained"}]
---

VLC plays local video and audio files, discs, webcams, capture devices and network streams. Its own built-in codecs decode the media, so you never install a codec pack.

- Containers such as MKV, MP4, MOV, AVI, WMV, FLV, MXF and MPEG transport streams, plus audio formats including FLAC, AAC, WAV and AC3.
- Subtitle files in SubRip, SubViewer, SSA, SAMI, VobSub and other formats, with synchronisation to fix their timing.
- Video and audio filters applied during playback.
- DVD and audio CD playback alongside streaming protocols.

VideoLAN describes the player as completely free, with no spyware, no ads and no user tracking.

There are separate builds for Apple silicon and Intel Macs, plus a Universal build that runs on both. The minimum is Mac OS X 10.7.5, on any Mac with a 64-bit Intel processor or an Apple silicon chip. PowerPC and 32-bit Intel Macs need older releases. VideoLAN signs the Universal disk image with its Developer ID, and Apple notarizes it.

VLC is released under the GPLv2 or later, which in practice becomes GPLv3 on some platforms because of its dependencies. The libVLC engine is LGPLv2 or later, so other applications can embed it.

PotPlayer also plays video files with subtitles. Its official site, though, offers it only for Windows.
