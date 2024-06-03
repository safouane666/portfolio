import '@mantine/core/styles.css';

import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HeaderMegaMenu } from './components/header/HeaderMegaMenu';
import { HomePage } from './pages/Home.page';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return (
    <body>
      <div>
        <HeaderMegaMenu />
        <Outlet />
      </div>
    </body>
  );
}
function AppRouter() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<HomePage />} />

            <Route path="*" element={<div>not found</div>} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default AppRouter;