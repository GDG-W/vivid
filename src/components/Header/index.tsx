import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './models';
// import DevFestLogo from "../../../public/icons/devfest-logo.svg"
import styles from './header.module.scss';

const Header: React.FC<HeaderProps> = ({ navContent }) => {
  return (
    <header className={styles.header}>
      <span>
        <Image src='/icons/devfest-logo.svg' alt='DevFest Lagos logo' width={118} height={34} />
      </span>
      <nav>{navContent}</nav>
    </header>
  );
};

export default Header;
