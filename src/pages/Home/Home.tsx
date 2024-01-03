import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';

import { Category } from 'api';
import { Link } from 'components/Link';

import css from './home.module.css';

export const Home = () => {
  const categories = useLoaderData() as Category[];
  const { t } = useTranslation(['common', 'home']);

  return (
    <div className={css.home}>
      <h1 className={css.title}>{t('home:title')}</h1>
      {categories.map(category => (
        <section className={css.category} key={category.id}>
          <h2 className={css.heading}>{category.name}</h2>
          <ul className={css.list}>
            {category.wishes?.map(({ id, link, name, prices, currency }) => (
              <li className={css.item} key={id}>
                <Link className={css.name} to={link}>
                  {name}
                </Link>
                &nbsp;&mdash;&nbsp;
                <Link className={css.price} to={`/wishes/${id}`}>
                  {t('common:currency', { currency: currency, val: prices.at(-1) ?? 0 })}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
