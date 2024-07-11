'use client';

import React from 'react';
import { useState } from 'react';
import styles from './value.module.scss';

const Value = () => {
  const items = [
    {
      id: 1,
      src: '/farthest-right.png',
    },
    {
      id: 2,
      src: '/far-left.png',
    },
    {
      id: 3,
      src: '/left.png',
    },
    {
      id: 4,
      src: '/right.png',
    },
    {
      id: 5,
      src: '/aniedi.png',
    },
    {
      id: 6,
      src: '/far-right.png',
    },
    {
      id: 5,
      src: '/farthest-right.png',
    },
  ];
  const [active, setActive] = useState(4);
  const moveToSelected = (element: 'next' | 'prev' | number) => {
    let newIndex: number;
    if (element === 'next') {
      newIndex = (active + 1) % items.length;
    } else if (element === 'prev') {
      newIndex = (active - 1 + items.length) % items.length;
    } else {
      newIndex = element;
    }
    setActive(newIndex);
  };

  const getClassNames = (index: number) => {
    if (index === active) {
      return styles.selected;
    } else if (index === (active - 1 + items.length) % items.length) {
      return styles.prev;
    } else if (index === (active + 1) % items.length) {
      return styles.next;
    } else if (index === (active - 2 + items.length) % items.length) {
      return styles.prevLeftSecond;
    } else if (index === (active + 2) % items.length) {
      return styles.nextRightSecond;
    } else if (index < active) {
      return styles.hideLeft;
    } else {
      return styles.hideRight;
    }
  };

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <p className={styles.paragraph}>DevFest 2024</p>
          <h1 className={styles.heading}>What value will you be getting?</h1>
        </div>

        <div id={styles.carousel}>
          {items.map((item, index) => (
            <div key={index} className={getClassNames(index)} onClick={() => moveToSelected(index)}>
              <img src={item.src} alt='carousel item' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
