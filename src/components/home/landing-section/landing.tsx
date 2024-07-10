'use client';

import React from 'react';
import Image from 'next/image';
import styles from './landing.module.scss';
import Header from '@/components/header';
import Button from '@/components/button';
import { classNames } from '@/utils/classNames';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.headernav}>
          <Header handleClick={() => {}} navContent={<span>Upgrade Tickets</span>} />
        </div>

        <div className={styles.herocontent}>
          <p>Don’t miss out!</p>
          <h1>Get your ticket now</h1>
          <Button text='Get Early Bird Tickets' />
        </div>

        <div className={styles.ticketWrapper}>
          <div className={classNames(styles.ticket, styles.one)}>
            <Image src='/yellow-ticket.svg' alt='An image of the one-day ticket' fill />
          </div>
          <div className={classNames(styles.ticket, styles.middle)}>
            <Image src='/blue-ticket.svg' alt='An image of the one-day ticket' fill />
          </div>
          <div className={classNames(styles.ticket, styles.two)}>
            <Image src='/big-green-ticket.svg' alt='An image of the one-day ticket' fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
