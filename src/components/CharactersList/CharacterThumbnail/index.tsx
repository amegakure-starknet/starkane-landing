import Image from 'next/image';

import { type Character } from 'types';

interface CharacterThumbnailProps {
  isSelected?: boolean;
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterThumbnail = ({
  isSelected = false,
  character,
  onSelect,
}: CharacterThumbnailProps) => (
  <li
    key={character.name}
    onMouseOver={() => onSelect(character)}
    className={`flex h-[230px] w-[160px] shrink-0 flex-col items-stretch gap-4 transition-all hover:scale-110 hover:cursor-pointer hover:shadow-[0px_0px_24px_5px] hover:shadow-brown-500 ${
      isSelected ? 'scale-105 shadow-[0px_0px_24px_5px] shadow-brown-500' : ''
    }`}
  >
    <div className="relative flex flex-1">
      <Image
        src={character.thumbnailUrl}
        alt={character.imageAlt}
        layout="fill"
        priority
        sizes="200px"
      />
    </div>
  </li>
);

export { CharacterThumbnail };
