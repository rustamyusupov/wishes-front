import { LoaderFunction } from 'react-router-dom';

import { fetchJSON } from './request';
import { Category, Currency, Price, Wish, Data } from './types';

export const loader: LoaderFunction = async (): Promise<Data> => {
  const [categories, currencies, prices, wishes] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
    await fetchJSON<Price[]>('/api/prices'),
    await fetchJSON<Wish[]>('/api/wishes'),
  ]);

  return { categories, currencies, prices, wishes };
};
