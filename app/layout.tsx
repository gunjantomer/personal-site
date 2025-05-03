// import { config } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import { GeistMono } from 'geist/font/mono';
// import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
// import { draftMode } from 'next/headers';
// import ExitDraftModeLink from './ExitDraftModeLink';
import { Footer } from './components/footer';
import { Navbar } from './components/nav';
import './globals.css';
import { Barlow } from 'next/font/google';
import Providers from './components/provider';
import { joinClassNames } from '@/lib/utils';
// config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gunjantomer.com'),
  title: {
    default: 'Gunjan Tomer',
    template: '%s | Gunjan Tomer',
  },
  description: 'Developer, experimenter, and perpetual learner.',
  openGraph: {
    title: 'Gunjan Tomer',
    description: 'Engineer, explorer, and perpetual learner.',
    url: 'https://www.gunjantomer.com',
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

const font = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// const cx = (...classes) => classes.filter(Boolean).join(' ');

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className="max-w-screen flex flex-col bg-white px-8 antialiased dark:bg-gray-700 sm:mx-4
          sm:mb-40 sm:mt-8 sm:flex-row lg:mx-auto"
      >
        <Providers>
          {/* {(await draftMode()).isEnabled && (
          <p className='bg-orange-200 px-[6vw] py-4'>
            Draft mode is on! <ExitDraftModeLink className='underline' />
          </p>
        )} */}
          <main
            className={joinClassNames(
              `mx-auto mt-8 flex max-w-[90vw] sm:max-w-[1200px] flex-auto flex-col px-2
              sm:mt-32 md:px-0`,
              `${font.className}`,
            )}
          >
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  );
}
