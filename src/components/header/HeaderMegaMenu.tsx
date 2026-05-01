import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Image,
  ScrollArea,
  SegmentedControl,
  rem,
} from '@mantine/core';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';

import LightDarkModeSwitch from '../switch/LightDarkModeSwitch';
import { Link } from 'react-router-dom';
import LogoImg from '@/imgs/logo.png';
import classes from './HeaderMegaMenu.module.css';
import { useDisclosure } from '@mantine/hooks';
import { useLanguage } from '@/i18n/language';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { language, setLanguage } = useLanguage();

  const labels = {
    en: {
      home: 'Home',
      engineering: 'Engineering',
      webDev: 'Web Development',
      contact: 'Contact',
      navigation: 'Navigation',
    },
    fr: {
      home: 'Accueil',
      engineering: 'Ingenierie',
      webDev: 'Developpement Web',
      contact: 'Contact',
      navigation: 'Navigation',
    },
    es: {
      home: 'Inicio',
      engineering: 'Ingenieria',
      webDev: 'Desarrollo Web',
      contact: 'Contacto',
      navigation: 'Navegacion',
    },
  } as const;

  const t = labels[language];

  return (
    <Box pb={20} style={{ position: 'sticky', top: '0' }}>
      <header className={classes.header}>
        <Group w={100}>
          <Image className="image" radius={200} h={50} w={50} fit="contain" src={LogoImg} />
        </Group>
        <Group w="100%" className={classes.links_Group}>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              {t.home}
            </Link>
            <Link to="/Engineering" className={classes.link}>
              {t.engineering}
            </Link>
            <Link to="/WebDev" className={classes.link}>
              {t.webDev}
            </Link>
            <Link to="/Contact" className={classes.link}>
              {t.contact}
            </Link>
          </Group>
          <Group justify="flex-end" h="100%">
            <SegmentedControl
              size="xs"
              value={language}
              onChange={(value) => setLanguage(value as 'en' | 'fr' | 'es')}
              data={[
                { label: 'EN', value: 'en' },
                { label: 'FR', value: 'fr' },
                { label: 'ES', value: 'es' },
              ]}
            />
            <LightDarkModeSwitch />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={t.navigation}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Link to="/" className={classes.link}>
            {t.home}
          </Link>
          <Link to="/Engineering" className={classes.link}>
            {t.engineering}
          </Link>
          <Link to="/WebDev" className={classes.link}>
            {t.webDev}
          </Link>
          <Link to="/Contact" className={classes.link}>
            {t.contact}
          </Link>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
