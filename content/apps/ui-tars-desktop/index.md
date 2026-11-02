---
name: "UI-TARS Desktop"
summary: "ByteDance's desktop GUI agent that operates your Mac or a browser from plain-language instructions using a vision model."
category: "AI"
tags:
  - agents
  - automation
  - cross-platform
repository: https://github.com/bytedance/UI-TARS-desktop
website: https://github.com/bytedance/UI-TARS-desktop
license: "Apache-2.0"
licenseUrl: https://github.com/bytedance/UI-TARS-desktop/blob/main/LICENSE
download: https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.2.4
homebrew: "ui-tars"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-02"
icon: ./assets/icon.png
sources:
  - https://github.com/bytedance/UI-TARS-desktop
  - https://github.com/bytedance/UI-TARS-desktop/blob/main/LICENSE
  - https://github.com/bytedance/UI-TARS-desktop/releases/tag/v0.2.4
  - https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md
assets:
  - path: ./assets/icon.png
    source: https://github.com/bytedance/UI-TARS-desktop/blob/main/apps/ui-tars/resources/icon.icns
    credit: "ByteDance and UI-TARS Desktop contributors"
    license: "Apache-2.0; upstream project asset, trademarks retained"
---

UI-TARS Desktop is a computer-use agent. You type an instruction, the app takes screenshots, a vision-language model works out where to click and what to type, and the app moves the mouse and keyboard to carry it out. It can drive the local desktop or a Chrome, Edge or Firefox browser.

The app has no model built in. You point it at a UI-TARS-1.5 endpoint, for example one deployed on Hugging Face, or at the Doubao-1.5-UI-TARS model on ByteDance's Volcano Engine, and enter the base URL, API key and model name in Settings. Screenshots of your screen are sent to that endpoint. The free hosted remote computer and browser operators ended in August 2025.

On macOS it needs Accessibility and Screen Recording permissions. The project supports single-monitor setups only and warns that some tasks can fail with several displays. Apple silicon and Intel builds are available. The repository's newer releases are for the separate Agent TARS command-line tool; the most recent desktop app release is version 0.2.4 from August 2025.
