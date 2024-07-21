'use client';
import ContentReveal from '@/components/animations/ContentReveal/content-reveal';
import ScaleAnimation from '@/components/animations/Scale/scale';
import TextRevealAnimation from '@/components/animations/TextReveal/text-reveal';
import Header from '@/components/header';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import BlueCursor from '../../../../public/blue-cursor.svg';
import GreenCursor from '../../../../public/green-cursor.svg';
import RedCursor from '../../../../public/red-cursor.svg';
import YellowCursor from '../../../../public/yellow-cursor.svg';
import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.headernav}>
          <Header
            handleClick={() => {}}
            navContent={<span className={styles.upgradeTicketText}>Upgrade Tickets</span>}
          />
        </div>

        <div className={styles.uppercursors}>
          <ContentReveal direction='left' animationDelay={0}>
            <YellowCursor />
          </ContentReveal>

          <ContentReveal direction='right' animationDelay={417}>
            <RedCursor />
          </ContentReveal>
        </div>

        <div className={styles.herocontent}>
          <TextRevealAnimation
            text='Don’t miss out!'
            as='p'
            textClassName={styles.heroContentParagraph}
            textContainerClassName={styles.heroContentWrapper}
            animationDelay={100}
          />

          <TextRevealAnimation
            text='Get your ticket now'
            as='h1'
            textClassName={styles.heroContentHeader}
            textContainerClassName={styles.heroContentWrapper}
            animationDelay={100}
          />

          <ScaleAnimation animationDelay={167}>
            <button className={styles.heroCtaButton}>
              <TextRevealAnimation text='Get' as='span' animationDelay={100} />
              <TextRevealAnimation text='Early' as='span' animationDelay={170} />
              <TextRevealAnimation text='Bird' as='span' animationDelay={240} />
              <TextRevealAnimation text='Tickets' as='span' animationDelay={310} />
            </button>
          </ScaleAnimation>
        </div>

        <div className={styles.lowercursors}>
          <ContentReveal direction='left' animationDelay={500}>
            <GreenCursor />
          </ContentReveal>

          <ContentReveal direction='right' animationDelay={333}>
            <BlueCursor />
          </ContentReveal>
        </div>

        <div className={styles.ticketWrapper}>
          <div className={classNames(styles.ticket, styles.one)}>
            <Image
              src='/green-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
              className={styles.ticketImage}
            />
          </div>

          <div className={classNames(styles.ticket, styles.middle)}>
            <Image
              src='/blue-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
              className={styles.ticketImage}
            />
          </div>

          <div className={classNames(styles.ticket, styles.two)}>
            <Image
              src='/yellow-ticket.svg'
              alt='An image of the one-day ticket'
              fill
              priority={true}
              className={styles.ticketImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
