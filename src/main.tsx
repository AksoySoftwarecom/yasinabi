import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);