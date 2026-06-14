import { useEffect } from 'react';

import { getPostUrl, type BlogPost } from '@/content/blogs';
import { publicAbsoluteUrl } from '@/lib/publicUrl';

const SITE_NAME = 'Safouane RG';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

interface BlogSeoProps {
  post: BlogPost;
  readingTimeMinutes: number;
}

export function BlogSeo({ post, readingTimeMinutes }: BlogSeoProps) {
  const url = getPostUrl(post.slug);
  const coverImage = publicAbsoluteUrl(post.coverImageUrl);
  const title = `${post.title} | ${SITE_NAME}`;
  const keywords = [...post.keywords, ...post.tags].join(', ');

  useEffect(() => {
    document.title = title;
    setMeta('description', post.description);
    setMeta('keywords', keywords);
    setMeta('author', post.author);
    setMeta('article:published_time', post.publishedAt, 'property');
    setMeta('article:author', post.author, 'property');
    setMeta('article:section', post.category, 'property');
    post.tags.forEach((tag) => {
      setMeta('article:tag', tag, 'property');
    });

    setMeta('og:type', 'article', 'property');
    setMeta('og:title', post.title, 'property');
    setMeta('og:description', post.description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', coverImage, 'property');
    setMeta('og:image:alt', post.title, 'property');
    setMeta('og:site_name', `${SITE_NAME} Portfolio`, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', post.title);
    setMeta('twitter:description', post.description);
    setMeta('twitter:image', coverImage);

    setCanonical(url);

    const scriptId = 'blog-article-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: [coverImage],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Person',
        name: SITE_NAME,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      keywords: post.tags.join(', '),
      articleSection: post.category,
      wordCount: readingTimeMinutes * 200,
      url,
    });

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [post, title, url, keywords, readingTimeMinutes, coverImage]);

  return null;
}
