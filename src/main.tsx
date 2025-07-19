import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { history } from './services/history.ts';
import { BrowserRouter } from '@routes/browser-router.tsx';
import { AppProvider } from './providers/app/app.tsx';
import AuthProvider from './providers/auth/auth.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter history={history}>
      <AppProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={10}>
              <App />
            </SnackbarProvider>
          </ThemeProvider>
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
