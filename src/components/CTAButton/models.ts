import { ReactNode } from 'react';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type CTAButtonProps = {
  onClick?: () => void;
  icon?: string | ReactNode;
  outlined?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
  text: string;
} & ButtonProps;
