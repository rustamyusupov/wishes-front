import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

import { auth } from './auth';
import { fetchJSON } from './request';
import { Category, Currency, Data, Wishlist } from './types';

export const appLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<null> => {
  try {
    await auth.verify(params?.user ?? '');
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const userLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<Data> => {
  // TODO: request categories and currencies for wish page only
  const [categories, currencies, wishlist] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
    await fetchJSON<Wishlist>(`/api/wishes?user=${params.user}`),
  ]);

  return { categories, currencies, wishlist };
};
