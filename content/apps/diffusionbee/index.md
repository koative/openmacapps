---
name: "DiffusionBee"
summary: "Generates images from text prompts on your Mac with Stable Diffusion models that run locally."
category: "AI"
tags: ["image-generation", "local-ai", "stable-diffusion"]
repository: "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui"
website: "https://diffusionbee.com"
license: "AGPL-3.0"
licenseUrl: "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/blob/master/LICENSE"
download: "https://diffusionbee.com/download"
freeDownload: true
homebrew: "diffusionbee"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/divamgupta/diffusionbee-stable-diffusion-ui", "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/blob/master/LICENSE", "https://diffusionbee.com/download", "https://raw.githubusercontent.com/divamgupta/diffusionbee-stable-diffusion-ui/master/README.md", "https://diffusionbee.com", "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/releases/tag/2.5.3"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/divamgupta/diffusionbee-stable-diffusion-ui/blob/master/electron_app/build/Icon-256.png", "credit": "DiffusionBee contributors", "license": "AGPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

DiffusionBee turns a text prompt into an image on your own Mac. You type what you want to see, click Generate, and the image is computed locally by a Stable Diffusion model rather than on a remote server.

- Image to image starts from a picture you supply and reworks it according to the prompt, optionally inside a mask.
- Inpainting and outpainting change a selected region or extend the picture past its edges.
- Upscaling makes finished images larger and sharper.
- ControlNet, LoRA, negative prompts and further prompt options give finer control over the result.
- A history view keeps earlier generations.

Models are downloaded from inside the app. Supported families are SD 1.x, SD 2.x and SD XL, plus inpainting models. The developer says nothing leaves the Mac apart from those weight downloads and images you choose to upload.

Model weights carry their own license, separate from the app's AGPL-3.0. The Stable Diffusion terms, the CreativeML OpenRAIL-M license, also govern the images you make, and downloading the app means agreeing to comply with them.

There are separate builds for Apple silicon and Intel Macs. In version 2.5.3, the most recent GitHub release from August 2024, the Apple silicon build is notarized and needs macOS 12.4 or later, and the Intel build needs macOS 13.1 or later.
