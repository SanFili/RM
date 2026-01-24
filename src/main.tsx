import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary, Layout } from 'src/shared/components';

import App from './App.tsx';

import './assets/styles/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Layout>
  </StrictMode>,
);
