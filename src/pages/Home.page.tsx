import { Button, Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import About from './About/About';
import Education from './Education/Education';
import { PathwayCards } from './Home/PathwayCards';
import homeClasses from './Home/PathwayCards.module.css';
import Hero from '@/components/Hero/Hero';
import { useLanguage } from '@/i18n/language';

export function HomePage() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: 'Ready to Launch Your Next Project?',
      description:
        "Whether you need a modern portfolio, a business website, or a full-stack app - I can make it happen. Let's discuss how we can bring your vision to life.",
      cta: 'Get in Touch',
    },
    fr: {
      title: 'Pret a lancer votre prochain projet ?',
      description:
        "Que vous ayez besoin d'un portfolio moderne, d'un site business ou d'une app full-stack, je peux le realiser.",
      cta: 'Me contacter',
    },
    es: {
      title: 'Listo para lanzar tu proximo proyecto?',
      description:
        'Si necesitas un portafolio moderno, un sitio de negocio o una app full-stack, puedo hacerlo realidad.',
      cta: 'Contactar',
    },
  } as const;
  const t = copy[language];

  return (
    <>
      <Hero />
      <About />
      <Education />

      <Container size="xl">
        <div className={homeClasses.accentLine} />
      </Container>

      <PathwayCards />

      <Container size="xl">
        <div className={homeClasses.accentLine} />
      </Container>

      <Container size="lg">
        <motion.div
          className={homeClasses.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <Title order={2} className={homeClasses.ctaTitle}>
            {t.title}
          </Title>
          <Text className={homeClasses.ctaDescription}>{t.description}</Text>
          <Button component={Link} to="/Contact" className={homeClasses.ctaButton} size="lg">
            {t.cta}
          </Button>
        </motion.div>
      </Container>
    </>
  );
}
