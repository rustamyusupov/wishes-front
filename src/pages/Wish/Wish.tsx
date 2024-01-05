import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Form } from 'components/Form';

export const Wish: FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('wish');

  return (
    <Form id={Number(id)} isEdit={true} method="put" submit={t('submit')} title={t('title')} />
  );
};
