import React, { useEffect, useState } from 'react';
import styles from './accordion.module.scss';
import { AccordionProps } from './models';
import CloseAccordion from '../../../public/icons/minus-circle.svg';
import OpenAccordion from '../../../public/icons/add-circle.svg';

const Accordion: React.FC<AccordionProps> = ({ headerText, panelText, idx }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [headerText, panelText]);

  return (
    <div className={styles.accordion}>
      <h3>
        <button
          onClick={() => setExpanded(!expanded)}
          type='button'
          id='accordion_header'
          aria-expanded={expanded}
          aria-controls={`accordion_panel_${idx}`}
        >
          <span>{headerText}</span>
          {expanded ? <CloseAccordion /> : <OpenAccordion />}
        </button>
      </h3>
      {expanded && (
        <section id={`accordion_panel_${idx}`} aria-labelledby='accordion_header'>
          {panelText}
        </section>
      )}
    </div>
  );
};

export default Accordion;
