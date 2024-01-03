import { createBrowserRouter } from 'react-router-dom';

import { getCategories } from 'api';
import { App } from 'components/App';
import { Home } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    Component: App,
    children: [
      { index: true, loader: getCategories, Component: Home },
      { path: '*', Component: NoMatch },
    ],
  },
]);
