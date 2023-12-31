import Image from 'next/image';

const Header = () => (
  <header className="flex justify-center transition-all">
    <Image
      src="assets/logo.svg"
      alt="background-image"
      width="296"
      height="152"
      priority
    />
  </header>
);

export { Header };
