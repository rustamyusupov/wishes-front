import cn from 'classnames';
import { FC, ReactElement } from 'react';

import css from './button.module.css';
import { Props } from './types';

export const Button: FC<Props> = ({
  className,
  children,
  formMethod,
  name,
  theme = 'default',
  type = 'button',
  value,
}): ReactElement => (
  <button
    className={cn(css.button, className, { [css?.[theme]]: true })}
    formMethod={formMethod}
    name={name}
    type={type}
    value={value}
  >
    {children}
  </button>
);
