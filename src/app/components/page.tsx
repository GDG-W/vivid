'use client';
import Accordion from '@/components/accordion';
import Button from '@/components/button';
import Calendar from '../../../public/icons/calendar-black.svg';
import WhiteCalendar from '../../../public/icons/calendar-white.svg';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import Header from '@/components/header';

const TestPage = () => {
  return (
    <div className='main'>
      <div className='test'>
        <Header
          navContent={
            <>
              <p>Get tickets for Your Friends</p>
              <ArrowRight />
            </>
          }
        />
        <Accordion
          headerText='Can I buy tickets for the event through this platform?'
          panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
        />
        <Button text='Primary Button' />
        <Button text='Primary Button with Icon' outlined icon={<WhiteCalendar />} />
        <Button text='Secondary Button' variant='secondary' />
        <Button text='Outlined Secondary Button' variant='secondary' outlined={true} />
        <Button text='Secondary Button with Icon' variant='secondary' icon={<Calendar />} />
        <Button text='Transparent Button' variant='transparent' />
        <Button text='Transparent Button with Icon' variant='transparent' icon={<Calendar />} />
      </div>
    </div>
  );
};

export default TestPage;
