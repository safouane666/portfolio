import { ActionIcon, Box, Stack, Text, Tooltip } from '@mantine/core';
import { IconAt, IconCheck, IconCopy, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';

import classes from './ContactIcons.module.css';
import { useState } from 'react';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'onCopy'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  onCopy?: (text: string) => void;
}

function ContactIcon({ icon: Icon, title, description, onCopy, ...others }: ContactIconProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description as string);
      setCopied(true);
      onCopy?.(description as string);

      // Reset copy status after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = description as string;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md" className={classes.icon}>
        <Icon size={24} />
      </Box>

      <div style={{ flex: 1 }}>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description} size="sm">
          {description}
        </Text>
      </div>

      {(title === 'Email' || title === 'Phone') && (
        <Tooltip label={copied ? 'Copied!' : 'Copy'} position="left">
          <ActionIcon
            onClick={handleCopy}
            variant="subtle"
            color={copied ? 'teal' : 'white'}
            size="sm"
            style={{
              color: copied ? 'var(--mantine-color-teal-4)' : 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'safouaneregaieg8@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+216 50508213', icon: IconPhone },
];

export function ContactIconsList() {
  const handleCopy = (text: string) => {
    console.log('Copied:', text);
    // You can add toast notification here if needed
  };

  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} onCopy={handleCopy} />
  ));

  return <Stack>{items}</Stack>;
}
