'use client';

import TargetAudienceAnimation from '@/animations/components/TargetAudience';
import Button from '@/components/button';
import { classNames } from '@/utils/classNames';
import { useEffect, useRef } from 'react';
import styles from './target-audience.module.scss';

const TargetAudience = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      new TargetAudienceAnimation(styles.targetAudience);

      isInitialized.current = true;
    }
  }, []);

  return (
    <section className={styles.targetAudience}>
      <div className={classNames(styles.container)}>
        <div className={styles.innerContainer}>
          <div className={styles.contentContainer}>
            <h1 data-animate-sentences className={styles.heading}>
              DevFest Lagos 2024{' '}
            </h1>

            <p data-animate-sentences data-delay='0.25' className={styles.content}>
              Attend Devfest Lagos 2024 and explore the amazing opportunity to learn from tech
              leaders, share next-gen ideas, and connect with like-minded peers to shape the future
              of technology.
            </p>

            {/* <Button variant='secondary' className={styles.button} text='Get Early Bird Tickets' /> */}

            <Button
              data-animate-scale
              data-delay='0.583'
              data-easing='CTA.button'
              variant='secondary'
              className={styles.button}
              text={
                <span data-animate-text data-delay='0.917' data-easing='CTA.text'>
                  Get Early Bird Tickets
                </span>
              }
            />
          </div>

          <div className={styles.audienceContainer}>
            <p data-animate-y-up>DevFest is for Everyone</p>
            <ul>
              <li>Designers</li>
              <li>Founders</li>
              <li>Developers</li>
              <li>DevOps</li>
              <li>Engineers</li>
              <li>Data Analysts</li>
              <li>Product Managers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
