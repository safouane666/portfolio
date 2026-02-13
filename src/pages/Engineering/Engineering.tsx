import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Modal, Text, Title } from '@mantine/core';

import stm32Img from './img/stm32-board.jpg';
import fpgaImg from './img/fpga-board.jpg';
import ros2Img from './img/ros2-simulation.jpg';
import hmiImg from './img/hmi-screen.jpg';
import labImg from './img/lab-setup.jpg';

import classes from './Engineering.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  modalContent: {
    sections: { title: string; content: string; image?: string }[];
  };
}

interface EngineeringSection {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projects: Project[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLACEHOLDER = stm32Img;

const heroHighlights = [
  'STM32 / ESP32 Embedded Development',
  'FreeRTOS & Real-Time Scheduling',
  'FPGA & Microprocessor Design (VHDL)',
  'ROS2 & Autonomous Navigation',
  'Industrial Monitoring & HMI Systems',
  'Wireless & Protocol Integration',
];

const galleryImages = [
  { src: stm32Img, alt: 'STM32 Development Board' },
  { src: fpgaImg, alt: 'FPGA Board' },
  { src: ros2Img, alt: 'ROS2 Robot Simulation' },
  { src: hmiImg, alt: 'Industrial HMI Screen' },
  { src: labImg, alt: 'Embedded Lab Setup' },
];

const sections: EngineeringSection[] = [
  {
    id: 'embedded',
    title: 'Embedded Systems & Digital Hardware',
    description:
      'Design and implementation of low-level firmware and digital architectures integrating microcontrollers, FPGA logic, and hardware abstraction layers. Focused on deterministic behavior, memory optimization, and hardware-software synchronization.',
    technologies: [
      'STM32', 'ESP32', 'Arduino', 'Raspberry Pi',
      'FreeRTOS', 'UART', 'I2C', 'SPI',
      'VHDL', 'Verilog', 'Vivado', 'ModelSim',
      'QuartusII', 'ZYBO FPGA Board', 'TouchGFX',
    ],
    projects: [
      {
        id: 'fpga-microprocessor',
        title: '8-bit Microprocessor Design on FPGA',
        description: 'Designed ALU, control unit, memory architecture. Implemented using VHDL. Deployed on ZYBO board.',
        technologies: ['VHDL', 'Vivado', 'ZYBO', 'FPGA'],
        highlights: [
          'Designed ALU, control unit, memory architecture',
          'Implemented using VHDL',
          'Deployed on ZYBO board',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Architecture Overview', content: 'The 8-bit microprocessor was designed from the ground up with a custom instruction set architecture (ISA). The design includes a dedicated ALU supporting arithmetic and logic operations, a finite-state-machine-based control unit, and a memory subsystem with separate instruction and data memory.', image: PLACEHOLDER },
            { title: 'Block Diagram', content: 'The processor pipeline consists of Fetch, Decode, Execute, and Write-Back stages. The control unit generates micro-operations for each instruction cycle, coordinating data flow between registers, ALU, and memory.', image: PLACEHOLDER },
            { title: 'Simulation & Verification', content: 'Comprehensive testbenches were developed in VHDL to verify each module independently. ModelSim was used for functional simulation, ensuring correct timing and logic behavior before synthesis.', image: PLACEHOLDER },
            { title: 'FPGA Implementation', content: 'The design was synthesized and deployed on a ZYBO FPGA development board using Vivado. Resource utilization was optimized to fit within the available logic elements while meeting timing constraints.', image: PLACEHOLDER },
          ],
        },
      },
      {
        id: 'cardio-respiratory',
        title: 'Wireless Cardio-Respiratory Monitoring System',
        description: 'STM32 + MAX30102 sensor (I2C). ZigBee (XBee) wireless transmission. QT interface visualization.',
        technologies: ['STM32', 'I2C', 'ZigBee', 'XBee', 'QT'],
        highlights: [
          'STM32 + MAX30102 sensor (I2C)',
          'ZigBee (XBee) wireless transmission',
          'QT interface visualization',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Communication Architecture', content: 'The system uses a multi-layer communication stack. The STM32 microcontroller communicates with the MAX30102 sensor via I2C for real-time acquisition of SpO2 and heart rate data. Processed data is transmitted wirelessly using ZigBee protocol through XBee modules.', image: PLACEHOLDER },
            { title: 'Sensor Acquisition Flow', content: 'Raw PPG signals are sampled at high frequency, filtered using digital signal processing techniques, and converted into meaningful physiological parameters. The firmware implements real-time signal conditioning and peak detection algorithms.', image: PLACEHOLDER },
            { title: 'Wireless Topology', content: 'The ZigBee mesh network allows multiple sensor nodes to communicate with a central coordinator. The topology supports scalability for multi-patient monitoring scenarios in clinical environments.', image: PLACEHOLDER },
          ],
        },
      },
      {
        id: 'access-control',
        title: 'Access Control System (Raspberry Pi)',
        description: 'Password + facial recognition. Telegram API alerts. Multithreaded architecture.',
        technologies: ['Raspberry Pi', 'Python', 'OpenCV', 'Telegram API'],
        highlights: [
          'Password + facial recognition',
          'Telegram API alerts',
          'Multithreaded architecture',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'System Architecture', content: 'The access control system runs on a Raspberry Pi with a multi-layered authentication mechanism. Users can authenticate via password entry or facial recognition, with each method running as independent threads for responsive interaction.', image: PLACEHOLDER },
            { title: 'Authentication Logic', content: 'Facial recognition uses OpenCV with pre-trained Haar cascades and LBPH face recognizer. The system maintains an encrypted database of authorized users and implements rate limiting to prevent brute-force attempts.', image: PLACEHOLDER },
            { title: 'Event-Driven Architecture', content: 'All access events (successful, failed, unauthorized) trigger real-time Telegram notifications to administrators. The event system uses a publisher-subscriber pattern for extensible alert routing.', image: PLACEHOLDER },
          ],
        },
      },
    ],
  },
  {
    id: 'realtime',
    title: 'Real-Time Systems & Communication Architectures',
    description:
      'Engineering deterministic systems under timing constraints using RTOS scheduling, multithreading, and structured communication protocols for embedded and industrial environments.',
    technologies: ['FreeRTOS', 'MQTT', 'ZigBee', 'UART', 'I2C', 'SPI', 'RTPS', 'CAN'],
    projects: [
      {
        id: 'spirulina-machine',
        title: 'Spirulina Growing Machine - ACTIA Engineering',
        description: 'Real-time scheduling of machine cycles. STM32H7 firmware. TouchGFX HMI. MQTT connectivity with mobile application.',
        technologies: ['STM32H7', 'FreeRTOS', 'TouchGFX', 'MQTT'],
        highlights: [
          'Real-time scheduling of machine cycles',
          'STM32H7 firmware',
          'TouchGFX HMI',
          'MQTT connectivity with mobile application',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Task Scheduling Model', content: 'The firmware implements a priority-based preemptive scheduling model using FreeRTOS. Critical tasks such as sensor polling, actuator control, and communication handling are assigned priorities based on their real-time constraints and deadlines.', image: PLACEHOLDER },
            { title: 'Communication Architecture', content: 'The system uses MQTT protocol for bidirectional communication with a mobile application. The embedded MQTT client runs as a dedicated FreeRTOS task, managing connection lifecycle, topic subscriptions, and message publishing with QoS levels.', image: PLACEHOLDER },
            { title: 'HMI Design', content: 'The TouchGFX-based HMI provides real-time visualization of machine state, sensor readings, and control parameters. The interface supports multi-screen navigation with smooth transitions and responsive touch interactions.', image: PLACEHOLDER },
            { title: 'System Synchronization', content: 'Inter-task communication uses FreeRTOS queues and semaphores to ensure data consistency between sensor acquisition, control logic, display updates, and network communication tasks.', image: PLACEHOLDER },
          ],
        },
      },
      {
        id: 'production-monitoring',
        title: 'Production Monitoring System - WS Tunisie',
        description: 'Part counting. 7-segment visual feedback. Audible alarm. Timer relay integration.',
        technologies: ['Embedded C', '7-Segment Display', 'Timer Relay'],
        highlights: [
          'Part counting',
          '7-segment visual feedback',
          'Audible alarm',
          'Timer relay integration',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Monitoring Logic', content: 'The production monitoring system tracks manufactured parts using optical sensors and interrupt-driven counting. The system maintains production targets and triggers visual and audible alerts when thresholds are reached.', image: PLACEHOLDER },
            { title: 'Industrial Feedback Mechanism', content: 'Real-time production count is displayed on 7-segment displays for operator visibility. The system integrates with timer relays for cycle management and includes audible alarms for deviation alerts and shift completion notifications.', image: PLACEHOLDER },
          ],
        },
      },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Autonomous Systems',
    description:
      'Design and simulation of autonomous robotic systems capable of navigation, obstacle avoidance, sensor fusion, and 3D environment mapping using modular middleware architectures.',
    technologies: ['ROS2', 'Gazebo', 'SLAM', 'LIDAR', 'Depth Camera', 'Linux'],
    projects: [
      {
        id: 'navigation-robot',
        title: 'Real-Time Navigation & Mapping Robot',
        description: 'Autonomous navigation. SLAM-based mapping. Obstacle avoidance. 3D environment reconstruction.',
        technologies: ['ROS2', 'Gazebo', 'SLAM', 'LIDAR', 'Linux'],
        highlights: [
          'Autonomous navigation',
          'SLAM-based mapping',
          'Obstacle avoidance',
          '3D environment reconstruction',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'ROS2 Node Architecture', content: 'The robot software stack is composed of modular ROS2 nodes communicating via topics and services. Key nodes include sensor drivers, localization, path planning, and motor control, each running as independent processes with defined interfaces.', image: PLACEHOLDER },
            { title: 'Sensor Fusion', content: 'Data from LIDAR and depth camera sensors are fused to create a comprehensive environmental model. The fusion algorithm combines 2D laser scans with 3D point cloud data for robust obstacle detection and mapping accuracy.', image: PLACEHOLDER },
            { title: 'Gazebo Simulation', content: 'The complete robotic system was developed and tested in Gazebo simulation environment before physical deployment. Custom world models and sensor plugins replicate real-world conditions for algorithm validation.', image: PLACEHOLDER },
            { title: 'Mapping Process', content: 'SLAM (Simultaneous Localization and Mapping) is implemented using a graph-based approach. The robot builds a consistent map of its environment while simultaneously tracking its position within that map, enabling autonomous exploration of unknown spaces.', image: PLACEHOLDER },
          ],
        },
      },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Automation & Monitoring Systems',
    description:
      'Development of embedded and monitoring systems tailored for industrial environments, focusing on reliability, scheduling, machine-state synchronization, and human-machine interaction.',
    technologies: ['STM32H7', 'TouchGFX', 'FreeRTOS', 'Industrial Protocols', 'TIA Portal', 'Production Monitoring'],
    projects: [
      {
        id: 'spirulina-industrial',
        title: 'Spirulina Growing Machine - Industrial Context',
        description: 'End-to-end industrial embedded system with real-time control, HMI interface, and remote monitoring via MQTT for automated spirulina cultivation.',
        technologies: ['STM32H7', 'FreeRTOS', 'TouchGFX', 'MQTT'],
        highlights: [
          'Industrial-grade embedded control',
          'Automated cultivation cycles',
          'Remote monitoring via MQTT',
          'TouchGFX operator interface',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Industrial Control Architecture', content: 'The system implements industrial-grade control loops for temperature, pH, and lighting management in the spirulina cultivation process. Each control parameter runs as an independent FreeRTOS task with configurable setpoints and safety thresholds.', image: PLACEHOLDER },
            { title: 'Reliability & Safety', content: 'Watchdog timers, redundant sensor readings, and fail-safe modes ensure continuous operation. The system implements graceful degradation strategies when sensor failures or communication losses are detected.', image: PLACEHOLDER },
          ],
        },
      },
      {
        id: 'ws-industrial',
        title: 'Production Line Monitoring - Industrial Context',
        description: 'Real-time production tracking system with visual feedback, alarm management, and operator-facing displays for manufacturing line efficiency.',
        technologies: ['Embedded C', '7-Segment Display', 'Timer Relay', 'Industrial Sensors'],
        highlights: [
          'Real-time production tracking',
          'Operator feedback systems',
          'Alarm management',
          'Shift-based reporting',
        ],
        image: PLACEHOLDER,
        modalContent: {
          sections: [
            { title: 'Production Line Integration', content: 'The monitoring system integrates directly with the production line through optical sensors and proximity detectors. Part counting is synchronized with machine cycle times to ensure accurate production tracking.', image: PLACEHOLDER },
            { title: 'Operator Interface', content: 'Large 7-segment displays provide immediate visual feedback to operators. The system supports configurable production targets per shift, with progressive visual indicators showing completion percentage and rate deviations.', image: PLACEHOLDER },
          ],
        },
      },
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ProjectCard({
  project,
  onViewDetails,
  index = 0,
}: {
  project: Project;
  onViewDetails: (p: Project) => void;
  index?: number;
}) {
  return (
    <motion.div
      className={classes.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
      custom={index}
    >
      <div className={classes.cardImageWrap}>
        <img
          src={project.image}
          alt={project.title}
          className={classes.cardImage}
          loading="lazy"
        />
        <div className={classes.cardImageOverlay} />
      </div>
      <div className={classes.cardBody}>
        <Title order={3} size="h4" mb="xs">
          {project.title}
        </Title>
        <ul className={classes.highlightList}>
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className={classes.techWrap}>
          {project.technologies.map((tech) => (
            <span key={tech} className={classes.techBadge}>
              {tech}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className={classes.viewDetailsBtn}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title={project.title}
      size="lg"
      centered
    >
      <div style={{ aspectRatio: '16/9', width: '100%', borderRadius: 8, overflow: 'hidden', marginBottom: 8, border: '1px solid var(--mantine-color-default-border)' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className={classes.techWrap} style={{ marginBottom: 16 }}>
        {project.technologies.map((tech) => (
          <span key={tech} className={classes.techBadge}>
            {tech}
          </span>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        {project.modalContent.sections.map((section, i) => (
          <div key={i} className={classes.modalSection}>
            <Title order={5} className={classes.modalSectionTitle}>
              {section.title}
            </Title>
            <Text className={classes.modalSectionContent}>{section.content}</Text>
            {section.image && (
              <div className={classes.modalImageWrap}>
                <img src={section.image} alt={section.title} loading="lazy" />
              </div>
            )}
            {i < project.modalContent.sections.length - 1 && <div className={classes.accentLine} style={{ marginTop: 24 }} />}
          </div>
        ))}
      </div>
    </Modal>
  );
}

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function SectionBlock({
  section,
  onViewDetails,
}: {
  section: EngineeringSection;
  onViewDetails: (p: Project) => void;
}) {
  return (
    <section id={section.id} className={classes.sectionBlock}>
      <motion.div
        style={{ marginBottom: '2rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionHeaderVariants}
      >
        <Title order={2} className={classes.sectionTitle}>
          {section.title}
        </Title>
        <div className={classes.accentLine} />
        <Text className={classes.sectionDesc}>{section.description}</Text>
        <div className={classes.sectionTech}>
          {section.technologies.map((tech) => (
            <span key={tech} className={classes.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      <div className={classes.projectsGrid}>
        {section.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} onViewDetails={onViewDetails} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Engineering() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={classes.root}>
      {/* Hero */}
      <section className={classes.hero}>
        <div className={classes.heroGrid} aria-hidden />
        <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
           
            <Title order={1} size="3rem" mb="md" style={{ lineHeight: 1.2 }}>
              Embedded & Electrical
              <br />
              <span className={classes.accentGradientText}>Engineering</span>
            </Title>
            <Text size="sm" c="dimmed" mb="lg" style={{ fontFamily: 'monospace' }}>
              Real-Time Systems · Embedded Architectures · Robotics · Industrial Automation
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ maxWidth: 1000 }}
          >
            <Text size="ls" c="dimmed" mb="xs">
              Embedded & Electrical Engineer specialized in real-time systems, digital hardware design, robotics simulation, and industrial communication architectures.
            </Text>
            <Text size="sm" c="dimmed" mb="xs">
              I design reliable systems where firmware, hardware, and communication layers operate under timing and performance constraints.
            </Text>
            <Text size="sm" c="dimmed" mb="lg">
              My work spans embedded development, FPGA architecture, autonomous robotics, and industrial monitoring systems.
            </Text>
          </motion.div>
          <motion.ul
            className={classes.heroHighlights}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {heroHighlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </motion.ul>
          <motion.div
            className={classes.galleryGrid}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.4 },
              },
              hidden: {},
            }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={classes.galleryItem}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className={classes.galleryCaption}>
                  <span>{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <Container size="lg">
        <div className={classes.accentLine} />
      </Container>

      {/* Sections */}
      <Container size="lg">
        {sections.map((section) => (
          <div key={section.id}>
            <SectionBlock section={section} onViewDetails={setSelectedProject} />
            <div className={classes.accentLine} />
          </div>
        ))}
      </Container>

      <motion.footer
        className={classes.pageFooter}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <p>Embedded & Electrical Engineering Portfolio</p>
      </motion.footer>

      <ProjectModal project={selectedProject} open={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
