import { motion } from 'framer-motion';
import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconArrowRight,
  IconBrandDiscord,
  IconBrandSlack,
  IconBrandTelegram,
  IconCalendar,
  IconCloudOff,
  IconCpu,
  IconDashboard,
  IconLock,
  IconMessageChatbot,
  IconMicrophone,
  IconRocket,
  IconSearch,
  IconServer,
  IconShieldCheck,
  IconTimeline,
  IconWorld,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { HardwareTiersSection } from './HardwareTiersSection';
import { LocalAIHero } from './LocalAIHero';
import { StackCardMedia, type StackCardId } from './StackCardMedia';
import classes from './LocalAI.page.module.css';
import { useLanguage } from '@/i18n/language';

const lifecycleImage =
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80';

export default function LocalAIPage() {
  const { language } = useLanguage();

  const copy = {
    en: {
      painTitle: 'The Modern Business Dilemma: AI vs. Data Security',
      painDesc:
        'Teams want AI speed, but cloud-first tools create friction around privacy, compliance, and operational trust.',
      painPoints: [
        {
          title: 'Cloud Dependency',
          desc: 'Losing control of proprietary data when models and prompts leave your perimeter through external APIs.',
          icon: IconCloudOff,
        },
        {
          title: 'Efficiency Drain',
          desc: 'Wasting resources on manual workarounds, unstable integrations, or processes that cannot scale reliably.',
          icon: IconTimeline,
        },
        {
          title: 'Trust Gap',
          desc: 'Difficulty proving true data sovereignty, audit trails, and compliance to stakeholders and regulators.',
          icon: IconLock,
        },
      ],
      solutionTitle: 'The Local AI Advantage: Privacy is the Ultimate Premium',
      solutionBody:
        'We deliver a complete, tailor-made AI ecosystem inside your facility. That means immediate access to advanced models, coupled with iron-clad data privacy and full operational ownership.',
      flowSteps: [
        { title: 'Secure Hardware', subtitle: 'Tiered package selection' },
        { title: 'Local Software Layer', subtitle: 'vLLM, models, dashboard' },
        { title: 'Intelligence', subtitle: 'Insights & automation' },
        { title: 'Data Sovereignty', subtitle: 'Guaranteed on-premise control' },
      ],
      sovereigntyBadge: 'Guaranteed data sovereignty',
      stackTitle: 'Under the Hood: A Full-Spectrum AI Stack',
      stackDesc:
        'Every layer is chosen for production-grade inference, team usability, and workflow integration—not demo hype.',
      stackCards: [
        {
          cardId: 'vllm' as StackCardId,
          title: 'vLLM & Models',
          what: 'Manages high-speed, quantized inference for text, image, and video workloads.',
          benefit: 'Raw speed—never bottlenecked by external APIs.',
          icon: IconCpu,
        },
        {
          cardId: 'openWebUI' as StackCardId,
          title: 'Open WebUI & Dashboard',
          what: 'Front-end chat and centralized monitoring of all AI services in one place.',
          benefit: 'Usability—a single pane of glass for the entire team.',
          icon: IconDashboard,
        },
        {
          cardId: 'hermes' as StackCardId,
          title: 'Hermes Agent Hookup',
          what: 'Integrates AI into existing workflows across Slack, Discord, CRM, and custom tools.',
          benefit: 'Automation—AI becomes a live operational teammate.',
          icon: IconMessageChatbot,
        },
        {
          cardId: 'voice' as StackCardId,
          title: 'Web Search / TTS / STT',
          what: 'Connects intelligence to the real world and human interaction through voice and search.',
          benefit: 'Completeness—from spoken query to written action, end-to-end.',
          icon: IconMicrophone,
        },
      ],
      lifecycleTitle: 'More Than Hardware: Full Lifecycle Support',
      lifecycleLead:
        'This is not a box we drop off. You get ongoing partnership—from deployment to scaling—as your AI footprint grows.',
      lifecycleItems: [
        {
          title: 'Monitoring Dashboard',
          desc: 'Real-time health checks, service activation/deactivation, and visibility into model performance.',
          icon: IconDashboard,
        },
        {
          title: 'Maintenance & Scaling',
          desc: 'Proactive updates, optimized model management, and capacity planning aligned with your growth.',
          icon: IconRocket,
        },
        {
          title: 'Security & Compliance',
          desc: 'On-premise architecture designed to support auditability and strict data-boundary policies.',
          icon: IconShieldCheck,
        },
      ],
      integrations: ['Slack', 'Discord', 'CRM', 'Custom APIs'],
      ctaTitle: 'Ready to make your data your greatest asset?',
      ctaDesc:
        'Book a short assessment and we will map the right local AI architecture for your team, budget, and compliance needs.',
      ctaButton: 'Schedule Your 15-Minute Assessment',
      whatLabel: 'What it does',
      benefitLabel: 'The benefit',
    },
    fr: {
      painTitle: 'Le dilemme moderne : IA vs securite des donnees',
      painDesc:
        "Les equipes veulent la vitesse de l'IA, mais les outils cloud creent des frictions autour de la confidentialite et de la conformite.",
      painPoints: [
        {
          title: 'Dependance au cloud',
          desc: 'Perte de controle sur les donnees proprietaires lorsque modeles et prompts sortent du perimetre via des APIs externes.',
          icon: IconCloudOff,
        },
        {
          title: 'Perte d efficacite',
          desc: 'Ressources gaspillees sur des contournements manuels, des integrations instables ou des processus peu fiables.',
          icon: IconTimeline,
        },
        {
          title: 'Deficit de confiance',
          desc: 'Difficulte a prouver la souverainete des donnees, les pistes d audit et la conformite aux parties prenantes.',
          icon: IconLock,
        },
      ],
      solutionTitle: 'L avantage IA locale : la confidentialite comme premium',
      solutionBody:
        'Nous deployons un ecosysteme IA complet et sur mesure dans vos locaux. Acces immediat aux modeles avances, avec une confidentialite des donnees renforcee.',
      flowSteps: [
        { title: 'Materiel securise', subtitle: 'Selection de packages' },
        { title: 'Couche logicielle locale', subtitle: 'vLLM, modeles, dashboard' },
        { title: 'Intelligence', subtitle: 'Insights et automatisation' },
        { title: 'Souverainete des donnees', subtitle: 'Controle on-premise garanti' },
      ],
      sovereigntyBadge: 'Souverainete des donnees garantie',
      stackTitle: 'Sous le capot : une stack IA complete',
      stackDesc:
        'Chaque couche est choisie pour l inference en production, l usage equipe et l integration workflow.',
      stackCards: [
        {
          cardId: 'vllm' as StackCardId,
          title: 'vLLM & Modeles',
          what: 'Inference rapide et quantifiee pour texte, image et video.',
          benefit: 'Vitesse brute—sans goulot d etranglement API externe.',
          icon: IconCpu,
        },
        {
          cardId: 'openWebUI' as StackCardId,
          title: 'Open WebUI & Dashboard',
          what: 'Chat front-end et supervision centralisee de tous les services IA.',
          benefit: 'Utilisabilite—une vue unique pour toute l equipe.',
          icon: IconDashboard,
        },
        {
          cardId: 'hermes' as StackCardId,
          title: 'Hermes Agent Hookup',
          what: 'Integration IA dans Slack, Discord, CRM et outils metier.',
          benefit: 'Automatisation—l IA devient un collaborateur operationnel.',
          icon: IconMessageChatbot,
        },
        {
          cardId: 'voice' as StackCardId,
          title: 'Recherche web / TTS / STT',
          what: 'Relie l intelligence au monde reel et a l interaction vocale.',
          benefit: 'Completude—de la question orale a l action ecrite.',
          icon: IconMicrophone,
        },
      ],
      lifecycleTitle: 'Plus que du materiel : support sur tout le cycle de vie',
      lifecycleLead:
        "Ce n est pas une boite livree puis oubliee. Vous beneficiez d un accompagnement continu, du deploiement a la montee en charge.",
      lifecycleItems: [
        {
          title: 'Dashboard de supervision',
          desc: 'Sante en temps reel, activation/desactivation des services et visibilite sur les performances.',
          icon: IconDashboard,
        },
        {
          title: 'Maintenance & scaling',
          desc: 'Mises a jour proactives, gestion optimisee des modeles et planification de capacite.',
          icon: IconRocket,
        },
        {
          title: 'Securite & conformite',
          desc: 'Architecture on-premise pensee pour l auditabilite et des frontieres de donnees strictes.',
          icon: IconShieldCheck,
        },
      ],
      integrations: ['Slack', 'Discord', 'CRM', 'APIs custom'],
      ctaTitle: 'Pret a faire de vos donnees votre meilleur atout ?',
      ctaDesc:
        'Reservez une evaluation courte et nous definirons l architecture IA locale adaptee a votre equipe et vos contraintes.',
      ctaButton: 'Planifier une evaluation de 15 minutes',
      whatLabel: 'Ce que ca fait',
      benefitLabel: 'Le benefice',
    },
    es: {
      painTitle: 'El dilema moderno: IA vs seguridad de datos',
      painDesc:
        'Los equipos quieren velocidad con IA, pero las herramientas cloud generan friccion en privacidad y cumplimiento.',
      painPoints: [
        {
          title: 'Dependencia del cloud',
          desc: 'Perdida de control sobre datos propietarios cuando modelos y prompts salen del perimetro por APIs externas.',
          icon: IconCloudOff,
        },
        {
          title: 'Drenaje de eficiencia',
          desc: 'Recursos desperdiciados en workarounds manuales, integraciones inestables o procesos poco escalables.',
          icon: IconTimeline,
        },
        {
          title: 'Brecha de confianza',
          desc: 'Dificultad para demostrar soberania de datos, trazabilidad y cumplimiento a stakeholders.',
          icon: IconLock,
        },
      ],
      solutionTitle: 'La ventaja de IA local: la privacidad como premium',
      solutionBody:
        'Entregamos un ecosistema IA completo y a medida dentro de tus instalaciones. Acceso inmediato a modelos avanzados con privacidad reforzada.',
      flowSteps: [
        { title: 'Hardware seguro', subtitle: 'Seleccion de paquetes' },
        { title: 'Capa software local', subtitle: 'vLLM, modelos, dashboard' },
        { title: 'Inteligencia', subtitle: 'Insights y automatizacion' },
        { title: 'Soberania de datos', subtitle: 'Control on-premise garantizado' },
      ],
      sovereigntyBadge: 'Soberania de datos garantizada',
      stackTitle: 'Bajo el capot: un stack IA de espectro completo',
      stackDesc:
        'Cada capa esta elegida para inferencia en produccion, usabilidad de equipo e integracion de workflows.',
      stackCards: [
        {
          cardId: 'vllm' as StackCardId,
          title: 'vLLM y Modelos',
          what: 'Inferencia rapida y cuantizada para texto, imagen y video.',
          benefit: 'Velocidad pura—sin cuello de botella de APIs externas.',
          icon: IconCpu,
        },
        {
          cardId: 'openWebUI' as StackCardId,
          title: 'Open WebUI y Dashboard',
          what: 'Chat front-end y monitoreo centralizado de todos los servicios IA.',
          benefit: 'Usabilidad—un solo panel para todo el equipo.',
          icon: IconDashboard,
        },
        {
          cardId: 'hermes' as StackCardId,
          title: 'Hermes Agent Hookup',
          what: 'Integra IA en Slack, Discord, CRM y herramientas personalizadas.',
          benefit: 'Automatizacion—la IA se vuelve un companero operativo.',
          icon: IconMessageChatbot,
        },
        {
          cardId: 'voice' as StackCardId,
          title: 'Busqueda web / TTS / STT',
          what: 'Conecta inteligencia con el mundo real y la interaccion por voz.',
          benefit: 'Completitud—de consulta hablada a accion escrita.',
          icon: IconMicrophone,
        },
      ],
      lifecycleTitle: 'Mas que hardware: soporte de ciclo de vida completo',
      lifecycleLead:
        'No es una caja que entregamos y olvidamos. Acompanamiento continuo desde el despliegue hasta el escalado.',
      lifecycleItems: [
        {
          title: 'Dashboard de monitoreo',
          desc: 'Salud en tiempo real, activacion/desactivacion de servicios y visibilidad de rendimiento.',
          icon: IconDashboard,
        },
        {
          title: 'Mantenimiento y escalado',
          desc: 'Actualizaciones proactivas, gestion optimizada de modelos y planificacion de capacidad.',
          icon: IconRocket,
        },
        {
          title: 'Seguridad y cumplimiento',
          desc: 'Arquitectura on-premise pensada para auditoria y limites estrictos de datos.',
          icon: IconShieldCheck,
        },
      ],
      integrations: ['Slack', 'Discord', 'CRM', 'APIs custom'],
      ctaTitle: 'Listo para convertir tus datos en tu mayor activo?',
      ctaDesc:
        'Reserva una evaluacion corta y mapearemos la arquitectura IA local ideal para tu equipo y cumplimiento.',
      ctaButton: 'Agendar evaluacion de 15 minutos',
      whatLabel: 'Que hace',
      benefitLabel: 'El beneficio',
    },
  } as const;

  const t = copy[language];

  return (
    <Container size="xl">
      <LocalAIHero />

      <div className={classes.accentLine} />

      {/* Pain points */}
      <section className={`${classes.sectionContainer} ${classes.painSection}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.painTitle}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.painDesc}
          </Text>
        </motion.div>

        <Grid gutter="lg">
          {t.painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Grid.Col key={point.title} span={{ base: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className={classes.painCard} radius="xl" p="xl" withBorder>
                    <Stack gap="md">
                      <div className={classes.painIconWrap}>
                        <Icon size={28} color="var(--mantine-color-red-6)" stroke={1.6} />
                      </div>
                      <Text fw={700} size="lg">
                        {point.title}
                      </Text>
                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.75 }}>
                        {point.desc}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            );
          })}
        </Grid>
      </section>

      <div className={classes.accentLine} />

      {/* Solution + flow */}
      <section className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.solutionTitle}</Title>
          <Text className={classes.sectionDescription} c="dimmed">
            {t.solutionBody}
          </Text>
        </motion.div>

        <Card className={classes.solutionCard} radius="xl" p="xl" withBorder mt="xl">
          <div className={classes.flowRow}>
            {t.flowSteps.flatMap((step, index) => {
              const stepEl = (
                <motion.div
                  key={step.title}
                  className={classes.flowStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className={classes.flowStepNumber}>{index + 1}</div>
                  <Group justify="center" mb="xs">
                    <IconServer size={22} color="var(--mantine-color-cyan-6)" />
                  </Group>
                  <Text fw={700} size="sm">
                    {step.title}
                  </Text>
                  <Text size="xs" c="dimmed" mt={4}>
                    {step.subtitle}
                  </Text>
                </motion.div>
              );
              if (index === 0) return [stepEl];
              return [
                <div key={`arrow-${step.title}`} className={classes.flowArrow} aria-hidden>
                  <IconArrowRight size={22} />
                </div>,
                stepEl,
              ];
            })}
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className={classes.sovereigntyBadge}>
              <IconShieldCheck size={18} />
              {t.sovereigntyBadge}
            </span>
          </div>
        </Card>
      </section>

      <div className={classes.accentLine} />

      <HardwareTiersSection />

      <div className={classes.accentLine} />

      {/* Tech stack */}
      <section id="tech-stack" className={classes.sectionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Title className={classes.sectionTitle}>{t.stackTitle}</Title>
          <Text className={classes.sectionDescription} c="dimmed" mb="xl">
            {t.stackDesc}
          </Text>
        </motion.div>

        <Stack gap="lg" className={classes.stackCardsList}>
          {t.stackCards.map((card, index) => {
            const CardIcon = card.icon;
            const isAgentCard = index === 2;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className={classes.stackCard} radius="xl" p={0} withBorder>
                  <div className={classes.stackCardLayout}>
                    <div className={classes.stackCardContent}>
                      <Group align="flex-start" gap="md" wrap="nowrap">
                        <div className={classes.stackIconWrap}>
                          <CardIcon size={30} color="var(--mantine-color-cyan-5)" stroke={1.5} />
                        </div>
                        <Stack gap="sm" style={{ flex: 1, minWidth: 0 }}>
                          <Text fw={700} size="xl" className={classes.stackCardTitle}>
                            {card.title}
                          </Text>
                          <div>
                            <Text className={classes.benefitLabel} mb={4}>
                              {t.whatLabel}
                            </Text>
                            <Text size="sm" c="dimmed" className={classes.stackCardText}>
                              {card.what}
                            </Text>
                          </div>
                          <div>
                            <Text className={classes.benefitLabel} mb={4}>
                              {t.benefitLabel}
                            </Text>
                            <Text size="sm" fw={600} c="cyan" className={classes.stackCardText}>
                              {card.benefit}
                            </Text>
                          </div>
                          {isAgentCard && (
                            <Group gap="xs" mt={4}>
                              <IconBrandTelegram size={18} opacity={0.85} />
                              <IconBrandSlack size={18} opacity={0.7} />
                              <IconBrandDiscord size={18} opacity={0.7} />
                              <IconWorld size={18} opacity={0.7} />
                            </Group>
                          )}
                        </Stack>
                      </Group>
                    </div>
                    <div className={classes.stackCardVisual}>
                      <StackCardMedia cardId={card.cardId} alt={card.title} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </Stack>
      </section>

      <div className={classes.accentLine} />

      {/* Lifecycle */}
      <section className={`${classes.sectionContainer} ${classes.lifecycleSection}`}>
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <Title className={classes.sectionTitle} style={{ textAlign: 'left' }}>
                {t.lifecycleTitle}
              </Title>
              <Text c="dimmed" mb="lg" style={{ lineHeight: 1.8, fontSize: 17 }}>
                {t.lifecycleLead}
              </Text>
              <ul className={classes.lifecycleList}>
                {t.lifecycleItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className={classes.lifecycleItem}>
                      <div className={classes.lifecycleIcon}>
                        <Icon size={22} stroke={1.6} />
                      </div>
                      <div>
                        <Text fw={700} mb={4}>
                          {item.title}
                        </Text>
                        <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
                          {item.desc}
                        </Text>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Group gap="xs" mt="md">
                {t.integrations.map((label) => (
                  <Badge key={label} variant="outline" color="cyan" size="sm">
                    {label}
                  </Badge>
                ))}
              </Group>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              className={classes.lifecycleImageWrap}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={lifecycleImage}
                alt={t.lifecycleTitle}
                className={classes.lifecycleImage}
              />
            </motion.div>
          </Grid.Col>
        </Grid>
      </section>

      <div className={classes.accentLine} />

      {/* CTA */}
      <motion.div
        className={classes.ctaSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <Title order={2} className={classes.ctaTitle}>
          {t.ctaTitle}
        </Title>
        <Text className={classes.ctaDescription}>{t.ctaDesc}</Text>
        <Button
          component={Link}
          to="/Contact"
          className={classes.ctaButton}
          size="lg"
          leftSection={<IconCalendar size={20} />}
        >
          {t.ctaButton}
        </Button>
      </motion.div>
    </Container>
  );
}
