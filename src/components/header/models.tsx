import { ReactNode } from 'react';

export type HeaderProps = {
  handleClick: () => void;
  navContent: ReactNode;
  className?: string;
};
