import type { Metadata } from 'next';
import { Poppins, IBM_Plex_Sans } from 'next/font/google';
import Providers from './Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: '--default-font',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const ibm_sans = IBM_Plex_Sans({
  variable: '--secondary-font',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Starsoft dev',
  description: 'This is a dev app for Starsoft',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${ibm_sans.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
