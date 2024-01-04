import cn from 'classnames';
import { FC, ReactElement } from 'react';

import css from './select.module.css';
import { Props } from './types';

export const Select: FC<Props> = ({
  className,
  id,
  name,
  options,
  placeholder,
  required,
  value,
}): ReactElement => (
  <select
    className={cn(css.select, className)}
    id={id}
    name={name}
    required={required}
    value={value}
  >
    <option value="" disabled hidden selected>
      {placeholder}
    </option>
    {options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
