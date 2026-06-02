import { motion } from 'framer-motion';
import {
  Badge,
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
import { Link } from 'react-router-dom';

import { getAllPosts, toPostMeta } from '@/content/blogs';
import classes from './BlogList.module.css';
import { useLanguage } from '@/i18n/language';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogListPage() {
  const { language } = useLanguage();
  const posts = getAllPosts().map(toPostMeta);

  const copy = {
    en: {
      title: 'Insights & Articles',
      subtitle:
        'Technical writing on local AI, data sovereignty, web engineering, and building systems that stay under your control.',
      read: 'Read article',
      minRead: 'min read',
      empty: 'New articles coming soon.',
    },
    fr: {
      title: 'Articles & Insights',
      subtitle:
        'Articles techniques sur l IA locale, la souverainete des donnees, le web et les systemes que vous controlez.',
      read: 'Lire l article',
      minRead: 'min de lecture',
      empty: 'De nouveaux articles arrivent bientot.',
    },
    es: {
      title: 'Articulos e Insights',
      subtitle:
        'Escritura tecnica sobre IA local, soberania de datos, ingenieria web y sistemas bajo tu control.',
      read: 'Leer articulo',
      minRead: 'min de lectura',
      empty: 'Nuevos articulos proximamente.',
    },
  } as const;

  const t = copy[language];

  return (
    <Container size="xl" className={classes.page}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title className={classes.title}>{t.title}</Title>
        <Text className={classes.subtitle} c="dimmed">
          {t.subtitle}
        </Text>
      </motion.div>

      {posts.length === 0 ? (
        <Text ta="center" c="dimmed" mt="xl">
          {t.empty}
        </Text>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mt="xl">
          {posts.map((meta, index) => (
            <motion.div
              key={meta.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card
                component={Link}
                to={`/Blog/${meta.slug}`}
                className={classes.card}
                radius="xl"
                p={0}
                withBorder
              >
                <div className={classes.cardImageWrap}>
                  <Image src={meta.coverImageUrl} alt={meta.title} className={classes.cardImage} />
                  <Badge className={classes.cardCategory} variant="filled" color="cyan" size="sm">
                    {meta.category}
                  </Badge>
                </div>
                <Stack gap="sm" p="lg">
                  <Text size="xs" c="dimmed">
                    {formatDate(meta.publishedAt)}
                  </Text>
                  <Title order={3} className={classes.cardTitle}>
                    {meta.title}
                  </Title>
                  <Text size="sm" c="dimmed" lineClamp={3} className={classes.cardExcerpt}>
                    {meta.excerpt}
                  </Text>
                  <Group gap="xs" className={classes.cardTags}>
                    {meta.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="dot" color="cyan" size="xs">
                        #{tag}
                      </Badge>
                    ))}
                  </Group>
                  <Group justify="space-between" mt="xs">
                    <Group gap={6}>
                      <IconClock size={14} color="var(--mantine-color-dimmed)" />
                      <Text size="xs" c="dimmed">
                        {meta.readingTimeMinutes} {t.minRead}
                      </Text>
                    </Group>
                    <Text size="sm" fw={600} c="cyan" className={classes.readLink}>
                      {t.read} →
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
