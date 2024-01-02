import { ComponentProps } from 'react';

import { charactersList } from '~/consts/characters';
import { Character } from '~/types';

import { CharacterThumbnail } from './CharacterThumbnail';

interface CharactersListProps {
  selectedCharacter?: Character;
  onSelect: ComponentProps<typeof CharacterThumbnail>['onSelect'];
}

const CharactersList = ({
  selectedCharacter,
  onSelect,
}: CharactersListProps) => (
  <>
  <div className="2xl:h-screen flex flex-1 flex-col items-stretch gap-y-8">
    <h1 className="title-1 text-center font-bold uppercase tracking-widest 2xl:pt-20 py-5 text-brown">
      Select Hero
    </h1>
    <ul className="flex flex-wrap justify-center gap-8">
      {charactersList.map((character) => (
        <CharacterThumbnail
          key={character.name}
          isSelected={selectedCharacter?.name === character.name}
          character={character}
          onSelect={onSelect} />
      ))}
    </ul>
    <div className="flex flex-wrap justify-center py-5">
        {selectedCharacter?.name === 'Archer' && (
          <video
            src="/assets/archer-demo.mp4"
            width="470px"
            height="auto"
            autoPlay
            muted
            loop
          />
        )}
        {selectedCharacter?.name === 'Cleric' && (
          <video
            src="/assets/cleric-demo.mp4"
            width="470px"
            height="auto"
            autoPlay
            muted
            loop
          />
        )}
        {selectedCharacter?.name === 'Avelyn' && (
          <video
            src="/assets/avelyn-demo.mp4"
            width="470px"
            height="auto"
            autoPlay
            muted
            loop
          />
        )}
    </div>
    </div>
    </>
);

export { CharactersList };
