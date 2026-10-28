import { describe, expect, test } from 'bun:test';
import { matchingCasks, pickCask, type Cask } from '../scripts/homebrew';

const cask = (token: string, fields: Partial<Cask> = {}): Cask => ({
  token,
  homepage: null,
  url: 'https://example.invalid/app.dmg',
  deprecated: false,
  disabled: false,
  artifacts: [],
  ...fields,
});
const app = {
  repository: 'https://github.com/Owner/Tool',
  website: 'https://owner.dev/',
};

describe('Homebrew casks', () => {
  test('match only installers from the app’s own repository or website', () => {
    const casks = [
      cask('owner-tool', {
        url: 'https://github.com/owner/tool/releases/download/v1/Tool.dmg',
      }),
      cask('other-app', { homepage: 'https://www.owner.dev' }),
      // Same name, different project.
      cask('tool', {
        url: 'https://github.com/someone/tool/releases/download/v1/Tool.dmg',
        homepage: 'https://tool.example/',
      }),
      cask('owner-tool@beta', { homepage: 'https://github.com/owner/tool' }),
      cask('owner-tool-old', {
        homepage: 'https://github.com/owner/tool',
        deprecated: true,
      }),
      cask('owner-tool-gatekeeper', {
        homepage: 'https://github.com/owner/tool',
        disabled: true,
      }),
    ];
    const matches = matchingCasks(app, casks);
    expect(matches.map((match) => match.cask.token)).toEqual([
      'owner-tool',
      'other-app',
    ]);
    // A repository match outranks another app that shares the author's website.
    expect(pickCask('tool', matches)).toBe('owner-tool');
  });

  test('leave equally plausible variants for a human to choose', () => {
    const site = { homepage: 'https://owner.dev/' };
    const appBundle = { ...site, artifacts: [{ app: ['Tool.app'] }] };
    const pick = (slug: string, casks: Cask[]) =>
      pickCask(slug, matchingCasks(app, casks));
    expect(
      pick('tool', [cask('tool-2ch', site), cask('tool-16ch', site)]),
    ).toBe(undefined);
    expect(pick('tool', [cask('tool', site), cask('tool-lite', site)])).toBe(
      'tool',
    );
    expect(
      pick('tool', [cask('tool-app', appBundle), cask('tool-cli', site)]),
    ).toBe('tool-app');
  });
});
