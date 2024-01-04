import cn from 'classnames';
import { FC, ReactElement } from 'react';

import css from './field.module.css';
import { Props } from './types';

export const Field: FC<Props> = ({
  autofocus,
  className,
  id,
  name,
  placeholder,
  required,
  type = 'text',
  value,
}): ReactElement => {
  return (
    <input
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autofocus}
      className={cn(css.field, className)}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
    />
  );
};
