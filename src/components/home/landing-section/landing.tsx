'use client';
import React from 'react';
import Image from 'next/image';
import styles from './landing.module.scss';
import Header from '@/components/header';
import Button from '@/components/button';
import { classNames } from '@/utils/classNames';
// import ArrowRight from '../../../../public/icons/arrow-right.svg';
import GreenCursor from '../../../../public/green-cursor.svg';
import YellowCursor from '../../../../public/yellow-cursor.svg';
import RedCursor from '../../../../public/red-cursor.svg';
import BlueCursor from '../../../../public/blue-cursor.svg';
import { Modal } from '@/components/modal';
import PurchaseTicket from '@/components/purchase-ticket';

const Landing = () => {
  const [openTicket, setOpenTicket] = React.useState<boolean>(false);

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.headernav}>
          <Header
            handleClick={() => setOpenTicket(true)}
            navContent={<span>Upgrade Tickets</span>}
          />
        </div>

        <div className={styles.uppercursors}>
          <YellowCursor />
          <RedCursor />
        </div>

        <div className={styles.herocontent}>
          <p>Don’t miss out!</p>
          <h1>Get your ticket now</h1>
          <Button text='Get Early Bird Tickets' />
        </div>

        <div className={styles.lowercursors}>
          <GreenCursor />
          <BlueCursor />
        </div>

        <div className={styles.ticketWrapper}>
          <div className={classNames(styles.ticket, styles.one)}>
            <Image
              src='/yellow-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
            />
          </div>
          <div className={classNames(styles.ticket, styles.middle)}>
            <Image
              src='/blue-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
            />
          </div>
          <div className={classNames(styles.ticket, styles.two)}>
            <Image
              src='/green-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal open={openTicket} onClose={() => setOpenTicket(false)}>
        <PurchaseTicket />
      </Modal>
    </div>
  );
};

export default Landing;
