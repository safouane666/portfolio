import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';

import { IconCheck } from '@tabler/icons-react';
import WebDevHeroBg from './img/WebDevHeroBg.png';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            I build modern & scalable <br /> web
            experiences
          </Title>

          <Text c="dimmed" mt="md">
            From landing pages to full-stack web apps, I help businesses and creators bring their
            ideas online with clean design, fast performance, and seamless user experience.
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
              <b>Custom & Responsive Design</b> – pixel-perfect interfaces that adapt beautifully to
              all screens.
            </List.Item>
            <List.Item>
              <b>Fast & Scalable Code</b> – built with React, Mantine, and modern best practices for
              smooth performance.
            </List.Item>
            <List.Item>
              <b>Deployment & Hosting</b> – I handle the complete deployment process, setting up hosting,
              configuring domains, and ensuring your site goes live smoothly.
            </List.Item>
            <List.Item>
              <b>Full Project Setup</b> – from idea to deployment, I handle development,
              optimization, and maintenance.
            </List.Item>
          </List>

          <Group mt={30} gap="md">
            <Button radius="xl" size="md" className={classes.control} color="cyan" variant="filled">
              Let’s Work Together
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
              View Projects
            </Button>
          </Group>
        </div>
        <Image src={WebDevHeroBg} className={classes.image} />
      </div>
    </Container>
  );
}
