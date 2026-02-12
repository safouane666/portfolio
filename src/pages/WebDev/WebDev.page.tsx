import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  IconApi,
  IconCode,
  IconDeviceDesktop,
  IconLayoutGrid,
  IconShoppingBag,
  IconWorldWww,
} from '@tabler/icons-react';

import BusinessLandingImg from './img/BusinessLanding.png';
import CompetitionWebsiteImg from './img/CompetitionWebsite.png';
import FormsWebsiteImg from './img/FormsWebsite.png';
import { HeroBullets } from './HeroBullets';
import { Link } from 'react-router-dom';
import OnlineStoreImg from './img/OnlineStore.png';
import PortfolioImg from './img/PortfolioWebsite.png';
import ProjectsSection from './ProjectsSection';
import classes from './WebDevPage.module.css';

export default function WebDevPage() {
  const services = [
    {
      title: 'Custom Website Development',
      desc: 'From modern portfolios to landing pages and full business websites, I build responsive, fast, and SEO-friendly platforms tailored to your goals.',
      icon: <IconDeviceDesktop size={40} color="cyan" />,
    },
    {
      title: 'E-commerce & Online Stores',
      desc: 'I create elegant and secure online shops using React or website builders like YouCan and WordPress, optimized for sales and easy product management.',
      icon: <IconShoppingBag size={40} color="cyan" />,
    },
    {
      title: 'API Integration & Automation',
      desc: 'Seamlessly connect your website with external services, CRMs, or automation tools using REST or GraphQL APIs for smoother business operations.',
      icon: <IconApi size={40} color="cyan" />,
    },
    {
      title: 'Website Builders & CMS Solutions',
      desc: 'Need a website without coding? I can set up and customize Wix, WordPress, or YouCan sites to match your brand and workflow perfectly.',
      icon: <IconLayoutGrid size={40} color="cyan" />,
    },

    {
      title: 'Performance & SEO Optimization',
      desc: 'Make your website lightning-fast, secure, and discoverable with optimized code, analytics setup, and smart SEO techniques.',
      icon: <IconWorldWww size={40} color="cyan" />,
    },
  ];

  const stack = [
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    {
      name: 'WordPress',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    },
    { name: 'Wix', src: 'https://cdn-icons-png.flaticon.com/128/5968/5968753.png' },
    {
      name: 'YouCan',
      src: 'https://static-portal.youcan.shop/images/brand_images/Logo-YouCan-4.png',
    },
    { name: 'API Integration', src: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png' },
  ];
  const Creation = [
    {
      title: 'Portfolio Websites',
      image: PortfolioImg,
      description:
        'Elegant and fast-loading portfolio websites to showcase your work, skills, and personal brand — designed for freelancers, creatives, and professionals.',
    },
    {
      title: 'Online Stores',
      image: OnlineStoreImg,
      description:
        'Fully functional and visually appealing e-commerce websites with secure checkout, product management, and responsive design for all devices.',
    },
    {
      title: 'Business Landing Pages',
      image: BusinessLandingImg,
      description:
        'Clean, conversion-optimized landing pages to promote your business, product, or service with clear messaging and call-to-action elements.',
    },
    {
      title: 'Competition Websites',
      image: CompetitionWebsiteImg,
      description:
        'Interactive competition or giveaway websites with dynamic forms, leaderboards, and automated submissions — perfect for marketing campaigns.',
    },
  ];

  return (
    <Container>
      {/* HERO */}
      <HeroBullets />

      {/* What i Create */}
      <section style={{ padding: '100px 0' }}>
        <Text
          size="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          style={{
            fontSize: '50px',
            fontWeight: 900,
            justifyContent: 'center',
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          {' '}
          What I Create
        </Text>

        <Text ta="center" c="dimmed" mb={40}>
          From sleek portfolios to powerful e-commerce platforms — I design and build digital
          experiences that match your goals and brand identity.
        </Text>

        <SimpleGrid cols={4} spacing="lg" mt="xl" maw={1100} mx="auto">
          {Creation.map((project, index) => (
            <Card key={index} shadow="md" radius="md" className={classes.card}>
              <Card.Section>
                <Image src={project.image} alt={project.title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={600}>{project.title}</Text>
              </Group>

              <Text size="sm" c="dimmed">
                {project.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </section>
      {/* SERVICES */}
      <Stack mb={80}>
        <Text
          size="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          style={{
            fontSize: '50px',
            fontWeight: 900,
            justifyContent: 'center',
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          {' '}
          My Services
        </Text>

        <Grid>
          {services.map((s, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="md"
                radius="lg"
                p="lg"
                withBorder
                style={{
                  textAlign: 'center',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Group justify="center" mb="sm">
                  {s.icon}
                </Group>
                <Text fw={600} size="lg" mb={8}>
                  {s.title}
                </Text>
                <Text size="sm" c="dimmed">
                  {s.desc}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      {/* TECH STACK */}
      <Stack align="center" mb={80}>
        <Text
          size="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          style={{
            fontSize: '50px',
            fontWeight: 900,
            justifyContent: 'center',
            display: 'flex',
            marginBottom: '20px',
          }}
        >
          {' '}
          Tech Stack
        </Text>

        <Group gap="xl" mt="md" justify="center">
          {stack.map((tech, i) => (
            <Tooltip key={i} label={tech.name} withArrow transitionProps={{ duration: 150 }}>
              <Image
                src={tech.src}
                w={50}
                h={50}
                fit="contain"
                style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </Tooltip>
          ))}
        </Group>
      </Stack>
      {/* Projects */}
      <Text
        size="xl"
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        style={{
          fontSize: '50px',
          fontWeight: 900,
          justifyContent: 'center',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        {' '}
        My Projects
      </Text>
      <ProjectsSection />
      {/* CTA */}
      <Flex direction="column" align="center" mb={100}>
        <Title order={2} ta="center">
          Ready to Launch Your Next Project?
        </Title>
        <Text ta="center" maw={600} mb="md">
          Whether you need a modern portfolio, a business website, or a full-stack app — I can make
          it happen.
        </Text>
        <Button component={Link} to="/portfolio/Contact" color="cyan" size="md">
          Get in Touch
        </Button>
      </Flex>
    </Container>
  );
}
