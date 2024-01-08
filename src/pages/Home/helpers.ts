import { Wishlist } from 'api';

export const getCategories = (wishlist: Wishlist, isVisible: boolean): Wishlist =>
  wishlist.map(category => ({
    ...category,
    wishes: category.wishes
      .filter(wish => wish.archive === isVisible || !wish.archive)
      .sort((a, b) => a.sort - b.sort),
  }));
