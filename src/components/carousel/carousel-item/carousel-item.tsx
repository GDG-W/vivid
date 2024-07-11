import Image from 'next/image';
import React from 'react';
import styles from './carousel-item.module.scss';
import { CarouselItemProps } from './models';
import { classNames } from '@/utils/classNames';

const CarouselItem: React.FC<CarouselItemProps> = ({ image, isActive }) => {
  return (
    <div
      className={classNames(styles.carouselItemContainer, isActive && styles.carouselItemActive)}
    >
      <Image
        className={styles.carouselItemImage}
        src={image}
        alt='Carousel Image'
        width={400}
        height={400}
      />
    </div>
  );
};

export default CarouselItem;
