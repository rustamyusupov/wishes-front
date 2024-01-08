import { LoaderFunction } from 'react-router-dom';

import { fetchJSON } from './request';
import { Category, Currency, Data, Wishlist } from './types';

export const loader: LoaderFunction = async (): Promise<Data> => {
  // TODO: request categories and currencies for wish page only
  const [categories, currencies, wishlist] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
    await fetchJSON<Wishlist>(`/api/wishlist`),
  ]);

  return { categories, currencies, wishlist };
};
