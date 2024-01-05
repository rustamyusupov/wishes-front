import { createBrowserRouter } from 'react-router-dom';

import { action, loader } from 'api';
import { App } from 'components/App';
import { Home } from 'pages/Home';
import { New } from 'pages/New';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    loader,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'new', action, Component: New },
      { path: '*', Component: NoMatch },
    ],
  },
]);
