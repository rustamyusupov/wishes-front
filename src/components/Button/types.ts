export interface Props {
  className?: string;
  children: React.ReactNode;
  theme?: 'default' | 'error';
  type?: 'button' | 'submit' | 'reset';
}
