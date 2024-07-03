import React from 'react';
import Image from 'next/image';

const FAQ = () => {
  return (
    <div className='faq'>
      <div>
        <div className='faq-header'>
          <p>Quick Answers</p>
          <h2>DevFest Lagos Ticket FAQS</h2>
          <h2 className='q-a'>Your questions answered</h2>
        </div>

        <div className='tab-block'>
          <ul className='tablist' role='tablist'>
            <li className='tab active-tab' role='presentation'>
              General Questions
            </li>
            <li className='tab' role='presentation'>
              Claiming Ticket
            </li>
            <li className='tab' role='presentation'>
              Upgrading Ticket
            </li>
          </ul>

          <div className='tabpanel'>
            <div className='content active-content' role='tabpanel'>
              <h3>General Questions</h3>
              <ul className='tabpanel-items'>
                <li className='tabpanel-item'>
                  <div className='card-header'>
                    <h4>Can I buy tickets for the event throught this platform?</h4>
                    <div className='card-header-button'>
                      <button>
                        <Image
                          src='/../../public/icons/minus-circle.png'
                          height={24}
                          width={24}
                          alt='minimize button'
                        />
                      </button>
                    </div>
                  </div>
                  <p>
                    Yes! This platform allows you to securely purchase tickets for the one-day or
                    two-day event option.
                  </p>
                </li>
                <li className='tabpanel-item'>
                  <h4>Can I cancel my ticket and get a refund?</h4>
                  <p>
                    We understand that unexpected circumstances can arise. Unfortunately, due to the
                    nature of the event, we operate with a no-refund policy for all ticket
                    purchases.
                  </p>
                </li>

                <li className='tabpanel-item'>
                  <h4>How many tickets are available for sale?</h4>
                  <p>blah blah blah</p>
                </li>

                <li className='tabpanel-item'>
                  <h4>How many tickets are available for sale?</h4>
                  <p>blah blah</p>
                </li>

                <li className='tabpanel-item'>
                  <h4>How many tickets are available for sale?</h4>
                  <p>Blah blah.</p>
                </li>
              </ul>
            </div>

            <div role='tabpanel'>
              <h3>Claiming Ticket</h3>
              <p>a;djknf;jn d;nfjnduuebjdushirubief</p>
            </div>

            <div role='tabpanel'>
              <h3>Upgrading Ticket</h3>
              <p>a;djknf;jn d;nfjnduuebjdushirubief</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
