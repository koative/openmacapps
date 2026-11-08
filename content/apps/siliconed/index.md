---
name: "Siliconed"
summary: "Free, open-source app for local text-to-image generation and image editing on Apple silicon Macs."
category: "AI"
tags:
  - local-ai
  - images
  - image-generation
repository: "https://github.com/gwenn-ha-dev/Siliconed"
website: "https://gwenn-ha-dev.github.io/Siliconed/"
license: "Apache-2.0"
licenseUrl: "https://github.com/gwenn-ha-dev/Siliconed/blob/main/LICENSE"
download: "https://github.com/gwenn-ha-dev/Siliconed/releases/latest"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
sources:
  - "https://github.com/gwenn-ha-dev/Siliconed"
  - "https://github.com/gwenn-ha-dev/Siliconed/blob/main/LICENSE"
  - "https://github.com/gwenn-ha-dev/Siliconed/releases"
  - "https://gwenn-ha-dev.github.io/Siliconed/"
assets:
  - path: ./assets/icon.png
    source: https://github.com/gwenn-ha-dev/Siliconed/releases/download/v0.20/Siliconed-0.20.dmg
    credit: Siliconed contributors
    license: Apache-2.0; upstream app icon, trademarks retained
icon: ./assets/icon.png
---

Siliconed generates images from a text prompt and edits existing images from a written instruction, running open-weight diffusion models natively in Swift and Metal on the Mac. No Python server or cloud service is involved, and it works offline once a model is installed. You choose models inside the app, and each model's own license is shown before its download starts. It can vary a prompt, seed or LoRA across a grid of renders, import LoRAs from Civitai or Hugging Face, and be driven from a terminal with the `silicontrol` command. It suits people who want to render images on their own hardware and check results against reference implementations.

It requires macOS 26 or later on Apple silicon (M1 or later). The README says a 16 GB Mac was the development and test machine, and that the app never exceeds a fixed memory budget. The models are large and download separately; the weights are not in the repository. Building from source requires Xcode 26, since the Command Line Tools alone cannot build the app. The README marks MOSS-Image support as beta. It does not say whether the build is notarized. The code is Apache-2.0 licensed.
