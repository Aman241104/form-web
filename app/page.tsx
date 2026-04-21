import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Services />
      <WhyUs />
      <Industries />
      <Testimonials />
      <Blogs />
      <ContactCTA />
    </main>
  );
}
