import { Image, List, Text, Title } from '@mantine/core';

import { publicUrl } from '@/lib/publicUrl';
import type { BlogContentBlock } from '@/content/blogs';
import classes from './BlogPost.module.css';

interface BlogContentProps {
  blocks: BlogContentBlock[];
}

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <article className={classes.article}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case 'paragraph':
            return (
              <Text key={key} className={classes.paragraph}>
                {block.text}
              </Text>
            );

          case 'heading':
            return block.level === 2 ? (
              <Title key={key} order={2} className={classes.h2}>
                {block.text}
              </Title>
            ) : (
              <Title key={key} order={3} className={classes.h3}>
                {block.text}
              </Title>
            );

          case 'image':
            return (
              <figure key={key} className={classes.figure}>
                <Image
                  src={publicUrl(block.url)}
                  alt={block.alt}
                  className={classes.contentImage}
                  radius="md"
                />
                {block.caption && (
                  <Text component="figcaption" size="sm" c="dimmed" mt="xs" ta="center">
                    {block.caption}
                  </Text>
                )}
              </figure>
            );

          case 'list':
            return (
              <List
                key={key}
                type={block.ordered ? 'ordered' : 'unordered'}
                spacing="sm"
                className={classes.list}
              >
                {block.items.map((item) => (
                  <List.Item key={item}>
                    <Text className={classes.paragraph} component="span">
                      {item}
                    </Text>
                  </List.Item>
                ))}
              </List>
            );

          case 'quote':
            return (
              <blockquote key={key} className={classes.quote}>
                <Text className={classes.quoteText}>{block.text}</Text>
                {block.attribution && (
                  <Text size="sm" c="dimmed" mt="sm">
                    — {block.attribution}
                  </Text>
                )}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
