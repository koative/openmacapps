---
name: Dayflow
summary: An automatic work journal that turns periodic screen captures into a timeline, daily standup notes and weekly reviews.
category: Productivity
tags:
- time-tracking
- journaling
- local-ai
- privacy
alternativeTo:
- rescuetime
- manictime
repository: https://github.com/JerryZLiu/Dayflow
website: https://www.dayflow.so/
license: MIT
licenseUrl: https://github.com/JerryZLiu/Dayflow/blob/main/LICENSE
download: https://github.com/JerryZLiu/Dayflow/releases
freeDownload: true
homebrew: "dayflow"
featured: false
added: '2026-10-17'
verified: '2026-11-08'
icon: ./assets/icon.png
sources:
- https://github.com/JerryZLiu/Dayflow
- https://github.com/JerryZLiu/Dayflow/blob/main/LICENSE
- https://github.com/JerryZLiu/Dayflow/releases
- https://raw.githubusercontent.com/JerryZLiu/Dayflow/main/README.md
- https://www.dayflow.so/pricing/
- https://www.manictime.com/
- https://www.manictime.com/features/automatic-time-tracking
- https://www.manictime.com/features/time-tracking-with-screenshots
assets:
- path: ./assets/icon.png
  source: https://raw.githubusercontent.com/JerryZLiu/Dayflow/main/Dayflow/Dayflow/Assets.xcassets/AppIcon.appiconset/Export%20me%20%28512px%29%20%287%29.png
  credit: Jerry Liu and Dayflow contributors
  license: MIT-licensed repository asset; no separate icon terms stated
---

Dayflow keeps a work journal for you. It captures small chunks of screen activity through the day and has the AI provider you picked analyse them. The results become activity cards on a timeline, and you can see what you did without starting timers or writing notes.

- A daily standup view shows a GitHub-style activity grid and drafts the highlights of yesterday, what is planned for today and what is blocking you.
- A weekly review shows focus patterns, categories, app usage and the sessions it judged to be distractions.
- A chat panel answers questions about your day, week or year from the timeline.
- Any date range exports to Markdown, and storage limits make it delete old recordings automatically.

Recordings, the timeline and the database live in Dayflow's folder under Application Support. For analysis you pick one of three routes. Local models run through Ollama or LM Studio, Gemini uses your own API key, and ChatGPT or Claude work through their command-line tools. With a cloud provider, the activity data needed for analysis goes to that provider. The free plan covers local or bring-your-own AI; a paid Pro plan runs the analysis on Dayflow's managed service instead, which the developer says deletes the screenshots after processing.

Dayflow needs macOS 14 or later and the Screen & System Audio Recording permission. The 2.8.0 disk image on GitHub contains an Apple silicon (arm64) app only.

ManicTime also tracks time automatically, recording apps, websites and documents, and can put screenshots on its timeline. Dayflow instead has a model read what was on screen and describe the work in words.
