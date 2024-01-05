import { Option } from 'components/Select';

import { DataWithId, Item, WishWithPrice } from './types';

export const getOptions = (list: Item[]): Option[] =>
  list.map(option => ({
    label: option.name,
    value: option.id,
  }));

export const getWish = ({
  currencies,
  id,
  prices,
  wishes,
}: DataWithId): WishWithPrice | undefined => {
  const wish = wishes.find(wish => wish.id === id);

  if (!wish) {
    return undefined;
  }

  return {
    ...wish,
    currency: currencies?.find(currency => currency.id === wish?.currencyId)?.name,
    price: prices?.filter(price => price.wishId === wish?.id).at(-1)?.value,
  };
};
