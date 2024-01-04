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
  currencyId: Currency['id'];
  id: number;
  link: string;
  name: string;
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
