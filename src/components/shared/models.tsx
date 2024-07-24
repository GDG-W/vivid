/* eslint-disable */
import { UseFormRegister } from 'react-hook-form';

type BaseInputProps = {
  id: string;
  label?: string;
  error?: string;
  width?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  [key: string]: unknown;
};
export type TextfieldProps = BaseInputProps & {
  type?: string;
  prefixIcon?: React.ReactElement;
  surfixIcon?: React.ReactElement;
  width?: string;
  labelPosition?: 'top' | 'left';
  register?: UseFormRegister<any>;
};

export interface SelectfieldOptions {
  label: string;
  value: string | number;
}

export interface SelectfieldProps {
  id: string;
  label?: string;
  error?: string | undefined;
  width?: string;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  ringColor?: string;
  options: SelectfieldOptions[];
  labelClassName?: string;
  [key: string]: unknown;
  register?: (name: string) => any;
}
