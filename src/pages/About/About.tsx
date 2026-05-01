import './about.css';

import { motion } from 'framer-motion';
import { Center, Flex, Text } from '@mantine/core';

import { FeaturesCards } from '@/components/AboutCards/FeaturesCards';
import { useLanguage } from '@/i18n/language';
import React from 'react';

const About = React.forwardRef((props, ref) => {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: 'About',
      me: 'Me',
      paragraphs: [
        'I am an Electrical and Electronics Engineer from the National Engineering School of Monastir, with a strong interest in robotics, automation, and software development.',
        'Throughout my journey, I have worked on diverse projects in robotics, industrial automation, embedded systems, and web development, always exploring new technologies and improving my skills.',
        "I enjoy solving real-world problems through technology. Whether it's building ROS2 robotic systems, automating processes with PLC and Python, or creating modern web applications, I approach each project with curiosity and precision.",
        'Quietly confident and always learning, I focus on growing one project at a time-constantly exploring, building, and evolving.',
      ],
    },
    fr: {
      title: 'A propos de',
      me: 'Moi',
      paragraphs: [
        "Je suis ingenieur en electricite et electronique de l'Ecole Nationale d'Ingenieurs de Monastir, avec un fort interet pour la robotique, l'automatisation et le developpement logiciel.",
        "Au fil de mon parcours, j'ai travaille sur des projets varies en robotique, automatisation industrielle, systemes embarques et developpement web, en explorant constamment de nouvelles technologies.",
        "J'aime resoudre des problemes reels par la technologie. Que ce soit avec ROS2, l'automatisation avec PLC et Python, ou des applications web modernes, j'aborde chaque projet avec curiosite et precision.",
        "Toujours calme et en apprentissage, j'avance projet par projet en continuant a explorer, construire et evoluer.",
      ],
    },
    es: {
      title: 'Sobre',
      me: 'Mi',
      paragraphs: [
        'Soy ingeniero electrico y electronico de la Escuela Nacional de Ingenieria de Monastir, con gran interes en robotica, automatizacion y desarrollo de software.',
        'Durante mi trayectoria he trabajado en proyectos de robotica, automatizacion industrial, sistemas embebidos y desarrollo web, siempre explorando nuevas tecnologias.',
        'Disfruto resolver problemas reales con tecnologia. Ya sea construyendo sistemas ROS2, automatizando procesos con PLC y Python, o creando aplicaciones web modernas, trabajo cada proyecto con curiosidad y precision.',
        'Con confianza y aprendizaje constante, avanzo proyecto a proyecto para seguir explorando, construyendo y evolucionando.',
      ],
    },
  } as const;
  const t = copy[language];

  return (
    <Flex className="About_Container" direction={'column'}>
      <motion.div
        className="AboutMe_Container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Text
          className="AboutMe"
          size="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          {' '}
          {t.title} <span>{t.me}</span>{' '}
        </Text>

        <Text className="Paragraph" ta="center">
          {t.paragraphs[0]}
        </Text>

        <Text className="Paragraph" ta="center">
          {t.paragraphs[1]}
        </Text>

        <Text className="Paragraph" ta="center">
          {t.paragraphs[2]}
        </Text>

        <Text className="Paragraph" ta="center">
          {t.paragraphs[3]}
        </Text>
      </motion.div>
      <motion.div
        className="Cards_Container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ display: 'flex' }}
      >
        <FeaturesCards />
      </motion.div>
    </Flex>
  );
});
export default About;
