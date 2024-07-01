'use client';
import Accordion from '@/components/Accordion';
// import { sendGAEvent } from '@next/third-parties/google';

const TestPage = () => {
  return (
    <div className='main'>
      <div className='test'>
        <Accordion
          headerText='Can I buy tickets for the event through this platform?'
          panelText='Yes! This platform allows you to securely purchase tickets for the one-day or two-day event option.'
        />
      </div>
      {/* <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
        This button sends a GA event
      </button> */}
    </div>
  );
};

export default TestPage;
