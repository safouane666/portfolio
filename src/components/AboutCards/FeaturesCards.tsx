import {
  Button,
  Card,
  Collapse,
  Container,
  SimpleGrid,
  Text,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconAppWindow,
  IconBrandWebflow,
  IconCode,
  IconContainer,
  IconCookie,
  IconDatabase,
  IconLayoutBoardSplit,
} from '@tabler/icons-react';

import QT from '@/imgs/ct.png';
import classes from './FeaturesCards.module.css';
import texas from '@/imgs/texas.png';
import { useDisclosure } from '@mantine/hooks';

const mockdata = [
  {
    title: 'Front End developer',
    description:
      'I specialize in building dynamic and responsive web interfaces. I focus on writing clean, maintainable code and staying updated with the latest industry trends and best practices to ensure high-quality, performant, and accessible web solutions.',
    icon: IconCode,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
      'https://cdn-icons-png.flaticon.com/128/1199/1199124.png',
      'https://cdn-icons-png.flaticon.com/128/732/732190.png',
      'https://cdn-icons-png.flaticon.com/128/1126/1126012.png',
    ],
  },
  {
    title: 'Back end developer',
    description:
      'I specialize in developing robust and scalable server-side applications. I focus on writing efficient, maintainable code and staying updated with the latest industry trends and best practices to ensure secure, high-performance, and reliable backend solutions.',
    icon: IconDatabase,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/15379/15379746.png',
      'https://cdn-icons-png.flaticon.com/128/919/919830.png',
      'https://cdn-icons-png.flaticon.com/128/7506/7506880.png',
      'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
    ],
  },
  {
    title: 'Website Builders',
    description:
      'I am proficient in utilizing popular website building platforms such as Wix, WordPress, and YouCan. With a deep understanding of these tools, I can efficiently create, customize, and manage websites to meet various client needs.',
    icon: IconBrandWebflow,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/174/174881.png',
      'https://cdn-icons-png.flaticon.com/128/5968/5968753.png',
      'https://static-portal.youcan.shop/images/brand_images/Logo-YouCan-4.png',
    ],
  },
  {
    title: 'Electronic Cards Conception',
    description:
      'I excel in crafting sophisticated electronic card designs, focusing on precision and innovation. My expertise lies in developing high-performance, reliable circuits, ensuring each design is optimized for efficiency and cost-effectiveness. ',
    icon: IconLayoutBoardSplit,
    Tools: [
      'https://raw.githubusercontent.com/github/explore/7af95003139e68a3a54e382bb4f23a72836ef348/topics/altium-designer/altium-designer.png',
      'https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png',
    ],
  },
  {
    title: 'Embedded Systems Developer',
    description:
      'I specialize in coding and developing embedded systems using platforms such as Arduino, STM32, and Raspberry Pi. My expertise includes designing and implementing efficient, reliable, and scalable embedded solutions for various applications.',
    icon: IconContainer,
    Tools: [
      'https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png',
      'https://cdn.freebiesupply.com/logos/thumbs/2x/raspberry-pi-logo.png',
      'https://cdn-icons-png.flaticon.com/128/3665/3665923.png',
      'https://cdn-icons-png.flaticon.com/128/6132/6132222.png',
      'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',
      texas,
    ],
  },
  {
    title: 'Software Development Specialist',
    description:
      'I am experienced in developing software applications using QT, LabVIEW, and Delphi 7. My proficiency in these tools allows me to design and implement robust, user-friendly software solutions tailored to meet specific project requirements. ',
    icon: IconAppWindow,
    Tools: [
      QT,
      'https://cdn.worldvectorlogo.com/logos/national-instruments-labview.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4rYzV6G1CATBX12xcq2TXROgA2Uk9eVCyg&s',
    ],
  },
];

export function FeaturesCards() {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      style={{ zIndex: '1' }}
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" mt="sm" style={{ marginBottom: '1rem' }}>
        {feature.description}
      </Text>
      <Button
        variant="outline"
        size="xs"
        radius="md"
        style={{ marginTop: 'auto' }}
        onClick={toggle}
      >
        Tools used
      </Button>
      <Collapse in={opened}>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          {feature.Tools.map((ToolIcon, index) => (
            <img
              src={ToolIcon}
              key={index}
              style={{ width: rem(30), height: rem(30), marginTop: '0.5rem' }}
            />
          ))}
        </div>
      </Collapse>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing="xl">
        {features}
      </SimpleGrid>
    </Container>
  );
}
