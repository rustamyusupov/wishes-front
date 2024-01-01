import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from 'router';
import 'i18n';
import 'styles.css';

const app = () => {
  const container = document.getElementById('root')!;
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

app();
