import { Category, Wish } from 'api';

export interface WishWithPrice extends Wish {
  currency: string | undefined;
  prices: number[];
}

export interface CategoryWithWishes extends Category {
  wishes: WishWithPrice[];
}
