import '@mantine/core/styles.css';

import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ContactPage } from './pages/Contact/Contact.Page';
import { HeaderMegaMenu } from './components/header/HeaderMegaMenu';
import { HomePage } from './pages/Home.page';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

function AppLayout() {
  return (
    <div>
      <div style={{ zIndex: 99, position: 'sticky', top: 0 }}>
        <HeaderMegaMenu />
      </div>
      <div style={{ zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

function AppRouter() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<AppLayout />}>
            <Route index element={<HomePage />} /> {/* /portfolio */}
            <Route path="Contact" element={<ContactPage />} /> {/* /portfolio/Contact */}
            <Route path="*" element={<div>Not Found</div>} /> {/* fallback */}
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default AppRouter;
