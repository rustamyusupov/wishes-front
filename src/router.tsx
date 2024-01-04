import { createBrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { Add } from 'pages/Add';
import { Home, loader as homeLoader } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    Component: App,
    children: [
      { index: true, loader: homeLoader, Component: Home },
      { path: 'add', Component: Add },
      { path: '*', Component: NoMatch },
    ],
  },
]);
