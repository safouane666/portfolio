/** Content block types — agents add posts by composing these blocks in order */

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | {
      type: 'image';
      /** Full URL (Imgur, CDN, etc.) */
      url: string;
      alt: string;
      caption?: string;
    }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'quote'; text: string; attribution?: string };

export interface BlogPost {
  /** URL segment: /Blog/your-slug */
  slug: string;
  title: string;
  /** SEO meta description (150–160 chars ideal) */
  description: string;
  /** Card preview on list page */
  excerpt: string;
  /** ISO 8601 date */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** Hero + og:image */
  coverImageUrl: string;
  /** Display tags / hashtags (without # in data; UI adds #) */
  tags: string[];
  /** Extra SEO keywords */
  keywords: string[];
  category: string;
  featured?: boolean;
  /** Ordered body content */
  content: BlogContentBlock[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  coverImageUrl: string;
  tags: string[];
  keywords: string[];
  category: string;
  readingTimeMinutes: number;
}
