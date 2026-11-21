---
name: "mCASTING"
summary: "Casts AI voices for the characters of a game, video or voice-over, with a local voice library, cloning and an MCP server."
category: "AI"
tags: ["text-to-speech", "voice", "voice-cloning", "mcp", "local-ai", "game-development"]
repository: "https://github.com/starbudweiser/mCASTING"
website: "https://starbudweiser.github.io/wshowcase/#mCASTING"
license: "MIT"
licenseUrl: "https://github.com/starbudweiser/mCASTING/blob/main/LICENSE"
download: "https://github.com/starbudweiser/mCASTING/releases/latest"
macos: "15"
arch: apple-silicon
notarized: true
freeDownload: true
featured: false
added: "2026-11-21"
verified: "2026-11-21"
sources: ["https://github.com/starbudweiser/mCASTING", "https://github.com/starbudweiser/mCASTING/blob/main/LICENSE", "https://github.com/starbudweiser/mCASTING/releases/tag/v1.6.0", "https://github.com/starbudweiser/mCASTING/blob/main/README.md"]
screenshots: [{"src": "./assets/screenshot.png", "alt": "The mCASTING casting screen for a demo game project, with six characters on the left, the captain's delivery settings in the middle and voice cards with waveforms and Choose buttons on the right.", "source": "https://github.com/starbudweiser/mCASTING/blob/main/docs/screenshot.png", "credit": "mCASTING authors"}]
assets: [{"path": "./assets/screenshot.png", "source": "https://github.com/starbudweiser/mCASTING/blob/main/docs/screenshot.png", "credit": "mCASTING authors", "license": "MIT (mCASTING repository)"}, {"path": "./assets/icon.png", "source": "https://github.com/starbudweiser/mCASTING/blob/main/assets/icon-1024.png", "credit": "mCASTING authors", "license": "MIT; upstream app icon, trademarks retained"}]
icon: ./assets/icon.png
---

mCASTING is a casting tool for AI voices. A project, such as a game, a video or a voice-over, is a list of characters, each with a role, a few sample lines and a language. You listen to voices from the library, compare them side by side and pick one for each character. You can also set a delivery per character, such as tired, joyful or angry.

- The library holds about 600 voice recipes made with Qwen3-TTS VoiceDesign: men, women, children, animals and creatures, each with a French and an English sample. You can filter it by gender, age, tone and language.
- Cloning turns a 5 to 15 second excerpt of an audio file or a web link into a new library voice, after it is transcribed. Only clone voices you have the right to use.
- Voices can also come from an OpenAI-compatible speech server on the network, or from an ElevenLabs account. ElevenLabs keys stay in the Keychain, and each paid line shows its estimated credits and waits for confirmation.
- The finished casting is written as a `casting.json` file in the project folder, with each voice's recipe or clone reference, so a script or an agent can generate the lines.

A bundled MCP server, `mcasting-mcp`, lets an agent import an existing project, add characters, search and preview voices, and write the casting. Local generation runs on the Mac. The app installs its own Python engine (uv and mlx-audio) and downloads the models you choose from Hugging Face. Its interface is in French, English, Spanish and Italian, and it checks GitHub releases for updates. The release is built for Apple silicon, requires macOS 15, and is Developer ID signed and notarized.
