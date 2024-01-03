import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';

import { Category as ICategory } from 'api';

import { Wish } from './Wish';
import css from './home.module.css';

export const Home = () => {
  const categories = useLoaderData() as ICategory[];
  const { t } = useTranslation(['home']);

  return (
    <div className={css.home}>
      <h1 className={css.title}>{t('title')}</h1>
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
