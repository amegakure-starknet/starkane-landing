import fondo from "../../../public/images/new_mid_background.png";
import { CharacterDetail } from 'components/CharacterSelected/CharacterDetail';
import { CharactersList } from 'components/CharactersList';
import type { Character } from 'types';
import { type ReactNode, useState } from 'react';
import ImageSection from "components/containers/pagesections/ImageSection";

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
    <ImageSection
      sectionId="screenshots"
      image={fondo}
      className="flex flex-col flex-1 items-center justify-center transition-all lg:flex-row"
      height="h-screen"
      // className="flex flex-col flex-1 items-center justify-center gap-12 transition-all lg:flex-row"
      // className="py-10 flex flex-col flex-1 items-center justify-center gap-12 transition-all 2xl:-mt-[120px] lg:flex-row"
      // padding={false}
    >
      <span className="flex flex-wrap flex-1 self-stretch justify-center transition-all pl-20 py-20">
        <CharactersList
          selectedCharacter={selectedCharacter}
          onSelect={setSelectedCharacter}
        />
      </span>
      <span className="flex flex-1 self-stretch justify-center transition-all pr-20 py-10">
        <CharacterDetail character={selectedCharacter} />
      </span>
    </ImageSection>
  );
};

export default ScreenshotSection;
