import cn from 'classnames';
import { FC, ReactElement } from 'react';
import { Link as Route } from 'react-router-dom';

import css from './link.module.css';
import { Props } from './types';

export const Link: FC<Props> = ({ className, children, to }): ReactElement => (
  <Route className={cn(css.link, className)} to={to}>
    {children}
  </Route>
);
