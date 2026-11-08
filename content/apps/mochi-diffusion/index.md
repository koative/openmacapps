---
name: "Mochi Diffusion"
summary: "Generates images on your Mac, offline, with Core ML Stable Diffusion and FLUX.2 Klein models."
category: "AI"
tags:
  - image-generation
  - stable-diffusion
  - local-ai
  - offline
repository: https://github.com/MochiDiffusion/MochiDiffusion
website: https://github.com/MochiDiffusion/MochiDiffusion
license: "GPL-3.0"
licenseUrl: https://github.com/MochiDiffusion/MochiDiffusion/blob/main/LICENSE
download: https://github.com/MochiDiffusion/MochiDiffusion/releases
homebrew: "mochi-diffusion"
freeDownload: true
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
  - https://github.com/MochiDiffusion/MochiDiffusion
  - https://github.com/MochiDiffusion/MochiDiffusion/blob/main/LICENSE
  - https://github.com/MochiDiffusion/MochiDiffusion/releases
  - https://formulae.brew.sh/cask/mochi-diffusion
  - https://raw.githubusercontent.com/MochiDiffusion/MochiDiffusion/main/README.md
  - https://github.com/MochiDiffusion/MochiDiffusion/releases/tag/v6.3
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/MochiDiffusion/MochiDiffusion/main/Mochi%20Diffusion/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon256.png
    credit: "Mochi Diffusion contributors"
    license: "GPL-3.0 (repository license); upstream project asset"
---

Mochi Diffusion turns a text prompt into images on your Mac, with the models stored by default in a folder in your home directory. You pick a model, type a prompt, and the result appears in the app's gallery without anything going to a server.

Three model families work, each set up differently:

- Stable Diffusion models converted to Core ML run through Apple's implementation. You download converted models or convert them yourself, and each one generates a single image size fixed at conversion.
- These Core ML models can start from an existing image or use ControlNet. You choose between CPU and Neural Engine or CPU and GPU, and the model version has to match that choice.
- FLUX.2 Klein models need no conversion and accept up to four input images, which the app shrinks when the pipeline needs smaller ones.
- Z-Image Turbo runs text to image only. Its recommended full-precision download is about 32 GB, and it can fail on Macs with less than 24 GB of memory.

Mochi Diffusion needs an Apple silicon Mac and macOS 15.6 or later. The 6.3 DMG holds an Apple silicon app, Developer ID-signed and notarized.

The first run of a Core ML model can take up to two minutes while the Neural Engine compiles it. Saved PNGs keep their generation settings in a form that AUTOMATIC1111-compatible tools and Civitai read. The developer says the app collects no data or telemetry.
