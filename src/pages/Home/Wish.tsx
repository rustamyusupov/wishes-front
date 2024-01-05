import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as Route } from 'react-router-dom';

import { Link } from 'components/Link';
import Edit from 'icons/edit.svg?react';

import { WishWithPrice } from './types';
import css from './wish.module.css';

export const Wish: FC<WishWithPrice> = ({ id, link, name, prices, currency }): ReactElement => {
  const { t } = useTranslation(['common']);

  return (
    <li className={css.wish}>
      <Route className={css.link} to={`/wishes/${id}`}>
        <Edit className={css.edit} width={26} height={26} />
      </Route>
      <Link className={css.name} to={link}>
        {name}
      </Link>
      &nbsp;&mdash;&nbsp;
      <Link className={css.price} to={``}>
        {t('currency', { currency: currency, val: prices.at(-1) ?? 0 })}
      </Link>
    </li>
  );
};
