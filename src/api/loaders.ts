import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

import { auth } from './auth';
import { fetchJSON } from './request';
import { Category, Currency, WishData, Wishlist } from './types';

export const appLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<null> => {
  try {
    await auth.verify(params?.user ?? '');
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const userLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs): Promise<Wishlist> => {
  const wishlist = await fetchJSON<Wishlist>(`/api/wishes?user=${params.user}`);

  return wishlist;
};

export const wishLoader: LoaderFunction = async (): Promise<WishData> => {
  const [categories, currencies] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
  ]);

  return { categories, currencies };
};
