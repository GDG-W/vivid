import React from 'react';
import { CTAButtonProps } from './models';
import styles from './button.module.scss';
import { classNames } from '@/utils/classNames';

const CTAButton: React.FC<CTAButtonProps> = ({ variant = 'primary', text, icon, outlined }) => {
  const classes = classNames(
    styles.cta,
    variant == 'primary' && styles.primary,
    variant == 'secondary' && styles.secondary,
    variant == 'transparent' && styles.transparent,
    outlined && styles.outlined,
  );

  return (
    <button className={classes}>
      {text}
      {icon}
    </button>
  );
};

export default CTAButton;
