import './globals.css';
import { Oxanium } from 'next/font/google';

import { DefaultLayout } from '~/layouts/DefaultLayout';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Starkane',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      {/* <body className={oxanium.className}> */}
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
