/* eslint-disable */

'use client';
import Image from 'next/image';
import DevFest from '../../../public/devfest-yellowside.svg';
import ClaimBg from '../../../public/claiming-ticket.png';
import { Textfield } from '@/components/shared/Textfield';
import Button from '@/components/button';
import { Selectfield } from '@/components/shared/Selectfield';
import styles from './claiming.module.scss';
import { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import Message from '../../../public/message.svg';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Cancel from '../../../public/icons/cancel-icon.svg';

const ClaimingTicket = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const sizeOptions = [
    { label: 'Small', value: 'Small' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Large', value: 'Large' },
    { label: 'Extra-Large', value: 'Extra-Large' },
  ];

  const expertiseOptions = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
  ];

  const roleOptions = [
    { label: 'Software Engineer', value: 'Software Engineer' },
    { label: 'Product Designer', value: 'Product Designer' },
    { label: 'Product Manager', value: 'Product Manager' },
    { label: 'QA Analyst', value: 'QA Analyst' },
    { label: 'Technical Writer', value: 'Technical Writer' },
    { label: 'Others', value: 'Others' },
  ];

  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    setIsModalOpen(true);
    console.log(data);
  };

  return (
    <div className={styles.claiming_container}>
      <div className={styles.logo}>
        <DevFest />
      </div>
      <div className={styles.claiming_form}>
        <div className={styles.claiming_pic}>
          <Image src={ClaimBg} alt={'ClaimBg'} />
        </div>
        <div className={styles.claiming_inputs}>
          <div className={styles.claiming_inputs_text}>
            <h1>Register</h1>
            <p>Complete your registration in order to claim your ticket</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className=''>
              <Textfield
                id='text'
                label='Full Name'
                placeholder='Enter Full Name'
                register={register}
              />
            </div>
            <div className=''>
              <Textfield
                id='email'
                label='Email Address'
                placeholder='example@gmail.com'
                register={register}
              />
            </div>
            <div>
              <Selectfield
                id={'role'}
                options={roleOptions}
                label='Role'
                placeholder='Select'
                onChange={handleRoleChange}
                register={register}
              />
            </div>
            {selectedRole === 'Others' && (
              <div>
                <Textfield
                  id='otherSkill'
                  label='Specify ‘Other’'
                  placeholder='Enter your skill'
                  register={register}
                />
              </div>
            )}
            <div>
              <Selectfield
                id={'expertise'}
                options={expertiseOptions}
                label='Level of Expertise'
                placeholder='Select'
                register={register}
              />
            </div>
            <div>
              <Selectfield
                id={'size'}
                options={sizeOptions}
                label='Shirt Size'
                placeholder='Select'
                register={register}
              />
            </div>
            <Button text={'Register'} variant='primary' type='submit' className={styles.btn} />
          </form>
        </div>
      </div>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogPanel className={styles.dialog_overlay} />
        <div className={styles.dialog_content}>
          <div className={styles.dialog_box}>
            <div className={styles.dialog_cancel} onClick={() => setIsModalOpen(false)}>
              <Cancel />
            </div>
            <Message />
            <DialogTitle className={styles.dialog_title}>Registration Successful</DialogTitle>
            <Description className={styles.dialog_description}>
              You have successfully registered for Devfest Lagos 2024. Check your email for your
              Ticket ID
            </Description>
            <div className={styles.dialog_buttons}>
              <button
                onClick={() => setIsModalOpen(false)}
                className={styles.dialog_buttons_primary}
              >
                {' '}
                Ok
              </button>
              <button className={styles.dialog_buttons_transparent}>Upgrade Ticket</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default ClaimingTicket;
