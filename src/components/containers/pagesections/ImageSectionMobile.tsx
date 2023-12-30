import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Section from "./Section";

interface Props {
  image?: StaticImageData;
  children?: ReactNode;
  className?: string;
  height?: string;
  sectionId?: string;
}

const ImageSectionMobile: ComponentType<Props> = ({
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
              {/* <div className={"flex items-center gap-2 text-inherit"} > */}
              <div className={""} >
                <Image src="/images/starkane-rend.png" alt="Cavon logo" width={840} height={350} />
              </div>
              {/* <div className="buttons">
                  <Image src="/images/unity-logo.png" alt="Unity logo" width={100} height={100} />
                  <Image src="/images/dojo-logo.png" alt="Dojo logo" width={100} height={100} />
              </div> */}
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

export default ImageSectionMobile;
