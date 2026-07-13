"use client";

import { useState } from "react";

import CharacterHeader from "@/features/characters/components/CharacterHeader";
import CharacterGrid from "@/features/characters/components/CharacterGrid";

import { characters as initialCharacters } from "@/features/characters/data/characters";
import { Character } from "@/features/characters/types/character";

export default function CharactersPage() {
  const [characters, setCharacters] = useState(initialCharacters);

  const addCharacter = (character: Character) => {
    setCharacters((previous) => [...previous, character]);
  };

  return (
    <>
      <CharacterHeader
        onCreateCharacter={addCharacter}
      />

      <CharacterGrid
        characters={characters}
      />
    </>
  );
}