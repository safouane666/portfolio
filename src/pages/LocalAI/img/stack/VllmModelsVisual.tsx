import { Image, Text } from '@mantine/core';

import ollamaLogo from './ollama-logo.png';
import classes from './VllmModelsVisual.module.css';

const modelLogos = [
  { name: 'vLLM', label: 'vLLM' },
  { name: 'Ollama', src: ollamaLogo },
  {
    name: 'Llama',
    src: 'https://cdn.simpleicons.org/meta/0668E1',
    useIcon: true,
  },
  {
    name: 'Mistral',
    src: 'https://cdn.simpleicons.org/mistral/FF7000',
    useIcon: true,
  },
] as const;

export function VllmModelsVisual() {
  return (
    <div className={classes.wrap} aria-hidden>
      <div className={classes.terminal}>
        <div className={classes.terminalBar}>
          <span className={classes.dot} data-c="r" />
          <span className={classes.dot} data-c="y" />
          <span className={classes.dot} data-c="g" />
          <Text size="xs" c="dimmed" ml="xs">
            inference @ local-gpu-01
          </Text>
        </div>
        <pre className={classes.log}>
          <span className={classes.ok}>✓</span> vLLM engine ready · tensor parallel=2
          {'\n'}
          <span className={classes.ok}>✓</span> Model loaded: Llama-3.1-8B-Instruct (AWQ)
          {'\n'}
          <span className={classes.dim}>→</span> Throughput: 1.2k tok/s · p99 latency 42ms
        </pre>
      </div>
      <div className={classes.logos}>
        {modelLogos.map((logo) => (
          <div key={logo.name} className={classes.logoTile} title={logo.name}>
            {'label' in logo ? (
              <span className={classes.vllmText}>{logo.label}</span>
            ) : 'useIcon' in logo && logo.useIcon ? (
              <div
                className={classes.iconBadge}
                style={{
                  background: `center / 70% no-repeat url(${logo.src})`,
                }}
              />
            ) : (
              <Image src={'src' in logo ? logo.src : ''} alt={logo.name} h={28} w={28} fit="contain" />
            )}
            <Text size="10px" c="dimmed" mt={4} ta="center">
              {logo.name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
