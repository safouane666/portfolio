import { Button, Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import About from './About/About';
import Education from './Education/Education';
import { PathwayCards } from './Home/PathwayCards';
import homeClasses from './Home/PathwayCards.module.css';
import Hero from '@/components/Hero/Hero';

export function HomePage() {
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
            Ready to Launch Your Next Project?
          </Title>
          <Text className={homeClasses.ctaDescription}>
            Whether you need a modern portfolio, a business website, or a full-stack app — I can make
            it happen. Let's discuss how we can bring your vision to life.
          </Text>
          <Button component={Link} to="/Contact" className={homeClasses.ctaButton} size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </Container>
    </>
  );
}
