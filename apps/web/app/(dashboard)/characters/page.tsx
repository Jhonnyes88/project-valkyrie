"use client";

import { useEffect, useState } from "react";

import CharacterHeader from "@/features/characters/components/CharacterHeader";
import CharacterGrid from "@/features/characters/components/CharacterGrid";

import { characters as initialCharacters } from "@/features/characters/data/characters";

import { Character } from "@/features/characters/types/character";

import {
  loadCharacters,
  saveCharacters,
} from "@/features/characters/services/localStorageService";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const savedCharacters = loadCharacters();

    if (savedCharacters.length > 0) {
      setCharacters(savedCharacters);
    } else {
      setCharacters(initialCharacters);
    }
  }, []);

  useEffect(() => {
    if (characters.length > 0) {
      saveCharacters(characters);
    }
  }, [characters]);

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