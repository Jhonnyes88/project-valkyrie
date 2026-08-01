import { Character } from "../types/character";

const STORAGE_KEY = "valkyrie_characters";

export function loadCharacters(): Character[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  const characters = JSON.parse(data) as Array<
    Omit<Character, "createdAt" | "updatedAt"> & {
      createdAt: string;
      updatedAt: string;
    }
  >;

  return characters.map((character) => ({
    ...character,
    createdAt: new Date(character.createdAt),
    updatedAt: new Date(character.updatedAt),
  }));
}

export function saveCharacters(characters: Character[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
}