'use client';
import { AnimationEasings } from '@/components/animations/Easings';
import RevealAnimation from '@/components/animations/Reveal/reveal';
import Header from '@/components/header';
import { classNames } from '@/utils/classNames';
import { CustomEase } from 'gsap/CustomEase';
import Image from 'next/image';
import { useRef } from 'react';
import ArrowRight from '../../../../public/icons/arrow-right.svg';
import DataAnalystCursor from '../../../../public/icons/data-analyst-cursor-icon.svg';
import ProductDesignerCursor from '../../../../public/icons/product-designer-cursor-icon.svg';
import ProductManagerCursor from '../../../../public/icons/product-manager-cursor-icon.svg';
import SoftwareEngineerCursor from '../../../../public/icons/software-engineer-cursor-icon.svg';
import styles from './landing.module.scss';
import { useLandingPageAnimation } from './useAnimation';

const Landing = () => {
  const container = useRef<HTMLDivElement>(null);

  useLandingPageAnimation(container);

  const CTAText = [
    {
      text: 'Get',
      delay: 0.5,
    },
    {
      text: 'Early',
      delay: 0.583,
    },
    {
      text: 'Bird',
      delay: 0.667,
    },
    {
      text: 'Tickets',
      delay: 0.75,
    },
  ];

  return (
    <div ref={container} className={styles.landing}>
      <div className={styles.container}>
        <div className={classNames(styles.headernav, 'dissapear')}>
          <Header
            handleClick={() => {}}
            navContent={
              <>
                <span>Upgrade Tickets</span>
                <ArrowRight />
              </>
            }
          />
        </div>

        <div>
          <div
            className={classNames(
              styles.careercursor,
              styles['careercursor--productmanager'],
              'dissapear',
            )}
          >
            <p className={styles.careercursortext}>Product Manager</p>
            <ProductManagerCursor />
          </div>

          <div className={classNames(styles.careercursor, styles['careercursor--productdesigner'])}>
            <ProductDesignerCursor />
            <p className={styles.careercursortext}>Product Designer</p>
          </div>
        </div>

        <div className={styles.herocontent}>
          <RevealAnimation
            className={styles.landingPageCtaParagraph}
            toAnimationOptions={{
              delay: 0.333,
              ease: CustomEase.create('custom', AnimationEasings.Hero.ctaHeader),
            }}
          >
            <p>Don’t miss out!</p>
          </RevealAnimation>

          <RevealAnimation
            className={styles.landingPageCtaHeader}
            toAnimationOptions={{
              delay: 0.5,
              ease: CustomEase.create('custom', AnimationEasings.Hero.ctaHeader),
            }}
          >
            <h1>Get your ticket now</h1>
          </RevealAnimation>

          <button className={classNames(styles.landingPageCtaButton)}>
            {CTAText.map((item, index) => (
              <RevealAnimation
                key={index}
                className={styles.landingPageCtaButtonText}
                toAnimationOptions={{
                  delay: item.delay,
                  ease: CustomEase.create('custom', AnimationEasings.Hero.ctaText),
                }}
              >
                <span>{item.text}</span>
              </RevealAnimation>
            ))}
          </button>
        </div>

        <div>
          <div
            className={classNames(
              styles.careercursor,
              styles['careercursor--softwareengineer'],
              '',
            )}
          >
            <p className={styles.careercursortext}>Software Engineer</p>
            <SoftwareEngineerCursor />
          </div>

          <div className={classNames(styles.careercursor, styles['careercursor--dataanalyst'])}>
            <DataAnalystCursor />
            <p className={styles.careercursortext}>Data Analyst</p>
          </div>
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
