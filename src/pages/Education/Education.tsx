import { motion } from 'framer-motion';
import { Flex, Text, Timeline } from '@mantine/core';

import React from 'react';
import './Education.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Education() {
  return (
    <Flex className="Education_Container">
      <motion.div
        className="EducationMe_Container"
        style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', padding: '2rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
      <Flex className="EducationMe_Container">
        <Text
          className="EducationMe"
          size="xl"
          variant="gradient"
          gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
        >
          Education
        </Text>
        <Timeline active={3} bulletSize={25}>
          <Timeline.Item title="TECHNICAL BACCALAUREATE">
            <Text c="dimmed" size="sm">
              High school : 2 Mars ,Ksar Hellal
            </Text>
            <Text size="xs" mt={4}>
              2020 Monastir, Tunisia
            </Text>
          </Timeline.Item>
          <Timeline.Item title="PREPARATORY CYCLE">
            <Text c="dimmed" size="sm">
              Preparatory Institute for Engineering Studies of Monastir
            </Text>
            <Text size="xs" mt={4}>
              09/2020 – 06/2023 Monastir, Tunisia
            </Text>
          </Timeline.Item>
          <Timeline.Item title="ENGINEERING UNIVERSITY">
            <Text c="dimmed" size="sm">
              National School of Engineering of Monastir
            </Text>
            <Text size="xs" mt={4}>
              09/2022 – 09/2025, Tunisia
            </Text>
          </Timeline.Item>

          <Timeline.Item title="GRADUATION">
            <Text c="dimmed" size="sm">
              Electrical Engineering Degree
            </Text>
            <Text size="xs" mt={4}>
              13/09/2025 Monastir, Tunisia
            </Text>
          </Timeline.Item>
        </Timeline>
      </Flex>
      </motion.div>

      <motion.div
        style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', padding: '2rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
      <Flex className="EducationMe_Container">
        <Text
          className="pro_exp"
          variant="gradient"
          gradient={{ from: 'blue', to: 'grape', deg: 90 }}
        >
          Professional Experience
        </Text>
        <Timeline active={2} bulletSize={25} align="right" color="grape">
          <Timeline.Item title="WS TUNISIA Internship (WIRE SYSTEM TUNISIA) ">
            <Text c="dimmed" size="sm" ta="left">
              Design and implementation of a production monitoring system, <br /> including the
              counting of parts with visual feedback and an audible alarm.
            </Text>
            <Text size="xs" mt={4}>
              04/07/2023 – 04/08/2023 Monastir, Tunisie
            </Text>
          </Timeline.Item>

          <Timeline.Item title="FOOD4FUTURE Internship by ACTIA Engineering Services">
            <Text c="dimmed" size="sm" ta="left">
              Designed and developed a smart Spirulina cultivation machine.
              <br />
              – Implemented real-time task scheduling and communication protocols.
              <br />
              – Built a TouchGFX UI on STM32H7BI-DK for monitoring and control.
              <br />– Enabled real-time control and mobile app connectivity using FreeRTOS.
            </Text>
            <Text size="xs" mt={4}>
              01/06/2024 – 01/08/2024 Tunis, Tunisia
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Xpert-Meca PFE – Robotic Sorting Cell ">
            <Text c="dimmed" size="sm" ta="left">
              Design and development of an automated sorting cell for industrial applications.
              <br />
              – Mechanical design and component selection for the full system.
              <br />
              – PLC programming for control, sequencing and safety logic.
              <br />– 3D simulation and validation of the complete workstation using Blender.
            </Text>
            <Text size="xs" mt={4}>
              01/02/2023 – 01/08/2023 Sousse, Tunisia
            </Text>
          </Timeline.Item>
        </Timeline>
      </Flex>
      </motion.div>
    </Flex>
  );
}
