import { createBrowserRouter } from 'react-router-dom';

import { App, loader } from 'components/App';
import { Home } from 'pages/Home';
import { New, action as newAction } from 'pages/New';
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
      { path: ':id', Component: Wish },
      { path: 'new', action: newAction, Component: New },
      { path: '*', Component: NoMatch },
    ],
  },
]);
