"use client";

import { useEffect, useState } from "react";

import CharacterHeader from "@/features/characters/components/CharacterHeader";
import CharacterGrid from "@/features/characters/components/CharacterGrid";
import CreateCharacterModal from "@/features/characters/modals/CreateCharacterModal";

import { characters as initialCharacters } from "@/features/characters/data/characters";

import { Character } from "@/features/characters/types/character";

import {
  loadCharacters,
  saveCharacters,
} from "@/features/characters/services/localStorageService";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

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

  const updateCharacter = (updatedCharacter: Character) => {
    setCharacters((previous) =>
      previous.map((character) =>
        character.id === updatedCharacter.id
          ? updatedCharacter
          : character
      )
    );
  };

  const deleteCharacter = (id: string) => {
    setCharacters((previous) =>
      previous.filter((character) => character.id !== id)
    );
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);

    console.log("Personaje seleccionado:", character);

    setModalOpen(true);
  };

  return (
    <>
      <CharacterHeader
        onOpenCreateModal={() => {
          setSelectedCharacter(null);
          setModalOpen(true);
        }}
      />

      <CharacterGrid
        characters={characters}
        onSelectCharacter={handleSelectCharacter}
      />

      <CreateCharacterModal
  open={modalOpen}
  character={selectedCharacter}
  onClose={() => {
    setModalOpen(false);
    setSelectedCharacter(null);
  }}
  onCreateCharacter={addCharacter}
  onUpdateCharacter={updateCharacter}
/>
    </>
  );
}