// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { GeistMono } from 'geist/font/mono';
// import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
// import ExitDraftModeLink from './ExitDraftModeLink';
import { Footer } from './components/footer';
import { Navbar } from './components/nav';
// import './globals.css';
// config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-portfolio-psi.vercel.app/'),
  title: {
    default: 'Gunjan Tomer',
    template: '%s | Gunjan Tomer',
  },
  description: 'Developer, experimenter, and busybody.',
  openGraph: {
    title: 'Gunjan Tomer',
    description: 'Engineer, developer, and experimenter',
    url: 'https://nextjs-portfolio-psi.vercel.app/',
    siteName: 'Gunjan Tomer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx(
        'dark bg-white text-black dark:bg-[#111010] dark:text-white'
        // GeistSans.variable,
        // GeistMono.variable
      )}
    >
      <head></head>
      <body className='mx-4 mb-40 mt-8 flex max-w-[80vw] flex-col antialiased md:flex-row lg:mx-auto'>
        {/* {(await draftMode()).isEnabled && (
          <p className='bg-orange-200 px-[6vw] py-4'>
            Draft mode is on! <ExitDraftModeLink className='underline' />
          </p>
        )} */}
        <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Footer />
          {/* <Analytics />
          <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
