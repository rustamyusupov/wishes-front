import { Option } from 'components/Select';
import { WishWithPrice } from 'pages/Wish';

export interface Props {
  categories: Option[];
  currencies: Option[];
  method: 'post' | 'put';
  submit: 'string';
  title: 'string';
  wish?: WishWithPrice;
}
