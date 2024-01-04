import { Category, Wish } from 'api';

export interface CategoryWithWishes extends Category {
  wishes: Wish[];
}
