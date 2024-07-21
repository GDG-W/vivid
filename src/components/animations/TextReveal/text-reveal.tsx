import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { classNames } from '@/utils/classNames';
import { TextAnimationProps } from './model';
import styles from './text-reveal.module.scss';

const TextRevealAnimation: React.FC<TextAnimationProps> = (props) => {
  const {
    text,
    textClassName,
    textContainerClassName,
    animationDelay = 0,
    as: Element = 'span',
  } = props;

  const inlineStyles: React.CSSProperties = {
    animationDelay: animationDelay + 'ms',
  };

  useIntersectionObserver({
    className: styles.animatedText,
    inViewClassName: styles.inView,
  });

  return (
    <div className={classNames(styles.textContainer, textContainerClassName)}>
      <Element style={inlineStyles} className={classNames(styles.animatedText, textClassName)}>
        {text}
      </Element>
    </div>
  );
};

export default TextRevealAnimation;
