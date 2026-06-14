/**
 * Resolve public asset paths for GitHub Pages base (`/portfolio/`).
 * External HTTPS URLs are returned unchanged.
 *
 * In blog posts, use paths like `/blog-images/my-cover.jpg`
 * (files live in `public/blog-images/`).
 */
export function publicUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Absolute URL for SEO (og:image, JSON-LD) */
export function publicAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const siteOrigin = 'https://safouane666.github.io';
  return `${siteOrigin}${publicUrl(path)}`;
}
