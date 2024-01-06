import { CategoryWithWishes, LoadedData } from './types';

export const getCategories = ({
  categories,
  wishes,
  currencies,
  prices,
  isVisible,
}: LoadedData): CategoryWithWishes[] => {
  const categoriesWithWishes = categories
    ?.map(category => {
      const prepared = wishes
        ?.filter(
          wish => wish.categoryId === category.id && (wish.archive === isVisible || !wish.archive)
        )
        .sort((a, b) => a.sort - b.sort);

      return {
        ...category,
        wishes: prepared?.map(wish => ({
          ...wish,
          currency: currencies?.find(currency => currency.id === wish.currencyId)?.name,
          prices: prices?.filter(price => price.wishId === wish.id).map(price => price.value),
        })),
      };
    })
    ?.filter(category => category.wishes.length > 0);

  return categoriesWithWishes;
};
