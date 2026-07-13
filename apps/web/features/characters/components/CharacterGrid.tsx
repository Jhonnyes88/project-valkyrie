import CharacterCard from "./CharacterCard";
import { Character } from "../types/character";

interface CharacterGridProps {
  characters: Character[];
}

export default function CharacterGrid({
  characters,
}: CharacterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}