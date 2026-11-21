---
name: "mFRAMES"
summary: "Runs live review sessions with a client on video, images and PDFs, with pins, threads and an encrypted peer-to-peer link."
category: "Media"
tags: ["annotation", "collaboration", "video", "peer-to-peer", "encryption", "self-hosted"]
repository: "https://github.com/starbudweiser/mFRAMES"
website: "https://github.com/starbudweiser/mFRAMES"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mFRAMES/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mFRAMES/releases/latest"
macos: "14"
arch: both
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mFRAMES", "https://github.com/starbudweiser/mFRAMES/blob/main/LICENSE", "https://github.com/starbudweiser/mFRAMES/releases/tag/v1.4.2", "https://github.com/starbudweiser/mFRAMES/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "An A2 poster under review in mFRAMES: numbered pins and a zone on the image, projects and versions in the sidebar, and the feedback thread with open and resolved notes.", "source": "https://github.com/starbudweiser/mFRAMES/blob/main/docs/screenshot.png", "credit": "mFRAMES authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mFRAMES/blob/main/docs/screenshot.png", "credit": "mFRAMES authors", "license": "MIT (mFRAMES repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mFRAMES/blob/main/assets/mFRAMES_1024.png", "credit": "mFRAMES authors", "license": "MIT (mFRAMES repository)"}]
icon: ./assets/icon.png
---

mFRAMES runs a live review session between you and a client on a video, an image, a PDF or a layout. You add the media on your Mac and invite the client with a code, a QR code or a link. Both of you then place pins and zones, reply in threads and mark each note open or resolved. A Follow me mode keeps the client on the frame or page you are showing.

The client needs nothing installed. The link opens a page served by mFRAMES itself, and the session secret stays in the part of the link that browsers never send to a server. Notes travel peer to peer, encrypted end to end with AES-GCM. The client receives proxies, 720p H.264 for video and JPEG up to 2560 px for images, while the originals stay on your Mac. Photoshop and Illustrator files are shown as a flattened preview, and PDF pages cannot take pins in the browser client.

Each side writes to an encrypted local journal first. When a dropped connection comes back, the two journals merge without losing or duplicating notes. The link can run over the local network, over a direct address found with UPnP (off by default) or STUN, or through an HTTP or SOCKS5 proxy. A relay you host yourself with Docker or Python is another route, and it only sees encrypted frames.

For editors, scripts for DaVinci Resolve import the notes as timeline markers, and an After Effects script does the same in a composition. Notes also export as marker files such as EDL and CSV. The interface is in French, English, Spanish and Italian, and the app updates itself from GitHub releases. The release is a universal build for Apple silicon and Intel Macs, requires macOS 14, and is Developer ID signed and notarized.
