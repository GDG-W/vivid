/* eslint-disable */

'use client';

import { SelectfieldOptions, SelectfieldProps } from './models';
import './shared.scss';

export const Selectfield: React.FC<SelectfieldProps> = ({
  id,
  disabled,
  placeholder,
  error,
  width,
  hasError,
  register,
  options,
  label,
  className,
  labelClassName,
  ringColor,
  isBordered = true,
  ...rest
}: SelectfieldProps) => {
  const baseClasses = [
    'select',
    width,
    disabled && 'disabled',
    error || hasError ? 'error' : 'no-error',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const suffixIcon = (
    <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 1L6 6L11 1'
        stroke='#666666'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  return (
    <div className='selectfield-container'>
      {label && (
        <label htmlFor={id} className={`label ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className='select-container'>
        <select
          id={id}
          name={id}
          disabled={disabled}
          placeholder={placeholder}
          {...(register ? register(id) : {})}
          {...rest}
          className={baseClasses}
        >
          <option value='' defaultValue={placeholder} className='placeholder-option'>
            {placeholder}
          </option>
          {options.map(({ label, value }: SelectfieldOptions) => (
            <option value={value} key={value} className='option'>
              {label}
            </option>
          ))}
        </select>
        <div className='suffix-icon-container'>{suffixIcon}</div>
      </div>
      <p className='error-text'>{error}</p>
    </div>
  );
};
