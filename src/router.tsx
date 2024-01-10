import { createBrowserRouter } from 'react-router-dom';

import { loader, loginAction, wishAction } from 'api';
import { App } from 'components/App';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { NoMatch } from 'pages/NoMatch';
import { Wish } from 'pages/Wish';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    Component: App,
    children: [
      { index: true, action: loginAction, Component: Login },
      {
        id: 'user',
        path: ':user',
        loader,
        children: [
          { index: true, Component: Home },
          { path: ':id', action: wishAction, Component: Wish },
        ],
      },
      { path: '*', Component: NoMatch },
    ],
  },
]);
