---
name: "Upscayl"
summary: "Enlarges low-resolution images with AI upscaling models that run on your own GPU."
category: "AI"
tags: ["image-upscaling", "images", "local-ai"]
repository: "https://github.com/upscayl/upscayl"
website: "https://upscayl.org"
license: "AGPL-3.0"
licenseUrl: "https://github.com/upscayl/upscayl/blob/main/LICENSE"
download: "https://upscayl.org/download"
freeDownload: true
homebrew: "upscayl"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/upscayl/upscayl", "https://github.com/upscayl/upscayl/blob/main/LICENSE", "https://upscayl.org/download", "https://raw.githubusercontent.com/upscayl/upscayl/main/README.md", "https://upscayl.org/", "https://github.com/upscayl/upscayl/releases/tag/v2.15.0"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/upscayl/upscayl/blob/main/build/icon.png", "credit": "Upscayl contributors", "license": "AGPL-3.0; project trademarks retained"}]
icon: "./assets/icon.png"
---

Upscayl enlarges low-resolution or pixelated images on your own computer. You open a picture, or several at once in batch mode, choose a model and an output size, and Upscayl saves an enlarged copy.

The work runs on the GPU through Real-ESRGAN and the NCNN Vulkan backend, and the desktop app needs no internet connection. Several models ship with the app, including High Fidelity; the README also credits the Remacri, Ultrasharp and Ultramix Balanced models. You can add more from the project's custom-models collection or convert your own. A GPU ID setting picks the graphics card when a machine has more than one.

Upscayl needs a Vulkan-compatible GPU, and the README warns that many integrated graphics chips do not work. The macOS build requires macOS 12 or later, and version 2.15.0 is offered as one Mac DMG and one ZIP. For scripts, the same engine is available on its own as the `upscayl-ncnn` command-line tool.

The desktop app and its backend are under the GNU AGPL 3.0 and free to download. Upscayl Cloud is a separate web service from the same team with its own pricing, and a Mac App Store version is sold as well.

Upscaling guesses at detail, so it helps with small or blocky images. It cannot fix a photo that is out of focus or badly blurred.
