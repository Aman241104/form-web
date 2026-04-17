import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import Preloader from '@/components/Preloader';
import GSAPInitializer from '@/components/GSAPInitializer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Caramel Advisors | Premium Offshore Financial Talent',
  description: 'Scalable offshore accounting, tax, and fractional CFO services for US firms and mid-market enterprises.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <GSAPInitializer />
        <Preloader />
        <CursorFollower />
        <Header />
        {children}
        <StickyWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
