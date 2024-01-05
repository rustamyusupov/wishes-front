import cn from 'classnames';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Form as RouterForm } from 'react-router-dom';

import { Button } from 'components/Button';
import { Field } from 'components/Field';
import { Select } from 'components/Select';

import css from './form.module.css';
import { Props } from './types';

export const Form: FC<Props> = ({
  categories,
  currencies,
  method,
  submit,
  title,
  wish,
}): ReactElement => {
  const { t } = useTranslation('form');

  return (
    <RouterForm className={css.form} method={method}>
      <h1 className={css.title}>{title}</h1>
      <Field
        autofocus
        className={cn(css.field, css.name)}
        defaultValue={wish?.name}
        id="name"
        name="name"
        placeholder={t('name')}
        type="text"
        required
      />
      <Field
        className={cn(css.field, css.link)}
        defaultValue={wish?.link}
        id="link"
        name="link"
        placeholder={t('link')}
        required
        type="url"
      />
      <Field
        className={cn(css.field, css.price)}
        defaultValue={wish?.price}
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
        defaultValue={wish?.sort}
        type="number"
        name="sort"
        id="sort"
        min="0"
        placeholder={t('sort')}
      />
      <Select
        className={cn(css.field, css.currency)}
        defaultValue={wish?.currencyId}
        name="currencyId"
        id="currency"
        options={currencies}
        placeholder={t('currency')}
        required
      />
      <Select
        className={cn(css.field, css.category)}
        defaultValue={wish?.categoryId}
        name="categoryId"
        id="category"
        options={categories}
        placeholder={t('category')}
        required
      />
      <div className={css.checkbox}>
        <Field
          className={cn(css.field, css.archive)}
          defaultChecked={wish?.archive}
          id="archive"
          type="checkbox"
          name="archive"
        />
        <label className={css.label} htmlFor="archive">
          {t('archive')}
        </label>
      </div>
      <div className={css.action}>
        {wish ? (
          <Button theme="error" formMethod="delete" type="submit">
            {t('delete')}
          </Button>
        ) : null}
        <Button className={css.submit} type="submit">
          {submit}
        </Button>
      </div>
    </RouterForm>
  );
};
