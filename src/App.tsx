import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import { ContactPage } from './pages/Contact/Contact.Page';
import Engineering from './pages/Engineering/Engineering';
import { Footer } from './components/Footer/Footer';
import { HeaderMegaMenu } from './components/header/HeaderMegaMenu';
import { HomePage } from './pages/Home.page';
import { MantineProvider } from '@mantine/core';
import WebDevPage from './pages/WebDev/WebDev.page';
import { LanguageProvider } from './i18n/language';
import { theme } from './theme';

function updateMetaTagByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateMetaTagByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function SeoManager() {
  const location = useLocation();
  const baseUrl = 'https://safouane666.github.io/portfolio';
  const route = location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    const routeConfig: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Safouane RG | Portfolio',
        description:
          'Portfolio of Safouane RG: web development, embedded systems, engineering projects, and contact information.',
      },
      '/WebDev': {
        title: 'Web Development Projects | Safouane RG',
        description:
          "Explore Safouane RG's web development portfolio with React, TypeScript, and modern frontend projects.",
      },
      '/Engineering': {
        title: 'Engineering Projects | Safouane RG',
        description:
          "Discover Safouane RG's engineering and embedded systems projects, from hardware work to practical prototypes.",
      },
      '/Contact': {
        title: 'Contact | Safouane RG',
        description:
          'Get in touch with Safouane RG for collaboration, opportunities, and technical project discussions.',
      },
    };

    const pageMeta = routeConfig[route] || routeConfig['/'];
    const pageUrl = `${baseUrl}${route === '/' ? '/' : route}`;

    document.title = pageMeta.title;
    updateMetaTagByName('description', pageMeta.description);
    updateMetaTagByProperty('og:title', pageMeta.title);
    updateMetaTagByProperty('og:description', pageMeta.description);
    updateMetaTagByProperty('og:url', pageUrl);
    updateMetaTagByName('twitter:title', pageMeta.title);
    updateMetaTagByName('twitter:description', pageMeta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [route]);

  return null;
}

function AppLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ zIndex: 99, position: 'sticky', top: 0 }}>
        <HeaderMegaMenu />
      </div>
      <div style={{ zIndex: 1, flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function AppRouter() {
  return (
    <LanguageProvider>
      <MantineProvider theme={theme}>
        <Router basename="/portfolio">
          <SeoManager />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="Contact" element={<ContactPage />} />
              <Route path="WebDev" element={<WebDevPage />} />
              <Route path="Engineering" element={<Engineering />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Route>
          </Routes>
        </Router>
      </MantineProvider>
    </LanguageProvider>
  );
}

export default AppRouter;
