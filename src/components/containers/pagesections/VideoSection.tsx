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

const VideoSection: ComponentType<Props> = ({
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
                <a href={"https://twitter.com/0xstarkane"} target="_blank" rel="noopener noreferrer">
                  <Image src="/images/starkane-rend.png" alt="Cavon logo" width={440} height={150} />
                </a>
              </div>
              <div className="buttons gap-6">
                <a href={"https://unity.com/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/images/unity-logo.png" alt="Unity logo" width={100} height={100} />
                </a>
                <a href={"https://www.dojoengine.org/en/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/images/dojo-logo.png" alt="Dojo logo" width={100} height={100} />
                </a>
              </div>
            </div>
            <video
                src="/images/init2.mp4"
                autoPlay
                muted
                loop
                className="video"
            />
        </main>
    </Section>
  );
};

export default VideoSection;
