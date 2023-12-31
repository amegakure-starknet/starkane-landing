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
        <main className="main">
            <div className="contents">
              <a href={"https://twitter.com/0xstarkane"} target="_blank" rel="noopener noreferrer">
                <Image src="/assets/starkane-rend.png" alt="Starkane logo" width={440} height={150} />
              </a>
              <div className="buttons gap-6">
                <a href={"https://unity.com/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/unity-logo.png" alt="Unity logo" width={100} height={100} />
                </a>
                <a href={"https://www.dojoengine.org/en/"} target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/dojo-logo.png" alt="Dojo logo" width={100} height={100} />
                </a>
              </div>
              <a className="pt-5" href={"https://itch.io/jam/dojo-holiday-game-jam-3/entries"} target="_blank" rel="noopener noreferrer">
                <Image src="/assets/play-now.png" alt="play now" width={220} height={70} />
              </a>
            </div>
            <video
                src="/assets/init2.mp4"
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
