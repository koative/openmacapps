# Third-party notices

Pippa itself is MIT-licensed (see [LICENSE](LICENSE)). `Pippa.app` ships the third-party software below; this file is copied into the app as `Contents/Resources/THIRD_PARTY_NOTICES.md`. Licences are reproduced below or shipped next to each component.

| Component | Use in Pippa | Licence |
|---|---|---|
| [Pi](https://github.com/earendil-works/pi) 1.5.0 (`@earendil-works/pi-coding-agent`, `pi-agent-core`, `pi-ai`, `pi-tui`, `pi-mcp`, `pi-codemode`, `pi-durable`, `pi-schema`, `pi-telemetry`, `chord`) | The agent. Shipped as the install payload Pippa copies to `~/.pi/agent` (`Contents/Resources/pi-payload/release`) | MIT, Copyright (c) 2025 Mario Zechner. The npm packages contain no licence file, so the text is reproduced below |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk), bundled inside `@earendil-works/pi-mcp` | MCP client in Pi | MIT, Copyright (c) 2024 Anthropic, PBC; shipped in `node_modules/@earendil-works/pi-mcp/LICENSES/` |
| [fd](https://github.com/sharkdp/fd) 10.3.0 (`Contents/Helpers/fd`) | File search for Pi's `find` tool | MIT or Apache 2.0, Copyright (c) 2017-present The fd developers; see `Contents/Resources/fd-LICENSE-MIT.txt` and `fd-LICENSE-APACHE.txt` |
| [ripgrep](https://github.com/BurntSushi/ripgrep) 14.1.1 (`Contents/Helpers/rg`) | Content search for Pi's `grep` tool | MIT or Unlicense, Copyright (c) 2015 Andrew Gallant; see `Contents/Resources/rg-LICENSE-MIT.txt` and `rg-UNLICENSE.txt` |
| [Node.js](https://nodejs.org) 22.23.3 | Runs Pi; also copied to `~/.local/share/pi-node` for Pi in Terminal | MIT and others, see `Contents/Resources/Node-LICENSE.txt` |
| [npm](https://github.com/npm/cli) 10.9.9 (`Contents/Resources/pi-payload/lib/node_modules/npm`) | Lets `pi update` work in Terminal without a separate Node install | Artistic License 2.0, Copyright (c) npm, Inc. and Contributors; licence and its dependencies' licences shipped in that folder |
| [Sparkle](https://sparkle-project.org) 2.10.0 | Automatic updates | MIT-style, see below |
| [pi-web-access](https://github.com/nicobailon/pi-web-access) 0.38.0 (Nico Bailon) | Web search and page reading for Pi, loaded as a Pi extension through `Contents/Resources/pippa-web/index.ts` with Pippa's settings | MIT, see below |
| Dependencies of pi-web-access (defuddle, @mozilla/readability, turndown, linkedom, unpdf, p-limit, undici and their own dependencies) | Page reading inside pi-web-access | MIT, Apache 2.0, ISC and others; each licence shipped in `Contents/Resources/pippa-web/node_modules/<package>/` |
| Other npm packages used by Pi (about 320 in `pi-payload/release/node_modules`) | Pi dependencies | MIT, ISC, Apache 2.0, BSD-2/3-Clause, BlueOak-1.0.0, 0BSD, Unlicense, CC0-1.0, CC-BY-3.0; each package's licence shipped in its folder, exceptions listed below |
| [Bagel Fat One](https://fonts.google.com/specimen/Bagel+Fat+One) | App font for the welcome headline | SIL Open Font License 1.1, Copyright 2022 The Bagel Fat Project Authors; shipped as `OFL.txt` next to the font |
| [Hob](https://github.com/FrigadeHQ/hob) | PDF blank detection, labels and filled copies, ported into `app/Sources/PippaCore/Tools/FormFill.swift` | MIT, Copyright (c) 2026 Frigade, see below |

### Downloaded at setup, not bundled

Pippa's AI on this Mac is not part of the app or this repository. When you set it up, Pippa downloads a Python runtime with oMLX and one language model, checks each file against a pinned SHA-256 and keeps them in `~/Library/Application Support/Pippa` (see [docs/models.md](docs/models.md)). Each comes under its own licence:

| Component | Use in Pippa | Licence |
|---|---|---|
| [oMLX](https://github.com/jundot/omlx) | Local server that runs the language model on Apple silicon | Apache 2.0 |
| [MLX](https://github.com/ml-explore/mlx) and [mlx-lm](https://github.com/ml-explore/mlx-lm) (ml-explore) | Model inference used by oMLX | MIT, Copyright (c) Apple Inc. |
| [CPython](https://www.python.org) 3.11 ([python-build-standalone](https://github.com/astral-sh/python-build-standalone)) | Runs oMLX | Python Software Foundation License |
| Other Python packages oMLX depends on | Pinned in the runtime archive | Their own licences, kept in each package's `*.dist-info` folder inside the runtime |
| [Ornith 1.5 9B, MLX 4-bit](https://huggingface.co/ornith-ai/Ornith-1.5-9B-MLX-4bit) by Ornith AI | The language model | See the model card. The MLX repository names no licence; its base model [Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) is tagged MIT on Hugging Face |

### npm packages without a licence file

These packages in the bundle declare a licence in `package.json` but ship no licence file. Their notices:

| Package | Licence | Copyright / author |
|---|---|---|
| `@aws-sdk/credential-provider-http`, `@aws-sdk/credential-provider-login`, `@aws-sdk/nested-clients` | Apache 2.0 (text shipped in `node_modules/@aws-sdk/core/LICENSE`) | Amazon.com, Inc. or its affiliates (AWS SDK for JavaScript) |
| `@sigstore/verify` | Apache 2.0 | The Sigstore Authors |
| `@npmcli/agent` | ISC | GitHub Inc. |
| `@esbuild/darwin-arm64` | MIT | Evan Wallace |
| `boolbase` | ISC | Felix Böhm |
| `data-uri-to-buffer`, `proxy-agent-negotiate` | MIT | Nathan Rajlich |
| `eastasianwidth` | MIT | Masaki Komagata |
| `err-code` | MIT | IndigoUnited |
| `imurmurhash` | MIT | Jens Taylor |
| `standardwebhooks` | MIT | Standard Webhooks |
| `spdx-exceptions` (data) | CC-BY-3.0 | The Linux Foundation and its contributors; from the [SPDX License List](https://spdx.org/licenses/exceptions-index.html), unmodified |
| `spdx-license-ids` (data) | CC0-1.0 | Shinnosuke Watanabe |

## Pi

MIT License

Copyright (c) 2025 Mario Zechner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## pi-web-access

MIT License

Copyright (c) 2025 Nico Bailon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Hob

The approach and parts of Pippa's PDF form filling (`app/Sources/PippaCore/Tools/FormFill.swift`) and its check fixtures are ported from Hob (`app/native/hob-pdf`, `app/src/main/tools/pdf.ts`).

MIT License

Copyright (c) 2026 Frigade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Sparkle

Copyright (c) 2006-2013 Andy Matuschak.
Copyright (c) 2009-2013 Elgato Systems GmbH.
Copyright (c) 2011-2014 Kornel Lesiński.
Copyright (c) 2015-2017 Mayur Pawashe.
Copyright (c) 2014 C.W. Betts.
Copyright (c) 2014 Petroules Corporation.
Copyright (c) 2014 Big Nerd Ranch.
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

=================
EXTERNAL LICENSES
=================

bspatch.c and bsdiff.c, from bsdiff 4.3 <http://www.daemonology.net/bsdiff/>:

Copyright 2003-2005 Colin Percival
All rights reserved

Redistribution and use in source and binary forms, with or without
modification, are permitted providing that the following conditions 
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

--

sais.c and sais.h, from sais-lite (2010/08/07) <https://sites.google.com/site/yuta256/sais>:

The sais-lite copyright is as follows:

Copyright (c) 2008-2010 Yuta Mori All Rights Reserved.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

--

Portable C implementation of Ed25519, from https://github.com/orlp/ed25519

Copyright (c) 2015 Orson Peters <orsonpeters@gmail.com>

This software is provided 'as-is', without any express or implied warranty. In no event will the
authors be held liable for any damages arising from the use of this software.

Permission is granted to anyone to use this software for any purpose, including commercial
applications, and to alter it and redistribute it freely, subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the
   original software. If you use this software in a product, an acknowledgment in the product
   documentation would be appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not be misrepresented as
   being the original software.

3. This notice may not be removed or altered from any source distribution.

--

SUSignatureVerifier.m:

Copyright (c) 2011 Mark Hamlin.

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted providing that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
