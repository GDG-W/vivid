'use client';
import HeroAnimation from '@/animations/components/Hero';
import Button from '@/components/button';
import Header from '@/components/header';
import { Modal } from '@/components/modal';
import PurchaseTicket from '@/components/purchase-ticket';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import ArrowRight from '../../../../public/icons/arrow-right.svg';
import DataAnalystCursor from '../../../../public/icons/data-analyst-cursor-icon.svg';
import ProductDesignerCursor from '../../../../public/icons/product-designer-cursor-icon.svg';
import ProductManagerCursor from '../../../../public/icons/product-manager-cursor-icon.svg';
import SoftwareEngineerCursor from '../../../../public/icons/software-engineer-cursor-icon.svg';
import styles from './landing.module.scss';

const Landing = () => {
  const [openTicket, setOpenTicket] = React.useState<boolean>(false);

  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      new HeroAnimation(styles.landing);

      isInitialized.current = true;
    }
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div
          data-animate-fadein
          data-delay='0.167'
          data-easing='NAVIGATION.header'
          className={styles.headernav}
        >
          <Header
            handleClick={() => setOpenTicket(true)}
            navContent={
              <div
                className={styles.headernavButtonContainer}
                data-animate-y-up
                data-delay='0.417'
                data-easing='NAVIGATION.button'
              >
                <span>Upgrade Tickets</span>
                <ArrowRight />
              </div>
            }
          />
        </div>

        <div>
          <div
            data-animate-fadein-left
            data-easing='CAREERCURSORS.productManagerPosition'
            className={classNames(styles.careercursor, styles['careercursor--productmanager'])}
          >
            <p className={styles.careercursortext}>Product Manager</p>
            <ProductManagerCursor data-animate-career-cursor data-delay='1.3' />
          </div>

          <div
            data-animate-fadein-right
            data-delay='0.3'
            data-easing='CAREERCURSORS.productDesignerPosition'
            className={classNames(styles.careercursor, styles['careercursor--productdesigner'])}
          >
            <ProductDesignerCursor
              data-animate-career-cursor
              data-delay='1.3'
              data-duration='0.7'
            />
            <p className={styles.careercursortext}>Product Designer</p>
          </div>
        </div>

        <div className={styles.herocontent}>
          <p data-animate-y-up data-delay='0.45' data-easing='CTA.header'>
            Don’t miss out!
          </p>
          <h1 data-animate-y-up data-delay='0.5' data-easing='CTA.header'>
            Get your ticket now
          </h1>

          <Button
            data-animate-scale
            data-delay='0.167'
            data-easing='CTA.button'
            text={
              <span data-animate-text data-delay='0.5' data-easing='CTA.text'>
                Get Early Bird Tickets
              </span>
            }
          />
        </div>

        <div>
          <div
            data-animate-fadein-left
            data-delay='0.4'
            data-easing='CAREERCURSORS.softwareEnginnerPosition'
            className={classNames(styles.careercursor, styles['careercursor--softwareengineer'])}
          >
            <p className={styles.careercursortext}>Software Engineer</p>
            <SoftwareEngineerCursor
              data-animate-career-cursor
              data-delay='1.3'
              dara-duration='0.7'
            />
          </div>

          <div
            data-animate-fadein-right
            data-delay='0.2'
            data-easing='CAREERCURSORS.dataAnalystPosition'
            className={classNames(styles.careercursor, styles['careercursor--dataanalyst'])}
          >
            <DataAnalystCursor data-animate-career-cursor data-delay='1.3' dara-duration='0.7' />
            <p className={styles.careercursortext}>Data Analyst</p>
          </div>
        </div>

        <div className={styles.ticketWrapper}>
          <div className={classNames(styles.ticket, styles.one)} data-animate-ticket-one>
            <Image
              src='/green-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
            />
          </div>

          <div className={classNames(styles.ticket, styles.middle)} data-animate-ticket-middle>
            <Image
              src='/blue-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
            />
          </div>

          <div className={classNames(styles.ticket, styles.two)} data-animate-ticket-two>
            <Image
              src='/yellow-ticket.svg'
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
