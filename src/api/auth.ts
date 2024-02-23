import { fetchJSON } from './request';
import { Auth, User } from './types';

export const auth: Auth = {
  isAuthenticated: false,
  user: null,
  login: async data => {
    const response = await fetchJSON<User>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    auth.isAuthenticated = true;
    auth.user = response.user;
  },
  logout: async () => {
    await fetchJSON<User>('/api/auth/logout');
    auth.isAuthenticated = false;
    auth.user = '';
  },
  verify: async user => {
    const { isAuthenticated } = await fetchJSON<User>(`/api/auth/verify?user=${user}`);

    auth.isAuthenticated = isAuthenticated;
  },
};
