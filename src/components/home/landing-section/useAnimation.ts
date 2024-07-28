import { AnimationEasings } from '@/components/animations/Easings';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { RefObject } from 'react';
import styles from './landing.module.scss';

export const useLandingPageAnimation = (referenceContainer: RefObject<HTMLDivElement>) => {
  gsap.registerPlugin(useGSAP, CustomEase);

  useGSAP(
    () => {
      // Navigation Background Animation
      gsap.to(`.${styles.headernav}`, {
        opacity: 1,
        duration: 1,
        delay: 0.167,
        ease: CustomEase.create('custom', AnimationEasings.Hero.navHeader),
      });

      // CTA Button Animation
      gsap.fromTo(
        `.${styles.landingPageCtaButton}`,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          delay: 0.167,
          ease: CustomEase.create('custom', AnimationEasings.Hero.ctaButton),
        },
      );

      // CTA Cursor One Animation
      gsap.fromTo(
        `.${styles['careercursor--productmanager']}`,
        { transform: 'translateX(-100vw)' },
        {
          transform: ' translateX(0)',
          duration: 1,
          opacity: 1,
          delay: 0.25,
          ease: CustomEase.create('custom', AnimationEasings.Hero.CareerCursors.productManager),
        },
      );

      // CTA Ticket One Animation
      gsap.to(`.${styles.one}`, {
        bottom: '-50%',
        duration: 1,
        delay: 0.167,
        ease: CustomEase.create('custom', AnimationEasings.Hero.Tickets.ticketOnePosition),
      });

      gsap.to(`.${styles.one}`, {
        right: '45%',
        rotate: '60deg',
        duration: 1,
        delay: 0.667,
        ease: CustomEase.create('custom', AnimationEasings.Hero.Tickets.ticketOneRotation),
      });

      // CTA Ticket Two Animation
      gsap.to(`.${styles.middle}`, {
        bottom: '-45%',
        duration: 1,
        delay: 0.167,
        ease: CustomEase.create('custom', AnimationEasings.Hero.Tickets.ticketTwoPosition),
      });

      // CTA Ticket Three Animation
      gsap.to(`.${styles.two}`, {
        bottom: '-50%',
        duration: 1,
        delay: 0.167,
        ease: CustomEase.create('custom', AnimationEasings.Hero.Tickets.ticketThreePosition),
      });

      gsap.to(`.${styles.two}`, {
        left: '45%',
        rotate: '120deg',
        duration: 1,
        delay: 0.667,
        ease: CustomEase.create('custom', AnimationEasings.Hero.Tickets.ticketThreeRotation),
      });
    },
    { scope: referenceContainer },
  );
};
