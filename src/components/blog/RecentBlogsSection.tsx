import { motion } from 'framer-motion';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconClock } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

import { getAllPosts, toPostMeta } from '@/content/blogs';
import { useLanguage } from '@/i18n/language';
import classes from './RecentBlogsSection.module.css';

const RECENT_COUNT = 3;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function RecentBlogsSection() {
  const { language } = useLanguage();
  const { pathname } = useLocation();

  const currentSlugMatch = pathname.match(/^\/Blog\/([^/]+)$/);
  const excludeSlug = currentSlugMatch?.[1];

  const posts = getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, RECENT_COUNT)
    .map(toPostMeta);

  const copy = {
    en: {
      title: 'Latest Articles',
      subtitle: 'Quick reads on local AI, engineering, and building systems you control.',
      viewAll: 'View all articles',
      read: 'Read',
      minRead: 'min',
    },
    fr: {
      title: 'Derniers articles',
      subtitle: 'Lectures rapides sur l IA locale, l ingenierie et les systemes sous votre controle.',
      viewAll: 'Voir tous les articles',
      read: 'Lire',
      minRead: 'min',
    },
    es: {
      title: 'Ultimos articulos',
      subtitle: 'Lecturas rapidas sobre IA local, ingenieria y sistemas bajo tu control.',
      viewAll: 'Ver todos los articulos',
      read: 'Leer',
      minRead: 'min',
    },
  } as const;

  const t = copy[language];

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={classes.section} aria-labelledby="recent-blogs-heading">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <Group justify="space-between" align="flex-end" wrap="wrap" gap="md" mb="xl">
            <Stack gap={4}>
              <Title id="recent-blogs-heading" order={2} className={classes.title}>
                {t.title}
              </Title>
              <Text className={classes.subtitle} c="dimmed">
                {t.subtitle}
              </Text>
            </Stack>
            <Button
              component={Link}
              to="/Blog"
              variant="light"
              color="cyan"
              radius="xl"
              className={classes.viewAll}
            >
              {t.viewAll}
            </Button>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {posts.map((meta, index) => (
              <motion.div
                key={meta.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card
                  component={Link}
                  to={`/Blog/${meta.slug}`}
                  className={classes.card}
                  radius="lg"
                  p={0}
                  withBorder
                >
                  <div className={classes.cardImageWrap}>
                    <Image
                      src={meta.coverImageUrl}
                      alt={meta.title}
                      className={classes.cardImage}
                    />
                    <Badge className={classes.cardCategory} size="xs" variant="filled" color="cyan">
                      {meta.category}
                    </Badge>
                  </div>
                  <Stack gap="xs" p="md">
                    <Text size="xs" c="dimmed">
                      {formatDate(meta.publishedAt)}
                    </Text>
                    <Text fw={700} size="sm" lineClamp={2} className={classes.cardTitle}>
                      {meta.title}
                    </Text>
                    <Text size="xs" c="dimmed" lineClamp={2}>
                      {meta.excerpt}
                    </Text>
                    <Group justify="space-between" mt="xs">
                      <Group gap={4}>
                        <IconClock size={12} color="var(--mantine-color-dimmed)" />
                        <Text size="xs" c="dimmed">
                          {meta.readingTimeMinutes} {t.minRead}
                        </Text>
                      </Group>
                      <Text size="xs" fw={600} c="cyan">
                        {t.read} →
                      </Text>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </section>
  );
}
