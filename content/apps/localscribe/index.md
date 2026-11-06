---
name: "LocalScribe"
summary: "Offline speech-to-text for Apple silicon Macs, with live captions, subtitle editing and local translation."
category: "Media"
tags:
  - speech-to-text
  - transcription
  - local-ai
  - offline
repository: "https://github.com/maddylaneeee/ShengJi"
website: "https://lixinchen.ca/docs/localscribe/"
license: "MIT"
licenseUrl: "https://github.com/maddylaneeee/ShengJi/blob/main/LICENSE"
download: "https://github.com/maddylaneeee/ShengJi/releases/latest/download/LocalScribe-macOS-arm64.dmg"
freeDownload: true
featured: false
added: "2026-11-06"
verified: "2026-11-06"
icon: "./assets/icon.png"
sources:
  - "https://github.com/maddylaneeee/ShengJi"
  - "https://github.com/maddylaneeee/ShengJi/blob/main/LICENSE"
  - "https://github.com/maddylaneeee/ShengJi/releases"
  - "https://lixinchen.ca/docs/localscribe/"
assets:
  - path: "./assets/icon.png"
    source: "https://raw.githubusercontent.com/maddylaneeee/ShengJi/main/LocalScribe/Resources/Assets.xcassets/AppIcon.appiconset/icon_1024.png"
    credit: "Matt / MLCCS"
    license: "MIT; upstream app icon, trademarks retained"
---

LocalScribe transcribes audio and video on the Mac with offline engines: Apple's speech recognition, whisper.cpp with Metal, SenseVoice and NVIDIA Parakeet. It can show floating live captions for the microphone or Mac audio, edit subtitles, and translate transcripts with Apple's Translation framework. It suits people who transcribe recordings and want offline engines rather than a cloud service.

It requires macOS 15.5 or later on Apple silicon; Intel Macs are not supported. Apple's SpeechAnalyzer recognition and live captions require macOS 26, and on macOS 15.5 to 25 you choose Whisper, SenseVoice or Parakeet by hand. The release is ad-hoc signed and not notarized by Apple, so the first launch must be allowed in System Settings under Privacy & Security. The OpenAI and DeepSeek connectors are preview features, and microphone and Mac audio capture need macOS permissions.
