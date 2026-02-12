import { motion } from 'framer-motion';
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
  IconCloudUpload,
  IconCode,
  IconDeviceDesktop,
  IconLayoutGrid,
  IconShoppingBag,
  IconWorldWww,
} from '@tabler/icons-react';

import BusinessLandingImg from './img/BusinessLanding.webp';
import CompetitionWebsiteImg from './img/CompetitionWebsite.webp';
import FormsWebsiteImg from './img/FormsWebsite.webp';
import { HeroBullets } from './HeroBullets';
import { Link } from 'react-router-dom';
import OnlineStoreImg from './img/OnlineStore.webp';
import PortfolioImg from './img/PortfolioWebsite.webp';
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
    {
      title: 'Deployment & Hosting',
      desc: 'I handle the complete deployment process, setting up hosting on platforms like Vercel, GitHub Pages, or custom servers, configuring domains, SSL certificates, and ensuring your site goes live smoothly.',
      icon: <IconCloudUpload size={40} color="cyan" />,
    },
  ];

  const stack = [
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Angular',
      src: 'https://cdn-icons-png.flaticon.com/128/15484/15484402.png',
    },
    {
      name: 'TypeScript',
      src: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'FastAPI',
      src: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg',
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Vercel',
      src: 'https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg',
  },
 
  {
      name: 'Docker',
      src: 'https://cdn-icons-png.flaticon.com/128/919/919853.png',
  },
  {
      name: 'AWS',
      src: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png',
  },
  {
      name: 'Railway',
      src: 'https://railway.com/brand/logo-light.png',
  },
    {
      name: 'Postgres',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png',
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <Container size="xl">
      {/* HERO */}
      <HeroBullets />

      <div className={classes.accentLine} style={{ margin: '0 auto' }} />

      {/* What i Create */}
      <motion.section
        className={classes.sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
        <Title className={classes.sectionTitle}>What I Create</Title>
        <Text className={classes.sectionDescription} c="dimmed" mb="xl">
          From sleek portfolios to powerful e-commerce platforms — I design and build digital
          experiences that match your goals and brand identity.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mt="xl">
          {Creation.map((project, index) => (
            <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20px' }} custom={index}>
            <Card shadow="md" radius="lg" className={classes.card} withBorder>
              <Card.Section>
                <Image src={project.image} alt={project.title} height={200} fit="cover" />
              </Card.Section>

              <Stack gap="xs" p="md">
                <Text fw={600} size="lg">
                  {project.title}
                </Text>
                <Text size="sm" c="dimmed" lineClamp={3}>
                  {project.description}
                </Text>
              </Stack>
            </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.section>

      <div className={classes.accentLine} style={{ margin: '0 auto' }} />

      {/* SERVICES */}
      <motion.section
        className={classes.sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
        <Title className={classes.sectionTitle}>My Services</Title>
        <Text className={classes.sectionDescription} c="dimmed" mb="xl">
          Comprehensive web development solutions tailored to your business needs
        </Text>

        <Grid gutter="lg">
          {services.map((s, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20px' }} custom={i}>
              <Card shadow="md" radius="lg" p="xl" className={classes.serviceCard}>
                <Stack align="center" gap="md">
                  <div style={{ 
                    padding: '16px', 
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.1) 0%, rgba(0, 150, 255, 0.1) 100%)'
                  }}>
                    {s.icon}
                  </div>
                  <Text fw={700} size="lg" ta="center">
                    {s.title}
                  </Text>
                  <Text size="sm" c="dimmed" ta="center" lineClamp={4}>
                    {s.desc}
                  </Text>
                </Stack>
              </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </motion.section>

      <div className={classes.accentLine} style={{ margin: '0 auto' }} />

      {/* TECH STACK */}
      <motion.section
        className={classes.sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
        <Title className={classes.sectionTitle}>Tech Stack</Title>
        <Text className={classes.sectionDescription} c="dimmed" mb="xl">
          Technologies and tools I use to bring your ideas to life
        </Text>

        <div className={classes.techStackContainer}>
          {stack.map((tech, i) => (
            <Tooltip key={i} label={tech.name} withArrow transitionProps={{ duration: 200 }}>
              <div className={classes.techIcon}>
                <Image src={tech.src} w={48} h={48} fit="contain" alt={tech.name} />
              </div>
            </Tooltip>
          ))}
        </div>
      </motion.section>

      <div className={classes.accentLine} style={{ margin: '0 auto' }} />

      {/* Projects */}
      <motion.section
        id="projects"
        className={classes.sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
        <Title className={classes.sectionTitle}>My Projects</Title>
        <Text className={classes.sectionDescription} c="dimmed" mb="xl">
          Explore some of my recent work and see how I've helped businesses achieve their goals
        </Text>
        <ProjectsSection />
      </motion.section>

      <div className={classes.accentLine} style={{ margin: '0 auto' }} />

      {/* CTA */}
      <motion.div
        className={classes.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Title order={2} className={classes.ctaTitle}>
          Ready to Launch Your Next Project?
        </Title>
        <Text className={classes.ctaDescription}>
          Whether you need a modern portfolio, a business website, or a full-stack app — I can make
          it happen. Let's discuss how we can bring your vision to life.
        </Text>
        <Button 
          component={Link} 
          to="/Contact" 
          className={classes.ctaButton}
          size="lg"
        >
          Get in Touch
        </Button>
      </motion.div>
    </Container>
  );
}
