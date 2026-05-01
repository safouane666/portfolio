import { ActionIcon, Box, Stack, Text, Tooltip } from '@mantine/core';
import { IconAt, IconCheck, IconCopy, IconPhone, IconSun } from '@tabler/icons-react';

import classes from './ContactIcons.module.css';
import { useState } from 'react';
import { useLanguage } from '@/i18n/language';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'onCopy'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  onCopy?: (text: string) => void;
  copyable?: boolean;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  onCopy,
  copyable = false,
  ...others
}: ContactIconProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const tooltipCopy = {
    en: { copy: 'Copy', copied: 'Copied!' },
    fr: { copy: 'Copier', copied: 'Copie !' },
    es: { copy: 'Copiar', copied: 'Copiado!' },
  } as const;

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

      {copyable && (
        <Tooltip
          label={copied ? tooltipCopy[language].copied : tooltipCopy[language].copy}
          position="left"
        >
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
  { title: 'Email', description: 'safouaneregaieg8@gmail.com', icon: IconAt, copyable: true },
  { title: 'Phone', description: '+216 50508213', icon: IconPhone, copyable: true },
];

export function ContactIconsList() {
  const { language } = useLanguage();
  const titles = {
    en: ['Email', 'Phone'],
    fr: ['Email', 'Telephone'],
    es: ['Email', 'Telefono'],
  } as const;

  const handleCopy = (text: string) => {
    console.log('Copied:', text);
    // You can add toast notification here if needed
  };

  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} title={titles[language][index]} onCopy={handleCopy} />
  ));

  return <Stack>{items}</Stack>;
}
