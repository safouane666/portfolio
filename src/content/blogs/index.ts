import { blogPosts } from './registry';

import type { BlogPost, BlogPostMeta } from './types';

export type { BlogContentBlock, BlogPost, BlogPostMeta } from './types';

const BASE_URL = 'https://safouane666.github.io/portfolio';

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function estimateReadingTimeMinutes(post: BlogPost): number {
  let words = 0;
  for (const block of post.content) {
    if (block.type === 'paragraph' || block.type === 'quote') words += countWords(block.text);
    if (block.type === 'heading') words += countWords(block.text);
    if (block.type === 'list') {
      block.items.forEach((item) => {
        words += countWords(item);
      });
    }
  }
  return Math.max(1, Math.ceil(words / 200));
}

export function toPostMeta(post: BlogPost): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    coverImageUrl: post.coverImageUrl,
    tags: post.tags,
    keywords: post.keywords,
    category: post.category,
    readingTimeMinutes: estimateReadingTimeMinutes(post),
  };
}

export function getPostUrl(slug: string): string {
  return `${BASE_URL}/Blog/${slug}`;
}

export function getBlogIndexUrl(): string {
  return `${BASE_URL}/Blog`;
}
