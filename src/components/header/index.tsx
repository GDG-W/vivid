import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './models';
// import DevFestLogo from "../../../public/icons/devfest-logo.svg"
import styles from './header.module.scss';
import { classNames } from '@/utils/classNames';

const Header: React.FC<HeaderProps> = ({ navContent, className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <span>
        <Image src='/icons/devfest-logo.svg' alt='DevFest Lagos logo' width={118} height={34} />
      </span>
      <nav>{navContent}</nav>
    </header>
  );
};

export default Header;
