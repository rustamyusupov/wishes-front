import { createBrowserRouter } from 'react-router-dom';

import { loader, action } from 'api';
import { App } from 'components/App';
import { Home } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';
import { Wish } from 'pages/Wish';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    Component: App,
    children: [
      {
        id: 'user',
        path: ':user',
        loader,
        children: [
          { index: true, Component: Home },
          { path: ':id', action, Component: Wish },
        ],
      },
      { path: '*', Component: NoMatch },
    ],
  },
]);
