import Hero from '@/components/Hero';
import TrustTicker from '@/components/TrustTicker';
import Overview from '@/components/Overview';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Principles from '@/components/Principles';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Accreditations from '@/components/Accreditations';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustTicker />
      <Overview />
      <Services />
      <WhyUs />
      <Principles />
      <Industries />
      <Testimonials />
      <Accreditations />
      <Blogs />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
