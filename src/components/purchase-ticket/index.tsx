import CancelIcon from '../../../public/icons/cancel.svg';
import styles from './ticket.module.scss';
import Image from 'next/image';
import React from 'react';
import { Checkout } from './components/checkout';
import { TicketType } from './components/ticket-type';
import { OrderInformation } from './components/order-information';
import { TTicketNumber } from './model';

const PurchaseTicket = () => {
  const [activeStep, seActiveStep] = React.useState<number>(1);
  const [selectDays, setSelectDays] = React.useState<string>('0');
  const [ticketNo, setTicketNo] = React.useState<TTicketNumber>({
    oneDay: '0',
    twoDays: '0',
  });

  const stepperLists = [
    { name: 'Ticket type', value: 1 },
    { name: 'Order information', value: 2 },
    { name: 'Checkout', value: 3 },
  ];

  const handleNextStep = () => {
    if (activeStep > 3) return;
    seActiveStep(activeStep + 1);
  };

  return (
    <div className={styles.ticket_container}>
      <div className={styles.ticket_header}>
        <div className={styles.top_pop}>
          <Image
            src='/icons/devfest-logo.svg'
            alt='DevFest Lagos logo'
            width={132}
            height={34}
            priority={true}
          />
        </div>

        <div className={styles.top_pop}>
          <div className={styles.cancel_text}>
            <span className={styles.cancel_text_name}> Cancel Purchase </span>
            <CancelIcon />
          </div>
        </div>
      </div>

      <div className={styles.ticket_body}>
        <div className={styles.title_container}>
          <h3 className={styles.title_container_name}>Purchase Ticket</h3>
          <ul className={styles.title_container_list_group}>
            {stepperLists.map((list, id) => (
              <li
                onClick={() => seActiveStep(list.value)}
                className={`
                  ${styles.title_container_list_group_item} 
                                ${activeStep >= list.value ? styles.title_container_list_group_active : ''}
                                `}
                key={id}
              >
                {list.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.wrapper_container}>
            {activeStep === 1 && (
              <TicketType
                selectDays={selectDays}
                handleChangeSelectDays={setSelectDays}
                ticketNo={ticketNo}
                handleChangeTicketNo={setTicketNo}
                handleNext={handleNextStep}
              />
            )}
            {(activeStep === 2 || activeStep === 3) && <OrderInformation />}
          </div>
          <div className={styles.wrapper_container}>
            <Checkout selectDays={selectDays} ticketNo={ticketNo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicket;
