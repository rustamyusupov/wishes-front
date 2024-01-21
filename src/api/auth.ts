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
    auth.isAuthenticated = false;
    auth.user = '';
  },
};
