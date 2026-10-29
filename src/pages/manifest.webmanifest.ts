import { site } from '../lib/site';

export function GET() {
  const base = import.meta.env.BASE_URL;
  const icon = (file: string, size: number, purpose = 'any') => ({
    src: `${base}${file}`,
    sizes: `${size}x${size}`,
    type: 'image/png',
    purpose,
  });
  const shortcut = (name: string, path: string) => ({
    name,
    url: `${base}${path}`,
    icons: [icon('icon-192.png', 192)],
  });
  return new Response(
    JSON.stringify({
      id: base,
      name: site.name,
      short_name: site.name,
      description: site.description,
      lang: 'en',
      start_url: base,
      scope: base,
      display: 'standalone',
      background_color: site.backgroundColor,
      theme_color: site.themeColor.light,
      icons: [
        icon('icon-192.png', 192),
        icon('icon-512.png', 512),
        icon('icon-maskable-512.png', 512, 'maskable'),
      ],
      shortcuts: [
        shortcut('Search', 'search/'),
        shortcut('Categories', 'categories/'),
        shortcut('Alternatives', 'alternatives/'),
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
}
