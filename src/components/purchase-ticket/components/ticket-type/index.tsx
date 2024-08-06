import SelectField from '@/components/form/selectfield/SelectField';
import TextField from '@/components/form/textfield/TextField';
import styles from './type.module.scss';
import { OptionProp } from '@/components/form/models';
import Button from '@/components/button';
import React from 'react';
import { TTicketNumber } from '../../model';
import { dayOptions } from '@/utils/mock-data';

interface ITicketTypeProps {
  selectDays: string;
  ticketNo: TTicketNumber;
  handleChangeSelectDays: React.Dispatch<React.SetStateAction<string>>;
  handleChangeTicketNo: React.Dispatch<React.SetStateAction<TTicketNumber>>;
  handleNext: () => void;
}

export const TicketType: React.FC<ITicketTypeProps> = ({
  selectDays,
  ticketNo,
  handleChangeSelectDays,
  handleChangeTicketNo,
  handleNext,
}) => {
  const onHandleChangeSelectDays = (valueObj: OptionProp | OptionProp[]) => {
    if (Array.isArray(valueObj)) return;
    handleChangeSelectDays(valueObj.value);
  };

  return (
    <div className={styles.t_container}>
      <div className={styles.t_container_header}>
        <h3 className={styles.t_container_header_title}>Select your type of Ticket</h3>
        <p className={styles.t_container_header_detail}> Choose your ticket for entry pass</p>
      </div>

      <div className={styles.t_container_body}>
        <div className={styles.t_container_box}>
          <div className={styles.t_container_box_wrapper}>
            <h5 className={styles.t_container_box_wrapper_title}>One day access</h5>
            <span className={styles.t_container_box_wrapper_title}>N10,000</span>
          </div>

          <div className={styles.t_container_box_wrapper}>
            <p className={styles.t_container_box_wrapper_detail}>
              Attend devfest Lagos 2024 for just a day with access to all talks and sessions
            </p>

            <div className={styles.input_wrapper}>
              <SelectField
                width='135px'
                placeholder='Select Day'
                options={dayOptions}
                id='selectDay'
                onChange={onHandleChangeSelectDays}
              />

              <TextField
                width='75px'
                id='ticketNumber'
                placeholder='0'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeTicketNo((prevState) => ({
                    ...prevState,
                    oneDay: event.target.value,
                  }));
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.t_container_box}>
          <div className={styles.t_container_body_holder_title}></div>
        </div>
      </div>

      <div className={styles.t_container_body}>
        <div className={styles.t_container_box}>
          <div className={styles.t_container_box_wrapper}>
            <h5 className={styles.t_container_box_wrapper_title}>Two days access</h5>
            <span className={styles.t_container_box_wrapper_title}>N20,000</span>
          </div>

          <div className={styles.t_container_box_wrapper}>
            <p className={styles.t_container_box_wrapper_detail}>
              Attend devfest Lagos 2024 for 2 days with access to all talks and sessions
            </p>

            <div className={styles.input_wrapper}>
              <TextField
                width='75px'
                id='ticketNumber'
                placeholder='0'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  // Assume ticket covers for 2 days
                  handleChangeSelectDays('2');
                  handleChangeTicketNo((prevState) => ({
                    ...prevState,
                    twoDays: event.target.value,
                  }));
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.t_container_box}>
          <div className={styles.t_container_body_holder_title}></div>
        </div>
      </div>

      <Button
        fullWidth
        text='Buy ticket'
        variant={
          Number(selectDays) > 0 && (Number(ticketNo.oneDay) > 0 || Number(ticketNo.twoDays) > 0)
            ? 'primary'
            : 'disabled'
        }
        onClick={handleNext}
      />
    </div>
  );
};
