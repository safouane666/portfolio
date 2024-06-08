import About from './About/About';
import Hero from '@/components/Hero/Hero.tsx';
import { HeroTitle } from '@/components/Hero/HeroTitle';

export function HomePage() {
  return (
    <>
      <Hero />
      <About></About>
    </>
  );
}
