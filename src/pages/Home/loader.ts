import { LoaderFunction } from 'react-router-dom';

import { fetchJSON, Category, Currency, Price, Wish } from 'api';

import { CategoryWithWishes } from './types';

export const loader: LoaderFunction = async (): Promise<CategoryWithWishes[]> => {
  const [categories, currencies, prices, wishes] = await Promise.all([
    await fetchJSON<Category[]>('/api/categories'),
    await fetchJSON<Currency[]>('/api/currencies'),
    await fetchJSON<Price[]>('/api/prices'),
    await fetchJSON<Wish[]>('/api/wishes'),
  ]);

  const result = categories?.map(category => {
    const filtered = wishes?.filter(wish => wish.categoryId === category.id);

    return {
      ...category,
      wishes: filtered?.map(wish => {
        return {
          ...wish,
          currency: currencies?.find(currency => currency.id === wish.currencyId)?.name,
          prices: prices?.filter(price => price.wishId === wish.id).map(price => price.value),
        };
      }),
    };
  });

  return result;
};
