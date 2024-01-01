import { useTranslation } from 'react-i18next';

import css from './home.module.css';

export const Home = () => {
  const { t } = useTranslation('home');

  return (
    <section className={css.home}>
      <h1>{t('title')}</h1>
    </section>
  );
};
