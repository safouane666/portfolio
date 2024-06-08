import { Loader, Text } from '@mantine/core';

import About from './About/About';
import Hero from '@/components/Hero/Hero.tsx';
import { HeroTitle } from '@/components/Hero/HeroTitle';

export function HomePage() {
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
