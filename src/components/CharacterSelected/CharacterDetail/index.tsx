import Image from 'next/image';

import type { Character } from '~/types';

interface CharacterDetailProps {
  character: Character;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => (
  <span className="flex max-w-[460px] flex-1 flex-col items-center">
    <Image
      src={character.imageUrl}
      alt={character.imageAlt}
      width={430}
      height={430}
      className="object-cover"
      sizes="430px"
    />
    <strong className="text-3xl font-bold capitalize">{character.name}</strong>
    <p className="text-center text-lg">{character.description}</p>
  </span>
);

export { CharacterDetail };
