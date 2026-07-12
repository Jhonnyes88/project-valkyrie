import CharacterCard from "./CharacterCard";
import { characters } from "../data/characters";

export default function CharacterGrid() {
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