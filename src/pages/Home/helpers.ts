import { Data } from 'api';

import { CategoryWithWishes } from './types';

export const getCategories = ({
  categories,
  wishes,
  currencies,
  prices,
}: Data): CategoryWithWishes[] => {
  const categoriesWithWishes = categories?.map(category => {
    const prepared = wishes
      ?.filter(wish => wish.categoryId === category.id)
      .sort((a, b) => a.sort - b.sort);

    return {
      ...category,
      wishes: prepared?.map(wish => {
        return {
          ...wish,
          currency: currencies?.find(currency => currency.id === wish.currencyId)?.name,
          prices: prices?.filter(price => price.wishId === wish.id).map(price => price.value),
        };
      }),
    };
  });

  return categoriesWithWishes;
};
