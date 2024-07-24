import { ReactNode } from 'react';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type TextFieldProps = {
  type?: string;
  id?: string;
  label: string;
  extraLabel?: string;
  placeholder: string;
  bottomLeft?: string | ReactNode;
  bottomRight?: string;
};
