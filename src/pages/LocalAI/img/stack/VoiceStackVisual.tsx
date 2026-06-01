import { Text } from '@mantine/core';
import { IconMicrophone, IconSearch, IconVolume } from '@tabler/icons-react';

import classes from './VoiceStackVisual.module.css';

export function VoiceStackVisual() {
  return (
    <div className={classes.wrap} aria-hidden>
      <div className={classes.flow}>
        <div className={classes.step}>
          <IconMicrophone size={22} color="var(--mantine-color-cyan-5)" />
          <Text size="xs" fw={600}>
            STT
          </Text>
          <Text size="10px" c="dimmed">
            Speech in
          </Text>
        </div>
        <span className={classes.arrow}>→</span>
        <div className={classes.step}>
          <IconSearch size={22} color="var(--mantine-color-cyan-5)" />
          <Text size="xs" fw={600}>
            Search
          </Text>
          <Text size="10px" c="dimmed">
            Live web
          </Text>
        </div>
        <span className={classes.arrow}>→</span>
        <div className={classes.step}>
          <IconVolume size={22} color="var(--mantine-color-cyan-5)" />
          <Text size="xs" fw={600}>
            TTS
          </Text>
          <Text size="10px" c="dimmed">
            Voice out
          </Text>
        </div>
      </div>
      <div className={classes.waveform}>
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={classes.bar}
            style={{
              height: `${20 + Math.sin(i * 0.55) * 14 + (i % 3) * 6}px`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
