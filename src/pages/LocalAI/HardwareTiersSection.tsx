import { motion } from 'framer-motion';
import { Badge, Card, Grid, Group, Image, List, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconCpu, IconServer2, IconSparkles } from '@tabler/icons-react';

import tierEssential from './img/hardware/tier-essential.jpg';
import tierPro from './img/hardware/tier-pro.jpg';
import tierScale from './img/hardware/tier-scale.jpg';
import classes from './HardwareTiersSection.module.css';
import { useLanguage } from '@/i18n/language';

const tierImages = [tierEssential, tierPro, tierScale] as const;
const tierStyles = ['essential', 'pro', 'scale'] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function HardwareTiersSection() {
  const { language } = useLanguage();

  const copy = {
    en: {
      title: 'Hardware Tiers Built for Real-World Performance',
      subtitle:
        'Three performance paths—from lean edge boxes to multi-GPU racks. Each tier is sized for what you actually need to run, not marketing fluff.',
      experienceTitle: 'Built by someone who has assembled these stacks',
      experienceBody:
        'I have hands-on experience deploying local AI servers end to end—parts selection, cooling, power, vLLM tuning, and production monitoring. I focus on the best cost-to-performance ratio so you get efficient inference without overspending on hardware you will never use.',
      experiencePoints: [
        'Right-sized GPUs and VRAM for your model catalog',
        'Quiet, thermally stable builds for office or lab environments',
        'Upgrade paths that scale with team adoption—not shelfware',
      ],
      statTiers: 'Performance tiers',
      statCost: 'Cost / perf focused',
      statReady: 'On-premise ready',
      runsLabel: 'What it can run',
      advantagesLabel: 'Advantages',
      tiers: [
        {
          name: 'Essential',
          tagline: 'Edge & small teams',
          vram: '16–24 GB VRAM',
          spec: '1× GPU workstation · 64 GB RAM · NVMe storage',
          runs: [
            '7B–14B instruct models (fast daily chat)',
            'RAG over internal docs for up to ~15 users',
            'Open WebUI + light agent automations',
          ],
          advantages: [
            'Lowest entry cost with true on-premise privacy',
            'Runs 24/7 on standard power—no datacenter required',
            'Ideal for pilots, departments, and proof-of-value',
          ],
          badge: 'Best value',
        },
        {
          name: 'Performance',
          tagline: 'Production workloads',
          vram: '48–80 GB VRAM',
          spec: '1–2× high-end GPUs · 128 GB RAM · redundant NVMe',
          runs: [
            '30B–70B models (quantized) with strong throughput',
            'Vision + document AI for operational teams',
            'Concurrent users with vLLM batching & agents',
          ],
          advantages: [
            'Sweet spot for cost per token on-premise',
            'Handles multimodal and heavier automation flows',
            'Room to grow without rebuilding the stack',
          ],
          badge: 'Most popular',
        },
        {
          name: 'Scale',
          tagline: 'Enterprise & high concurrency',
          vram: '140+ GB VRAM',
          spec: 'Multi-GPU server · 256 GB+ RAM · rack-ready chassis',
          runs: [
            'Large models, multi-LoRA, and video-capable pipelines',
            'Dozens of simultaneous users & API consumers',
            'Fine-tuning, eval jobs, and dedicated inference pools',
          ],
          advantages: [
            'Maximum sovereignty for regulated environments',
            'Predictable latency under peak internal load',
            'Designed for HA, monitoring, and future GPU expansion',
          ],
          badge: 'Maximum power',
        },
      ],
    },
    fr: {
      title: 'Paliers materiel concus pour la performance reelle',
      subtitle:
        'Trois niveaux de performance—du edge compact aux racks multi-GPU. Chaque palier est dimensionne pour vos usages reels.',
      experienceTitle: 'Concu par quelqu un qui a monte ces stacks',
      experienceBody:
        "J ai de l experience concrete sur le deploiement de serveurs IA locaux—choix composants, refroidissement, alimentation, tuning vLLM et supervision. Je vise le meilleur rapport cout/performance pour une inference efficace sans surinvestissement.",
      experiencePoints: [
        'GPUs et VRAM dimensionnes pour votre catalogue de modeles',
        'Builds stables et silencieux pour bureau ou labo',
        'Chemins d evolution alignes sur l adoption equipe',
      ],
      statTiers: 'Paliers performance',
      statCost: 'Focus cout / perf',
      statReady: 'Pret on-premise',
      runsLabel: 'Ce que ca peut executer',
      advantagesLabel: 'Avantages',
      tiers: [
        {
          name: 'Essentiel',
          tagline: 'Edge & petites equipes',
          vram: '16–24 Go VRAM',
          spec: '1× workstation GPU · 64 Go RAM · stockage NVMe',
          runs: [
            'Modeles 7B–14B pour le chat quotidien',
            'RAG documentaire pour ~15 utilisateurs',
            'Open WebUI + automatisations legeres',
          ],
          advantages: [
            'Cout d entree minimal avec confidentialite on-premise',
            'Fonctionne 24/7 sur alimentation standard',
            'Ideal pour pilotes et preuves de valeur',
          ],
          badge: 'Meilleur rapport',
        },
        {
          name: 'Performance',
          tagline: 'Charges de production',
          vram: '48–80 Go VRAM',
          spec: '1–2× GPU haut de gamme · 128 Go RAM · NVMe redondant',
          runs: [
            'Modeles 30B–70B (quantifies) avec bon debit',
            'Vision + documents pour equipes operationnelles',
            'Utilisateurs concurrents, batching vLLM et agents',
          ],
          advantages: [
            'Sweet spot cout par token en local',
            'Flux multimodaux et automatisations plus lourds',
            'Evolutif sans reconstruire la stack',
          ],
          badge: 'Le plus demande',
        },
        {
          name: 'Echelle',
          tagline: 'Entreprise & forte concurrence',
          vram: '140+ Go VRAM',
          spec: 'Serveur multi-GPU · 256 Go+ RAM · chassis rack',
          runs: [
            'Grands modeles, multi-LoRA et pipelines video',
            'Dizaines d utilisateurs et APIs internes',
            'Fine-tuning, evals et pools d inference dedies',
          ],
          advantages: [
            'Souverainete maximale pour environnements regules',
            'Latence stable sous charge interne',
            'Pense HA, monitoring et extension GPU',
          ],
          badge: 'Puissance max',
        },
      ],
    },
    es: {
      title: 'Niveles de hardware para rendimiento real',
      subtitle:
        'Tres rutas de rendimiento—desde edge compacto hasta racks multi-GPU. Cada nivel se dimensiona para lo que realmente necesitas ejecutar.',
      experienceTitle: 'Montado por alguien con experiencia en estos setups',
      experienceBody:
        'Tengo experiencia desplegando servidores IA locales de punta a punta—seleccion de piezas, refrigeracion, energia, tuning vLLM y monitoreo. Priorizo la mejor relacion costo/rendimiento para inferencia eficiente sin gastar de mas.',
      experiencePoints: [
        'GPUs y VRAM adecuados a tu catalogo de modelos',
        'Builds silenciosos y termicamente estables',
        'Rutas de upgrade segun adopcion del equipo',
      ],
      statTiers: 'Niveles de rendimiento',
      statCost: 'Enfoque costo / rend.',
      statReady: 'Listo on-premise',
      runsLabel: 'Que puede ejecutar',
      advantagesLabel: 'Ventajas',
      tiers: [
        {
          name: 'Esencial',
          tagline: 'Edge y equipos pequenos',
          vram: '16–24 GB VRAM',
          spec: '1× workstation GPU · 64 GB RAM · almacenamiento NVMe',
          runs: [
            'Modelos 7B–14B para chat diario',
            'RAG sobre documentos para ~15 usuarios',
            'Open WebUI + automatizaciones ligeras',
          ],
          advantages: [
            'Menor costo de entrada con privacidad on-premise',
            'Opera 24/7 con energia estandar',
            'Ideal para pilotos y prueba de valor',
          ],
          badge: 'Mejor valor',
        },
        {
          name: 'Rendimiento',
          tagline: 'Cargas de produccion',
          vram: '48–80 GB VRAM',
          spec: '1–2× GPU top · 128 GB RAM · NVMe redundante',
          runs: [
            'Modelos 30B–70B (cuantizados) con buen throughput',
            'Vision + documentos para equipos operativos',
            'Usuarios concurrentes, batching vLLM y agentes',
          ],
          advantages: [
            'Punto optimo costo por token local',
            'Flujos multimodales y automatizacion pesada',
            'Crece sin reconstruir el stack',
          ],
          badge: 'Mas popular',
        },
        {
          name: 'Escala',
          tagline: 'Empresa y alta concurrencia',
          vram: '140+ GB VRAM',
          spec: 'Servidor multi-GPU · 256 GB+ RAM · chasis rack',
          runs: [
            'Modelos grandes, multi-LoRA y pipelines de video',
            'Decenas de usuarios y consumidores API',
            'Fine-tuning, evals y pools de inferencia',
          ],
          advantages: [
            'Maxima soberania en entornos regulados',
            'Latencia predecible bajo pico de carga',
            'Disenado para HA, monitoreo y expansion GPU',
          ],
          badge: 'Maxima potencia',
        },
      ],
    },
  } as const;

  const t = copy[language];

  return (
    <section id="hardware-tiers" className={classes.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <Title className={classes.sectionTitle}>{t.title}</Title>
        <Text className={classes.sectionSubtitle} c="dimmed">
          {t.subtitle}
        </Text>
      </motion.div>

      <motion.div
        className={classes.tierGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {t.tiers.map((tier, index) => (
          <motion.div key={tier.name} variants={cardMotion}>
            <Card
              className={`${classes.tierCard} ${classes[`tier_${tierStyles[index]}`]}`}
              radius="xl"
              p={0}
              withBorder
            >
              <div className={classes.tierImageWrap}>
                <Image
                  src={tierImages[index]}
                  alt={`${tier.name} hardware setup`}
                  className={classes.tierImage}
                />
                <div className={classes.tierImageOverlay} />
                <Badge className={classes.tierBadge} variant="filled" size="lg">
                  {tier.badge}
                </Badge>
                <div className={classes.tierImageCaption}>
                  <Text fw={800} size="xl" c="white">
                    {tier.name}
                  </Text>
                  <Text size="sm" c="rgba(255,255,255,0.88)">
                    {tier.tagline}
                  </Text>
                </div>
              </div>

              <Stack gap="md" p="lg">
                <Group gap="xs">
                  <Badge variant="light" color="cyan" size="sm">
                    {tier.vram}
                  </Badge>
                  <Text size="xs" c="dimmed" className={classes.tierSpec}>
                    {tier.spec}
                  </Text>
                </Group>

                <div>
                  <Text className={classes.listLabel}>{t.runsLabel}</Text>
                  <List
                    spacing={6}
                    size="sm"
                    icon={
                      <ThemeIcon size={18} radius="xl" color="cyan" variant="light">
                        <IconCpu size={11} stroke={2} />
                      </ThemeIcon>
                    }
                  >
                    {tier.runs.map((item) => (
                      <List.Item key={item}>
                        <Text size="sm" c="dimmed" component="span">
                          {item}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </div>

                <div>
                  <Text className={classes.listLabel}>{t.advantagesLabel}</Text>
                  <List
                    spacing={6}
                    size="sm"
                    icon={
                      <ThemeIcon size={18} radius="xl" color="teal" variant="light">
                        <IconCheck size={11} stroke={2.5} />
                      </ThemeIcon>
                    }
                  >
                    {tier.advantages.map((item) => (
                      <List.Item key={item}>
                        <Text size="sm" c="dimmed" component="span">
                          {item}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </div>
              </Stack>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <Card className={classes.experienceCard} radius="xl" p="xl" withBorder>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Group gap="md" align="flex-start" wrap="nowrap">
                <div className={classes.experienceIcon}>
                  <IconServer2 size={28} stroke={1.5} />
                </div>
                <Stack gap="sm">
                  <Group gap="xs">
                    <IconSparkles size={18} color="var(--mantine-color-cyan-5)" />
                    <Text fw={700} size="lg">
                      {t.experienceTitle}
                    </Text>
                  </Group>
                  <Text size="sm" c="dimmed" style={{ lineHeight: 1.8 }}>
                    {t.experienceBody}
                  </Text>
                  <List
                    spacing={8}
                    size="sm"
                    icon={
                      <ThemeIcon size={20} radius="xl" color="cyan">
                        <IconCheck size={12} stroke={2.5} />
                      </ThemeIcon>
                    }
                  >
                    {t.experiencePoints.map((point) => (
                      <List.Item key={point}>
                        <Text size="sm" c="dimmed" component="span">
                          {point}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </Stack>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <div className={classes.experienceStats}>
                <div className={classes.stat}>
                  <Text className={classes.statValue}>3</Text>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                    {t.statTiers}
                  </Text>
                </div>
                <div className={classes.stat}>
                  <Text className={classes.statValue}>$</Text>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                    {t.statCost}
                  </Text>
                </div>
                <div className={classes.stat}>
                  <Text className={classes.statValue}>24/7</Text>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
                    {t.statReady}
                  </Text>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Card>
      </motion.div>
    </section>
  );
}
