import { createBrowserRouter } from 'react-router-dom';

import { App, loader } from 'components/App';
import { Edit } from 'pages/Edit';
import { Home } from 'pages/Home';
import { New, action as newAction } from 'pages/New';
import { NoMatch } from 'pages/NoMatch';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/wishes',
    loader: loader,
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'new', action: newAction, Component: New },
      { path: 'edit/:id', Component: Edit },
      { path: '*', Component: NoMatch },
    ],
  },
]);
