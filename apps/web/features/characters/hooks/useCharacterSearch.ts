"use client";

import { useMemo, useState } from "react";

import { Character } from "../types/character";
import { CharacterSortOption } from "../components/CharacterSort";

export function useCharacterSearch(characters: Character[]) {
  const [search, setSearch] = useState("");

  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [nationality, setNationality] = useState("");

  const [sort, setSort] =
    useState<CharacterSortOption>("recent");

  const filteredCharacters = useMemo(() => {
    const filtered = characters.filter((character) => {
      const matchesSearch =
        search.trim() === "" ||
        character.name.toLowerCase().includes(search.toLowerCase()) ||
        character.stageName.toLowerCase().includes(search.toLowerCase()) ||
        character.profession.toLowerCase().includes(search.toLowerCase()) ||
        character.nationality.toLowerCase().includes(search.toLowerCase());

      const matchesGender =
        gender === "" || character.gender === gender;

      const matchesProfession =
        profession.trim() === "" ||
        character.profession
          .toLowerCase()
          .includes(profession.toLowerCase());

      const matchesNationality =
        nationality.trim() === "" ||
        character.nationality
          .toLowerCase()
          .includes(nationality.toLowerCase());

      return (
        matchesSearch &&
        matchesGender &&
        matchesProfession &&
        matchesNationality
      );
    });

    switch (sort) {
      case "name-asc":
        return [...filtered].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      case "name-desc":
        return [...filtered].sort((a, b) =>
          b.name.localeCompare(a.name)
        );

      case "oldest":
        return [...filtered].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        );

      case "recent":
      default:
        return [...filtered].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
    }
  }, [
    characters,
    search,
    gender,
    profession,
    nationality,
    sort,
  ]);

  return {
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
  };
}