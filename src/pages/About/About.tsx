import './about.css';

import { Center, Flex, Text } from '@mantine/core';

import { FeaturesCards } from '@/components/AboutCards/FeaturesCards';
import React from 'react';

export default function About() {
  return (
    <Flex className="About_Container" direction={'column'}>
      <Flex className="AboutMe_Container">
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
          I am working towards a degree in Electrical & Electronics Engineering at National
          Engineering School of Monastir
        </Text>
        <Text className="Paragraph" ta="center">
          Over the course of my education, I have consistently participated in a variety of projects
          across different fields, continually pushing myself to improve my skills.
        </Text>
        <Text className="Paragraph" ta="center">
          I am quietly confident, naturally curious, and consistently focused on honing my skills,
          tackling one project at a time to ensure continuous improvement.
        </Text>
      </Flex>
      <Flex className="Cards_Container">
        <FeaturesCards />
      </Flex>
    </Flex>
  );
}
