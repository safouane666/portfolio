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
import { useLanguage } from '@/i18n/language';

export function ContactPage() {
  const { colorScheme } = useMantineColorScheme();
  const { language } = useLanguage();
  const copy = {
    en: {
      invalidEmail: 'Invalid email',
      nameMin: 'Name must be at least 2 characters',
      subjectMin: 'Subject must be at least 5 characters',
      messageMin: 'Message must be at least 10 characters',
      success: 'Message sent successfully! I will get back to you soon.',
      failed: 'Failed to send message. Please try again later.',
      successTitle: 'Success!',
      errorTitle: 'Error!',
      contactInfo: 'Contact information',
      getInTouch: 'Get in touch',
      yourName: 'Your name',
      yourEmail: 'Your email',
      subject: 'Subject',
      yourMessage: 'Your message',
      messagePlaceholder: 'Please include all relevant information',
      send: 'Send message',
    },
    fr: {
      invalidEmail: 'Email invalide',
      nameMin: 'Le nom doit contenir au moins 2 caracteres',
      subjectMin: 'Le sujet doit contenir au moins 5 caracteres',
      messageMin: 'Le message doit contenir au moins 10 caracteres',
      success: 'Message envoye avec succes ! Je vous repondrai bientot.',
      failed: "Echec de l'envoi du message. Veuillez reessayer.",
      successTitle: 'Succes !',
      errorTitle: 'Erreur !',
      contactInfo: 'Informations de contact',
      getInTouch: 'Contactez-moi',
      yourName: 'Votre nom',
      yourEmail: 'Votre email',
      subject: 'Sujet',
      yourMessage: 'Votre message',
      messagePlaceholder: 'Veuillez inclure toutes les informations utiles',
      send: 'Envoyer',
    },
    es: {
      invalidEmail: 'Correo invalido',
      nameMin: 'El nombre debe tener al menos 2 caracteres',
      subjectMin: 'El asunto debe tener al menos 5 caracteres',
      messageMin: 'El mensaje debe tener al menos 10 caracteres',
      success: 'Mensaje enviado con exito. Te respondere pronto.',
      failed: 'No se pudo enviar el mensaje. Intentalo mas tarde.',
      successTitle: 'Exito!',
      errorTitle: 'Error!',
      contactInfo: 'Informacion de contacto',
      getInTouch: 'Hablemos',
      yourName: 'Tu nombre',
      yourEmail: 'Tu correo',
      subject: 'Asunto',
      yourMessage: 'Tu mensaje',
      messagePlaceholder: 'Incluye toda la informacion relevante',
      send: 'Enviar mensaje',
    },
  } as const;
  const t = copy[language];
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
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : t.invalidEmail),
      name: (value: string) => (value.length < 2 ? t.nameMin : null),
      subject: (value: string) => (value.length < 5 ? t.subjectMin : null),
      message: (value: string) => (value.length < 10 ? t.messageMin : null),
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

      showNotification('success', t.success);
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      showNotification('error', t.failed);
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
      {notification.show && (
        <Notification
          icon={notification.type === 'success' ? checkIcon : xIcon}
          color={notification.type === 'success' ? 'teal' : 'red'}
          title={notification.type === 'success' ? t.successTitle : t.errorTitle}
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

      <Paper shadow="lg" radius="lg" withBorder>
        <div className={classes.wrapper}>
          <motion.div
            className={classes.contacts}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <Text 
                fz="xl" 
                fw={700} 
                className={classes.title}
                c={colorScheme === 'dark' ? 'gray.0' : 'white'}
                mb="xl"
              >
                {t.contactInfo}
              </Text>

              <ContactIconsList />
            </div>
          </motion.div>

          <motion.form
            className={classes.form}
            onSubmit={form.onSubmit(handleSubmit)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text fz="xl" fw={700} className={classes.title} mb="xl">
              {t.getInTouch}
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label={t.yourName}
                  placeholder={t.yourName}
                  required
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label={t.yourEmail}
                  placeholder="hello@mantine.dev"
                  required
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label={t.subject}
                placeholder={t.subject}
                required
                {...form.getInputProps('subject')}
              />

              <Textarea
                mt="md"
                label={t.yourMessage}
                placeholder={t.messagePlaceholder}
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
                  {t.send}
                </Button>
              </Group>
            </div>
          </motion.form>
        </div>
      </Paper>
    </Container>
  );
}
