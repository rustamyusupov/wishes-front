import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Wish as IWish } from 'api';
import { Link } from 'components/Link';

import css from './wish.module.css';

export const Wish: FC<IWish> = ({ id, link, name, prices, currency }): ReactElement => {
  const { t } = useTranslation(['common']);

  return (
    <li className={css.category}>
      <Link className={css.name} to={link}>
        {name}
      </Link>
      &nbsp;&mdash;&nbsp;
      <Link className={css.price} to={`/wishes/${id}`}>
        {t('currency', { currency: currency, val: prices.at(-1) ?? 0 })}
      </Link>
    </li>
  );
};
