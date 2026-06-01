import { motion } from 'framer-motion';
import { Badge, Button, Container, Group, Text, Title } from '@mantine/core';
import { IconArrowRight, IconCalendar, IconStack2 } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { ServerRackIllustration } from './img/ServerRackIllustration';
import classes from './LocalAIHero.module.css';
import { useLanguage } from '@/i18n/language';

export function LocalAIHero() {
  const { language } = useLanguage();
  const copy = {
    en: {
      badge: 'Local AI Sovereignty',
      title: 'AI Power, Local Control:',
      titleAccent: 'Your Private Edge in Intelligence.',
      subhead:
        'Stop renting compute power. Own your data, own your future with dedicated, on-site AI servers.',
      ctaPrimary: 'Book a Discovery Call',
      ctaSecondary: 'Learn the Tech Stack',
      chip: '100% on-premise',
    },
    fr: {
      badge: 'Souverainete IA locale',
      title: 'Puissance IA, controle local :',
      titleAccent: 'Votre avantage prive en intelligence.',
      subhead:
        "Arretez de louer de la puissance de calcul. Possedez vos donnees et votre avenir avec des serveurs IA dedies sur site.",
      ctaPrimary: 'Reserver un appel decouverte',
      ctaSecondary: 'Decouvrir la stack technique',
      chip: '100 % on-premise',
    },
    es: {
      badge: 'Soberania IA local',
      title: 'Potencia IA, control local:',
      titleAccent: 'Tu ventaja privada en inteligencia.',
      subhead:
        'Deja de alquilar potencia de calculo. Controla tus datos y tu futuro con servidores IA dedicados on-site.',
      ctaPrimary: 'Reservar llamada de descubrimiento',
      ctaSecondary: 'Ver el stack tecnico',
      chip: '100 % on-premise',
    },
  } as const;
  const t = copy[language];

  const scrollToStack = () => {
    document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={classes.hero}>
      <div className={classes.heroGrid} aria-hidden />
      <Container size="xl">
        <div className={classes.inner}>
          <motion.div
            className={classes.content}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Badge size="lg" variant="light" color="cyan" className={classes.badge}>
              {t.badge}
            </Badge>
            <Title className={classes.title}>
              {t.title}{' '}
              <span className={classes.titleAccent}>{t.titleAccent}</span>
            </Title>
            <Text className={classes.subhead} mt="md">
              {t.subhead}
            </Text>
            <Group mt="xl" gap="md" className={classes.ctaGroup}>
            <Button
              component={Link}
              to="/Contact"
              size="md"
              radius="xl"
              color="cyan"
              className={classes.control}
              leftSection={<IconCalendar size={18} />}
            >
              {t.ctaPrimary}
            </Button>
              <Button
                variant="outline"
                size="md"
                radius="xl"
                color="cyan"
                className={classes.control}
                rightSection={<IconStack2 size={18} />}
                onClick={scrollToStack}
              >
                {t.ctaSecondary}
              </Button>
            </Group>
          </motion.div>

          <motion.div
            className={classes.visual}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={classes.visualGlow} aria-hidden />
            <ServerRackIllustration />
            <motion.div
              className={classes.floatingChip}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <IconArrowRight size={14} color="var(--mantine-color-cyan-5)" />
              <Text size="xs" fw={600}>
                {t.chip}
              </Text>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
