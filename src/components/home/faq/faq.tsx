'use client';
import React from 'react';
import styles from './faq.module.scss';
import Accordion from '@/components/accordion';

const FAQs = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <p className={styles.qa}>Quick Answers</p>
        <h1 className={styles.heading1}>DevFest Lagos Ticket FAQs</h1>
        <h2 className={styles.heading2}>Your questions answered</h2>

        <div className={styles.tabs}>
          <nav className={styles.nav}>
            <div className={styles.tablist} role='tablist'>
              <button role='tab' type='button'>
                <span></span>
                <span>General Questions</span>
              </button>
              <button role='tab' type='button'>
                <span></span>
                <span>Claiming Ticket</span>
              </button>
              <button role='tab' type='button'>
                <span></span>
                <span>Upgrading ticket</span>
              </button>
            </div>
          </nav>
          <div>
            <h1 className={styles.tabheading}>General Questions</h1>
            <div className={styles.accordionlist}>
              <Accordion
                headerText='Can I buy tickets for the event through this platform?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='Can I cancel my ticket and get a refund?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='Can I buy tickets for the event through this platform?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='How many tickets are available for sale?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='Can I buy tickets for the event through this platform?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='Can I buy tickets for the event through this platform?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
              <Accordion
                headerText='Can I buy tickets for the event through this platform?'
                panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
