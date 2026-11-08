---
name: "DevToys"
summary: "A desktop collection of formatters, converters, encoders, and text utilities."
category: "Developer tools"
tags: ["converters", "formatters", "developer-utilities"]
repository: "https://github.com/DevToys-app/DevToys"
website: "https://devtoys.app"
license: "MIT"
licenseUrl: "https://github.com/DevToys-app/DevToys/blob/main/LICENSE.md"
download: "https://devtoys.app/download"
freeDownload: true
homebrew: "devtoys"
featured: false
added: "2026-10-17"
verified: "2026-11-08"
sources: ["https://github.com/DevToys-app/DevToys", "https://github.com/DevToys-app/DevToys/blob/main/LICENSE.md", "https://devtoys.app/download", "https://raw.githubusercontent.com/DevToys-app/DevToys/main/README.md", "https://github.com/DevToys-app/DevToys/releases"]
assets: [{"path": "./assets/icon.png", "source": "https://github.com/DevToys-app/DevToys/blob/main/assets/logo/MacOS/Stable/256-mac.png", "credit": "DevToys contributors", "license": "MIT; project trademarks retained"}]
icon: "./assets/icon.png"
---

DevToys handles the small conversions you would otherwise paste into a random website: decode a JWT, format a block of JSON, test a regular expression, compress an image. Each of those jobs has its own small tool, and all of them live in one app.

Version 2 ships 30 default tools, grouped like this:

- Converters, such as JSON to YAML, dates and number bases.
- Encoders and decoders for HTML, URLs, Base64, GZip, JWT and QR codes.
- Formatters for JSON, SQL and XML, plus testers for JSONPath, regular expressions and XML.
- Generators for hashes and checksums, Lorem Ipsum and passwords.
- Graphics tools, among them a colour blindness simulator and a PNG and JPEG compressor.
- Text utilities, including a Markdown preview and a text comparer.

Smart Detection looks at what is on your clipboard and picks the tool that fits it. More tools come as extensions, and the documentation explains how to write your own.

DevToys also has a separate command-line version, with its own download. On the Mac the app comes as separate Apple silicon and Intel bundles, or through Homebrew with `brew install --cask devtoys`. The Apple silicon build needs macOS 12 or later and is notarized. GitHub still marks the 2.0 releases as pre-releases.
