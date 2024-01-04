import cn from 'classnames';
import { FC, ReactElement } from 'react';

import css from './field.module.css';
import { Props } from './types';

export const Field: FC<Props> = ({
  autofocus,
  className,
  id,
  min,
  name,
  placeholder,
  required,
  step,
  type = 'text',
  value,
}): ReactElement => (
  <input
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus={autofocus}
    className={cn(css.field, className)}
    id={id}
    min={min}
    name={name}
    placeholder={placeholder}
    required={required}
    step={step}
    type={type}
    value={value}
  />
);
