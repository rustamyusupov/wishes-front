interface Option {
  label: string;
  value: string | number;
}

export interface Props {
  className?: string;
  id: string;
  name: string;
  options: Option[];
  placeholder?: string;
  value?: string | number;
  required?: boolean;
}
