import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Indian Township Housing Authority | Passamaquoddy Tribe',
    template: '%s | Indian Township Housing Authority',
  },
  description: 'The Indian Township Housing Authority provides safe, affordable housing for members of the Passamaquoddy Tribe at Indian Township, Princeton, Maine.',
  keywords: ['Indian Township Housing Authority','Passamaquoddy Tribe','tribal housing','Maine tribal housing','CHAP','affordable housing','Princeton Maine'],
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Indian Township Housing Authority' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream-100">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
