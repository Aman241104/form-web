import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Services />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
