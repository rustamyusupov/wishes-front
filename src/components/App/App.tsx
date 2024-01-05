import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import css from './app.module.css';

export const App: FC = (): ReactElement => {
  return (
    <main className={css.main}>
      <Outlet />
    </main>
  );
};
