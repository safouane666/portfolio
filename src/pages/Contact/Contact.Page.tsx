import { motion } from 'framer-motion';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  Notification,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCheck,
  IconX,
} from '@tabler/icons-react';

import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';
import emailjs from '@emailjs/browser';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export function ContactPage() {
  const { colorScheme } = useMantineColorScheme();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value: string) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      subject: (value: string) => (value.length < 5 ? 'Subject must be at least 5 characters' : null),
      message: (value: string) => (value.length < 10 ? 'Message must be at least 10 characters' : null),
    },
  });

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: 'success', message: '' }), 5000);
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);

    try {
      // You need to sign up at https://www.emailjs.com/ and get these credentials
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_email: 'safouaneregaieg8@gmail.com',
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_cpt3upu', // Replace with your EmailJS service ID
        'template_xare2gi', // Replace with your EmailJS template ID
        templateParams,
        'JiXDynVX8YNzjTfDK' // Replace with your EmailJS public key
      );

      showNotification('success', 'Message sent successfully! I will get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      showNotification('error', 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <Container size="lg" py="xl" px="md">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ marginBottom: 24 }}
      >
        <div
          style={{
            height: 2,
            background: 'linear-gradient(90deg, var(--mantine-color-cyan-6), transparent)',
            marginBottom: 24,
          }}
        />
      </motion.div>
      {notification.show && (
        <Notification
          icon={notification.type === 'success' ? checkIcon : xIcon}
          color={notification.type === 'success' ? 'teal' : 'red'}
          title={notification.type === 'success' ? 'Success!' : 'Error!'}
          onClose={() => setNotification({ ...notification, show: false })}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          {notification.message}
        </Notification>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
      <Paper shadow="lg" radius="lg" withBorder>
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <div>
              <Text 
                fz="xl" 
                fw={700} 
                className={classes.title}
                c={colorScheme === 'dark' ? 'gray.0' : 'white'}
                mb="xl"
              >
                Contact information
              </Text>

              <ContactIconsList />
            </div>
          </div>

          <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
            <Text fz="xl" fw={700} className={classes.title} mb="xl">
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  required
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  required
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
                {...form.getInputProps('subject')}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                required
                {...form.getInputProps('message')}
              />

              <Group justify="flex-end" mt="xl">
                <Button
                  type="submit"
                  className={classes.control}
                  loading={loading}
                  disabled={loading}
                  size="md"
                  variant="filled"
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
      </motion.div>
    </Container>
  );
}
