import { ReactNode } from 'react';

export type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = {
  onClick?: () => void;
  icon?: string | ReactNode;
  outlined?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
  text: string;
} & Props;
