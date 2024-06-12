import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Image,
  ScrollArea,
  rem,
  useMantineTheme,
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
import LogoImg from '@/imgs/logo.png';
import classes from './HeaderMegaMenu.module.css';
import { useDisclosure } from '@mantine/hooks';

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={20} style={{ position: 'sticky', top: '0' }}>
      <header className={classes.header}>
        <Group w={100}>
          <Image className="image" radius={200} h={50} w={50} fit="contain" src={LogoImg} />
        </Group>
        <Group w="100%" className={classes.links_Group}>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>

            <a href="#" className={classes.link}>
              About
            </a>
            {/* <a href="#" className={classes.link}>
              Electrical Projects
            </a>
            <a href="#" className={classes.link}>
              Web Projects
            </a>
            <a href="#" className={classes.link}>
              Contact
            </a> */}
          </Group>
          <Group justify="flex-end" h="100%">
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
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>

          <a href="#" className={classes.link}>
            About
          </a>
          {/* <a href="#" className={classes.link}>
            Electrical Projects
          </a>
          <a href="#" className={classes.link}>
            Web Projects
          </a>
          <a href="#" className={classes.link}>
            Contact
          </a> */}

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
