import { Container, Text, Title } from '@mantine/core';
import { IconCode, IconRobot } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import classes from './PathwayCards.module.css';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cards = [
  {
    to: '/WebDev',
    title: 'Web Development',
    description:
      'Portfolios, business sites, and full-stack apps. I build fast, responsive, and modern web experiences with React, TypeScript, and clean code.',
    icon: IconCode,
    className: classes.cardWebDev,
  },
  {
    to: '/Engineering',
    title: 'Engineering & Robotics',
    description:
      'From ROS2 and embedded systems to industrial automation and hardware projects. Explore my engineering work and technical solutions.',
    icon: IconRobot,
    className: classes.cardEngineering,
  },
];

export function PathwayCards() {
  return (
    <section className={classes.section}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--mantine-spacing-xl)' }}
        >
          <Title order={2} className={classes.sectionTitle}>
            Explore My Work
          </Title>
          <Text className={classes.sectionSubtitle}>
            Choose a path and discover projects, skills, and how I can help you.
          </Text>
        </motion.div>

        <motion.div
          className={classes.cardsGrid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.to} variants={cardVariants}>
                <Link
                  to={item.to}
                  className={`${classes.card} ${item.className}`}
                >
                  <div className={classes.cardGlow} aria-hidden />
                  <div className={classes.cardContent}>
                    <div className={classes.cardIconWrap}>
                      <Icon size={36} stroke={2} color="white" />
                    </div>
                    <Title order={3} className={classes.cardTitle}>
                      {item.title}
                    </Title>
                    <Text className={classes.cardDescription}>
                      {item.description}
                    </Text>
                    <span className={classes.cardCta}>
                      Explore
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
