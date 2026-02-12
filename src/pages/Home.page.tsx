import { motion } from 'framer-motion';
import React, { useRef } from 'react';

import About from './About/About';
import Education from './Education/Education';
import Hero from '@/components/Hero/Hero';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HomePage() {
  const aboutRef = useRef(null);
  return (
    <>
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeInUp}
        style={{ width: '100%', padding: '0 10%' }}
      >
        <div
          style={{
            height: 2,
            background: 'linear-gradient(90deg, var(--mantine-color-cyan-6), transparent)',
            margin: '1.5rem 0',
          }}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
        style={{ width: '100%' }}
      >
        <About />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
        style={{ width: '100%', padding: '0 10%' }}
      >
        <div
          style={{
            height: 2,
            background: 'linear-gradient(90deg, var(--mantine-color-cyan-6), transparent)',
            margin: '1.5rem 0',
          }}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeInUp}
        style={{ width: '100%' }}
      >
        <Education />
      </motion.div>
    </>
  );
}
