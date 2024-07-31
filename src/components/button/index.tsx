import { classNames } from '@/utils/classNames';
import React from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './models';

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
    variant == 'disabled' && styles.disabled,
    outlined && styles.outlined,
    others.className,
  );

  return (
    <button {...others} className={classes}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
