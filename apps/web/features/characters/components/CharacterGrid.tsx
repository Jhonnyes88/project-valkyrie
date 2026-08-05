import CharacterCard from "./CharacterCard";

import { Character } from "../types/character";

interface CharacterGridProps {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;

  projectNames?: Record<string, string>;
}

export default function CharacterGrid({
  characters,
  onSelectCharacter,
  projectNames = {},
}: CharacterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          projectName={
      character.projectId
    ? projectNames[character.projectId] ?? "Sin proyecto"
    : "Sin proyecto"
}
          onSelect={onSelectCharacter}
        />
      ))}
    </div>
  );
}