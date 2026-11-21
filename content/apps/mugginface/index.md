---
name: "mUGGINFACE"
summary: "Ranks Hugging Face models by how well they fit your Mac's chip, memory and disk, and watches for new ones daily."
category: "AI"
tags: ["language-models", "downloads", "agents", "monitoring", "notifications"]
repository: "https://github.com/starbudweiser/mUGGINFACE"
website: "https://starbudweiser.github.io/wshowcase/#mUGGINFACE"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mUGGINFACE/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mUGGINFACE/releases/latest"
macos: "15"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mUGGINFACE", "https://github.com/starbudweiser/mUGGINFACE/blob/main/LICENSE", "https://github.com/starbudweiser/mUGGINFACE/releases/tag/v1.0.13", "https://github.com/starbudweiser/mUGGINFACE/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mUGGINFACE recommendations list for video models: domain buttons, the detected Mac's chip, memory and free disk, and each model with its size, memory need and score.", "source": "https://github.com/starbudweiser/mUGGINFACE/blob/main/docs/screenshot.png", "credit": "mUGGINFACE authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mUGGINFACE/blob/main/docs/screenshot.png", "credit": "mUGGINFACE authors", "license": "MIT (mUGGINFACE repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mUGGINFACE/blob/main/assets/icon-1024.png", "credit": "mUGGINFACE authors", "license": "MIT (mUGGINFACE repository)"}]
icon: ./assets/icon.png
---

mUGGINFACE reads the Hugging Face catalogue and ranks the models that suit your Mac. You choose domains such as text, code, image, video, audio, vision, embeddings and translation. The app detects the chip, memory and free disk, then gives each model a score that weighs estimated performance against how light it is for that hardware. A label marks each model as smooth, workable, at the limit or too heavy. The scores are estimates built from size, popularity, trend and freshness, not benchmarks.

The list is refreshed once a day at an hour you set, and a notification reports models that are new or have entered the ranking. You can filter by size, license and format, keep favorites and open a model's Hugging Face page.

A model can be downloaded by the app itself, with pause and resume and a SHA-256 check of each file. Downloads use your Hugging Face token when you add one, kept in the Keychain. Alternatively, mUGGINFACE writes install instructions for an AI agent: the Claude Code command line, the Claude API with your own key, or a command you define. You read the prompt before it is sent.

The Audit pane finds models already on the Mac, in the Hugging Face cache, LM Studio, Ollama and folders you add. It compares them with the best candidates and keeps a dated history. An agent can write an analysis and an update plan, and running the plan backs files up first, with a one-click rollback.

The interface is in French, English, Spanish and Italian, and the app updates from GitHub releases. The release is built for Apple silicon, requires macOS 15, and is Developer ID signed and notarized.
