import { ReactNode } from 'react';

export type ContentRevealAnimationProps = {
  direction: 'left' | 'right';
  children: ReactNode;
  animationDelay?: number;
};
