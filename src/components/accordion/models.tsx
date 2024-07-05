import { ReactNode } from 'react';

export type AccordionProps = {
  idx?: number;
  headerText: string;
  panelText: string | ReactNode;
};
