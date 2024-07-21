'use client';
import Accordion from '@/components/accordion';
import TextRevealAnimation from '@/components/animations/TextReveal/text-reveal';
import Image from 'next/image';
import { useState } from 'react';
import styles from './faq.module.scss';
import data from './mock-faq.json';

// TODO: Conditionally display green circles with tab list items

const FAQs = () => {
  const [activeTab, setActiveTab] = useState(data[0].category);
  const activeCategory = data.find((item) => item.category === activeTab);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <TextRevealAnimation textClassName={styles.qa} text='Quick Answers' as='p' />

        <TextRevealAnimation
          textClassName={styles.heading1}
          text='DevFest Lagos Ticket FAQs'
          as='h1'
          animationDelay={100}
        />

        <TextRevealAnimation
          textClassName={styles.heading2}
          text='Your questions answered'
          as='h2'
          animationDelay={150}
        />

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
                  type='button'
                >
                  <Image
                    className={styles.listDecorator}
                    src='/green-faq-circle.svg'
                    width={20}
                    height={20}
                    alt='list decorator'
                  />

                  <TextRevealAnimation
                    text={item.category}
                    as='span'
                    animationDelay={(index + 1) * 100}
                  />
                </button>
              ))}
            </div>
          </nav>
          <div>
            <TextRevealAnimation
              text={activeTab}
              textClassName={styles.tabheading}
              as='h1'
              animationDelay={200}
            />
            <div className={styles.accordionlist}>
              {activeCategory?.questions.map((q, idx) => (
                <div role='tabpanel' aria-labelledby={`tab-${idx}`} key={idx}>
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
