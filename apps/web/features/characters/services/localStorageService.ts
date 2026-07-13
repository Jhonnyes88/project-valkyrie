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

  return JSON.parse(data);
}

export function saveCharacters(characters: Character[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(characters)
  );
}