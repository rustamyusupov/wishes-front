import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

import { fetchJSON } from './request';
import { Category, Currency, Data, User, Wishlist } from './types';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<Data> => {
  const users = await fetchJSON<User[]>(`/api/users?name=${params.user}`);
  const user = users?.[0];

  // TODO: request categories and currencies for wish page only
  const [categories, currencies, wishlist] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
    await fetchJSON<Wishlist>(`/api/wishlist`),
  ]);

  return { categories, currencies, user, wishlist };
};
