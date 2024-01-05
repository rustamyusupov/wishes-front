import { ButtonHTMLAttributes } from 'react';

export interface Props {
  className?: string;
  children: React.ReactNode;
  formMethod?: ButtonHTMLAttributes<HTMLButtonElement>['formMethod'];
  theme?: 'default' | 'error';
  type?: 'button' | 'submit' | 'reset';
}
