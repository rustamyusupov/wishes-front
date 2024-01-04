import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';

import { Data, Wish, fetchJSON } from 'api';
import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Select } from 'components/Select';

import { getOptions } from './helpers';
import css from './new.module.css';

export const New = () => {
  const data = useRouteLoaderData('root') as Data;
  const navigate = useNavigate();
  const { t } = useTranslation('new');

  const categories = getOptions(data.categories);
  const currencies = getOptions(data.currencies);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetchJSON<Wish>('/api/wishes', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        archive: Boolean(data.archive) ?? false,
        categoryId: Number(data.categoryId),
        currencyId: Number(data.currencyId),
        sort: Number(data.sort) ?? 0,
      }),
    });

    await fetchJSON('/api/prices', {
      method: 'POST',
      body: JSON.stringify({
        wishId: response.id,
        value: Number(data.price),
        date: new Date().toLocaleDateString('ru-RU'),
      }),
    });

    navigate('/wishes');
  };

  // TODO: use Form from reactrouter
  return (
    <form className={css.new} onSubmit={handleSubmit}>
      <h1 className={css.title}>{t('title')}</h1>
      <Field
        className={cn(css.field, css.name)}
        id="name"
        name="name"
        placeholder={t('name')}
        type="text"
        required
      />
      <Field
        className={cn(css.field, css.link)}
        id="link"
        name="link"
        placeholder={t('link')}
        required
        type="url"
      />
      <Field
        className={cn(css.field, css.price)}
        id="price"
        min="0"
        name="price"
        placeholder={t('price')}
        required
        step="any"
        type="number"
      />
      <Field
        className={cn(css.field, css.sort)}
        type="number"
        name="sort"
        id="sort"
        min="0"
        placeholder={t('sort')}
      />
      <Select
        className={cn(css.field, css.currency)}
        name="currencyId"
        id="currency"
        options={currencies}
        placeholder={t('currency')}
        required
      />
      <Select
        className={cn(css.field, css.category)}
        name="categoryId"
        id="category"
        options={categories}
        placeholder={t('category')}
        required
      />
      <div className={css.checkbox}>
        <Field className={cn(css.field, css.archive)} id="archive" type="checkbox" name="archive" />
        <label className={css.label} htmlFor="archive">
          {t('archive')}
        </label>
      </div>
      <div className={css.action}>
        <Button className={css.submit} type="submit">
          {t('submit')}
        </Button>
      </div>
    </form>
  );
};
