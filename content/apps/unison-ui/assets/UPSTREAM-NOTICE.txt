# NOTICE: Attribution and Licensing

## Derivation

This project, **unison-ui-mac**, is a native macOS user interface for the
**Unison File Synchronizer** by Benjamin C. Pierce and contributors.

- Upstream project: <https://github.com/bcpierce00/unison>
- Upstream documentation: <https://github.com/bcpierce00/unison/wiki>
- License: GNU General Public License version 3 (or later)

The application embeds Unison's compiled OCaml code
(`vendor/unison-blob-<version>-<arch>.o`, produced by the upstream Unison
build) and calls into it through the
callback bridge declared in [src/uimacbridge.ml](https://github.com/bcpierce00/unison/blob/master/src/uimacbridge.ml).
As such, **this project is a "modified version" of Unison for GPLv3
purposes** and is distributed under the same license. See [LICENSE](LICENSE).

## What is original to this project

- The Swift application code under `Sources/App/`
- The C bridge (`Sources/Bridge/UnisonBridgeC.{c,h}`), newly written;
  inspired by the layout of the original Objective-C bridge at
  [src/uimac/Bridge.m](https://github.com/bcpierce00/unison/blob/master/src/uimac/Bridge.m)
  but rewritten from scratch using OCaml 5's `caml_acquire_runtime_system` /
  `caml_release_runtime_system` API and generational global roots.
- The XcodeGen project definition (`project.yml`), the Makefile build
  orchestration, and the application Info.plist.
- The application icon (`Resources/Unison.icon`), a native Icon Composer
  icon authored for this project.

## What is taken or derived from the upstream Unison project

- The bundled reference manual (`vendor/unison-manual-<version>.html`,
  shipped inside the `.app` as Help → "Unison File Synchronizer Manual")
  is the hevea-rendered output of upstream's
  [doc/unison-manual.tex](https://github.com/bcpierce00/unison/blob/master/doc/unison-manual.tex),
  copyright Benjamin C. Pierce, distributed under GPLv3. See
  [vendor/README.md](vendor/README.md) for the rendering recipe and
  the upstream commit it was generated from.
- The full set of OCaml callback names and semantics
  (`unisonGetVersion`, `unisonInit0/1/2`, `unisonRiSet*`, etc.) are part of
  the public interface of Unison's `uimacbridge` module and used as
  documented.
- The "preconnection / openConnectionPrompt-Reply-End" credential loop and
  the per-row direction-override semantics follow the protocol defined by
  `src/uimacbridge.ml` and `src/uimac/MyController.m`.

## Required statement under GPLv3 §5

If you redistribute this software (modified or unmodified):
- Keep this NOTICE file and the [LICENSE](LICENSE) file alongside the
  distribution.
- Make the **complete corresponding source code** available, including
  the modifications this project applies to the upstream Unison source.
  Those modifications live in `patches/` and are applied to the pinned
  upstream checkout when the vendored blob is regenerated
  (`make vendor-blob`). `vendor/unison-blob-*.o` is therefore a
  **patched** build of Unison, not a verbatim upstream binary. The
  patches are small but downstream-authored, and some change shared
  engine behavior (0003 modifies `remote.ml` / `uicommon.ml`) or the
  macUI bridge ABI (0005 changes the `syncComplete` bridge interface);
  see `docs/vendored-patches-upstream.md` for the full per-patch table.
  The `.app` bundle links against the resulting patched build.
- Disclose the Unison version this build was linked against. Run
  `make print-config` or check the "About" panel in the running app.

## Bundled third-party component: Sparkle

This app embeds Sparkle (<https://sparkle-project.org>), the macOS
software-update framework. Sparkle is distributed under the MIT License, which
is independent of the GPLv3 that covers the rest of this project. Sparkle's
license is reproduced verbatim below, including the licenses of the components
Sparkle itself bundles (bsdiff, sais-lite, an Ed25519 implementation, and
SUSignatureVerifier).

```text
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
```

## Compatibility note

Unison's own [CONTRIBUTING document](https://github.com/bcpierce00/unison/blob/master/CONTRIBUTING.md)
states that LLM-generated code is unwelcome upstream. This UI project was
written with substantial LLM assistance and exists as a separate downstream
work. **Its LLM-touched artifacts (the `patches/` diffs and this fork's
code) are local implementation and provenance artifacts and are not
submitted upstream directly.** This is not a claim that an idea can never
reach upstream: a separately developed, fully understood, human-authored
contribution may be proposed by the maintainer in accordance with upstream's
CONTRIBUTING policy, developed clean rather than by laundering this repo's
LLM-touched diffs.

## Acknowledgments

- **Benjamin C. Pierce** and the Unison contributors for ~25 years of
  maintaining one of the best file-synchronizers ever written.
- **Trevor Jim, Craig Federighi, Ben Willmore** and others who built the
  original Cocoa UI for Unison; the protocol and patterns this project
  follows owe everything to that work.
