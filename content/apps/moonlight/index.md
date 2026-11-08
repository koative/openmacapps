---
name: "Moonlight"
summary: "Plays games streamed from your PC running a host such as Sunshine, with hardware video decoding and gamepad support."
category: "Games"
tags: ["streaming", "gaming", "controllers", "remote-desktop", "cross-platform"]
repository: "https://github.com/moonlight-stream/moonlight-qt"
website: "https://moonlight-stream.org"
license: "GPL-3.0"
licenseUrl: "https://github.com/moonlight-stream/moonlight-qt/blob/master/LICENSE"
download: "https://github.com/moonlight-stream/moonlight-qt/releases"
freeDownload: true
homebrew: "moonlight"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/moonlight-stream/moonlight-qt", "https://github.com/moonlight-stream/moonlight-qt/blob/master/LICENSE", "https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/README.md", "https://github.com/moonlight-stream/moonlight-qt/releases", "https://github.com/moonlight-stream/moonlight-qt/releases/tag/v6.2.0", "https://moonlight-stream.org"]
icon: "./assets/icon.png"
assets: [{"path": "./assets/icon.png", "source": "https://raw.githubusercontent.com/moonlight-stream/moonlight-qt/master/app/moonlight.icns", "credit": "Moonlight Game Streaming Project contributors", "license": "GPL-3.0; upstream project asset, trademarks retained"}]
screenshots: []
---

Moonlight puts the games on your gaming PC onto your Mac screen. The PC runs a host, with Sunshine being the one the project recommends, and Moonlight shows the game or the whole desktop while your input goes back. You can play from another room, or from far away if you set up the host for remote access.

- Hardware-accelerated decoding of H.264, HEVC and AV1. AV1 needs Sunshine and a host GPU that supports it.
- HDR streaming and 7.1 surround sound.
- YUV 4:4:4 colour and 10-point multitouch with Sunshine.
- Gamepads with force feedback and motion controls, up to 16 players.
- Pointer capture for games, or direct mouse control for remote desktop work.
- System shortcuts such as Alt-Tab passed through to the host.

With a capable setup Moonlight streams up to 4K with HDR and up to 120 frames per second. Turning off V-Sync lowers latency further. NVIDIA's GeForce Experience also works as a host, though NVIDIA is discontinuing its streaming feature.

The same project makes clients for iPhone, iPad, Apple TV, Android and more. Moonlight is run by its community, with no ads, paid tiers or subscriptions.

Version 6.2.0 is a DMG with a Universal app for Apple silicon and Intel, Developer ID-signed and notarized. It needs macOS 13 or later.
