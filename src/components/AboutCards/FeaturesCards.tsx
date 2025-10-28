import {
  Button,
  Card,
  Collapse,
  Container,
  SimpleGrid,
  Text,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconAppWindow,
  IconBrandWebflow,
  IconCode,
  IconContainer,
  IconCookie,
  IconDatabase,
  IconLayoutBoardSplit,
  IconRobot,
} from '@tabler/icons-react';

import QT from '@/imgs/ct.png';
import classes from './FeaturesCards.module.css';
import texas from '@/imgs/texas.png';
import { useDisclosure } from '@mantine/hooks';

const mockdata = [
  {
    title: 'Front End developer',
    description:
      'I specialize in building dynamic and responsive web interfaces. I focus on writing clean, maintainable code and staying updated with the latest industry trends and best practices to ensure high-quality, performant, and accessible web solutions.',
    icon: IconCode,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
      'https://cdn-icons-png.flaticon.com/128/1199/1199124.png',
      'https://cdn-icons-png.flaticon.com/128/732/732190.png',
      'https://cdn-icons-png.flaticon.com/128/1126/1126012.png',
    ],
  },
  {
    title: 'Back end developer',
    description:
      'I specialize in developing robust and scalable server-side applications. I focus on writing efficient, maintainable code and staying updated with the latest industry trends and best practices to ensure secure, high-performance, and reliable backend solutions.',
    icon: IconDatabase,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/15379/15379746.png',
      'https://cdn-icons-png.flaticon.com/128/919/919830.png',
      'https://cdn-icons-png.flaticon.com/128/7506/7506880.png',
      'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png',
    ],
  },
  {
    title: 'Website Builders',
    description:
      'I am proficient in utilizing popular website building platforms such as Wix, WordPress, and YouCan. With a deep understanding of these tools, I can efficiently create, customize, and manage websites to meet various client needs.',
    icon: IconBrandWebflow,
    Tools: [
      'https://cdn-icons-png.flaticon.com/128/174/174881.png',
      'https://cdn-icons-png.flaticon.com/128/5968/5968753.png',
      'https://static-portal.youcan.shop/images/brand_images/Logo-YouCan-4.png',
    ],
  },
  {
    title: 'Robotics Engineering',
    description:
      'I design and develop robotic systems that combine hardware control, embedded programming, and intelligent automation. From ROS2-based robots to industrial robotic arms, I focus on creating efficient, precise, and innovative solutions.',
    icon: IconRobot,

    Tools: [
      'data:image/jpeg;base64,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',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Gazebo_logo_without_text.svg',
      'https://husarion.com/img/ros/ros_logo.png',
    ],
  },
  {
    title: 'Embedded Systems Developer',
    description:
      'I specialize in coding and developing embedded systems using platforms such as Arduino, STM32, and Raspberry Pi. My expertise includes designing and implementing efficient, reliable, and scalable embedded solutions for various applications.',
    icon: IconContainer,
    Tools: [
      'https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png',
      'https://cdn.freebiesupply.com/logos/thumbs/2x/raspberry-pi-logo.png',
      'https://cdn-icons-png.flaticon.com/128/3665/3665923.png',
      'https://cdn-icons-png.flaticon.com/128/6132/6132222.png',
      'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADf39/BwcGCgoL8/Pz19fXr6+v29va7u7v6+vrw8PDb29t+fn7Hx8e+vr6mpqZhYWGJiYmXl5fPz8+0tLTV1dV4eHifn5+QkJBnZ2cTExPj4+Ovr69cXFw3NzdPT09CQkJwcHAsLCxMTEwzMzMNDQ0aGholJSVFRUU9PT0ZGRkoKCgb1AhHAAAG3ElEQVR4nO2d6XqqMBCGxbrUpYvaqt0s1Z4u9tz/9R2RRcCZCYTJifb53r8lkE9CZoW2WgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+C13fEzhGd0rPwenxR1XhlW85BNeaAoe+1RB8aApsLX3LIbhVVehbDYXqRnPhWw3BlabA1rdvOQTPmgJP0VSEmgJbC99yCH69qXjSFAhT4QWYilr8elPR9q2GINQUCFPhBU2BlKkIHy7aXumrKizLe7xRPb1/bgryPm+Hviekzlte4Ivv2TggbypmvifjhIOp2Ix8z8UJl5nAie+pOGL52wVmpmLleyKuSE1F6HsiztjGAt99z8MZ4+QW9nxPxBnrWODU9zyckZqKE6yrKTGLBS59z8MdscAv39NwxyBWqBpOnxZbB+H0SZGYirXvebgjMRUXvufhjF5iKi59T8QZianYcn8f3V00YMDkkgY2gyyR4/ruJGgG7UUM5EGqAtNr0Ym1UUN9nCP4Kg7SzaKk1xqQfw2bKqTX21gepBoAZNeiFT41FMhkDB7FQbp2ay0qbFzWn5MXNaz9sabAXnZaUuFdQ4Eb+qoP4iB2V7diJitsWhS+p68qD9ItJhzOSyuc8ROpAn3Re5tBluSuRStstpk+0OfciIN0o9ScWeowhzSRSCfP5/Ig1YpQ/lqf3EH2Ts2jzQkXmgKLZon1BWXjJUDv+gZTodqZULwWs++1rOv7r/TZpuIg3Yxt0SwxayqiY6WQ2bvkQbqplNLJhSNlE81An+pFHKPbxFY2S1KQb2EXmQDhUxyk28T2p3R20Vu6ra2QzhkY/EDVnPSxWRKfAXl1HcMECCtxEGeU7SCMgPgLGsLyMm3yJH15kGr2gjJLcv33uo7Ab/oc8q6sW54lt0feJkbUiaXobasrD7pTVUhfQ14mBo8yD30Ceb/SLZxwEYycIqncn8kECHJSRLdNiYtgnuT9umpagz6L4UlWFcivN8OLcIbNMIFpXX4XBzHRpCVCvGBIk1TKoNIBgmEBqLZiidPcyAu1Z84whvRIOUYRPH8LZE/6Uy7SDL9MCmnnyNCDTCcebTFNUV4wXTnRwgUI8usqui/CGpJdgdF92oqDmQBBviITTVpiuAcRtFuZIe6K9BDD6yqqAit5X4bHQkjBMQHCm3g53XJTteyZwUnkT0KvcIM7pFpuqloTNBT2uWeRCRDWzOExuuUmOdmVQ440eswo+t5fMkcnGB77mlQVaMqa0F4mEyDIiZ43VYF10hHy80+6fkyAIF9Ht9Plbw2Fcj8m6aTQh/7PzoSaRU+xjEAsB6vOBN1yk5zsOkZ0iI89VP/lpmrxXR4pPXS02Vh1Jui+CFvZVByQiiVlo2jVmaBabrIqzAsxcSleYAIEOVgLVQXWzVzH8DFxKWy36kzQLTcZg1eaHzYmLgb89DFysPajKtC+P4aLiQvfXGIcBDlY0y031TUVOZiYuPAg0gGC4WdVFVjfVOSg72I+rrUqN+m+xWJhKg7Qqykf9tGdCf+z3NSwh4tcg7kYijEq8s+qW26yMxUZ5E3MKbTqTNAtN1maihTSCc8ppC8q/6x/VQU2baUk94SDQiZAkDsTdMtNDUzFHjLTcHA56QDhbExFwNmCbC9lAkm58U+33NTIVLARRnaPrDoTVMtNzb7N8sr1XqevSFt1JuiWmxyRVsysOhN0y01uSCUw39+UOxOY5sXTIpXABAgfokLdcpMj0hya/84ER6SL1Koz4Sy+EZNG71adCWfxwmOSwwjpv8qdCWfxVm7qVVt1JuiWmxyRzJV5kUHuTGBchNMizUJZdSZw5ab5chXOdKNGazKXlP7zjaSPGdTdOc+vq9XOXV+cwMeqsseMySW9iQLJaHIXik3jvM3LKXxJJlNg9SIs6SLkPNWud4ndrCJo1ZlAugiT3Y/Vn+6YXUdxl+635usy+skmS+8KXB9DAuUiXEdWZxxcdTpX0c28UY6P65HzVqw6E0JqSCfafdrx+o1u8taj45ovtVh1JpAuwjZauqnCRbTb6GaLq9MvfG6YPkbuTKBdhP2P1Q4mj+vVfvsa677UXZlR8T98MM9K+Y2jIqSLMNrf2XawWAfhLLKGcy8K+2Vv2qozgT53cg+7rVV8gJ97WJ4r05kg9wYyLsJ31NTY3gVVwzjuuPfyHN7v9vIcC/pX7q47Agtm4g9Rb3GkcGcoogX7rpvyPwH6kUcz3rsyk53Ou/PI49RitnMEhvtV0R33+kHodzZOmBwc8vl5pItrEwZve3/ucnoeyVQLXj6DYLP5Cj5uf+83HJ9vp9OlH2cGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJwx/wAwEVZREKzk/gAAAABJRU5ErkJggg==',
    ],
  },
  {
    title: 'Software Development Specialist',
    description:
      'I am experienced in developing software applications using QT, LabVIEW, and Delphi 7. My proficiency in these tools allows me to design and implement robust, user-friendly software solutions tailored to meet specific project requirements. ',
    icon: IconAppWindow,
    Tools: [
      QT,
      'https://cdn.worldvectorlogo.com/logos/national-instruments-labview.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4rYzV6G1CATBX12xcq2TXROgA2Uk9eVCyg&s',
    ],
  },
];

export function FeaturesCards() {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      style={{ zIndex: '1' }}
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" mt="sm" style={{ marginBottom: '1rem' }}>
        {feature.description}
      </Text>
      <Button
        variant="outline"
        size="xs"
        radius="md"
        style={{ marginTop: 'auto' }}
        onClick={toggle}
      >
        Tools used
      </Button>
      <Collapse in={opened}>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          {feature.Tools.map((ToolIcon, index) => (
            <img
              src={ToolIcon}
              key={index}
              style={{ width: rem(30), height: rem(30), marginTop: '0.5rem' }}
            />
          ))}
        </div>
      </Collapse>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing="xl">
        {features}
      </SimpleGrid>
    </Container>
  );
}
