import type { Metadata } from 'next';
import GatekeeperForm from '@/components/GatekeeperForm';

export const metadata: Metadata = {
  title: 'Contact | Elite Cloud Books',
  description: 'Get in touch with Elite Cloud Books. Book a free consultation for accounting, tax, and advisory services tailored to your US firm.',
};

export default function ContactPage() {
  return (
    <main>
      <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <GatekeeperForm />
      </div>
    </main>
  );
}
