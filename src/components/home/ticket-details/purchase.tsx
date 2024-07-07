'use client';

import React from 'react';
import styles from './purchase.module.scss';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import Button from '@/components/button';

const PurchaseYourTicket = () => {
  return (
    <section className={styles.purchase}>
      <div className={classNames(styles.container)}>
        <div className={styles.heading}>
          <h1>Purchase your tickets</h1>
          <p>Purchase tickets for one or two-day access; for yourself, or your group of friends.</p>
        </div>

        <div className={styles.ticketdetails}>
          <div className={styles.ticketImage}>
            <Image src='/yelloww.svg' alt='An image of the one-day ticket' fill />
          </div>
          <div>
            <h2>1 day access only | N20,000</h2>
            <ul>
              <li>Attend event for just a day of your choice </li>
              <li>Meal Tickets</li>
              <li>Devfest Swags</li>
              <li>Access to workshops, sessions and talks</li>
            </ul>

            <Button text='Get Early Bird Tickets' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseYourTicket;
