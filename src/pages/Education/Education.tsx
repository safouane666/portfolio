import './Education.css';

import { Flex, Text, Timeline } from '@mantine/core';

import React from 'react';

export default function Education() {
  return (
    <Flex className="Education_Container">
      <Flex className="EducationMe_Container">
        <Text
          className="EducationMe"
          size="xl"
          variant="gradient"
          gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
        >
          Education
        </Text>
        <Timeline active={2} bulletSize={25}>
          <Timeline.Item title="TECHNICAL BACCALAUREATE">
            <Text c="dimmed" size="sm">
              High school : 2 Mars ,Ksar Hellal
            </Text>
            <Text size="xs" mt={4}>
              2020 Monastir, Tunisie
            </Text>
          </Timeline.Item>
          <Timeline.Item title="PREPARATORY CYCLE">
            <Text c="dimmed" size="sm">
              Preparatory Institute for Engineering Studies of Monastir
            </Text>
            <Text size="xs" mt={4}>
              09/2020 – 06/2023 Monastir, Tunisie
            </Text>
          </Timeline.Item>
          <Timeline.Item title="ENGINEERING UNIVERSITY">
            <Text c="dimmed" size="sm">
              National School of Engineering of Monastir
            </Text>
            <Text size="xs" mt={4}>
              09/2022 –IN PROGRESS Monastir, Tunisie
            </Text>
          </Timeline.Item>

          <Timeline.Item title="GRADUATION">
            <Text c="dimmed" size="sm">
              Electrical Engineering Degree
            </Text>
            <Text size="xs" mt={4}>
              1 year left
            </Text>
          </Timeline.Item>
        </Timeline>
      </Flex>

      <Flex className="EducationMe_Container">
        <Text
          className="pro_exp"
          variant="gradient"
          gradient={{ from: 'blue', to: 'grape', deg: 90 }}
        >
          Professional Experience
        </Text>
        <Timeline active={1} bulletSize={25} align="right" color="grape">
          <Timeline.Item title="Freelancer On Fiverr ">
            <Text c="dimmed" size="sm">
              Full stack Web Developer
            </Text>
            <Text size="xs" mt={4}>
              IN PROGRESS
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Food4Future Internship">
            <Text c="dimmed" size="sm">
              Project Spiraw
            </Text>
            <Text size="xs" mt={4}>
              IN PROGRESS
            </Text>
          </Timeline.Item>
          <Timeline.Item title="ACTIVE MEMBER OF THE ROBOTICS CLUB">
            <Text c="dimmed" size="sm">
              Participation and preparation of robotics competitions at the national level. <br />
              Construction and production of robots
            </Text>
            <Text size="xs" mt={4}>
              2023-2024
            </Text>
          </Timeline.Item>
          <Timeline.Item title="WS TUNISIA Internship (WIRE SYSTEM TUNISIA) ">
            <Text c="dimmed" size="sm">
              Design and implementation of a production monitoring system, <br /> including the
              counting of parts with visual feedback and an audible alarm.
            </Text>
            <Text size="xs" mt={4}>
              04/07/2023 – 04/08/2023 Monastir, Tunisie
            </Text>
          </Timeline.Item>
        </Timeline>
      </Flex>
    </Flex>
  );
}
