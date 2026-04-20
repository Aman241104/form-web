import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Leadership from '@/components/Leadership';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import HowWeWork from '@/components/HowWeWork';
import Projects from '@/components/Projects';
import Industries from '@/components/Industries';
import Accreditations from '@/components/Accreditations';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import GatekeeperForm from '@/components/GatekeeperForm';

export default function Home() {
  return (
    <main>
      <div id="hero">
        <Hero />
      </div>
      
      <div id="overview">
        <Overview />
      </div>

      <div id="leadership">
        <Leadership />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="why-us">
        <WhyUs />
      </div>

      <div id="how-it-works">
        <HowWeWork />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="industries">
        <Industries />
      </div>

      <div id="accreditations">
        <Accreditations />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="blogs">
        <Blogs />
      </div>

      <div id="security">
        <Security />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <ContactCTA />

      <div id="contact">
        <GatekeeperForm />
      </div>
    </main>
  );
}
