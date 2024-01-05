export interface Option {
  label: string;
  value: string | number;
}

export interface Props {
  className?: string;
  defaultValue?: string | number;
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  value?: string | number;
  required?: boolean;
}
