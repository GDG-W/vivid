import { Footer } from '@/components/footer';
import FAQs from '@/components/home/faq/faq';
import Landing from '@/components/home/landing-section/landing';
import TargetAudience from '@/components/home/target-audience/target-audience';
import PurchaseYourTicket from '@/components/home/ticket-details/purchase';
import Value from '@/components/home/value/value';

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
        <Landing />
        <Value />
        <PurchaseYourTicket />
        <FAQs />
        <TargetAudience />
        <Footer />
      </div>
    </main>
  );
}
