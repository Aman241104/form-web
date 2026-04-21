import Overview from '@/components/Overview';
import Leadership from '@/components/Leadership';
import HowWeWork from '@/components/HowWeWork';
import Accreditations from '@/components/Accreditations';
import Security from '@/components/Security';

export default function AboutPage() {
  return (
    <main>
      <div style={{ paddingTop: '80px' }}> {/* Offset for fixed header */}
        <Overview />
        <Leadership />
        <Security />
        <Accreditations />
        <HowWeWork />
      </div>
    </main>
  );
}
