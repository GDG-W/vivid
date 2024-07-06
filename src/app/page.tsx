import { Footer } from '@/components/footer';
import FAQs from '@/components/home/faq/faq';
import TargetAudience from '@/components/home/target-audience/target-audience';
import PurchaseYourTicket from '@/components/home/ticket-details/purchase';

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
        <PurchaseYourTicket />
        <FAQs />
        <TargetAudience />
        <Footer />
      </div>
    </main>
  );
}
