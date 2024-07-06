'use client';

import Button from '@/components/button';
import { classNames } from '@/utils/classNames';
import styles from './target-audience.module.scss';

const TargetAudience = () => {
  return (
    <section className={styles.targetAudience}>
      <div className={classNames(styles.container)}>
        <div className={styles.innerContainer}>
          <div className={styles.contentContainer}>
            <h1 className={styles.heading}>DevFest Lagos 2024 </h1>

            <p className={styles.content}>
              Attend Devfest Lagos 2024 and explore the amazing opportunity to learn from tech
              leaders, share next-gen ideas, and connect with like-minded peers to shape the future
              of technology.
            </p>

            <Button variant='secondary' className={styles.button} text='Get Early Bird Tickets' />
          </div>

          <div className={styles.audienceContainer}>
            <p>DevFest is for Everyone</p>
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
