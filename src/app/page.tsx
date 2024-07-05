import FAQs from '@/components/home/faq/faq';
import PurchaseYourTicket from '@/components/home/ticket-details/purchase';

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
        <PurchaseYourTicket />
        <FAQs />
      </div>
    </main>
  );
}
