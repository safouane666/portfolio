import { Loader, Text } from '@mantine/core';
import React, { useRef } from 'react';

import About from './About/About';
import Hero from '@/components/Hero/Hero';

export function HomePage() {
  const aboutRef = useRef(null);
  return (
    <>
      <Hero />
      <About></About>
      <div style={{ display: 'flex', gap: '15px ', paddingLeft: '12rem', paddingBottom: '4rem' }}>
        <Loader color="blue" />
        <Text fz={20}> Still in progress :3</Text>
      </div>
    </>
  );
}
