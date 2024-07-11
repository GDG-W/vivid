'use client';

import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './models';
// import DevFestLogo from "../../../public/icons/devfest-logo.svg"
import styles from './header.module.scss';
import { classNames } from '@/utils/classNames';

const Header: React.FC<HeaderProps> = ({ navContent, className, handleClick }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <span>
        <Image
          src='/icons/devfest-logo.svg'
          alt='DevFest Lagos logo'
          width={118}
          height={34}
          priority={true}
        />
      </span>
      <nav>
        <button type='button' onClick={handleClick}>
          {navContent}
        </button>
      </nav>
    </header>
  );
};

export default Header;
