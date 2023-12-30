import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";
import Screenshot from "components/Screenshot";
import { SwiperSlide } from "swiper/react";
import image1 from "../../../public/images/gameplay/mona-fondo.png";
import image2 from "../../../public/images/gameplay/PJ1.png";
import image3 from "../../../public/images/gameplay/mona2.png";
import { CharacterSelected } from 'components/CharacterSelected';
import { CharactersList } from 'components/CharactersList';
import type { Character } from 'types';
import { type ReactNode, useState } from 'react';

// import image4 from "../../../public/images/gameplay/shop.png";
// import image5 from "../../../public/images/gameplay/wizard_npc.png";

const ContentWrapper = ({ children }: { children: ReactNode }) => (
  <span className="flex flex-1 self-stretch justify-center transition-all lg:self-auto xl:max-w-[40%]">
    {children}
  </span>
);

const ScreenshotSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  return (
    <Section
      sectionId="screenshots"
      className="py-10 flex flex-col flex-1 items-center justify-center gap-12 transition-all 2xl:-mt-[120px] lg:flex-row"
      padding={false}
    >
      <ContentWrapper>
        <CharactersList
          selectedCharacter={selectedCharacter}
          onSelect={setSelectedCharacter}
        />
      </ContentWrapper>
      <ContentWrapper>
        <CharacterSelected character={selectedCharacter} />
      </ContentWrapper>
    </Section>
  );
};

export default ScreenshotSection;
