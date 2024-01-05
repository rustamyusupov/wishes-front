import { ActionFunctionArgs, redirect } from 'react-router-dom';

import { fetchJSON } from './request';
import { Wish } from './types';

export const action = async ({ request, params }: ActionFunctionArgs): Promise<Response> => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());

  if (request.method === 'POST' || request.method === 'PUT') {
    const url = `/api/wishes/${request.method === 'PUT' ? params.id : ''}`;

    const response = await fetchJSON<Wish>(url, {
      method: request.method,
      body: JSON.stringify({
        ...data,
        archive: Boolean(data.archive) ?? false,
        categoryId: Number(data.categoryId),
        currencyId: Number(data.currencyId),
        sort: Number(data.sort) ?? 0,
      }),
    });

    await fetchJSON('/api/prices', {
      method: 'POST',
      body: JSON.stringify({
        wishId: response.id,
        value: Number(data.price),
        date: new Date().toLocaleDateString('ru-RU'),
      }),
    });
  }

  return redirect('/wishes');
};
