'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './faq.module.scss';
import Accordion from '@/components/accordion';
import data from './mock-faq.json';

// TODO: Conditionally display green circles with tab list items

const FAQs = () => {
  const [activeTab, setActiveTab] = useState(data[0].category);
  const activeCategory = data.find((item) => item.category === activeTab);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <p className={styles.qa}>Quick Answers</p>
        <h1 className={styles.heading1}>DevFest Lagos Ticket FAQs</h1>
        <h2 className={styles.heading2}>Your questions answered</h2>

        <div className={styles.tabs}>
          <nav className={styles.nav}>
            <div className={styles.tablist} role='tablist'>
              {data.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.tab} ${activeTab === item.category ? styles.active : ''}`}
                  onClick={() => setActiveTab(item.category)}
                  role='tab'
                  id={`tab-${index}`}
                  aria-controls={`panel-${index}`}
                  aria-selected={activeTab === item.category}
                  type='button'
                >
                  <Image src='/green-faq-circle.svg' width={20} height={20} alt='list decorator' />
                  <span>{item.category}</span>
                </button>
              ))}
            </div>
          </nav>
          <div>
            <h1 className={styles.tabheading}>{activeTab}</h1>
            <div className={styles.accordionlist}>
              {activeCategory?.questions.map((q, idx) => (
                <div role='tabpanel' id={`panels-${idx}`} aria-labelledby={`tab-${idx}`} key={idx}>
                  <Accordion headerText={q.question} panelText={q.answer} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
