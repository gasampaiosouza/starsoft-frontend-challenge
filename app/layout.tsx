import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Poppins } from 'next/font/google';

import { ToastContainer } from 'react-toastify';

import Providers from './Providers';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
  title: {
    default: 'Starsoft Marketplace',
    template: '%s | Starsoft Marketplace',
  },
  description:
    'Descubra, compre e venda NFTs exclusivos em nosso marketplace. Explore coleções digitais únicas, tokenize seus ativos e aproveite a tecnologia blockchain para transações seguras e transparentes. Junte-se à revolução dos NFTs hoje mesmo!',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  keywords: [
    'Marketplace',
    'NFTs',
    'StarSoft',
    'SEO',
    'Comprar NFTs',
    'Vender NFTs',
    'Blockchain',
    'Criptoativos',
  ],
};

export const viewport: Viewport = {
  themeColor: '#FF8310',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="Starsoft" />
      </head>
      <body className={`${poppins.variable} ${ibm_sans.variable}`}>
        <Providers>
          <Header />
          {children}

          <ToastContainer
            stacked
            theme="dark"
            position="top-center"
            pauseOnHover={false}
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
