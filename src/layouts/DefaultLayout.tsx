import { type ReactNode } from 'react';

import { BackgroundImage } from './BackgroundImage';
import { Header } from './Header';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  // <div className="relative flex min-h-screen flex-col items-stretch">
  //   {/* <BackgroundImage /> */}
  //   {/* <Header /> */}
  //   {/* <main className="flex flex-1 flex-col items-stretch p-3">{children}</main> */}
  // </div>
  <main id="home">{children}</main>
);

export { DefaultLayout };
