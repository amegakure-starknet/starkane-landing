import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Section from "./Section";

interface Props {
  image: StaticImageData;
  children?: ReactNode;
  className?: string;
  height?: string;
  sectionId?: string;
}

const ImageSection: ComponentType<Props> = ({
  image,
  children,
  className,
  height = "",
  sectionId,
}) => {
  return (
    <Section padding={false} sectionId={sectionId}>
        <main className="main">
            <div className="contents">
              <a
                // className={"flex h-full items-center gap-2 text-inherit"}
                className={"flex items-center gap-2 text-inherit"}
              >
                <Image src="/images/starkane-rend.png" alt="Cavon logo" width={440} height={150} />
              </a>
                <div className="buttons">
                  <a
                    className={"flex items-center gap-2 text-inherit"}
                  >
                    <Image src="/images/logo-unity.png" alt="Cavon logo" width={100} height={120} />
                  </a>
                  <a
                    className={"flex items-center gap-2 text-inherit"}
                  >
                    <Image src="/images/logo-dojo.png" alt="Cavon logo" width={100} height={120} />
                  </a>

                </div>
            </div>
            <video
                src="/images/init.mp4"
                autoPlay
                muted
                loop
                className="video"
            />
        </main>
    </Section>
  );
};

export default ImageSection;
