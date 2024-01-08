import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { fetchJSON } from './request';
import { Wish } from './types';

export const wishAction = async ({ request, params }: ActionFunctionArgs): Promise<Response> => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());

  switch (request.method) {
    case 'POST':
    case 'PUT': {
      await fetchJSON<Wish>(`/api/wishes/${request.method === 'PUT' ? params.id : ''}`, {
        method: request.method,
        body: JSON.stringify(data),
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
