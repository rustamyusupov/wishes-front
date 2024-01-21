import cn from 'classnames';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as Route } from 'react-router-dom';

import { Wish as IWish } from 'api';
import { auth } from 'api/auth';
import { Link } from 'components/Link';
import Edit from 'icons/edit.svg?react';

import css from './wish.module.css';

export const Wish: FC<IWish> = ({ archive, id, link, name, price, currency }): ReactElement => {
  const { t } = useTranslation(['common']);

  return (
    <li className={cn(css.wish, { [css.edit]: auth.isAuthenticated, [css.archive]: archive })}>
      {auth.isAuthenticated ? (
        <Route className={css.link} to={String(id)}>
          <Edit className={css.edit} width={26} height={26} />
        </Route>
      ) : null}
      <Link className={css.name} to={link}>
        {name}
      </Link>
      &nbsp;&mdash;&nbsp;
      {/* <Link className={css.price} to={``}> */}
      {`${t('currency', { currency, val: price ?? 0, locale: 'ru-RU' })}`}
      {/* </Link> */}
    </li>
  );
};
