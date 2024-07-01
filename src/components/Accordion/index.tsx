import React, { useState } from 'react';
import styles from './accordion.module.scss';
import { AccordionProps } from './models';
import CloseAccordion from '../../../public/icons/minus-circle.svg';
import OpenAccordion from '../../../public/icons/add-circle.svg';

const Accordion: React.FC<AccordionProps> = ({ headerText, panelText, idx }) => {
  const [expanded, setExpanded] = useState(false);
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
          {expanded ? <OpenAccordion /> : <CloseAccordion />}
        </button>
      </h3>
      <section id={`accordion_panel_${idx}`} aria-labelledby='accordion_header' hidden={expanded}>
        {panelText}
      </section>
    </div>
  );
};

export default Accordion;
