import { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteLoaderData } from 'react-router-dom';

import { Data } from 'api';
import { auth } from 'api/auth';
import { Link } from 'components/Link';
// import Logout from 'icons/logout.svg?react';
import Plus from 'icons/plus.svg?react';
import VisibilityOff from 'icons/visibility-off.svg?react';
import Visibility from 'icons/visibility.svg?react';

import { Wish } from './Wish';
import { getCategories } from './helpers';
import css from './home.module.css';

export const Home: FC = (): ReactElement => {
  const { wishlist } = useRouteLoaderData('user') as Data;
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation('home');

  const categories = getCategories(wishlist, isVisible);

  const handleChange = () => setIsVisible(!isVisible);

  return (
    <div className={css.home}>
      <div className={css.header}>
        <h1 className={css.title}>{t('title')}</h1>
        {auth.isAuthenticated ? (
          <div className={css.controls}>
            <Link className={css.link} to="new" title={t('plus')}>
              <Plus className={css.plus} width={24} height={24} />
            </Link>
            <input
              className={css.checkbox}
              id="visibility"
              name="visibility"
              type="checkbox"
              onChange={handleChange}
            />
            <label className={css.visibility} htmlFor="visibility">
              {isVisible ? (
                <Visibility className={css.icon} width={20} height={20} />
              ) : (
                <VisibilityOff className={css.icon} width={20} height={20} />
              )}
            </label>
            {/* <button className={css.logout} onClick={auth.logout}>
              <Logout className={css.icon} width={20} height={20} />
            </button> */}
          </div>
        ) : null}
      </div>
      {categories?.map(category => (
        <section className={css.category} key={category.id}>
          <h2 className={css.heading}>{category.name}</h2>
          <ul className={css.list}>
            {category.wishes?.map(props => <Wish key={props.id} {...props} />)}
          </ul>
        </section>
      ))}
    </div>
  );
};
