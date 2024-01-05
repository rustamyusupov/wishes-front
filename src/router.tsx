import { createBrowserRouter } from 'react-router-dom';

import { loader, action } from 'api';
import { App } from 'components/App';
import { Home } from 'pages/Home';
import { New } from 'pages/New';
import { NoMatch } from 'pages/NoMatch';
import { Wish } from 'pages/Wish';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    loader: loader,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: ':id', action, Component: Wish },
      { path: 'new', action, Component: New },
      { path: '*', Component: NoMatch },
    ],
  },
]);
