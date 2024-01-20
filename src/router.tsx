import { Navigate, createBrowserRouter } from 'react-router-dom';

import { loginAction, userLoader, wishAction } from 'api';
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
      { index: true, element: <Navigate to="login" replace /> },
      { path: 'login', action: loginAction, Component: Login },
      {
        id: 'user',
        path: ':user',
        loader: userLoader,
        children: [
          { index: true, Component: Home },
          { path: ':id', action: wishAction, Component: Wish },
        ],
      },
      { path: '*', Component: NoMatch },
    ],
  },
]);
