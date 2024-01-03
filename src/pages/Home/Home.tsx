import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';

import { Category } from 'api';

import css from './home.module.css';

export const Home = () => {
  const data = useLoaderData() as Category[];
  const { t } = useTranslation('home');

  console.log(data);

  return (
    <section className={css.home}>
      <h1>{t('title')}</h1>
    </section>
  );
};
