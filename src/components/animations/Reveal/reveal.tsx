import { classNames } from '@/utils/classNames';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { RevealAnimationProps } from './model';
import styles from './reveal.module.scss';

const RevealAnimation: React.FC<RevealAnimationProps> = (props) => {
  const { children, className, fromAnimationOptions, toAnimationOptions } = props;

  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        `.${styles.revealContent}`,
        {
          y: container.current?.offsetHeight || 100,
          stagger: {
            amount: 0.5,
          },
          ...fromAnimationOptions,
        },
        {
          y: 0,
          duration: 1,
          ease: 'power2.inOut',
          ...toAnimationOptions,
        },
      );
    },
    { scope: container },
  );

  useLayoutEffect(() => {
    if (!content.current || !container.current) return;

    const contentHeight = content.current.offsetHeight;

    const newContainerHeight = `${contentHeight}px`;

    container.current.style.height = newContainerHeight;
  }, [children]);

  return (
    <div ref={container} className={classNames(styles.revealContainer, className)}>
      <span
        ref={content}
        className={styles.revealContent}
        style={{ transform: `translate(0px, ${container.current?.offsetHeight || 100}px)` }}
      >
        {children}
      </span>
    </div>
  );
};

export default RevealAnimation;
