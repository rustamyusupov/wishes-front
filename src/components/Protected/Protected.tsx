import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { auth } from 'api/auth';

export const Protected: FC = () => {
  console.log(auth.user);
  if (!auth.user) {
    return <Navigate to="/wishes" replace />;
  }

  return <Outlet />;
};
