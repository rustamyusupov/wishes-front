import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Form } from 'components/Form';

export const New: FC = (): ReactElement => {
  const { t } = useTranslation('new');

  return <Form method="post" submit={t('submit')} title={t('title')} />;
};
