'use client';
import { type ReactNode, useState } from 'react';

import { CharacterSelected } from '~/components/CharacterSelected';
import { CharactersList } from '~/components/CharactersList';
import VideoSection from '~/containers/VideoSection';
import ImageSection from '~/containers/ImageSection';
import type { Character } from '~/types';
import { useEffect } from "react"

const ContentWrapper = ({ children }: { children: ReactNode }) => (
  <span className="flex flex-1 self-stretch justify-center transition-all lg:self-auto xl:max-w-[40%]">
    {children}
  </span>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  useEffect(() => {
    function updateVisibleSlides() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();
    console.log("mobile: ", isMobile);
  });

  return (
    <>
    {isMobile ? (
      <ImageSection
        sectionId="mobile"
      />
    ) : (
      <VideoSection
        sectionId="top"
      />
    )}
    {/* 2xl:-mt-[120px] */}
    <div className="flex flex-col flex-1 items-center justify-center gap-12 transition-all lg:flex-row bg-hero">
      <ContentWrapper>
        <CharactersList
          selectedCharacter={selectedCharacter}
          onSelect={setSelectedCharacter} />
      </ContentWrapper>
      <ContentWrapper>
        <CharacterSelected character={selectedCharacter} />
      </ContentWrapper>
    </div>
    </>
  );
}
