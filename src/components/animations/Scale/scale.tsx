import { classNames } from '@/utils/classNames';
import React from 'react';
import { ScaleAnimationProps } from './model';
import styles from './scale.module.scss';

interface ChildElementProps {
  className?: string;
  style?: React.CSSProperties;
}

const ScaleAnimation: React.FC<ScaleAnimationProps> = ({ children, ...props }) => {
  const inlineStyles: React.CSSProperties = {
    animationDelay: props.animationDelay + 'ms',
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<ChildElementProps>(child)) {
          const childProps = child.props as ChildElementProps;
          return React.cloneElement(child, {
            className: classNames(childProps.className, styles.scaleItem),
            style: { ...childProps.style, ...inlineStyles },
            key: index,
          });
        }
        return child;
      })}
    </>
  );
};

export default ScaleAnimation;
