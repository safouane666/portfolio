# Blog authoring guide (for AI agents)

## Add a new post in 2 steps

### 1. Create `posts/<slug>.ts`

```ts
import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'my-new-post-slug',
  title: 'Post Title',
  description: 'SEO meta description (~155 chars).',
  excerpt: 'Short preview for the blog list card.',
  publishedAt: '2026-06-15',
  author: 'Safouane RG',
  coverImageUrl: 'https://i.imgur.com/xxxx.png',
  category: 'Local AI',
  featured: false,
  tags: ['LocalAI', 'TagTwo'],
  keywords: ['keyword one', 'keyword two'],
  content: [
    { type: 'paragraph', text: 'Introduction...' },
    {
      type: 'image',
      url: 'https://i.imgur.com/xxxx.png',
      alt: 'Describe the image for accessibility',
      caption: 'Optional caption',
    },
    { type: 'heading', level: 2, text: 'Section title' },
    { type: 'list', items: ['Point one', 'Point two'] },
    { type: 'quote', text: 'Technical takeaway in one sentence.' },
  ],
};
```

### 2. Register in `registry.ts`

```ts
import { post as myNewPost } from './posts/my-new-post-slug';

export const blogPosts: BlogPost[] = [
  myNewPost,
  // ...existing posts (newest first)
];
```

## Content blocks

| type        | fields                          |
|-------------|---------------------------------|
| paragraph   | text                            |
| heading     | level: 2 \| 3, text             |
| image       | url, alt, caption?              |
| list        | items[], ordered?               |
| quote       | text, attribution?              |

## Images

- Use **full HTTPS URLs** (Imgur, GitHub raw, CDN). No local paths required.
- Put the hero image in `coverImageUrl` and repeat in `content` where the article should show it.
- Always set meaningful `alt` text.

## SEO checklist

- `description`: unique, 140–160 characters.
- `tags`: 5–10 topical hashtags (no `#` in the array).
- `keywords`: 6–12 search phrases.
- `slug`: lowercase, hyphen-separated, stable (do not change after publish).

## Routes

- List: `/Blog`
- Article: `/Blog/<slug>`
