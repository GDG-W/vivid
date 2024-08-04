import React from 'react';
import styles from './checkout.module.scss';
import { TTicketNumber } from '../../model';

interface ICheckoutProps {
  selectDays: string;
  ticketNo: TTicketNumber;
}

export const Checkout: React.FC<ICheckoutProps> = ({ selectDays, ticketNo }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_header}>Order summary</div>

      <div className={styles.main_container_body}>
        {Number(selectDays) > 0 && (Number(ticketNo.oneDay) > 0 || Number(ticketNo.twoDays) > 0) ? (
          <>
            <ul className={styles.main_container_body_list_group}>
              {Number(ticketNo.oneDay) > 0 && (
                <>
                  <p className={styles.main_container_body_date}>
                    {Number(selectDays) === 1 && <> 15th</>}
                    {Number(selectDays) === 2 && <> 16th</>}
                    November 2024
                  </p>

                  <li className={styles.main_container_body_list_group_item}>
                    <span>One day access </span>
                    <span>N10,000</span>
                  </li>
                </>
              )}

              {Number(ticketNo.twoDays) > 0 && (
                <>
                  <p className={styles.main_container_body_date}>15th & 16th November 2024</p>

                  <li className={styles.main_container_body_list_group_item}>
                    <span>Two days access </span>
                    <span>N20,000</span>
                  </li>
                </>
              )}

              <li className={styles.main_container_body_list_group_item}>
                <span>Subtotal </span>
                <span>N20,000</span>
              </li>
              <li className={styles.main_container_body_list_group_item}>
                <span>Total </span>
                <span>N20,000</span>
              </li>
            </ul>
          </>
        ) : (
          <p className={styles.main_container_body_date}>
            Select your event date and quantity to appear here
          </p>
        )}
      </div>
    </div>
  );
};
