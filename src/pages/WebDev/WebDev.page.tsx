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
  IconArrowRight,
  IconBrandGithub,
  IconBrain,
  IconCloudUpload,
  IconCode,
  IconDeviceDesktop,
  IconLayoutGrid,
  IconRobot,
  IconSearch,
  IconShoppingBag,
  IconWorldWww,
} from '@tabler/icons-react';

import BusinessLandingImg from './img/BusinessLanding.webp';
import CompetitionWebsiteImg from './img/CompetitionWebsite.webp';
import { HeroBullets } from './HeroBullets';
import { Link } from 'react-router-dom';
import OnlineStoreImg from './img/OnlineStore.webp';
import PortfolioImg from './img/PortfolioWebsite.webp';
import ProjectsSection from './ProjectsSection';
import WebAppTemplatePromoImg from './img/WebAppTemplatePromo.svg';
import classes from './WebDevPage.module.css';
import { useLanguage } from '@/i18n/language';

export default function WebDevPage() {
  const { language } = useLanguage();
  const copy = {
    en: {
      whatCreate: 'What I Create',
      whatCreateDesc:
        'From sleek portfolios to powerful e-commerce platforms - I design and build digital experiences that match your goals and brand identity.',
      services: 'My Services',
      servicesDesc: 'Comprehensive web development solutions tailored to your business needs',
      stack: 'Tech Stack',
      stackDesc: 'Technologies and tools I use to bring your ideas to life',
      projects: 'My Projects',
      projectsDesc:
        "Explore some of my recent work and see how I've helped businesses achieve their goals",
      aiTitle: 'AI Integration Inside Web App Workflows',
      aiDesc:
        'I design AI-powered experiences directly inside web apps, from smart search and task execution to workflow automation, local agents, and multimodal features.',
      aiCards: [
        {
          title: 'Search & Retrieval',
          desc: 'Semantic search, RAG flows, document lookup, knowledge assistants, and context-aware user support.',
          icon: 'search',
        },
        {
          title: 'Tasks & Agents',
          desc: 'Task runners, assistant panels, local agents with Ollama, tool orchestration, and human-in-the-loop actions.',
          icon: 'robot',
        },
        {
          title: 'Automation & AI UX',
          desc: 'Automated workflows, prompt pipelines, VLM-powered image understanding, and cloud AI integrations for production apps.',
          icon: 'brain',
        },
      ],
      aiLocalTitle: 'Local-first AI stack',
      aiLocalDesc:
        'For privacy-focused workflows, I can integrate local models with Ollama, VLM pipelines, and on-device agents for controlled, low-latency experiences.',
      aiCloudTitle: 'Cloud AI providers',
      aiCloudDesc:
        'When the product needs stronger hosted intelligence, I can connect OpenAI, Claude, and Google APIs for generation, reasoning, classification, and multimodal tasks.',
      templateTitle: 'Free Web App Template',
      templateDesc:
        'A production-ready starter for modern web apps, built with Next.js, Express, TypeScript, and clean project architecture. It is fully usable, free for everyone, and ready to speed up your next build.',
      templateBadge: 'Open source starter',
      templateHighlights: [
        'Free to use for personal and commercial projects',
        'Monorepo setup with frontend, backend, and shared package',
        'Production-minded stack with Docker, CI/CD, and API docs',
      ],
      templatePrimary: 'View on GitHub',
      templateSecondary: 'See projects first',
      ctaTitle: 'Ready to Launch Your Next Project?',
      ctaDesc:
        "Whether you need a modern portfolio, a business website, or a full-stack app - I can make it happen. Let's discuss how we can bring your vision to life.",
      cta: 'Get in Touch',
    },
    fr: {
      whatCreate: 'Ce que je cree',
      whatCreateDesc:
        'Du portfolio elegant a la plateforme e-commerce, je cree des experiences digitales alignees a vos objectifs.',
      services: 'Mes Services',
      servicesDesc: 'Des solutions web completes adaptees a vos besoins',
      stack: 'Stack Technique',
      stackDesc: "Technologies et outils que j'utilise pour vos projets",
      projects: 'Mes Projets',
      projectsDesc: 'Decouvrez quelques projets recents realises pour mes clients',
      aiTitle: 'Integration IA dans les workflows web app',
      aiDesc:
        'J integre des experiences IA directement dans les applications web, de la recherche intelligente a l execution de taches, l automatisation et les fonctions multimodales.',
      aiCards: [
        {
          title: 'Recherche & retrieval',
          desc: 'Recherche semantique, flux RAG, exploration documentaire, assistants de connaissance et support contextuel.',
          icon: 'search',
        },
        {
          title: 'Taches & agents',
          desc: 'Executions de taches, panneaux assistants, agents locaux avec Ollama, orchestration d outils et actions avec validation humaine.',
          icon: 'robot',
        },
        {
          title: 'Automatisation & UX IA',
          desc: 'Workflows automatises, pipelines de prompts, analyse d images via VLM et integrations cloud IA pour des apps de production.',
          icon: 'brain',
        },
      ],
      aiLocalTitle: 'Stack IA locale',
      aiLocalDesc:
        'Pour les workflows sensibles a la confidentialite, je peux integrer des modeles locaux avec Ollama, des pipelines VLM et des agents on-device.',
      aiCloudTitle: 'Fournisseurs IA cloud',
      aiCloudDesc:
        'Quand le produit demande plus de puissance, je peux connecter OpenAI, Claude et Google APIs pour generation, raisonnement, classification et taches multimodales.',
      templateTitle: 'Template gratuit pour web app',
      templateDesc:
        'Un starter moderne et pret pour la production, construit avec Next.js, Express, TypeScript et une architecture propre. Il est totalement utilisable, gratuit pour tout le monde, et ideal pour accelerer un nouveau projet.',
      templateBadge: 'Starter open source',
      templateHighlights: [
        'Gratuit pour usage personnel et commercial',
        'Monorepo avec frontend, backend et package partage',
        'Stack pensee production avec Docker, CI/CD et documentation API',
      ],
      templatePrimary: 'Voir sur GitHub',
      templateSecondary: 'Voir les projets',
      ctaTitle: 'Pret a lancer votre prochain projet ?',
      ctaDesc: 'Parlons de votre idee et construisons une solution web moderne ensemble.',
      cta: 'Me contacter',
    },
    es: {
      whatCreate: 'Lo que creo',
      whatCreateDesc:
        'Desde portafolios elegantes hasta e-commerce potentes, creo experiencias digitales alineadas con tus objetivos.',
      services: 'Mis Servicios',
      servicesDesc: 'Soluciones web completas adaptadas a tu negocio',
      stack: 'Stack Tecnologico',
      stackDesc: 'Tecnologias y herramientas que uso para tus ideas',
      projects: 'Mis Proyectos',
      projectsDesc: 'Explora algunos de mis trabajos recientes',
      aiTitle: 'Integracion de IA en workflows web app',
      aiDesc:
        'Integro experiencias con IA directamente dentro de aplicaciones web, desde busqueda inteligente y ejecucion de tareas hasta automatizacion, agentes locales y funciones multimodales.',
      aiCards: [
        {
          title: 'Busqueda y retrieval',
          desc: 'Busqueda semantica, flujos RAG, consulta de documentos, asistentes de conocimiento y soporte contextual.',
          icon: 'search',
        },
        {
          title: 'Tareas y agentes',
          desc: 'Ejecutores de tareas, paneles asistentes, agentes locales con Ollama, orquestacion de herramientas y acciones con supervision humana.',
          icon: 'robot',
        },
        {
          title: 'Automatizacion y UX IA',
          desc: 'Workflows automatizados, pipelines de prompts, analisis visual con VLM e integraciones cloud IA para apps en produccion.',
          icon: 'brain',
        },
      ],
      aiLocalTitle: 'Stack IA local',
      aiLocalDesc:
        'Para flujos centrados en privacidad, puedo integrar modelos locales con Ollama, pipelines VLM y agentes on-device para experiencias rapidas y controladas.',
      aiCloudTitle: 'Proveedores IA cloud',
      aiCloudDesc:
        'Cuando el producto necesita mas potencia alojada, puedo conectar OpenAI, Claude y Google APIs para generacion, razonamiento, clasificacion y tareas multimodales.',
      templateTitle: 'Template gratis para web app',
      templateDesc:
        'Un starter moderno y listo para produccion, construido con Next.js, Express, TypeScript y una arquitectura limpia. Es totalmente utilizable, gratis para todos, y perfecto para acelerar tu proximo proyecto.',
      templateBadge: 'Starter open source',
      templateHighlights: [
        'Gratis para proyectos personales y comerciales',
        'Monorepo con frontend, backend y paquete compartido',
        'Stack orientado a produccion con Docker, CI/CD y documentacion API',
      ],
      templatePrimary: 'Ver en GitHub',
      templateSecondary: 'Ver proyectos',
      ctaTitle: 'Listo para lanzar tu proximo proyecto?',
      ctaDesc: 'Hablemos de tu idea y construyamos una solucion web moderna.',
      cta: 'Contactar',
    },
  } as const;
  const t = copy[language];
  const servicesByLanguage = {
    en: [
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
    ],
    fr: [
      {
        title: 'Developpement de sites sur mesure',
        desc: 'Du portfolio moderne au site business complet, je cree des plateformes rapides, responsives et optimisees SEO.',
        icon: <IconDeviceDesktop size={40} color="cyan" />,
      },
      {
        title: 'E-commerce & boutiques en ligne',
        desc: 'Je cree des boutiques elegantes et securisees avec React, YouCan ou WordPress, optimisees pour les ventes.',
        icon: <IconShoppingBag size={40} color="cyan" />,
      },
      {
        title: 'Integration API & automatisation',
        desc: "Connexion de votre site a des services externes, CRM et outils d'automatisation via API REST/GraphQL.",
        icon: <IconApi size={40} color="cyan" />,
      },
      {
        title: 'Solutions CMS & builders',
        desc: 'Mise en place et personnalisation de Wix, WordPress ou YouCan selon votre marque et votre workflow.',
        icon: <IconLayoutGrid size={40} color="cyan" />,
      },
      {
        title: 'Performance & SEO',
        desc: 'Optimisation vitesse, securite, analytics et referencement pour rendre votre site visible et efficace.',
        icon: <IconWorldWww size={40} color="cyan" />,
      },
      {
        title: 'Deploiement & hebergement',
        desc: 'Je gere le deploiement complet: hebergement, domaine, SSL et mise en ligne stable.',
        icon: <IconCloudUpload size={40} color="cyan" />,
      },
    ],
    es: [
      {
        title: 'Desarrollo web a medida',
        desc: 'Desde portafolios modernos hasta sitios de negocio completos, creo plataformas rapidas, responsivas y optimizadas para SEO.',
        icon: <IconDeviceDesktop size={40} color="cyan" />,
      },
      {
        title: 'E-commerce y tiendas online',
        desc: 'Creo tiendas elegantes y seguras con React, YouCan o WordPress, optimizadas para vender.',
        icon: <IconShoppingBag size={40} color="cyan" />,
      },
      {
        title: 'Integracion API y automatizacion',
        desc: 'Conecto tu web con servicios externos, CRM y herramientas de automatizacion mediante APIs REST o GraphQL.',
        icon: <IconApi size={40} color="cyan" />,
      },
      {
        title: 'Constructores web y CMS',
        desc: 'Configuro y personalizo Wix, WordPress o YouCan para que se adapten a tu marca.',
        icon: <IconLayoutGrid size={40} color="cyan" />,
      },
      {
        title: 'Rendimiento y SEO',
        desc: 'Optimizo velocidad, seguridad, analitica y SEO para mejorar visibilidad y conversion.',
        icon: <IconWorldWww size={40} color="cyan" />,
      },
      {
        title: 'Despliegue y hosting',
        desc: 'Me encargo del despliegue completo: hosting, dominio, SSL y lanzamiento estable.',
        icon: <IconCloudUpload size={40} color="cyan" />,
      },
    ],
  } as const;
  const services = servicesByLanguage[language];
  const aiIcons = {
    search: <IconSearch size={28} color="var(--mantine-color-cyan-5)" />,
    robot: <IconRobot size={28} color="var(--mantine-color-cyan-5)" />,
    brain: <IconBrain size={28} color="var(--mantine-color-cyan-5)" />,
  } as const;

  const aiProviders = [
    {
      name: 'Ollama',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVZ9JJ3PrF8m-lYW-rPzJpZJVMzq3CwpdsQ&s',
    },
    {
      name: 'OpenAI',
      src: 'https://cdn-icons-png.flaticon.com/128/12222/12222560.png',
    },
    {
      name: 'Claude',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM91o7r1wba01xcHW15PLqbe-ONaTIjOO3g&s',
    },
    {
      name: 'Google AI',
      src: 'https://cdn.simpleicons.org/google/ffffff',
    },
    {
      name: 'VLLM',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VFscDMrJeE01Pjg3I1l2wfmNCYtD_pnLvg&s',
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
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
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
  const creationsByLanguage = {
    en: [
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
    ],
    fr: [
      {
        title: 'Sites Portfolio',
        image: PortfolioImg,
        description:
          'Sites portfolio elegants et rapides pour mettre en valeur vos projets, competences et votre image professionnelle.',
      },
      {
        title: 'Boutiques en ligne',
        image: OnlineStoreImg,
        description:
          'E-commerce complet avec paiement securise, gestion produits et experience responsive.',
      },
      {
        title: 'Landing pages business',
        image: BusinessLandingImg,
        description:
          'Landing pages claires et optimisees conversion pour promouvoir votre activite avec des CTA efficaces.',
      },
      {
        title: 'Sites de concours',
        image: CompetitionWebsiteImg,
        description:
          'Sites interactifs de concours avec formulaires dynamiques, classements et soumissions automatisees.',
      },
    ],
    es: [
      {
        title: 'Sitios de Portfolio',
        image: PortfolioImg,
        description:
          'Sitios portfolio elegantes y rapidos para mostrar tu trabajo, habilidades y marca personal.',
      },
      {
        title: 'Tiendas online',
        image: OnlineStoreImg,
        description:
          'E-commerce completo y atractivo con pago seguro, gestion de productos y diseno responsive.',
      },
      {
        title: 'Landing pages de negocio',
        image: BusinessLandingImg,
        description:
          'Landing pages limpias y optimizadas para conversion, con mensajes claros y CTA efectivos.',
      },
      {
        title: 'Sitios para concursos',
        image: CompetitionWebsiteImg,
        description:
          'Sitios interactivos para sorteos o concursos con formularios dinamicos y envios automatizados.',
      },
    ],
  } as const;
  const Creation = creationsByLanguage[language];

  return (
    <Container size="xl">
      {/* HERO */}
      <HeroBullets />

      <div className={classes.accentLine} style={{ marginTop: 'var(--mantine-spacing-xl)' }} />

      {/* What i Create */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.whatCreate}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.whatCreateDesc}
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mt="xl">
          {Creation.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
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
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* SERVICES */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.services}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.servicesDesc}
          </Text>
        </motion.div>

        <Grid gutter="lg">
          {services.map((s, i) => (
            <Grid.Col key={i} span={{ base: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card shadow="md" radius="lg" p="xl" className={classes.serviceCard}>
                  <Stack align="center" gap="md">
                    <div
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        background:
                          'linear-gradient(135deg, rgba(0, 200, 255, 0.1) 0%, rgba(0, 150, 255, 0.1) 100%)',
                      }}
                    >
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
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* TECH STACK */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.stack}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.stackDesc}
          </Text>
        </motion.div>

        <motion.div
          className={classes.techStackContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05, delayChildren: 0.2 },
            },
            hidden: {},
          }}
        >
          {stack.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
            >
              <Tooltip label={tech.name} withArrow transitionProps={{ duration: 200 }}>
                <div className={classes.techIcon}>
                  <Image src={tech.src} w={48} h={48} fit="contain" alt={tech.name} />
                </div>
              </Tooltip>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* AI Integration */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.aiTitle}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.aiDesc}
          </Text>
        </motion.div>

        <Grid gutter="lg">
          {t.aiCards.map((item, index) => (
            <Grid.Col key={item.title} span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className={classes.aiCard} radius="xl" p="xl" withBorder>
                  <Stack gap="md">
                    <div className={classes.aiIconWrap}>
                      {aiIcons[item.icon as keyof typeof aiIcons]}
                    </div>
                    <Text fw={700} size="lg">
                      {item.title}
                    </Text>
                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.75 }}>
                      {item.desc}
                    </Text>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        <Card className={classes.aiProvidersCard} radius="xl" p="xl" withBorder mt="xl">
          <Grid align="center" gutter="xl">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <div>
                  <Text className={classes.aiInfoTitle}>{t.aiLocalTitle}</Text>
                  <Text className={classes.aiInfoText}>{t.aiLocalDesc}</Text>
                </div>
                <div>
                  <Text className={classes.aiInfoTitle}>{t.aiCloudTitle}</Text>
                  <Text className={classes.aiInfoText}>{t.aiCloudDesc}</Text>
                </div>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <div className={classes.logoGrid}>
                {aiProviders.map((provider) => (
                  <Tooltip key={provider.name} label={provider.name} withArrow>
                    <div className={classes.logoTile}>
                      <Image src={provider.src} alt={provider.name} w={42} h={42} fit="contain" />
                    </div>
                  </Tooltip>
                ))}
              </div>
            </Grid.Col>
          </Grid>
        </Card>
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* Projects */}
      <section id="projects" className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.projects}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.projectsDesc}
          </Text>
        </motion.div>
        <ProjectsSection />
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* Free template */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className={classes.templateCard} radius="xl" p="xl" withBorder>
            <Grid align="center" gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="md">
                  <Group gap="xs">
                    <IconCode size={18} color="var(--mantine-color-cyan-5)" />
                    <Text className={classes.templateBadge}>{t.templateBadge}</Text>
                  </Group>

                  <Title className={classes.templateTitle}>{t.templateTitle}</Title>
                  <Text className={classes.templateDescription}>{t.templateDesc}</Text>

                  <Stack gap="xs">
                    {t.templateHighlights.map((highlight) => (
                      <Group key={highlight} align="flex-start" gap="sm" wrap="nowrap">
                        <IconArrowRight size={18} color="var(--mantine-color-cyan-5)" />
                        <Text size="sm" c="dimmed">
                          {highlight}
                        </Text>
                      </Group>
                    ))}
                  </Stack>

                  <Group mt="sm">
                    <Button
                      component="a"
                      href="https://github.com/safouane666/WebAppTemplate"
                      target="_blank"
                      rel="noreferrer"
                      leftSection={<IconBrandGithub size={18} />}
                      color="cyan"
                      size="md"
                    >
                      {t.templatePrimary}
                    </Button>
                    <Button variant="light" color="cyan" component="a" href="#projects" size="md">
                      {t.templateSecondary}
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <div className={classes.templateImageWrap}>
                  <Image
                    src={WebAppTemplatePromoImg}
                    alt={t.templateTitle}
                    className={classes.templateImage}
                  />
                </div>
              </Grid.Col>
            </Grid>
          </Card>
        </motion.div>
      </section>

      <Container size="xl">
        <div className={classes.accentLine} />
      </Container>

      {/* CTA */}
      <motion.div
        className={classes.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <Title order={2} className={classes.ctaTitle}>
          {t.ctaTitle}
        </Title>
        <Text className={classes.ctaDescription}>{t.ctaDesc}</Text>
        <Button component={Link} to="/Contact" className={classes.ctaButton} size="lg">
          {t.cta}
        </Button>
      </motion.div>
    </Container>
  );
}
