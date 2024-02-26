import { Navigate, createBrowserRouter } from 'react-router-dom';

import { appLoader, loginAction, userLoader, wishAction, wishLoader } from 'api';
import { App } from 'components/App';
import { Protected } from 'components/Protected';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { NoMatch } from 'pages/NoMatch';
import { Wish } from 'pages/Wish';

export const router = createBrowserRouter([
  {
    id: 'root',
    loader: appLoader,
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
          {
            id: 'wish',
            path: ':id',
            loader: wishLoader,
            Component: Protected,
            children: [{ index: true, action: wishAction, Component: Wish }],
          },
        ],
      },
      { path: '*', Component: NoMatch },
    ],
  },
]);
