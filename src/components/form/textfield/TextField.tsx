import React from 'react';
import { TextFieldProps } from '../models';
import styles from './textfield.module.scss';

const TextField = ({
  id,
  label,
  type,
  extraLabel,
  placeholder,
  bottomLeft,
  bottomRight,
  ...inputProps
}: TextFieldProps) => {
  return (
    <div className={styles.textfield}>
      <label htmlFor={id}>
        <span>{label}</span>
        <span>{extraLabel}</span>
      </label>
      <input {...inputProps} type={type} id={id} placeholder={placeholder} />
      <div className={styles.extra}>
        <div className={styles.left}>{bottomLeft}</div>
        <a className={styles.right} href=''>
          {bottomRight}
        </a>
      </div>
    </div>
  );
};

export default TextField;
