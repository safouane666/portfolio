// This is the engineering page
// This is the engineering page from Ramzi
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Modal, Text, Title } from '@mantine/core';

import stm32Img from './img/stm32-board.jpg';
import fpgaImg from './img/fpga-board.jpg';
import ros2Img from './img/ros2-simulation.jpg';
import hmiImg from './img/hmi-screen.jpg';
import labImg from './img/lab-setup.jpg';
import graduationReportPdf from '../../assets/FinalReport.pdf';
import cell3DViewImg from '../../assets/Images/Chap3/cell_3d_view_annotated.png';
import connection from '../../assets/Images/Chap3/connection.png';
import maintenanceScreenImg from '../../assets/Images/Chap3/maintenance_screen.png';
import commDiagramImg from '../../assets/Images/Chap4/communication_diagram.png';
import productionScreenImg from '../../assets/Images/Chap3/production_screen.png';
import graphcetImg from '../../assets/Images/Chap3/graphcet.png';
import blenderAnimImg from '../../assets/Images/Chap4/Blender_Animation.png';
import tagsInputsDbImg from '../../assets/Images/Chap3/tags_inputs_db.jpg';
import statusTextImg from '../../assets/Images/Chap3/status_text.png';
import onlineDiagnosticsImg from '../../assets/Images/Chap4/Online_Diagnostics.png';
import zyboImg from '@/imgs/zybo.webp';
import xbee from '@/imgs/xbee.webp';
import blockDiagramImg from '@/imgs/blocDiag.webp';
import lcd from '@/imgs/LCDscreen.webp';
import materielImg from '@/imgs/materiel.webp';
import spirulinaImg from '@/imgs/spiraw.webp';
import gazeboImg from '@/imgs/gazebo.webp';
import counterImg from '@/imgs/counter.webp';
import classes from './Engineering.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  badge?: string;
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
      'STM32',
      'ESP32',
      'Arduino',
      'Raspberry Pi',
      'FreeRTOS',
      'UART',
      'I2C',
      'SPI',
      'VHDL',
      'Verilog',
      'Vivado',
      'ModelSim',
      'QuartusII',
      'ZYBO FPGA Board',
      'TouchGFX',
    ],
    projects: [
      {
        id: 'fpga-microprocessor',
        title: '8-bit Microprocessor Design on FPGA',
        description:
          'Designed ALU, control unit, memory architecture. Implemented using VHDL. Deployed on ZYBO board.',
        technologies: ['VHDL', 'Vivado', 'ZYBO', 'FPGA'],
        highlights: [
          'Designed ALU, control unit, memory architecture',
          'Implemented using VHDL',
          'Deployed on ZYBO board with validated instruction set and control timing',
          'Enabled full custom 8-bit pipeline from ISA design to FPGA implementation',
        ],
        image: zyboImg,
        modalContent: {
          sections: [
            {
              title: 'Architecture Overview',
              content:
                'The 8-bit microprocessor was designed from the ground up with a custom instruction set architecture (ISA). The design includes a dedicated ALU supporting arithmetic and logic operations, a finite-state-machine-based control unit, and a memory subsystem with separate instruction and data memory.',
            },
            {
              title: 'Block Diagram',
              content:
                'The processor pipeline consists of Fetch, Decode, Execute, and Write-Back stages. The control unit generates micro-operations for each instruction cycle, coordinating data flow between registers, ALU, and memory.',
              image: blockDiagramImg,
            },
            {
              title: 'Simulation & Verification',
              content:
                'Comprehensive testbenches were developed in VHDL to verify each module independently. ModelSim was used for functional simulation, ensuring correct timing and logic behavior before synthesis.',
            },
            {
              title: 'FPGA Implementation',
              content:
                'The design was synthesized and deployed on a ZYBO FPGA development board using Vivado. Resource utilization was optimized to fit within the available logic elements while meeting timing constraints.',
            },
          ],
        },
      },
      {
        id: 'cardio-respiratory',
        title: 'Wireless Cardio-Respiratory Monitoring System',
        description:
          'STM32 + MAX30102 sensor (I2C). ZigBee (XBee) wireless transmission. QT interface visualization.',
        technologies: ['STM32', 'I2C', 'ZigBee', 'XBee', 'QT'],
        highlights: [
          'STM32 + MAX30102 sensor (I2C)',
          'ZigBee (XBee) wireless transmission',
          'QT interface visualization for continuous SpO2 and heart-rate trends',
          'End-to-end wireless link validated for stable bedside-to-station monitoring',
        ],
        image: xbee,
        modalContent: {
          sections: [
            {
              title: 'Communication Architecture',
              content:
                'The system uses a multi-layer communication stack. The STM32 microcontroller communicates with the MAX30102 sensor via I2C for real-time acquisition of SpO2 and heart rate data. Processed data is transmitted wirelessly using ZigBee protocol through XBee modules.',
            },
            {
              title: 'Sensor Acquisition Flow',
              content:
                'Raw PPG signals are sampled at high frequency, filtered using digital signal processing techniques, and converted into meaningful physiological parameters. The firmware implements real-time signal conditioning and peak detection algorithms.',
            },
            {
              title: 'Wireless Topology',
              content:
                'The ZigBee mesh network allows multiple sensor nodes to communicate with a central coordinator. The topology supports scalability for multi-patient monitoring scenarios in clinical environments.',
            },
          ],
        },
      },
      {
        id: 'access-control',
        title: 'Access Control System (Raspberry Pi)',
        description:
          'Multi-layer authentication system combining facial recognition and password verification with real-time Telegram notifications.',
        technologies: [
          'Raspberry Pi',
          'Python',
          'OpenCV',
          'LBPH',
          'Haar Cascades',
          'Telegram Bot API',
          'Multithreading',
        ],
        highlights: [
          'Hybrid authentication (Face + Password)',
          'Real-time Telegram alert system',
          'Multithreaded event-driven architecture maintaining responsive user interaction',
          'Improved access traceability and remote oversight for small secured spaces',
        ],
        image: materielImg,
        modalContent: {
          sections: [
            {
              title: 'System Overview & Architecture',
              content:
                'The system is deployed on a Raspberry Pi acting as a standalone embedded security controller. It integrates a camera module, keypad interface, and electronic door locking mechanism. The architecture is divided into independent modules for image acquisition, face recognition, password verification, and alert handling. Each module operates in a coordinated yet decoupled structure to ensure responsiveness and maintainability.',
            },

            {
              title: 'Facial Recognition Pipeline',
              content:
                'Facial authentication is implemented using OpenCV. Face detection is performed using pre-trained Haar Cascade classifiers, followed by face recognition using the LBPH (Local Binary Pattern Histogram) algorithm. A dataset of authorized users is pre-collected and used to train the recognition model. During runtime, captured frames are processed in real-time, converted to grayscale, and compared against trained facial profiles to determine identity confidence levels.',
            },

            {
              title: 'Password Authentication Mechanism',
              content:
                'As a secondary authentication layer, users may enter a secure password via keypad input. The system validates credentials against a locally stored encrypted database. Rate limiting and attempt tracking mechanisms are implemented to prevent brute-force attacks. The dual-authentication design enhances reliability in varying environmental conditions.',
            },

            {
              title: 'Multithreading & Concurrency Design',
              content:
                'The application uses Python multithreading to ensure concurrent execution of authentication tasks and event monitoring. Face recognition processing, keypad listening, and alert transmission operate in parallel threads. This prevents blocking behavior and guarantees smooth user interaction while maintaining real-time responsiveness.',
            },

            {
              title: 'Event-Driven Alert System',
              content:
                'All access attempts — successful, failed, or unauthorized — trigger structured event notifications. The system integrates with the Telegram Bot API to send real-time alerts to administrators. Notifications include timestamps and access status, enabling remote monitoring. The event handling logic follows a publisher-subscriber pattern, allowing future integration with additional notification channels.',
            },

            {
              title: 'Security & Reliability Considerations',
              content:
                'The system ensures secure handling of user data through encrypted credential storage and controlled access to the facial dataset. Error handling mechanisms manage camera disconnections, recognition failures, and network interruptions. The modular architecture allows easy scalability for additional authentication methods or hardware extensions.',
            },
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
        description:
          'Real-time scheduling of machine cycles. STM32H7 firmware. TouchGFX HMI. MQTT connectivity with mobile application.',
        technologies: ['STM32H7', 'FreeRTOS', 'TouchGFX', 'MQTT'],
        highlights: [
          'Real-time scheduling of machine cycles',
          'STM32H7 firmware',
          'TouchGFX HMI',
          'MQTT connectivity with mobile application for remote supervision and control',
          'Improved cycle-time visibility and repeatability across machine states',
        ],
        image: spirulinaImg,
        modalContent: {
          sections: [
            {
              title: 'Task Scheduling Model',
              content:
                'The firmware implements a priority-based preemptive scheduling model using FreeRTOS. Critical tasks such as sensor polling, actuator control, and communication handling are assigned priorities based on their real-time constraints and deadlines.',
            },
            {
              title: 'Communication Architecture',
              content:
                'The system uses MQTT protocol for bidirectional communication with a mobile application. The embedded MQTT client runs as a dedicated FreeRTOS task, managing connection lifecycle, topic subscriptions, and message publishing with QoS levels.',
            },
            {
              title: 'HMI Design',
              content:
                'The TouchGFX-based HMI provides real-time visualization of machine state, sensor readings, and control parameters. The interface supports multi-screen navigation with smooth transitions and responsive touch interactions.',
            },
            {
              title: 'System Synchronization',
              content:
                'Inter-task communication uses FreeRTOS queues and semaphores to ensure data consistency between sensor acquisition, control logic, display updates, and network communication tasks.',
            },
          ],
        },
      },
      {
        id: 'production-monitoring',
        title: 'Production Monitoring System - WS Tunisie',
        description:
          'Part counting. 7-segment visual feedback. Audible alarm. Timer relay integration.',
        technologies: ['Embedded C', '7-Segment Display', 'Timer Relay'],
        highlights: [
          'Part counting',
          '7-segment visual feedback',
          'Audible alarm',
          'Timer relay integration for shift and cycle management',
          'Increased operator awareness of throughput and missed production targets',
        ],
        image: counterImg,
        modalContent: {
          sections: [
            {
              title: 'Monitoring Logic',
              content:
                'The production monitoring system tracks manufactured parts using optical sensors and interrupt-driven counting. The system maintains production targets and triggers visual and audible alerts when thresholds are reached.',
            },
            {
              title: 'Industrial Feedback Mechanism',
              content:
                'Real-time production count is displayed on 7-segment displays for operator visibility. The system integrates with timer relays for cycle management and includes audible alarms for deviation alerts and shift completion notifications.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation Project – Automated Robotic Sorting Cell',
    description:
      'Flagship end-of-studies project: an automated cube sorting cell with KUKA robot, Siemens PLC/HMI, Raspberry Pi vision, and a full digital twin in TIA Portal and Blender.',
    technologies: [
      'Industrial Robotics',
      'PLC',
      'TIA Portal',
      'Digital Twin',
      'Simulation',
    ],
    projects: [
      {
        id: 'graduation-robotic-cell',
        title: 'Automated Robotic Sorting Cell with Digital Twin',
        description:
          'Industrial robotic cell for automated part sorting, integrated with a real-time digital twin for monitoring, analysis, and validation.',
        technologies: [
          'Industrial Robotics',
          'PLC',
          'TIA Portal',
          'Digital Twin',
          'Simulation',
        ],
        badge: 'Graduation Project',
        highlights: [
          'Automated sorting cell with industrial robot and conveyors',
          'Real-time digital twin mirroring the physical cell state',
          'PLC-based control and safety logic (TIA Portal)',
          'Traceability and performance dashboards for production analysis',
          'Validated sorting logic and safety sequences before physical commissioning',
          'End-of-studies engineering graduation project assessed by industrial jury',
          'Validated on a real industrial demonstrator for fairs and training sessions',
        ],
        image: cell3DViewImg,
        modalContent: {
          sections: [
            {
              title: 'Project Overview',
              content:
                'Design and implementation of an automated cube sorting cell for industrial fairs at Xpert-Meca. The system combines a KUKA KR Agilus robot, conveyors, Festo pneumatics, Omron sensors, a Siemens S7-1200 PLC, TP1200 Unified HMI, and a Raspberry Pi vision module to detect cube colors and sort them into bins.',
              image: cell3DViewImg,
            },
            {
              title: 'System Architecture',
              content:
                'The architecture integrates a KUKA robot controlled by a KRC4 Compact, a Siemens S7-1212C PLC, TP1200 Unified HMI, and a Raspberry Pi 4 over an industrial PROFINET network. Conveyors and pneumatic actuators are driven from the PLC, while Omron photoelectric sensors and cylinder sensors provide feedback for sequencing and safety.',
              image: commDiagramImg,
            },
            {
              title: 'Control Logic & HMI',
              content:
                'The control logic is implemented in Siemens TIA Portal using ladder and function block diagrams. The TP1200 Unified HMI provides operators with real-time cell status, alarm pages, manual jogging, and recipe selection for different cube sorting patterns. A dedicated production dashboard summarizes part counts, cycle times, and stop causes.',
              image: productionScreenImg,
            },
            {
              title: 'Sequencing & Safety',
              content:
                'Sequencing of robot and conveyor actions is modeled using GRAFCET. Safety interlocks, emergency stop handling, and restart procedures are formalized to guarantee safe recovery after faults. This structured approach simplifies debugging and ensures standard-compliant behavior.',
              image: graphcetImg,
            },
            {
              title: 'Digital Twin & Animation',
              content:
                'A full 3D digital twin of the cell was built and animated in Blender. The virtual model reproduces the kinematics of the robot, conveyors, and cube flows. Animations are synchronized with the PLC sequences, enabling fast validation of trajectories and exhibition scenarios before deployment.',
              image: blenderAnimImg,
            },
            {
              title: 'Commissioning & Validation',
              content:
                'The cell was commissioned through progressive testing: I/O checks, manual jog sequences, dry-runs without parts, then full automatic cycles. Metrics such as cycle time, sorting accuracy and stop causes were monitored to validate behavior before public demos.',
              image: connection,
            },
            {
              title: 'Industrial Impact & Use Cases',
              content:
                'The system is used as a demonstrator during industrial fairs and training sessions to showcase modern robotics, PLC programming, HMI design and digital twin workflows in a single compact cell.',
              image: maintenanceScreenImg,
            },
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
        description:
          'Autonomous navigation. SLAM-based mapping. Obstacle avoidance. 3D environment reconstruction.',
        technologies: ['ROS2', 'Gazebo', 'SLAM', 'LIDAR', 'Linux'],
        highlights: [
          'Autonomous navigation',
          'SLAM-based mapping',
          'Obstacle avoidance',
          '3D environment reconstruction in unknown indoor environments',
          'Validated navigation stack before hardware integration using full-fidelity simulation',
        ],
        image: gazeboImg,
        modalContent: {
          sections: [
            {
              title: 'ROS2 Node Architecture',
              content:
                'The robot software stack is composed of modular ROS2 nodes communicating via topics and services. Key nodes include sensor drivers, localization, path planning, and motor control, each running as independent processes with defined interfaces.',
            },
            {
              title: 'Sensor Fusion',
              content:
                'Data from LIDAR and depth camera sensors are fused to create a comprehensive environmental model. The fusion algorithm combines 2D laser scans with 3D point cloud data for robust obstacle detection and mapping accuracy.',
            },
            {
              title: 'Gazebo Simulation',
              content:
                'The complete robotic system was developed and tested in Gazebo simulation environment before physical deployment. Custom world models and sensor plugins replicate real-world conditions for algorithm validation.',
            },
            {
              title: 'Mapping Process',
              content:
                'SLAM (Simultaneous Localization and Mapping) is implemented using a graph-based approach. The robot builds a consistent map of its environment while simultaneously tracking its position within that map, enabling autonomous exploration of unknown spaces.',
            },
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
    technologies: [
      'STM32H7',
      'TouchGFX',
      'FreeRTOS',
      'Industrial Protocols',
      'TIA Portal',
      'Production Monitoring',
    ],
    projects: [
      {
        id: 'spirulina-industrial',
        title: 'Spirulina Growing Machine – Industrial Automation Context',
        description:
          'Industrial embedded machine handling automated spirulina cultivation cycles with real-time control, TouchGFX HMI and MQTT-based supervision.',
        technologies: ['STM32H7', 'FreeRTOS', 'TouchGFX', 'MQTT'],
        highlights: [
          'Industrial-grade embedded control for pumps, heaters and agitators',
          'Real-time scheduling of cultivation phases using FreeRTOS',
          'TouchGFX HMI for operators (recipes, alarms, manual mode)',
          'MQTT connectivity for remote supervision and data logging',
        ],
        image: spirulinaImg,
        modalContent: {
          sections: [
            {
              title: 'Industrial Control Architecture',
              content:
                'The spirulina machine runs on an STM32H7 microcontroller with FreeRTOS. Each subsystem (temperature, pH, lighting, agitation, dosing) is mapped to dedicated tasks with well-defined priorities and watchdogs, ensuring deterministic behavior even under load.',
            },
            {
              title: 'Scheduling & Machine States',
              content:
                'Cultivation is modeled as a state machine with automatic transitions between filling, cultivation, harvesting and cleaning. Timers, sensor thresholds and safety conditions drive the transitions, ensuring repeatable cycles across batches.',
            },
            {
              title: 'HMI & Operator Workflow',
              content:
                'A TouchGFX HMI provides operators with a clear view of current phase, tank values and alarms. Screens include recipe selection, trend views, alarm history and manual control pages for maintenance and debugging.',
            },
            {
              title: 'Remote Monitoring',
              content:
                'Process data and alarms are published over MQTT to a remote dashboard / mobile app, enabling remote supervision of cultivation progress, fault notifications and basic control commands within defined safety limits.',
            },
          ],
        },
      },
      {
        id: 'cell-plc-hmi',
        title: 'PLC & HMI Automation for Robotic Sorting Cell',
        description:
          'Siemens TIA Portal program and Unified HMI for a KUKA-based sorting cell, focusing on sequences, safety interlocks and operator ergonomics.',
        technologies: ['TIA Portal', 'PLC', 'HMI', 'GRAFCET'],
        highlights: [
          'Structured PLC program for conveyors, robot handshakes and pneumatic actuators',
          'GRAFCET-based sequence design for clear, maintainable state logic',
          'Unified HMI screens for status, recipes, alarms and maintenance',
          'Diagnostics and watch tables to speed up commissioning and troubleshooting',
        ],
        image: maintenanceScreenImg,
        modalContent: {
          sections: [
            {
              title: 'Program Structure & Tagging',
              content:
                'The automation program is organized in TIA Portal with dedicated blocks for I/O management, interlocks, sequences and diagnostics. Tag databases group inputs, outputs and internal variables to keep the project maintainable as the cell evolves.',
              image: tagsInputsDbImg,
            },
            {
              title: 'Sequence Design with GRAFCET',
              content:
                'Sorting logic is modeled using GRAFCET, mapping each step and transition to PLC logic. This formalism simplifies reasoning about simultaneous motions, safe stops and restart procedures.',
              image: graphcetImg,
            },
            {
              title: 'Operator Screens & Status Feedback',
              content:
                'Unified HMI pages cover automatic and manual modes, cube counters, alarm lists and maintenance functions. Clear status texts and value displays help operators understand what the cell is doing at a glance.',
              image: statusTextImg,
            },
            {
              title: 'Diagnostics & Commissioning Tools',
              content:
                'Watch tables, online diagnostics and dedicated maintenance screens in TIA Portal were used during commissioning to validate signals, tune timings and quickly identify configuration issues.',
              image: onlineDiagnosticsImg,
            },
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
      style={{ height: '100%' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={cardVariants}
      custom={index}
    >
      <div className={classes.cardImageWrap}>
        <img src={project.image} alt={project.title} className={classes.cardImage} loading="lazy" />
        <div className={classes.cardImageOverlay} />
      </div>
      <div className={classes.cardBody}>
        <Title order={3} size="h4" mb="xs">
          {project.title}
        </Title>
        {project.badge && (
          <div className={classes.cardBadge}>{project.badge}</div>
        )}
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
    <Modal opened={open} onClose={onClose} title={project.title} size="lg" centered>
      <div
        style={{
          aspectRatio: '16/9',
          width: '100%',
          borderRadius: 8,
          overflow: 'hidden',
          marginBottom: 8,
          border: '1px solid var(--mantine-color-default-border)',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
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
            {i < project.modalContent.sections.length - 1 && (
              <div className={classes.accentLine} style={{ marginTop: 24 }} />
            )}
          </div>
        ))}
      </div>
      {project.id === 'graduation-robotic-cell' && (
        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <Button
            component="a"
            href={graduationReportPdf}
            download
            variant="outline"
            size="sm"
          >
            Download full project report (PDF)
          </Button>
        </div>
      )}
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
  const isGraduation = section.id === 'graduation';

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
        <Text className={classes.sectionDesc}>{section.description}</Text>
        <div className={classes.sectionTech}>
          {section.technologies.map((tech) => (
            <span key={tech} className={classes.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      {isGraduation ? (
        <div className={classes.singleCardRow}>
          {section.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
              index={i}
            />
          ))}
        </div>
      ) : (
        <div className={classes.projectsGrid}>
          {section.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
              index={i}
            />
          ))}
        </div>
      )}
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
            <Text
              size="xs"
              tt="uppercase"
              fw={600}
              c="cyan"
              mb="sm"
              style={{ fontFamily: 'monospace', letterSpacing: 2 }}
            >
              Portfolio
            </Text>
            <Title order={1} size="2.5rem" mb="md" style={{ lineHeight: 1.2 }}>
              Embedded & Electrical
              <br />
              <span className={classes.accentGradientText}>Engineering</span>
            </Title>
            <Text size="sm" c="dimmed" mb="lg" style={{ fontFamily: 'monospace' }}>
              Real-time systems · embedded architectures · robotics · industrial automation
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ maxWidth: 768 }}
          >
            <Text size="sm" c="dimmed" mb="xs">
              Embedded & Electrical Engineer focused on real-time firmware, digital hardware
              design, robotics simulation, and industrial communication.
            </Text>
            <Text size="sm" c="dimmed" mb="xs">
              I design systems where firmware, hardware, and communication layers stay
              synchronized under strict timing and performance constraints.
            </Text>
            <Text size="sm" c="dimmed" mb="lg">
              Recent work covers embedded development, FPGA design, autonomous robotics, and
              production monitoring for industrial environments.
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

      <Container size="lg">
        <motion.div
          className={classes.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <Title order={2} className={classes.ctaTitle}>
            Need help with an embedded or robotics project?
          </Title>
          <Text className={classes.ctaDescription}>
            From real-time firmware and FPGA design to industrial monitoring and robotics
            simulation, I can help you design, prototype, and ship robust systems.
          </Text>
          <Button component={Link} to="/Contact" className={classes.ctaButton} size="lg">
            Discuss a project
          </Button>
        </motion.div>
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

      <ProjectModal
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
