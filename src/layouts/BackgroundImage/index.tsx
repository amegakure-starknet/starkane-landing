import Image from 'next/image';

const BackgroundImage = () => (
  <Image
    src="/assets/bg-desktop.jpg"
    fill
    alt="background-image"
    className="z-[-1] object-cover opacity-20"
  />
);

export { BackgroundImage };
