import { Container, Flex, Group, Popover, Text } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Group justify="space-between" align="center" wrap="wrap" gap="md">
          <Text size="sm" c="dimmed">
            Made by <strong>SAFOUANE REGAIEG</strong>
          </Text>
          
          <Flex gap="1.5rem" align="center">
            <a 
              href="https://www.linkedin.com/in/regaieg-safouane-223112252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
                height={32}
              />
            </a>

            <a 
              href="https://github.com/safouane666" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                alt="github" 
                height={32}
              />
            </a>

            <a 
              href="https://instagram.com/regaiegsafouane" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes.socialLink}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="instagram"
                height={32}
              />
            </a>

            <Popover width={200} position="top" withArrow shadow="md">
              <Popover.Target>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                  alt="mail"
                  height={32}
                  className={classes.socialLink}
                  style={{ cursor: 'pointer' }}
                />
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="xs">safouaneregaieg8@gmail.com</Text>
              </Popover.Dropdown>
            </Popover>
          </Flex>
        </Group>
      </Container>
    </footer>
  );
}
