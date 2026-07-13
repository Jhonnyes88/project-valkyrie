"use client";

import { useState } from "react";

import CharacterHeader from "@/features/characters/components/CharacterHeader";
import CharacterGrid from "@/features/characters/components/CharacterGrid";

import { characters as initialCharacters } from "@/features/characters/data/characters";

export default function CharactersPage() {
  const [characters] = useState(initialCharacters);

  return (
    <>
      <CharacterHeader />

      <CharacterGrid
        characters={characters}
      />
    </>
  );
}