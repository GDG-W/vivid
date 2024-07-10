import React from 'react';
import { ButtonProps } from './models';
import styles from './button.module.scss';
import { classNames } from '@/utils/classNames';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  text,
  icon,
  outlined,
  ...others
}) => {
  const classes = classNames(
    styles.cta,
    variant == 'primary' && styles.primary,
    variant == 'secondary' && styles.secondary,
    variant == 'transparent' && styles.transparent,
    outlined && styles.outlined,
    others.className,
  );

  return (
    <button className={classes}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
