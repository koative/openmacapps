---
name: "Netron"
summary: "A viewer that draws neural network and machine learning model files as graphs you can inspect node by node."
category: "Developer tools"
tags:
  - machine-learning
  - models
  - visualization
  - inspection
  - cross-platform
repository: https://github.com/lutzroeder/netron
website: https://netron.app
license: "MIT"
licenseUrl: https://github.com/lutzroeder/netron/blob/main/LICENSE
download: https://github.com/lutzroeder/netron/releases/latest
homebrew: "netron"
freeDownload: true
featured: false
added: "2026-11-02"
verified: "2026-11-08"
icon: ./assets/icon.png
sources:
  - https://github.com/lutzroeder/netron
  - https://github.com/lutzroeder/netron/blob/main/LICENSE
  - https://github.com/lutzroeder/netron/releases
  - https://github.com/lutzroeder/netron/blob/main/source/desktop.mjs
  - https://raw.githubusercontent.com/lutzroeder/netron/main/README.md
  - https://raw.githubusercontent.com/lutzroeder/netron/main/source/desktop.mjs
  - https://raw.githubusercontent.com/lutzroeder/netron/main/source/view.js
  - https://netron.app
  - https://raw.githubusercontent.com/lutzroeder/netron/main/package.json
assets:
  - path: ./assets/icon.png
    source: https://raw.githubusercontent.com/lutzroeder/netron/main/publish/icon.icns
    credit: "Lutz Roeder"
    license: "MIT; upstream project asset, trademarks retained"
---

Netron opens a trained model file and draws its architecture as a graph of layers and operations. Click a node to see its attributes, inputs, outputs and tensor shapes. Weights can be inspected, and the graph can be exported as a PNG or SVG image.

It reads Core ML, ONNX, Keras, TensorFlow and TensorFlow Lite, OpenVINO, Safetensors, Caffe, Darknet and NumPy files, along with PyTorch models in TorchScript, torch.export and ExecuTorch form. GGUF, JAX, MLIR, PaddlePaddle, scikit-learn, RKNN, MNN and ncnn files open with experimental support.

The same viewer runs in a browser at netron.app, and `pip install netron` gives you a command that opens a file from Python. The Mac app is an Electron build of it, published as a DMG or ZIP, or through the `netron` Homebrew cask.

Two behaviours of the packaged desktop app come from its source code. It sends usage and error reports to Google Analytics, which its notice describes as anonymous; in the EU, the UK and Norway that notice appears first and has only an Accept button. And once a build is more than 180 days old, it stops and keeps asking you to download a newer one.

Netron is written by Lutz Roeder and MIT-licensed.
