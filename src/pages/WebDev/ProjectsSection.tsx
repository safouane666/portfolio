'use client';

import {
  ActionIcon,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';

import ambratoScreenShot from './img/AmbratoScreenShot.webp';
import ambratoThumb from './img/AmbratoThumb.png';
import couscousGrilladeScreenShot from './img/CouscousGrilladeScreenShot.webp';
import couscousGrilladeThumb from './img/CouscousGrilladeThumb.png';
import gastleylawScreenShot from './img/GastleyLawScreenShot.webp';
import gastleylawThumb from './img/GastleyLaw.png';
import { useState } from 'react';

// Example icons for tech stack (replace with your logos)

const projects = [
  {
    id: 1,
    title: 'Gastley Law Website',
    shortDescription: `project was a full-stack portfolio delivery that transformed a specialized law firm's presence into a high-conversion, authoritative digital platform. My work involved creating a premium, high-trust UI/UX with polished micro-animations, developing a robust, performance-optimized site featuring a custom, dynamic Diminished Value Calculator for immediate lead capture, and implementing foundational Technical SEO and site architecture to ensure long-term, sustainable organic growth and maximize the client's return on investment.`,
    image: gastleylawThumb,
    websiteUrl: 'https://gastleylaw.com/',
    screenshot: gastleylawScreenShot,
    techStack: [
      {
        name: 'WordPress',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      },
      {
        name: 'Elementor',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968699.png',
      },
      {
        name: 'Hostinger',
        src: 'https://getdeploying.com/static/img/logos/hostinger.30aa448b7a04.png',
      },
      {
        name: 'Google Analytics',
        src: 'https://cdn-icons-png.flaticon.com/128/732/732204.png',
      },
      {
        name: 'Mailchimp',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968899.png',
      },
    ],
    fullDescription: `The Gastley Law website was a complete full-stack delivery, transforming a specialized legal firm's presence into a high-conversion, authoritative digital platform. This project was built to establish immediate user trust and achieve long-term client acquisition through strategic SEO and interactive design.

## Design & User Experience (UI/UX)
The design strategy centered on establishing authority and trust, essential for the legal sector. The site features a clean, professional aesthetic with a focused color palette and typography that reinforces reliability.

- High-Trust Layout: Placement of Google Review badges and embedded video testimonials to build instant credibility.
- Conversion-Focused Hierarchy: Designed to guide users directly to key conversion actions such as the Diminished Value Calculator and Case Evaluation forms.
- Micro-Interactions: Subtle scroll and hover effects enhance engagement without visual clutter.

## Development & Technical Execution
Handled full front-end and back-end development to ensure performance, scalability, and robustness.

- Dynamic Calculator: Built a complex, real-time estimator in React/JavaScript integrated securely into the CRM.
- Optimized Animations: Implemented interactive animations while maintaining top scores on Google Core Web Vitals.
- Technical SEO Foundation: Mobile-first, schema-marked, and optimized for strong organic ranking.

## Strategic Value for the Client
The website became a high-performing acquisition tool that sustainably drives qualified leads.

- High-Quality Lead Generation: Converts visitors through interactive features and clear value propositions.
- Accelerated Trust: Highlights contingency model (“Only Pay When We Win”) and success metrics.
- Sustainable Organic Growth: SEO-driven structure ensures long-term cost-efficient traffic growth.
`,
    clientPrompt: `The client, a specialized law firm focusing on Diminished Value and Property Damage claims, required a completely new, high-performance website to serve as their primary lead generation engine; the project's core objectives were to establish immediate authority and trust with a premium, professional online presence, maximize conversions (ROI) by implementing a clear user journey centered around a proprietary, highly visible interactive tool (Diminished Value Calculator) for data capture, and ensure sustainable growth by building the site on a robust technical foundation that prioritized speed, mobile responsiveness, and foundational Technical SEO to drive long-term, cost-effective organic traffic.`,
  },
  {
    id: 2, // Assuming this is the second project
    title: 'Ambrato Leathers E-Commerce Store',
    shortDescription: `The Ambrato Leathers project delivered a fully functional, premium digital storefront built on the Wix platform. My work focused on **Design** by creating a luxurious, product-centric aesthetic with clear visual hierarchy to boost conversions; **Development** by configuring robust e-commerce features including product catalogs, secure checkout, and targeted lead capture forms; and **Value** by maximizing online sales and building brand credibility through prominent customer testimonials and streamlined B2B service offerings.`,
    image: ambratoThumb, // PLACEHOLDER: Replace with your thumbnail import
    websiteUrl: 'https://digitalrahulp.wixsite.com/ambratoleathers',
    screenshot: ambratoScreenShot, // PLACEHOLDER: Replace with your full-page screenshot import
    techStack: [
      {
        name: 'Wix',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968753.png', // General Wix Icon
      },

      {
        name: 'Google Analytics',
        src: 'https://cdn-icons-png.flaticon.com/128/732/732204.png',
      },
      {
        name: 'Mailchimp',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968899.png', // Used for Lead Capture Form
      },
    ],
    fullDescription: `The Ambrato Leathers website was developed as a premium e-commerce destination, transforming the client's genuine leather products into a digital showcase designed to drive direct online sales and expand their market presence, including B2B opportunities.

## Content Overview and Page Structure
The content was structured to serve both B2C shoppers and B2B clients while emphasizing product quality and brand story.

- **Homepage:** Features striking lifestyle photography, product category showcases (Laptop Bags, Sling Bags, Wallets), customer testimonials, and a prominent 15% off sign-up offer.
- **Shop:** A complete e-commerce catalog featuring product filtering, detailed item pages with sale pricing, and quick-view functionality.
- **About:** Details the brand's commitment to genuine leather and quality craftsmanship to build trust.
- **Corporate Gifting / Private Label:** Dedicated B2B sections to capture high-volume orders, clearly communicating the client's manufacturing and custom service capabilities.
- **Contact:** Standard contact information and links to their active social media presence.

## ✨ Design & User Experience (UI/UX)
The design focused on merging luxury and accessibility to appeal to a sophisticated yet budget-conscious market.

- **Product-Centric Visuals:** Utilization of high-resolution, professional product and lifestyle photography to convey the quality of the genuine leather goods.
- **Clear Sales Funnel:** The design prominently features large, appealing calls-to-action ("Shop Now," "Get The Offer") and a clean navigation bar to minimize friction in the shopping process.
- **Trust Elements:** Strategic placement of verified customer testimonials (linked from external platforms like Amazon) and clear product badging ("Best Seller," "New Arrival") to immediately validate quality and build buyer confidence.

## 💻 Development & Technical Execution
Leveraging the Wix platform, the focus was on delivering a robust, fully functional e-commerce system optimized for transactions and lead generation.

- **E-commerce Configuration:** Setup and configuration of the full Wix Stores backend, including product inventory, secure shopping cart, and payment gateway integration.
- **Lead Capture System:** Implemented and styled the "15% off first order" signup form, linking it to the client's email marketing and WhatsApp for immediate lead capture and personalized communication.
- **Core Platform Setup:** Handled the domain integration, initial SEO settings, mobile responsiveness across all product pages, and social media integration (Facebook, Instagram, LinkedIn).

## 💰 Strategic Value for the Client
The project delivered a stable, scalable platform focused on increasing retail sales and opening new B2B revenue streams.

- **Direct Sales & Margin Improvement:** Transitioned the client from relying solely on third-party marketplaces (implied) to owning a direct-to-consumer channel, improving profit margins.
- **High-Volume Lead Generation:** The incentivized sign-up form (15% off) successfully captures valuable customer data for retargeting and future sales campaigns.
- **Market Expansion:** The dedicated 'Corporate Gifting' and 'Private Label' pages formalized and marketed B2B services, immediately providing a channel for high-value, large-scale manufacturing opportunities.`,
    clientPrompt: `The client, a genuine leather goods company, required a branded e-commerce platform to directly sell their premium products (laptop bags, sling bags, and wallets) online; the primary goals were to establish a high-end, trustworthy digital storefront that could showcase product quality through strong imagery, integrate effective sales and lead generation mechanisms (like the 15% off sign-up), and provide a clear, hassle-free path to purchase for B2C and B2B clients (Corporate Gifting).`,
  },
  {
    id: 3, // Assuming this is the third project
    title: 'Couscous Grillade Restaurant Landing Page Demo',
    shortDescription: `This project delivered a high-impact, single-page landing page demo for "Couscous Grillade," utilizing WordPress as a user-friendly CMS for easy client management. My work focused on Design by creating a warm, authentic, and visually appealing presentation centered on high-quality food photography; Development by ensuring a fast-loading, fully responsive demo that clearly showcased essential menu items and contact details; and Value by establishing a strong, local digital identity designed to primarily drive foot traffic and reservations for the restaurant.`,
    image: couscousGrilladeThumb, // PLACEHOLDER: Replace with your thumbnail import
    websiteUrl: 'https://couscousgrillade.wordpress.com/',
    screenshot: couscousGrilladeScreenShot, // PLACEHOLDER: Replace with your full-page screenshot import
    techStack: [
      {
        name: 'WordPress',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      },
      {
        name: 'Elementor/Builder',
        src: 'https://cdn-icons-png.flaticon.com/128/5968/5968699.png', // Elementor/Page Builder Icon
      },
    ],
    fullDescription: `The "Couscous Grillade" project was developed as a visually rich, one-page demo landing page using WordPress. The primary goal was to create a digital showcase that evokes the warmth and authenticity of the restaurant's cuisine and effectively converts online interest into in-person visits.

## Content Overview and Page Structure
The content was organized on a single-page scrolling experience, prioritizing the most critical information for a restaurant customer.

- Hero Section: High-impact food imagery paired with a clear, immediate call-to-action (e.g., "Book Your Table").
- Our Story/About: A concise section establishing the restaurant's commitment to authentic North African cuisine (Couscous & Grillades) and high quality.
- Menu Showcase: Highlights the signature dishes with appealing photography and brief, descriptive text, avoiding clutter while driving appetite.
- Location & Contact: A clear section featuring hours of operation, address, phone number, and an embedded map for easy navigation and reservations/inquiries.

## ✨ Design & User Experience (UI/UX)
The design strategy focused on warmth, authenticity, and clear calls-to-action to encourage a visit.

- Warm Aesthetic: Utilized a welcoming color palette (reds, oranges, browns, and natural textures) to complement the cuisine and convey a sense of comfort and authenticity.
- Visual Hierarchy: Large, appetizing food photography dominates the page, serving as the main driver of user engagement and desire to visit.
- Single-Page Simplicity: The UI/UX is deliberately simple, ensuring that users on mobile devices can quickly scroll to find the menu, location, and contact details without needing to navigate complex menus.

## 💻 Development & Technical Execution
Built on the WordPress CMS, the development focused on delivering a fast, responsive demo that is easy for the client to manage and update.

- WordPress Setup: Rapid deployment and customization within a WordPress environment using a page builder to ensure the demo could be easily handed over and managed by a non-developer client.
- Full Responsiveness: Ensured the design remained visually appealing and functional on all screen sizes (desktop, tablet, mobile), which is critical for local customers using phones to find directions.
- Essential Integrations: Seamlessly integrated a contact/reservation form and a Google Maps module to provide necessary utility without adding complexity.

## 💰 Strategic Value for the Client
The project delivered a fundamental digital identity focused entirely on converting local online traffic into revenue-generating foot traffic.

- Local SEO Readiness: Provided a clean structure for Name, Address, and Phone (NAP) information, which is the cornerstone of effective local SEO, helping the restaurant appear in "near me" searches.
- Low Barrier to Entry: Delivering a simple landing page kept initial development costs low while immediately providing a professional digital presence.
- Reservation Funnel: The page's entire design flow culminates in the contact section, maximizing the chance of converting interested visitors into confirmed reservations.`,
    clientPrompt: `The client required a visually appealing, one-page WordPress landing page demo for "Couscous Grillade" to showcase the restaurant's authentic North African cuisine; the main requirements were to use high-quality imagery to immediately convey the food's authenticity, clearly present the signature menu items (couscous and grillades), and provide prominent, easy-to-access contact information and a location map to effectively drive in-person reservations and local foot traffic.`,
  },
];

export default function ProjectsSection() {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setOpened(true);
  };

  const renderFormattedDescription = (text: string) => {
    const lines = text.trim().split('\n');
    return lines.map((line, i) => {
      if (!line.trim()) return <div key={i} style={{ height: 12 }} />;
      if (line.startsWith('##'))
        return (
          <Title key={i} order={3} mt="lg" mb="sm" c="cyan.8" style={{ fontSize: 20 }}>
            {line.replace('##', '').trim()}
          </Title>
        );
      if (line.startsWith('- '))
        return (
          <Text key={i} size="sm" style={{ lineHeight: 1.7, marginLeft: 20 }}>
            • {line.replace('- ', '').trim()}
          </Text>
        );
      return (
        <Text key={i} size="sm" style={{ lineHeight: 1.7 }}>
          {line.trim()}
        </Text>
      );
    });
  };

  return (
    <section style={{ padding: '20px 0' }}>
      <Grid gutter="xl" justify="center">
        {projects.map((project) => (
          <Grid.Col span={{ base: 12, sm: 6 }} key={project.id}>
            <Card
              shadow="md"
              radius="lg"
              padding="lg"
              withBorder
              style={{
                textAlign: 'center',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Card.Section>
                <Image src={project.image} alt={project.title} height={220} fit="cover" />
              </Card.Section>

              <Stack gap="xs" mt="md">
                <Text fw={600} size="lg">
                  {project.title}
                </Text>
                <Text size="sm" c="dimmed">
                  {project.shortDescription}
                </Text>

                {/* Tech Stack under card */}
                <Group mt="sm">
                  {project.techStack?.map((tech) => (
                    <Tooltip label={tech.name} key={tech.name} withArrow position="top">
                      <ActionIcon variant="transparent" size={36}>
                        <Image src={tech.src} alt={tech.name} width={24} />
                      </ActionIcon>
                    </Tooltip>
                  ))}
                </Group>
              </Stack>

              <Group mt="lg" justify="space-between">
                <Button
                  variant="outline"
                  color="cyan"
                  onClick={() => window.open(project.websiteUrl, '_blank')}
                >
                  Visit
                </Button>
                <Button color="cyan" onClick={() => openModal(project)}>
                  Learn More
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title order={3}>{selectedProject?.title}</Title>}
        size="lg"
        centered
      >
        {selectedProject && (
          <>
            <Image
              src={selectedProject.screenshot}
              alt={selectedProject.title}
              radius="md"
              mb="lg"
            />
            {/* Client Request */}
            <Stack mt="md">
              <Title order={4} c="cyan">
                Client Request
              </Title>
              <Text size="sm" style={{ lineHeight: 1.7 }}>
                {selectedProject.clientPrompt}
              </Text>
            </Stack>
            <Divider my="lg" />
            <Stack>{renderFormattedDescription(selectedProject.fullDescription)}</Stack>

            <Divider my="lg" />

            {/* Tech Stack inside modal */}
            <Stack mt="md">
              <Title order={4} c="cyan">
                Tech Stack
              </Title>
              <Group mt="xs">
                {selectedProject.techStack?.map((tech) => (
                  <Tooltip label={tech.name} key={tech.name} withArrow position="top">
                    <ActionIcon size={36} variant="transparent">
                      <Image src={tech.src} alt={tech.name} width={24} />
                    </ActionIcon>
                  </Tooltip>
                ))}
              </Group>
            </Stack>

            <Button
              fullWidth
              mt="xl"
              color="cyan"
              onClick={() => window.open(selectedProject.websiteUrl, '_blank')}
            >
              Visit Website
            </Button>
          </>
        )}
      </Modal>
    </section>
  );
}
