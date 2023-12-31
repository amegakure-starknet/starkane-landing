import Image from "next/image";
import { ComponentType } from "react";
import Section from "~/containers/Section";

interface Props {
  sectionId?: string;
}

const VideoSection: ComponentType<Props> = ({
  sectionId,
}) => {
  return (
    <Section padding={false} sectionId={sectionId}>
        <main className="main bg-mobile">
            <div className="contents">
              <div className={""} >
                <a href={"https://twitter.com/0xstarkane"} target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/starkane-rend.png" alt="Cavon logo" width={440} height={150} />
                </a>
              </div>
              <div className="buttons gap-6">
                <a href={"https://unity.com/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/unity-logo.png" alt="Unity logo" width={100} height={100} />
                </a>
                <a href={"https://www.dojoengine.org/en/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/dojo-logo.png" alt="Dojo logo" width={100} height={100} />
                </a>
              </div>
            </div>
        </main>
    </Section>
  );
};

export default VideoSection;
