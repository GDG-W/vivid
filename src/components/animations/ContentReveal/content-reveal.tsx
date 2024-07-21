import { classNames } from '@/utils/classNames';
import styles from './content-reveal.module.scss';
import { ContentRevealAnimationProps } from './model';

const ContentReveal = ({ direction, children, ...props }: ContentRevealAnimationProps) => {
  const classes = classNames(
    styles.cta,
    direction === 'left' ? styles.revealLeft : styles.revealRight,
  );

  const inlineStyles: React.CSSProperties = {
    animationDelay: props.animationDelay + 'ms',
  };

  return (
    <div style={inlineStyles} className={classes}>
      {children}
    </div>
  );
};

export default ContentReveal;
