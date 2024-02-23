interface LoginData {
  [k: string]: FormDataEntryValue;
}

export interface Auth {
  isAuthenticated: boolean;
  user: null | string;
  login(data: LoginData): Promise<void>;
  logout(): Promise<void>;
  verify(user: User['user']): Promise<void>;
}

export interface Category {
  id: number;
  name: string;
}

export interface Currency {
  id: number;
  name: string;
}

export interface Wish {
  archive: boolean;
  categoryId: Category['id'];
  currency: Currency['name'];
  currencyId: Currency['id'];
  id: number;
  link: string;
  name: string;
  price: number;
  sort: number;
}

export interface Price {
  id: number;
  wishId: Wish['id'];
  value: number;
  date: string;
}

export interface CategoryWithWishes extends Category {
  wishes: Wish[];
}

export type Wishlist = CategoryWithWishes[];

export interface Data {
  categories: Category[];
  currencies: Currency[];
  wishlist: Wishlist;
}

export interface User {
  isAuthenticated: boolean;
  user: string;
}
