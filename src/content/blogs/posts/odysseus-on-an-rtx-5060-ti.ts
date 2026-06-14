import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'odysseus-on-an-rtx-5060-ti',
  title: 'Running Odysseus Locally on an RTX 5060 Ti',
  description:
    'I tested Odysseus on a 16GB RTX 5060 Ti and used it for days without cloud APIs. Deep Search, 128k context, and built-in tools made local AI feel complete.',
  excerpt:
    'I ran Odysseus on my RTX 5060 Ti (16GB) for days straight and didn\'t open Claude or ChatGPT once. Deep Search, 128k context, and built-in tools — all local.',
  publishedAt: '2026-06-13',
  author: 'Safouane RG',
  coverImageUrl: '/blog-images/odysseus-cover-1.jpg',
  category: 'Local AI',
  featured: true,
  tags: ['LocalAI', 'LLM', 'AI', 'Odysseus', 'Privacy', 'OpenSource', 'MachineLearning', 'DeepLearning', 'RTX5060Ti'],
  keywords: [
    'local AI',
    'Odysseus AI',
    'RTX 5060 Ti',
    '16GB GPU',
    'Deep Search',
    '128k context',
    'local LLM',
    'AI privacy',
    'open source AI agent',
  ],
  content: [
    {
      type: 'paragraph',
      text: 'Lately I\'ve been testing local AI models on different hardware setups, and I stumbled upon Odysseus — an AI agent platform with a clean chat UI and a lot of features built in.',
    },
    {
      type: 'paragraph',
      text: 'I ran it on my RTX 5060 Ti (16GB) and honestly? It surprised me. For days straight, I didn\'t even open Claude or ChatGPT. The model just worked.',
    },
    {
      type: 'image',
      url: '/blog-images/odysseus-cover-1.jpg',
      alt: 'Odysseus local AI interface shown on LinkedIn',
      caption: 'The clean interface is one of the first things that stood out to me.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'What sold me',
    },
    {
      type: 'list',
      items: [
        'Deep Search — I can ask it to read an entire landing page and extract specific info, and it does it perfectly. The results are honestly on par with what I was getting from premium cloud models.',
        '128k context window — Long research tasks? Multi-step analysis? It handles them locally without losing track.',
        'Built-in tools — Web search, file reading, code execution, browser automation. It\'s not just a chatbot, it\'s an actual agent.',
      ],
    },
    {
      type: 'image',
      url: '/blog-images/odysseus-cover-2.jpg',
      alt: 'Second LinkedIn image used in the Odysseus local AI portfolio blog',
      caption: 'I used this second image in the post to keep the portfolio version visual and practical.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why local won this round',
    },
    {
      type: 'paragraph',
      text: 'And the best part? There\'s no "you\'ve exceeded your free tier" message. No rate limits. No "upgrade to Pro." Just run it and use it.',
    },
    {
      type: 'paragraph',
      text: 'I used to hit cloud APIs for heavy lifting. Now I just point it at my local instance and let it run. The quality is there, the privacy is better, and my wallet is happy.',
    },
    {
      type: 'quote',
      text: 'Local-first AI is no longer a compromise — it can be the better product.',
      attribution: 'Safouane RG',
    },
  ],
};
