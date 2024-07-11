'use client';

import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import CarouselItem from '@/components/carousel/carousel-item/carousel-item';
import { classNames } from '@/utils/classNames';
import { useState } from 'react';
import Swiper from 'swiper';
import styles from './values.module.scss';

const Values = () => {
  function findMiddle(n: number): number[] {
    if (n % 2 !== 0) {
      return [Math.floor(n / 2) + 1];
    } else {
      const mid1 = n / 2;
      const mid2 = mid1 + 1;
      return [mid1, mid2];
    }
  }

  const [activeIndex, setActiveIndex] = useState<number[]>([6]);

  function slideChange(swiper: Swiper) {
    const slidesPerView = swiper.params.slidesPerView as number;
    const activeIndex = swiper.realIndex;
    const visibleSlides = [];

    for (let i = 0; i < slidesPerView; i++) {
      visibleSlides.push((activeIndex + i) % swiper.slides.length);
    }

    const middle = findMiddle(slidesPerView);

    const index =
      middle.length === 1
        ? [visibleSlides[middle[0]]]
        : [visibleSlides[middle[0]], visibleSlides[middle[1]]];

    setActiveIndex(index);
  }
  return (
    <section className={styles.values}>
      <div className={styles.topContent}>
        <p className={styles.paragraph}>DevFest 2024</p>
        <h1 className={styles.heading}>What value will you be getting?</h1>
      </div>

      <div className={styles.slider}>
        <ReactSwiper
          centeredSlides={false}
          loop
          slideToClickedSlide
          initialSlide={6}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 390,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 400,
            },
          }}
          onSlideChange={slideChange}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide
              key={index}
              className={classNames(
                styles.slideItem,
                activeIndex.includes(index === 10 ? 0 : index + 1) && styles.slideItemActive,
              )}
            >
              <CarouselItem
                isActive={activeIndex.includes(index === 9 ? 0 : index + 1)}
                image='/carousel-image-1.png'
                subtitle=''
                title=''
              />
            </SwiperSlide>
          ))}
        </ReactSwiper>
      </div>
    </section>
  );
};

export default Values;
