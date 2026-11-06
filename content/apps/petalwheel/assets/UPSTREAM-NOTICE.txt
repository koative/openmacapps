# Third-party notices

Petalwheel's own source code is MIT-licensed (see [LICENSE](LICENSE)).

`Petalwheel.app` bundles third-party software that `scripts/build-ffmpeg.sh` and
`scripts/build-deps.sh` build from official source releases (versions and SHA-256
checksums are pinned in those scripts):

| Component | License |
|---|---|
| FFmpeg (ffmpeg, ffprobe, libav*) | LGPL 2.1 or later (built without GPL or nonfree parts) |
| LAME (libmp3lame) | LGPL 2.0 or later |
| libwebp, cwebp | BSD 3-Clause |
| Opus | BSD 3-Clause |
| libvpx | BSD 3-Clause |
| dav1d | BSD 2-Clause |
| SVT-AV1 | BSD 3-Clause Clear (with AOM patent license) |
| libpng | PNG Reference Library License v2 |
| libjpeg-turbo | IJG, BSD 3-Clause, zlib |
| xz (liblzma) | 0BSD |

The full license texts are copied into `Contents/Resources/Tools/licenses` inside the
app and are available in **Settings › About › Licenses…**. FFmpeg and LAME are linked
dynamically so they can be replaced, as the LGPL requires.
