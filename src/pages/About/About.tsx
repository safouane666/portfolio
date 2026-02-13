import './about.css';

import { motion } from 'framer-motion';
import { Center, Flex, Text } from '@mantine/core';

import { FeaturesCards } from '@/components/AboutCards/FeaturesCards';
import React from 'react';

const About = React.forwardRef((props, ref) => {
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
          About <span>Me</span>{' '}
        </Text>

        <Text className="Paragraph" ta="center">
          I am an Electrical and Electronics Engineering graduate from the National Engineering
          School of Monastir.
        </Text>

        <Text className="Paragraph" ta="center">
          Throughout my journey, I have worked on diverse projects in robotics, industrial
          automation, embedded systems, and web development, always exploring new technologies and
          improving my skills.
        </Text>

        <Text className="Paragraph" ta="center">
          I enjoy solving real-world problems through technology. Whether it's building ROS2 robotic
          systems, automating processes with PLC and Python, or creating modern web applications, I
          approach each project with curiosity and precision.
        </Text>

        <Text className="Paragraph" ta="center">
          Quietly confident and always learning, I focus on growing one project at a time—constantly
          exploring, building, and evolving.
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
