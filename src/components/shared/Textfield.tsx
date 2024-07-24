/* eslint-disable */

'use client';

import { TextfieldProps } from './models';
import './shared.scss';
import Search from '../../../public/icons/search-icon.svg';

export const Textfield = ({
  type = 'text',
  id,
  label,
  error,
  disabled = false,
  // required,
  prefixIcon,
  surfixIcon,
  width,
  placeholder,
  register,
  className,
  hasError,
  searchField,
  labelPosition,
  labelClassName = 'top',
  ...rest
}: TextfieldProps) => {
  const baseClasses = [
    'textfield',
    width,
    disabled && 'disabled',
    error || hasError ? 'error' : 'no-error',
    prefixIcon || searchField ? 'prefix-icon' : 'no-prefix-icon',
    surfixIcon ? 'suffix-icon' : 'no-suffix-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const newPrefixIcon = searchField ? Search : prefixIcon;

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`label ${labelPosition === 'left' ? 'left-position' : 'top-position'} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className='textfield-container'>
        {!!newPrefixIcon && <div className='icon'>{newPrefixIcon}</div>}

        {surfixIcon && <div className='suffix-icon-container'>{surfixIcon}</div>}

        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...(register ? register(id) : {})}
          {...rest}
          className={baseClasses}
        />
      </div>
      <p className='error-text'>{error}</p>
    </div>
  );
};
