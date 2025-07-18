import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { history } from './services/history.ts';
import { BrowserRouter } from '@routes/browser-router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
