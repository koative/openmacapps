import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Every raster catalog image as Astro image metadata, so pages can serve resized
// WebP copies instead of the full-size originals kept for provenance and feeds.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/content/apps/*/assets/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

const metadata = (slug: string, path: string) =>
  files[`/content/apps/${slug}/${path.replace(/^\.\//, '')}`]?.default;

/**
 * A WebP copy of an app image at `width` pixels (never enlarged), with a
 * `srcset` when several widths are asked for. Images Astro can't process (SVG,
 * GIF) keep their original URL.
 */
export async function appImage(
  slug: string,
  path: string,
  original: string,
  widths: number[],
): Promise<{ src: string; srcset?: string }> {
  const src = metadata(slug, path);
  if (!src) return { src: original };
  const fitting = [
    ...new Set(widths.map((width) => Math.min(width, src.width))),
  ];
  if (fitting.length === 1) {
    const image = await getImage({ src, width: fitting[0], format: 'webp' });
    return { src: image.src };
  }
  const image = await getImage({ src, widths: fitting, format: 'webp' });
  return { src: image.src, srcset: image.srcSet.attribute };
}
