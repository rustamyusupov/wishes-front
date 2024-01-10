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
  accessToken: string;
  user: {
    id: number;
    login: string;
    email: string;
  };
}
