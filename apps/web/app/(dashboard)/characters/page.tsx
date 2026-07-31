"use client";

import { useState } from "react";
import { Sparkles, SearchX } from "lucide-react";
import { toast } from "sonner";

import EmptyState from "@/components/common/EmptyState";

import CharacterGrid from "@/features/characters/components/CharacterGrid";
import CharacterHeader from "@/features/characters/components/CharacterHeader";
import CharacterToolbar from "@/features/characters/components/CharacterToolbar";
import CreateCharacterModal from "@/features/characters/modals/CreateCharacterModal";

import { useCharacters } from "@/features/characters/hooks/useCharacters";
import { useCharacterSearch } from "@/features/characters/hooks/useCharacterSearch";

import { Character } from "@/features/characters/types/character";

export default function CharactersPage() {
  const {
    characters,
    addCharacter,
    updateCharacter,
    deleteCharacter,
  } = useCharacters();

  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null);

  const [modalOpen, setModalOpen] = useState(false);

  const {
    search,
    setSearch,

    gender,
    setGender,

    profession,
    setProfession,

    nationality,
    setNationality,

    sort,
    setSort,

    filteredCharacters,
  } = useCharacterSearch(characters);

  const handleAddCharacter = async (character: Character) => {
    await addCharacter(character);

    toast.success("Personaje creado correctamente.");
  };

  const handleUpdateCharacter = async (character: Character) => {
    await updateCharacter(character);

    toast.success("Personaje actualizado correctamente.");
  };

  const handleDeleteCharacter = async (id: string) => {
    await deleteCharacter(id);

    setModalOpen(false);
    setSelectedCharacter(null);

    toast.success("Personaje eliminado correctamente.");
  };

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const handleCreateCharacter = () => {
    setSelectedCharacter(null);
    setModalOpen(true);
  };

  return (
    <>
      <CharacterHeader onOpenCreateModal={handleCreateCharacter} />

      <CharacterToolbar
        search={search}
        onSearchChange={setSearch}
        gender={gender}
        onGenderChange={setGender}
        profession={profession}
        onProfessionChange={setProfession}
        nationality={nationality}
        onNationalityChange={setNationality}
        sort={sort}
        onSortChange={setSort}
      />

      {characters.length === 0 ? (
        <EmptyState
          icon={<Sparkles className="h-10 w-10" />}
          title="Aún no has creado personajes"
          description="Los personajes son el corazón de Valkyrie. Crea el primero para comenzar a generar contenido con IA."
          actionLabel="Crear personaje"
          onAction={handleCreateCharacter}
        />
      ) : filteredCharacters.length === 0 ? (
        <EmptyState
          icon={<SearchX className="h-10 w-10" />}
          title="No se encontraron resultados"
          description="Prueba ajustando el texto de búsqueda, los filtros o el ordenamiento para encontrar tus personajes."
        />
      ) : (
        <CharacterGrid
          characters={filteredCharacters}
          onSelectCharacter={handleSelectCharacter}
        />
      )}

      <CreateCharacterModal
        open={modalOpen}
        character={selectedCharacter}
        onClose={() => {
          setModalOpen(false);
          setSelectedCharacter(null);
        }}
        onCreateCharacter={handleAddCharacter}
        onUpdateCharacter={handleUpdateCharacter}
        onDeleteCharacter={handleDeleteCharacter}
      />
    </>
  );
}