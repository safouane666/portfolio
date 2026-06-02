import { motion } from 'framer-motion';
import {
  Badge,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowLeft, IconClock, IconTag } from '@tabler/icons-react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { BlogSeo } from '@/components/blog/BlogSeo';
import { estimateReadingTimeMinutes, getPostBySlug } from '@/content/blogs';
import { BlogContent } from './BlogContent';
import classes from './BlogPost.module.css';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/Blog" replace />;
  }

  const readingTime = estimateReadingTimeMinutes(post);

  return (
    <Container size="md" className={classes.page}>
      <BlogSeo post={post} readingTimeMinutes={readingTime} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          component={Link}
          to="/Blog"
          variant="subtle"
          color="cyan"
          leftSection={<IconArrowLeft size={18} />}
          mb="lg"
          className={classes.back}
        >
          All articles
        </Button>

        <Badge variant="light" color="cyan" size="lg" mb="md">
          {post.category}
        </Badge>

        <Title className={classes.title}>{post.title}</Title>

        <Group gap="lg" mt="md" mb="xl" className={classes.meta}>
          <Text size="sm" c="dimmed">
            {post.author}
          </Text>
          <Text size="sm" c="dimmed">
            {formatDate(post.publishedAt)}
          </Text>
          <Group gap={6}>
            <IconClock size={16} color="var(--mantine-color-dimmed)" />
            <Text size="sm" c="dimmed">
              {readingTime} min read
            </Text>
          </Group>
        </Group>

        <div className={classes.heroWrap}>
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            className={classes.heroImage}
            radius="lg"
          />
        </div>

        <Group gap="xs" mt="xl" mb="xl" className={classes.tags}>
          <IconTag size={16} color="var(--mantine-color-cyan-5)" />
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" color="cyan" size="sm">
              #{tag}
            </Badge>
          ))}
        </Group>

        <BlogContent blocks={post.content} />

        <Stack gap="md" mt="xl" pt="xl" className={classes.footerCta}>
          <Text fw={600}>Explore on-premise AI infrastructure</Text>
          <Group>
            <Button component={Link} to="/LocalAI" color="cyan" radius="xl">
              Local AI Sovereignty
            </Button>
            <Button component={Link} to="/Contact" variant="light" color="cyan" radius="xl">
              Get in touch
            </Button>
          </Group>
        </Stack>
      </motion.div>
    </Container>
  );
}
