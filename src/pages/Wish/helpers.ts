import { Wish, Wishlist } from 'api';
import { Option } from 'components/Select';

import { Item } from './types';

export const getOptions = (list: Item[]): Option[] =>
  list.map(option => ({
    label: option.name,
    value: option.id,
  }));

export const getWish = (id: number, wishlist: Wishlist): Wish | undefined =>
  wishlist
    .map(category => category.wishes)
    .flat()
    .find(wish => wish.id === id);
