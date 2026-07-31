"use client";

import { useEffect, useState } from "react";

import { Character } from "../types/character";
import { characters as initialCharacters } from "../data/characters";
import { localStorageCharacterRepository } from "../repositories/LocalStorageCharacterRepository";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const savedCharacters =
        await localStorageCharacterRepository.getAll();

      if (savedCharacters.length > 0) {
        setCharacters(savedCharacters);
      } else {
        setCharacters(initialCharacters);
      }
    };

    loadCharacters();
  }, []);

  const addCharacter = async (character: Character) => {
    await localStorageCharacterRepository.create(character);

    setCharacters((previous) => [...previous, character]);
  };

  const updateCharacter = async (updatedCharacter: Character) => {
    await localStorageCharacterRepository.update(updatedCharacter);

    setCharacters((previous) =>
      previous.map((character) =>
        character.id === updatedCharacter.id
          ? updatedCharacter
          : character
      )
    );
  };

  const deleteCharacter = async (id: string) => {
    await localStorageCharacterRepository.delete(id);

    setCharacters((previous) =>
      previous.filter((character) => character.id !== id)
    );
  };

  return {
    characters,
    addCharacter,
    updateCharacter,
    deleteCharacter,
  };
}