import cn from 'classnames';
import { FC, ReactElement } from 'react';

import css from './button.module.css';
import { Props } from './types';

export const Button: FC<Props> = ({
  className,
  children,
  formMethod,
  theme = 'default',
  type = 'button',
}): ReactElement => (
  <button
    className={cn(css.button, className, { [css?.[theme]]: true })}
    formMethod={formMethod}
    type={type}
  >
    {children}
  </button>
);
