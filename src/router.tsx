import { createBrowserRouter } from 'react-router-dom';

import { loader } from 'api';
import { App } from 'components/App';
import { Add } from 'pages/Add';
import { Home } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    loader,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'add', Component: Add },
      { path: '*', Component: NoMatch },
    ],
  },
]);
