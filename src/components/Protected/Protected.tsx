import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { auth } from 'api/auth';

export const Protected: FC = () => {
  if (auth.isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/wishes" replace />;
};
