import {
  Button,
  Card,
  Collapse,
  Container,
  SimpleGrid,
  Text,
  Tooltip,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconAppWindow,
  IconBrandWebflow,
  IconCode,
  IconContainer,
  IconDatabase,
  IconRobot,
} from '@tabler/icons-react';

import QT from '@/imgs/ct.png';
import classes from './FeaturesCards.module.css';
import { useDisclosure } from '@mantine/hooks';

type ToolItem = { name: string; src: string };

const mockdata = [
  {
    title: 'Front End developer',
    description:
      'I specialize in building dynamic and responsive web interfaces. I focus on writing clean, maintainable code and staying updated with the latest industry trends and best practices to ensure high-quality, performant, and accessible web solutions.',
    icon: IconCode,
    Tools: [
      { name: 'HTML5', src: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png' },
      { name: 'CSS3', src: 'https://cdn-icons-png.flaticon.com/128/1199/1199124.png' },
      { name: 'JavaScript', src: 'https://cdn-icons-png.flaticon.com/128/732/732190.png' },
      { name: 'React', src: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png' },
      {
        name: 'Angular',
        src: 'https://cdn-icons-png.flaticon.com/128/15484/15484402.png',
      },
      {
        name: 'Next.js',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
    ] as ToolItem[],
  },
  {
    title: 'Back end developer',
    description:
      'I specialize in developing robust and scalable server-side applications. I focus on writing efficient, maintainable code and staying updated with the latest industry trends and best practices to ensure secure, high-performance, and reliable backend solutions.',
    icon: IconDatabase,
    Tools: [
      { name: 'Node.js', src: 'https://cdn-icons-png.flaticon.com/128/15379/15379746.png' },
      {
        name: 'MongoDB',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Express.js',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png',
      },
      {
        name: 'REST API',
        src: 'https://cdn-icons-png.flaticon.com/128/4166/4166099.png',
      },
      {
        name: 'Postgres',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png',
      },
      { name: 'TypeScript', src: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' },
    ] as ToolItem[],
  },
  {
    title: 'Website Builders',
    description:
      'I am proficient in utilizing popular website building platforms such as Wix, WordPress, and YouCan. With a deep understanding of these tools, I can efficiently create, customize, and manage websites to meet various client needs.',
    icon: IconBrandWebflow,
    Tools: [
      { name: 'WordPress', src: 'https://cdn-icons-png.flaticon.com/128/174/174881.png' },
      { name: 'wix', src: 'https://cdn-icons-png.flaticon.com/128/5968/5968753.png' },
      {
        name: 'YouCan',
        src: 'https://static-portal.youcan.shop/images/brand_images/Logo-YouCan-4.png',
      },
    ] as ToolItem[],
  },
  {
    title: 'Robotics Engineering',
    description:
      'I design and develop robotic systems that combine hardware control, embedded programming, and intelligent automation. From ROS2-based robots to industrial robotic arms, I focus on creating efficient, precise, and innovative solutions.',
    icon: IconRobot,

    Tools: [
      {
        name: 'simence TIA portal',
        src: 'https://www.simens.com/en-us/products/simens-tia-portal.html',
      },
      {
        name: 'Gazebo',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Gazebo_logo_without_text.svg',
      },
      { name: 'ROS', src: 'https://husarion.com/img/ros/ros_logo.png' },
    ],
  },
  {
    title: 'Embedded Systems Developer',
    description:
      'I specialize in coding and developing embedded systems using platforms such as Arduino, STM32, and Raspberry Pi. My expertise includes designing and implementing efficient, reliable, and scalable embedded solutions for various applications.',
    icon: IconContainer,
    Tools: [
      {
        name: 'Arduino',
        src: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png',
      },
      {
        name: 'Raspberry Pi',
        src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/raspberry-pi-logo.png',
      },
      { name: 'STM32', src: 'https://cdn-icons-png.flaticon.com/128/3665/3665923.png' },
      { name: 'C++', src: 'https://cdn-icons-png.flaticon.com/128/6132/6132222.png' },
      { name: 'Python', src: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png' },
      {
        name: 'Texas Instruments',
        src: 'data:image/png;base64,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',
      },
    ] as ToolItem[],
  },
  {
    title: 'Software Development Specialist',
    description:
      'I am experienced in developing software applications using QT, LabVIEW, and Delphi 7. My proficiency in these tools allows me to design and implement robust, user-friendly software solutions tailored to meet specific project requirements. ',
    icon: IconAppWindow,
    Tools: [
      { name: 'Qt', src: QT },
      {
        name: 'LabVIEW',
        src: 'https://cdn.worldvectorlogo.com/logos/national-instruments-labview.svg',
      },
      {
        name: 'Delphi',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4rYzV6G1CATBX12xcq2TXROgA2Uk9eVCyg&s',
      },
    ] as ToolItem[],
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
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          {feature.Tools.map((tool, index) => {
            const src = typeof tool === 'string' ? tool : tool.src;
            const name = typeof tool === 'string' ? 'Tool' : tool.name;
            return (
              <Tooltip key={index} label={name} withArrow>
                <img
                  src={src}
                  alt={name}
                  style={{ width: rem(30), height: rem(30), marginTop: '0.5rem' }}
                />
              </Tooltip>
            );
          })}
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
