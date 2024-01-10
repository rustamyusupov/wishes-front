import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { fetchJSON } from './request';
import { User, Wish } from './types';

export const wishAction = async ({ request, params }: ActionFunctionArgs): Promise<Response> => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());

  switch (request.method) {
    case 'POST':
    case 'PUT': {
      await fetchJSON<Wish>(`/api/wishes/${request.method === 'PUT' ? params.id : ''}`, {
        method: request.method,
        body: JSON.stringify({ ...data, userId: localStorage.getItem('user') ?? null }),
      });

      break;
    }

    case 'DELETE': {
      await fetchJSON(`/api/wishes/${params.id}`, {
        method: 'DELETE',
      });

      break;
    }
  }

  return redirect(`/wishes/${params.user}`);
};

export const loginAction = async ({ request }: ActionFunctionArgs): Promise<Response> => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());

  const response = await fetchJSON<User>('/api/signin', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  localStorage.setItem('token', response.accessToken);
  localStorage.setItem('user', String(response.user.id));

  return redirect(`/wishes/${response.user.login}`);
};
