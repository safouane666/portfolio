import { motion } from 'framer-motion';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';

import { IconCheck } from '@tabler/icons-react';
import WebDevHeroBg from './img/WebDevHeroBg.webp';
import classes from './HeroBullets.module.css';
import { useLanguage } from '@/i18n/language';

export function HeroBullets() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: 'I build modern & scalable web experiences',
      desc: 'From landing pages to full-stack web apps, I help businesses and creators bring their ideas online with clean design, fast performance, and seamless user experience.',
      bullet1: 'Custom & Responsive Design',
      bullet1Desc: 'pixel-perfect interfaces that adapt beautifully to all screens.',
      bullet2: 'Fast & Scalable Code',
      bullet2Desc: 'built with React, Mantine, and modern best practices for smooth performance.',
      bullet3: 'Deployment & Hosting',
      bullet3Desc: 'I handle the complete deployment process, setting up hosting, configuring domains, and ensuring your site goes live smoothly.',
      bullet4: 'Full Project Setup',
      bullet4Desc: 'from idea to deployment, I handle development, optimization, and maintenance.',
      cta: "Let's Work Together",
      projects: 'View Projects',
    },
    fr: {
      title: 'Je cree des experiences web modernes et evolutives',
      desc: "Des landing pages aux applications full-stack, j'aide les entreprises et createurs a lancer leurs idees en ligne.",
      bullet1: 'Design sur mesure & responsive',
      bullet1Desc: "interfaces pixel-perfect adaptees a tous les ecrans.",
      bullet2: 'Code rapide & evolutif',
      bullet2Desc: 'construit avec React, Mantine et les meilleures pratiques modernes.',
      bullet3: 'Deploiement & hebergement',
      bullet3Desc: "je gere le deploiement complet, l'hebergement et les domaines.",
      bullet4: 'Projet complet',
      bullet4Desc: "de l'idee au lancement, je gere developpement et optimisation.",
      cta: 'Travaillons ensemble',
      projects: 'Voir les projets',
    },
    es: {
      title: 'Construyo experiencias web modernas y escalables',
      desc: 'Desde landing pages hasta apps full-stack, ayudo a empresas y creadores a llevar sus ideas online.',
      bullet1: 'Diseno personalizado y responsive',
      bullet1Desc: 'interfaces precisas que se adaptan a todas las pantallas.',
      bullet2: 'Codigo rapido y escalable',
      bullet2Desc: 'construido con React, Mantine y buenas practicas modernas.',
      bullet3: 'Despliegue y hosting',
      bullet3Desc: 'gestiono todo el despliegue, dominios y puesta en produccion.',
      bullet4: 'Proyecto completo',
      bullet4Desc: 'de la idea al lanzamiento, me encargo de todo.',
      cta: 'Trabajemos juntos',
      projects: 'Ver proyectos',
    },
  } as const;
  const t = copy[language];

  return (
    <Container size="xl">
      <div className={classes.inner}>
        <motion.div
          className={classes.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Title className={classes.title}>
            {t.title}
          </Title>

          <Text c="dimmed" mt="md">
            {t.desc}
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="cyan">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>{t.bullet1}</b> - {t.bullet1Desc}
            </List.Item>
            <List.Item>
              <b>{t.bullet2}</b> - {t.bullet2Desc}
            </List.Item>
            <List.Item>
              <b>{t.bullet3}</b> - {t.bullet3Desc}
            </List.Item>
            <List.Item>
              <b>{t.bullet4}</b> - {t.bullet4Desc}
            </List.Item>
          </List>

          <Group mt={30} gap="md">
            <Button radius="xl" size="md" className={classes.control} color="cyan" variant="filled">
              {t.cta}
            </Button>
            <Button 
              variant="outline" 
              radius="xl" 
              size="md" 
              className={classes.control} 
              color="cyan"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {t.projects}
            </Button>
          </Group>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image src={WebDevHeroBg} className={classes.image} />
        </motion.div>
      </div>
    </Container>
  );
}
