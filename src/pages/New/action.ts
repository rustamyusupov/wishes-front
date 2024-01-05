import { redirect } from 'react-router-dom';

import { fetchJSON } from '../../api/request';
import { Wish } from '../../api/types';

export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  const data = Object.fromEntries(form.entries());

  const response = await fetchJSON<Wish>('/api/wishes', {
    method: 'POST',
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

  return redirect('/wishes');
};
