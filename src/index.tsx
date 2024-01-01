import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './i18n';
import './styles.css';

const app = () => {
  const container = document.getElementById('root')!;
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

app();
