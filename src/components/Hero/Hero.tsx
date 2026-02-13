import './hero.css';

import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Flex, Group, Image, Text } from '@mantine/core';

import ProfileImg from '@/imgs/profile.webp';
import SocialIcons from '../Social/SocialIcons';

export default function Hero() {
  const [text, helper] = useTypewriter({
    words: [
      'an Elecrical Engineer',
      'a Web Developer',
      'an Embedded Developer',
      'a Game Developer',
    ],
    loop: true,
    delaySpeed: 80,
    typeSpeed: 100,
  });
  const { isType, isDelete, isDelay, isDone } = helper;
  return (
    <Flex gap={'1rem'} className="Hero_Container">
      <motion.div
        className="Text_Container"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '3rem' }}
        >
          <SocialIcons />
        </motion.div>
      </motion.div>

      <motion.div
        className="image_Container"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ display: 'flex' }}
      >
        <Image className="image" radius={200} fit="contain" src={ProfileImg} />
      </motion.div>
    </Flex>
  );
}
