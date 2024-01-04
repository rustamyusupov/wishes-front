import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';
import { Link } from 'components/Link';
import Add from 'icons/add.svg?react';

import { Wish } from './Wish';
import { getCategories } from './helpers';
import css from './home.module.css';

export const Home = () => {
  const data = useRouteLoaderData('root') as Data;
  const { t } = useTranslation(['home']);

  const categories = useCallback(() => getCategories(data), [data])();

  return (
    <div className={css.home}>
      <div className={css.header}>
        <h1 className={css.title}>{t('title')}</h1>
        <Link className={css.link} to="/wishes/add">
          <Add className={css.add} width={24} height={24} />
        </Link>
      </div>
      {categories.map(category =>
        category.wishes?.length > 0 ? (
          <section className={css.category} key={category.id}>
            <h2 className={css.heading}>{category.name}</h2>
            <ul className={css.list}>
              {category.wishes?.map(props => <Wish key={props.id} {...props} />)}
            </ul>
          </section>
        ) : null
      )}
    </div>
  );
};
