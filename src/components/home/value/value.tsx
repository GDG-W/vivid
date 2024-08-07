'use client';

import { Fragment, useEffect, useState } from 'react';
import styles from './value.module.scss';

const Value = () => {
  const items = [
    {
      id: 1,
      src: '/swags.png',
      title: 'Exclusive Swags',
      content:
        'At DevFest Lagos, attendees will receive merch designed to enhance your experience and provide lasting memories.',
    },
    {
      id: 2,
      src: '/activities.png',
      title: 'Recreational Activities',
      content:
        'Participate in games, team-building excercises, to  recharge to make new friends, and create memories.',
    },
    {
      id: 3,
      src: '/networking.png',
      title: 'Networking Opportunities',
      content:
        'Whether you’re looking for mentorship, collaboration opportunities, or simply to expand your tech circle. DevFest Lagos provides the platform to build valuable relationships that can advance your career.',
    },
    {
      id: 4,
      src: '/swags.png',
      title: 'Exclusive Swags',
      content:
        'At DevFest Lagos, attendees will receive merch designed to enhance your experience and provide lasting memories.',
    },
    {
      id: 5,
      src: '/aniedi.png',
      title: 'Amazing Speakers',
      content:
        'At DevFest Lagos, we bring together some of the most influential voices in technology. Our speakers are industry experts who are shaping the future of future world.',
    },
    {
      id: 6,
      src: '/networking.png',
      title: 'Networking Opportunities',
      content:
        'Whether you’re looking for mentorship, collaboration opportunities, or simply to expand your tech circle. DevFest Lagos provides the platform to build valuable relationships that can advance your career.',
    },
    {
      id: 5,
      src: '/meals.png',
      title: 'Complimentary Meals',
      content:
        'Enjoy complimentary meals all provided at no cost, ensuring you stay energized and focused during the event.',
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

  useEffect(() => {
    const interval = setInterval(() => {
      moveToSelected('next');
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className={styles.values}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <p className={styles.paragraph}>DevFest 2024</p>
          <h1 className={styles.heading}>What value will you be getting?</h1>
        </div>

        <div id={styles.carousel}>
          {items.map((item, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className={getClassNames(index)}
                onClick={() => moveToSelected(index)}
              >
                <img src={item.src} alt='carousel item' />
              </div>
            </Fragment>
          ))}
        </div>
        <div className={styles.details}>
          <h2>{items[active].title}</h2>
          <p>{items[active].content}</p>
        </div>
      </div>
    </section>
  );
};

export default Value;
