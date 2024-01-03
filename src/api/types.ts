export interface Wish {
  archive: boolean;
  categoryId: number;
  currency: string;
  currencyId: number;
  id: number;
  link: string;
  name: string;
  price: number[];
  sort: number;
}

export interface Category {
  id: string;
  name: string;
  wishes: Wish[];
}
