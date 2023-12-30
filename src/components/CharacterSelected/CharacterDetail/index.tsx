import Image from 'next/image';

import type { Character } from 'types';

interface CharacterDetailProps {
  character?: Character;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => (
  <div className="max-w-[460px] flex-1 flex-col items-center">
  {/* <span className="flex max-w-[460px] flex-1 flex-col items-center"> */}
    {character ? (
      <>
      <Image
        src={character.imageUrl}
        alt={character.imageAlt}
        width={300}
        height={430}
        className="object-cover"
        sizes="430px" 
      />
      <strong className="text-3xl font-bold capitalize">{character.name}</strong>
      <p className="text-center text-lg">{character.description}</p></>
    ) : (
      <h1 className="text-3xl w-[460px] flex-1 flex-col items-center ">Select an character to view your detail</h1>
    )}
  </div>
);

export { CharacterDetail };
