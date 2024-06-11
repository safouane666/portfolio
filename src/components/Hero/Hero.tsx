import './hero.css';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Flex, Group, Image, Text } from '@mantine/core';

import ProfileImg from '@/imgs/profile.png';
import SocialIcons from '../Social/SocialIcons';

export default function Hero() {
  const [text, helper] = useTypewriter({
    words: [
      'an Elecrical Engineer Student',
      'a Frontend Developer',
      'a Backend Developer',
      'a Programmer',
      'an Embedded Developer',
      'a Freelancer',
    ],
    loop: true,
    delaySpeed: 80,
    typeSpeed: 100,
  });
  const { isType, isDelete, isDelay, isDone } = helper;
  return (
    <Flex gap={'1rem'} className="Hero_Container">
      <Flex className="Text_Container" direction="column">
        <Text className="greating">Hi, I'm </Text>
        <Text
          className="Name"
          size="xl"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          Safouane Regaieg{' '}
        </Text>
        <Text className="typeWrite">
          I'm <span>{text}</span>
          <span>
            <Cursor cursorColor="cyan" />
          </span>
        </Text>
        <Flex style={{ marginTop: '3rem' }}>
          <SocialIcons />
        </Flex>
      </Flex>

      <Flex className="image_Container">
        <Image className="image" radius={200} fit="contain" src={ProfileImg} />
      </Flex>
    </Flex>
  );
}
