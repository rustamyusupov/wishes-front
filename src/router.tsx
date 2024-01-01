import { createBrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { Home } from 'pages/Home';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: '*', Component: NoMatch },
    ],
  },
]);
