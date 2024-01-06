import { Category, Data, Wish } from 'api';

export interface LoadedData extends Data {
  isVisible: boolean;
}

export interface WishWithPrice extends Wish {
  currency: string | undefined;
  prices: number[];
}

export interface CategoryWithWishes extends Category {
  wishes: WishWithPrice[];
}
